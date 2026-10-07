import { useCallback, useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';

const W = 300;
const H = 340;
const POINTS = 11000;
// Oval focus on head and shoulders (fractions of the canvas), so the busy photo background fades out.
const FOCUS = { cx: 190 / 300, cy: 175 / 340, rx: 120 / 300, ry: 185 / 340 };
const SCAN_MS = 2600;
const RENDER_MS = 1300;
const PINK = '249, 168, 212';

type Point = { x: number; y: number; r: number; a: number; jitter: number };
type Phase = 'loading' | 'scanning' | 'rendering' | 'done';

type Props = { src: string; label: string };

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Crop the image to the canvas aspect ratio ("object-fit: cover"). */
function coverRect(img: HTMLImageElement) {
  const target = W / H;
  const ratio = img.width / img.height;
  if (ratio > target) {
    const sw = img.height * target;
    return { sx: (img.width - sw) / 2, sy: 0, sw, sh: img.height };
  }
  const sh = img.width / target;
  return { sx: 0, sy: (img.height - sh) / 2, sw: img.width, sh };
}

function focusWeight(x: number, y: number) {
  const d = Math.hypot((x - FOCUS.cx * W) / (FOCUS.rx * W), (y - FOCUS.cy * H) / (FOCUS.ry * H));
  return Math.max(0, Math.min(1, (1.15 - d) / 0.3));
}

/** Bright pixels get more points, so the face reads as a glowing hologram on the dark card. */
function samplePoints(img: HTMLImageElement): Point[] {
  const off = document.createElement('canvas');
  off.width = W;
  off.height = H;
  const octx = off.getContext('2d', { willReadFrequently: true });
  if (!octx) return [];
  const { sx, sy, sw, sh } = coverRect(img);
  octx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H);
  const { data } = octx.getImageData(0, 0, W, H);

  const points: Point[] = [];
  let tries = 0;
  while (points.length < POINTS && tries < POINTS * 20) {
    tries++;
    const x = Math.random() * W;
    const y = Math.random() * H;
    const focus = focusWeight(x, y);
    if (focus <= 0) continue;
    const i = (Math.floor(y) * W + Math.floor(x)) * 4;
    const lum = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
    const boosted = Math.min(1, Math.max(0, (lum - 0.5) * 1.4 + 0.5));
    if (Math.random() < (0.03 + 0.97 * boosted ** 1.3) * focus) {
      points.push({ x, y, r: 0.5 + Math.random() * 0.8, a: 0.3 + boosted * 0.7, jitter: Math.random() * 18 });
    }
  }
  return points;
}

function PhotoScanner({ src, label }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const rafRef = useRef<number>(0);
  const [phase, setPhase] = useState<Phase>('loading');

  const drawFinal = useCallback((ctx: CanvasRenderingContext2D, alpha = 1, gray = 0) => {
    const img = imgRef.current;
    if (!img) return;
    const { sx, sy, sw, sh } = coverRect(img);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.filter = gray > 0 ? `grayscale(${gray})` : 'none';
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H);
    ctx.restore();
    // Subtle pink scanlines so the photo keeps the "monitor" look.
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = `rgba(${PINK}, 0.07)`;
    for (let y = 0; y < H; y += 3) ctx.fillRect(0, y, W, 1);
    ctx.restore();
  }, []);

  const start = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !imgRef.current) return;
    cancelAnimationFrame(rafRef.current);

    if (prefersReducedMotion()) {
      ctx.clearRect(0, 0, W, H);
      drawFinal(ctx);
      setPhase('done');
      return;
    }

    const points = pointsRef.current;
    const t0 = performance.now();
    let renderingShown = false;
    setPhase('scanning');

    const frame = (now: number) => {
      const t = now - t0;
      ctx.clearRect(0, 0, W, H);

      if (t < SCAN_MS) {
        const scanY = (t / SCAN_MS) * (H + 20);
        for (const p of points) {
          if (p.y > scanY - p.jitter) continue;
          const near = Math.max(0, 1 - Math.abs(scanY - p.y) / 24);
          ctx.fillStyle = `rgba(${PINK}, ${Math.min(1, p.a + near * 0.5)})`;
          ctx.fillRect(p.x, p.y, p.r + near, p.r + near);
        }
        const band = ctx.createLinearGradient(0, scanY - 26, 0, scanY + 4);
        band.addColorStop(0, `rgba(${PINK}, 0)`);
        band.addColorStop(1, `rgba(${PINK}, 0.35)`);
        ctx.fillStyle = band;
        ctx.fillRect(0, scanY - 26, W, 30);
        ctx.fillStyle = `rgba(${PINK}, 0.95)`;
        ctx.fillRect(0, scanY, W, 1.5);
      } else if (t < SCAN_MS + RENDER_MS) {
        const k = (t - SCAN_MS) / RENDER_MS;
        if (!renderingShown) {
          renderingShown = true;
          setPhase('rendering');
        }
        drawFinal(ctx, k, 1 - k);
        for (const p of points) {
          ctx.fillStyle = `rgba(${PINK}, ${p.a * (1 - k)})`;
          ctx.fillRect(p.x, p.y, p.r, p.r);
        }
      } else {
        drawFinal(ctx);
        setPhase('done');
        return;
      }
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
  }, [drawFinal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const img = new Image();
    img.src = src;
    img.onload = () => {
      imgRef.current = img;
      pointsRef.current = samplePoints(img);
      start();
    };
    return () => cancelAnimationFrame(rafRef.current);
  }, [src, start]);

  const status =
    phase === 'scanning'
      ? 'SCANNING…'
      : phase === 'rendering'
        ? 'RENDERING…'
        : phase === 'done'
          ? `MATCH · ${label.toUpperCase()} ✓`
          : 'LOADING…';

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-term-pink/25 bg-[#120c1a]">
      <div className="flex items-center justify-between border-b border-term-pink/20 px-4 py-2.5 font-mono text-xs">
        <span className="font-bold tracking-widest text-term-lavender">VISUAL.MAP</span>
        <span className="text-term-muted">300×340 / 1-BIT</span>
      </div>

      <div className="relative mx-auto my-auto w-full max-w-[300px] px-4 py-4 sm:px-0">
        {/* viewfinder corners */}
        <span className="pointer-events-none absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2 border-term-pink/70 sm:-left-3 sm:-top-2" />
        <span className="pointer-events-none absolute -right-1 -top-1 h-4 w-4 border-r-2 border-t-2 border-term-pink/70 sm:-right-3 sm:-top-2" />
        <span className="pointer-events-none absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-term-pink/70 sm:-bottom-2 sm:-left-3" />
        <span className="pointer-events-none absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-term-pink/70 sm:-bottom-2 sm:-right-3" />
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={`Foto de ${label}`}
          className="aspect-[300/340] w-full rounded-sm"
          style={{ maxWidth: W }}
        />
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-term-pink/20 px-4 py-2.5 font-mono text-[11px]">
        <span className={phase === 'done' ? 'text-term-pink' : 'animate-pulse text-term-pink'}>{status}</span>
        <button
          type="button"
          onClick={start}
          disabled={phase === 'scanning' || phase === 'rendering' || phase === 'loading'}
          className="inline-flex items-center gap-1 text-term-muted transition-colors hover:text-term-pink disabled:opacity-40"
          aria-label="Volver a escanear"
        >
          <RotateCcw className="h-3.5 w-3.5" /> rescan
        </button>
      </div>
    </div>
  );
}

export default PhotoScanner;
