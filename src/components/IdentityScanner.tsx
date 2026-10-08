import { useCallback, useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { prefersReducedMotion } from '../motion';

// Full-body capture that gets scanned, and the portrait that comes back as the match.
const BODY_SRC = '/erika-full.jpg';
const PHOTO_SRC = '/erika.jpg';

const SCAN_MS = 5000;
// "Enhance" steps while searching the database: the portrait sharpens from 6px blocks to full resolution.
const ENHANCE = [6, 10, 16, 28, 48, 96];
const ENHANCE_STEP_MS = 320;
const PHOTO_PX = 320;

// Regions marked on the capture as the scan line passes (percent of the body photo).
const REGIONS = [
  { id: 'head', label: 'ROSTRO', side: 'left', left: 16, top: 1, width: 57, height: 18 },
  { id: 'torso', label: 'TORSO', side: 'right', left: 0, top: 19, width: 100, height: 39 },
  { id: 'legs', label: 'PIERNAS', side: 'left', left: 27, top: 55, width: 56, height: 44 },
] as const;

// Face inside the portrait (fractions of the square image).
const FACE_BOX = { left: 0.41, top: 0.07, width: 0.38, height: 0.5 };

type Phase = 'loading' | 'scanning' | 'searching' | 'match';

type Props = {
  label: string;
  /** Scan progress in whole percent (0-100); resets to 0 on rescan. */
  onProgress?: (pct: number) => void;
};

function Corners({ className = 'border-term-teal' }: { className?: string }) {
  return (
    <>
      <span className={`absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 ${className}`} />
      <span className={`absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 ${className}`} />
      <span className={`absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 ${className}`} />
      <span className={`absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 ${className}`} />
    </>
  );
}

function IdentityScanner({ label, onProgress }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);
  const timersRef = useRef<number[]>([]);
  const rafRef = useRef(0);
  const onProgressRef = useRef(onProgress);
  onProgressRef.current = onProgress;

  const [phase, setPhase] = useState<Phase>('loading');
  const [pct, setPct] = useState(0);
  const [records, setRecords] = useState(0);

  const report = useCallback((value: number) => {
    setPct(value);
    onProgressRef.current?.(value);
  }, []);

  /** Draw the portrait at `blocks`×`blocks` resolution, scaled up without smoothing. */
  const drawPhoto = useCallback((blocks: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = photoRef.current;
    if (!canvas || !ctx || !img) return;
    canvas.width = PHOTO_PX;
    canvas.height = PHOTO_PX;
    const side = Math.min(img.width, img.height);
    const sx = (img.width - side) / 2;
    const sy = (img.height - side) / 2;
    if (blocks >= PHOTO_PX / 3) {
      ctx.drawImage(img, sx, sy, side, side, 0, 0, PHOTO_PX, PHOTO_PX);
      return;
    }
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, sx, sy, side, side, 0, 0, blocks, blocks);
    ctx.drawImage(canvas, 0, 0, blocks, blocks, 0, 0, PHOTO_PX, PHOTO_PX);
  }, []);

  const clear = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  const search = useCallback(() => {
    setPhase('searching');
    ENHANCE.forEach((blocks, i) => {
      timersRef.current.push(
        window.setTimeout(() => {
          drawPhoto(blocks);
          setRecords(Math.round(48213 * ((i + 1) / ENHANCE.length)));
        }, i * ENHANCE_STEP_MS),
      );
    });
    timersRef.current.push(
      window.setTimeout(() => {
        drawPhoto(PHOTO_PX);
        setPhase('match');
      }, ENHANCE.length * ENHANCE_STEP_MS + 200),
    );
  }, [drawPhoto]);

  const start = useCallback(() => {
    clear();
    setRecords(0);
    if (prefersReducedMotion()) {
      drawPhoto(PHOTO_PX);
      report(100);
      setPhase('match');
      return;
    }
    report(0);
    setPhase('scanning');
    const t0 = performance.now();
    const frame = (now: number) => {
      const k = Math.min(1, (now - t0) / SCAN_MS);
      report(Math.floor(k * 100));
      if (k < 1) rafRef.current = requestAnimationFrame(frame);
      else search();
    };
    rafRef.current = requestAnimationFrame(frame);
  }, [clear, drawPhoto, report, search]);

  // Wait for both images before the first scan.
  useEffect(() => {
    let alive = true;
    const load = (src: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    Promise.all([load(BODY_SRC), load(PHOTO_SRC)])
      .then(([, photo]) => {
        if (!alive) return;
        photoRef.current = photo;
        start();
      })
      .catch(() => undefined);
    return () => {
      alive = false;
      clear();
    };
  }, [clear, start]);

  const scanning = phase === 'scanning';
  const found = phase === 'match';
  const seconds = Math.floor((pct / 100) * (SCAN_MS / 1000));

  const status =
    phase === 'scanning'
      ? `ESCANEANDO SUJETO… ${pct}%`
      : phase === 'searching'
        ? 'BUSCANDO COINCIDENCIAS…'
        : phase === 'match'
          ? `MATCH · ${label.toUpperCase()} ✓`
          : 'CARGANDO…';

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-term-teal/25 bg-[#081413]">
      <div className="flex items-center justify-between border-b border-term-teal/20 px-4 py-2.5 font-mono text-xs">
        <span className="font-bold tracking-widest text-term-teal">ID.SCAN</span>
        <span className="flex items-center gap-1.5 text-term-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${found ? 'bg-term-teal' : 'animate-pulse bg-term-rose'}`} />
          {found ? 'MATCH' : 'REC'} 00:00:{seconds.toString().padStart(2, '0')}
        </span>
      </div>

      <div className="relative mx-auto aspect-[320/560] w-full max-w-[320px] font-mono">
        {/* HUD corners and grid */}
        <div className="absolute inset-3">
          <Corners className="border-term-teal/50" />
        </div>
        <div className="grid-bg absolute inset-0 opacity-60" />
        <p className="absolute left-4 top-4 text-[9px] tracking-widest text-term-teal/80">CAM-02 · LIVE</p>
        <p className="absolute bottom-4 left-4 text-[9px] tracking-widest text-term-teal/80">
          SUJETO: {found ? label.toUpperCase() : 'DESCONOCIDO'}
        </p>

        {/* Full-body capture: dim until the scan line reveals it */}
        <div
          className={`absolute left-[29.7%] top-[6%] h-[86%] w-[40.6%] transition-all duration-700 ${
            phase === 'scanning' || phase === 'loading' ? 'opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <img src={BODY_SRC} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 ${100 - pct}% 0)` }}>
            <img src={BODY_SRC} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(94,234,212,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(94,234,212,0.18)_1px,transparent_1px)] bg-[size:12px_12px] mix-blend-screen" />
          </div>

          {scanning && (
            <div className="absolute -inset-x-6" style={{ top: `${pct}%` }}>
              <div className="h-6 -translate-y-full bg-gradient-to-b from-transparent to-term-teal/30" />
              <div className="h-0.5 -translate-y-6 bg-term-teal shadow-[0_0_10px_#5eead4]" />
            </div>
          )}

          {REGIONS.map((r) => {
            if (pct < r.top) return null;
            const done = pct >= r.top + r.height;
            const tone = done ? 'border-term-teal text-term-teal' : 'border-term-amber text-term-amber';
            return (
              <div key={r.id}>
                <div
                  className="scan-lock absolute"
                  style={{ left: `${r.left}%`, top: `${r.top}%`, width: `${r.width}%`, height: `${r.height}%` }}
                >
                  <Corners className={tone} />
                </div>
                {/* label sits outside the photo, beside its region */}
                <span
                  className={`absolute whitespace-nowrap border-t pt-0.5 text-[8px] leading-tight tracking-widest ${tone} ${
                    r.side === 'right' ? 'left-[calc(100%+6px)]' : 'right-[calc(100%+6px)] text-right'
                  }`}
                  style={{ top: `${r.top + 1}%` }}
                >
                  {r.label}
                  <br />
                  {done ? 'OK ✓' : 'ANALIZANDO'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Database search → enhanced portrait → match */}
        <div
          className={`absolute left-[12%] top-[22%] w-[76%] transition-opacity duration-500 ${
            phase === 'searching' || found ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <p className={`mb-2 text-center text-[9px] tracking-widest ${found ? 'text-term-teal' : 'animate-pulse text-term-amber'}`}>
            {found ? 'COINCIDENCIA ENCONTRADA' : 'BUSCANDO EN BASE DE DATOS'}
          </p>
          <div className={`relative border ${found ? 'border-term-teal' : 'border-term-amber/60'}`}>
            <canvas ref={canvasRef} role="img" aria-label={`Foto de ${label}`} className="block aspect-square w-full" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(94,234,212,0.07)_0_1px,transparent_1px_3px)]" />
            {found && (
              <div
                className="scan-lock absolute"
                style={{
                  left: `${FACE_BOX.left * 100}%`,
                  top: `${FACE_BOX.top * 100}%`,
                  width: `${FACE_BOX.width * 100}%`,
                  height: `${FACE_BOX.height * 100}%`,
                }}
              >
                <Corners />
                <span className="absolute -bottom-5 left-0 whitespace-nowrap bg-term-teal px-1 text-[9px] font-bold text-[#120c1a]">
                  MATCH 98.7%
                </span>
              </div>
            )}
          </div>
          <div className="mt-3 text-center text-[10px] tracking-widest">
            {found ? (
              <p className="text-term-bright">{label.toUpperCase()}</p>
            ) : (
              <p className="text-term-muted">
                REGISTROS: {records.toLocaleString('es-CO')} / 48.213
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-2 border-t border-term-teal/20 px-4 py-2.5 font-mono text-[11px]">
        <div className="h-1 overflow-hidden rounded-full bg-term-teal/10">
          <div className="h-full bg-term-teal" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className={`truncate ${found ? 'text-term-teal' : 'animate-pulse text-term-amber'}`}>{status}</span>
          <button
            type="button"
            onClick={start}
            disabled={!found}
            className="inline-flex shrink-0 items-center gap-1 text-term-muted transition-colors hover:text-term-teal disabled:opacity-40"
            aria-label="Volver a escanear"
          >
            <RotateCcw className="h-3.5 w-3.5" /> rescan
          </button>
        </div>
      </div>
    </div>
  );
}

export default IdentityScanner;
