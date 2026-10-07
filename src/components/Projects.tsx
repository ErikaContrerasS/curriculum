import { ArrowUpRight, Lock } from 'lucide-react';
import Section from './Section';
import { projects } from '../data';

function Projects() {
  return (
    <Section id="projects" command="ls ~/projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => {
          const card = (
            <>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-base font-bold text-term-bright">
                  <span className="mr-2">{p.icon}</span>
                  {p.name}
                </h3>
                {p.url ? (
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-term-muted transition group-hover:text-term-teal" />
                ) : (
                  <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-term-muted">
                    <Lock className="h-3.5 w-3.5" /> {p.note}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-term-text">{p.description}</p>
              <p className="mt-4 font-mono text-xs text-term-violet">{p.tags.join(' · ')}</p>
            </>
          );
          const base = 'group block rounded-xl border border-term-line/60 bg-term-panel p-5 transition';
          return p.url ? (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={`${base} hover:-translate-y-0.5 hover:border-term-teal`}>
              {card}
            </a>
          ) : (
            <div key={p.name} className={base}>
              {card}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
