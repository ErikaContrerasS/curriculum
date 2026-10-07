import Section from './Section';
import { career } from '../data';

function Career() {
  return (
    <Section id="career" command="git log --career">
      <ol className="relative space-y-8 border-l border-term-line pl-6">
        {career.map((job) => (
          <li key={job.ref} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-term-teal bg-term-bg" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono">
              <span className="rounded bg-term-bar px-2 py-0.5 text-xs text-term-amber">{job.ref}</span>
              <h3 className="text-base font-bold text-term-bright sm:text-lg">{job.role}</h3>
            </div>
            <p className="mt-1 font-mono text-sm">
              <span className="text-term-teal">@ {job.company}</span>
              <span className="text-term-muted"> · {job.period} · {job.place}</span>
            </p>
            <p className="mt-3 text-term-text">{job.summary}</p>
            {job.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-term-text">
                    <span className="font-mono text-term-violet">+</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="font-mono text-xs text-term-muted">#{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Career;
