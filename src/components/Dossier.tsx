import { useEffect, useState } from 'react';
import { profileYaml } from '../data';
import { prefersReducedMotion } from '../motion';

const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&@<>/*+=';

function scramble(text: string, k: number) {
  const solved = Math.floor(text.length * k);
  return text
    .split('')
    .map((ch, i) => (i < solved || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
    .join('');
}

/** Random glyphs that resolve left to right into the real text. */
function Decrypt({ text }: { text: string }) {
  const [shown, setShown] = useState(() => (prefersReducedMotion() ? text : scramble(text, 0)));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t0 = performance.now();
    const dur = Math.min(700, 200 + text.length * 12);
    let raf = 0;
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / dur);
      setShown(scramble(text, k));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text]);

  return <>{shown}</>;
}

type Props = {
  /** Scan progress 0-100; each line unlocks as the scan line passes its share. */
  progress: number;
  /** Changes on every rescan so decrypted lines replay. */
  run: number;
};

function Dossier({ progress, run }: Props) {
  const revealed = Math.floor((progress / 100) * profileYaml.length);
  const done = progress >= 100;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-term-pink/25 bg-[#120c1a]">
      <div className="flex items-center justify-between border-b border-term-pink/20 px-4 py-2.5 font-mono text-xs">
        <span className="font-bold tracking-widest text-term-lavender">SUBJECT.DOSSIER</span>
        <span className="rounded-full bg-term-pink/15 px-3 py-0.5 font-bold text-term-pink">@ErikaContrerasS</span>
      </div>

      <div className="flex items-center gap-3 border-b border-term-pink/10 px-4 py-2 font-mono text-[10px] tracking-widest text-term-muted">
        <span>{done ? 'DECRYPTED' : 'DECRYPTING'}</span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-term-pink/10">
          <div className="h-full bg-term-pink transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
        <span className="w-8 text-right text-term-pink">{progress}%</span>
      </div>

      <ol className="flex-1 py-3 font-mono text-[12.5px] leading-[1.85] sm:text-[13px]">
        {profileYaml.map((line, i) => {
          const open = i < revealed;
          return (
            <li key={`${run}-${line.key}-${i}`} className={`break-words px-4 ${line.indent ? 'pl-9' : ''}`}>
              {line.indent ? (
                <>
                  <span className={open ? 'text-term-pink' : 'text-term-muted/40'}>{line.key}:</span>{' '}
                  {open ? (
                    <span className={line.accent ? 'text-term-teal' : 'text-term-text'}>
                      <Decrypt text={line.value ?? ''} />
                    </span>
                  ) : (
                    <span
                      aria-hidden
                      className="redacted inline-block h-3 align-middle"
                      style={{ width: `${Math.min(26, (line.value?.length ?? 4) * 0.6)}ch` }}
                    />
                  )}
                </>
              ) : (
                <span className={open ? 'font-bold text-term-lavender' : 'font-bold text-term-muted/40'}>
                  {'// '}
                  {line.key.toUpperCase()}
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <div className="flex items-center gap-3 border-t border-term-pink/20 px-4 py-2 font-mono text-[11px]">
        {done ? (
          <span className="font-bold text-term-teal">● DATOS RECUPERADOS · 100%</span>
        ) : (
          <span className="animate-pulse text-term-pink">BUSCANDO COINCIDENCIAS EN BASE DE DATOS…</span>
        )}
      </div>
    </div>
  );
}

export default Dossier;
