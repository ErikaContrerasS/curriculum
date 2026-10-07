import { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Terminal from './Terminal';
import { profile, whoami } from '../data';

const COMMAND = 'whoami --verbose';

function usePrefersReducedMotion() {
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  return reduced;
}

function Hero() {
  const reduced = usePrefersReducedMotion();
  const [typed, setTyped] = useState(reduced ? COMMAND.length : 0);
  const [visibleRows, setVisibleRows] = useState(reduced ? whoami.length : 0);

  useEffect(() => {
    if (reduced) return;
    if (typed < COMMAND.length) {
      const t = setTimeout(() => setTyped((n) => n + 1), 70);
      return () => clearTimeout(t);
    }
    if (visibleRows < whoami.length) {
      const t = setTimeout(() => setVisibleRows((n) => n + 1), 140);
      return () => clearTimeout(t);
    }
  }, [typed, visibleRows, reduced]);

  const done = visibleRows === whoami.length;

  return (
    <header id="top" className="grid-bg">
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pt-20">
        <p className="mb-3 font-mono text-sm text-term-teal">Hola, soy</p>
        <h1 className="font-mono text-4xl font-bold text-term-bright sm:text-6xl">{profile.shortName}</h1>
        <p className="mt-3 font-mono text-lg text-term-violet sm:text-2xl">{profile.role}</p>
        <p className="mt-4 max-w-2xl text-term-muted">
          CRM multitenant · automatización con IA · integraciones de mensajería · liderazgo técnico
        </p>

        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-term-teal px-4 py-2.5 font-bold text-term-panel transition hover:brightness-110"
          >
            <Download className="h-4 w-4" /> Descargar CV
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-term-line px-4 py-2.5 text-term-text transition hover:border-term-teal hover:text-term-teal"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-term-line px-4 py-2.5 text-term-text transition hover:border-term-teal hover:text-term-teal"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-term-line px-4 py-2.5 text-term-text transition hover:border-term-teal hover:text-term-teal"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>

        <Terminal className="mt-12">
          <div className="font-mono text-sm leading-7 sm:text-[15px]">
            <p>
              <span className="text-term-teal">erika@bogota:~$ </span>
              <span className="text-term-bright">{COMMAND.slice(0, typed)}</span>
              {typed < COMMAND.length && <span className="cursor" />}
            </p>
            <dl className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-[140px_1fr]">
              {whoami.slice(0, visibleRows).map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-term-violet">{k}</dt>
                  <dd className="mb-2 text-term-text sm:mb-0">{v}</dd>
                </div>
              ))}
            </dl>
            {done && (
              <>
                <p className="mt-3 text-term-teal">● abierta a oportunidades remotas o híbridas</p>
                <p className="mt-4">
                  <span className="text-term-teal">erika@bogota:~$</span>
                  <span className="cursor" />
                </p>
              </>
            )}
          </div>
        </Terminal>
      </div>
    </header>
  );
}

export default Hero;
