import { useCallback, useState } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Dossier from './Dossier';
import IdentityScanner from './IdentityScanner';
import { profile } from '../data';

const linkClass =
  'inline-flex items-center gap-2 rounded-lg border border-term-line px-4 py-2.5 text-term-text transition hover:border-term-pink hover:text-term-pink';

function Hero() {
  const [progress, setProgress] = useState(0);
  const [run, setRun] = useState(0);
  const onProgress = useCallback((pct: number) => {
    if (pct === 0) setRun((r) => r + 1);
    setProgress(pct);
  }, []);

  return (
    <header id="top" className="grid-bg">
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pt-20">
        <p className="mb-3 font-mono text-sm text-term-pink">Hola, soy</p>
        <h1 className="font-mono text-4xl font-bold text-term-bright sm:text-6xl">{profile.shortName}</h1>
        <p className="mt-3 font-mono text-lg text-term-lavender sm:text-2xl">{profile.role}</p>
        <p className="mt-4 max-w-2xl text-term-muted">
          CRM multitenant · automatización con IA · integraciones de mensajería · liderazgo técnico
        </p>

        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-term-pink px-4 py-2.5 font-bold text-[#120c1a] transition hover:brightness-110"
          >
            <Download className="h-4 w-4" /> Descargar CV
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={`mailto:${profile.email}`} className={linkClass}>
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>

        {/* identity scan: scanning the full-body capture drives the dossier reveal */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-term-pink/30 bg-[#0d0913] shadow-2xl shadow-term-magenta/10">
          <div className="relative flex h-10 items-center gap-2 border-b border-term-pink/20 bg-[#1a1224] px-4">
            <span className="h-3 w-3 rounded-full bg-term-rose" />
            <span className="h-3 w-3 rounded-full bg-term-amber" />
            <span className="h-3 w-3 rounded-full bg-term-teal" />
            <span className="absolute inset-x-0 text-center font-mono text-xs text-term-muted">identity-scan --subject erika</span>
          </div>
          <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-[minmax(0,340px)_1fr]">
            <IdentityScanner label={profile.shortName} onProgress={onProgress} />
            <Dossier progress={progress} run={run} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
