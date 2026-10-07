import Section from './Section';
import Terminal from './Terminal';
import { stack } from '../data';

function Stack() {
  return (
    <Section id="stack" command="cat tech-stack.yaml">
      <Terminal title="tech-stack.yaml">
        <div className="grid gap-6 sm:grid-cols-2">
          {stack.map((g, i) => (
            <div key={g.key} className={g.icons ? '' : 'sm:col-span-2'}>
              <p className="mb-3 font-mono text-sm text-term-violet">
                {i === stack.length - 1 ? '╰─' : '├─'} {g.key}:
              </p>
              {g.icons && (
                <img
                  src={`https://skillicons.dev/icons?i=${g.icons}`}
                  alt={g.items.join(', ')}
                  className="mb-3 h-10 sm:h-11"
                  loading="lazy"
                />
              )}
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="rounded-md border border-term-line bg-term-bar px-2.5 py-1 font-mono text-xs text-term-text">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 border-t border-term-line/60 pt-4 font-mono text-xs text-term-muted">
          status: ready · environment: production
        </p>
      </Terminal>
    </Section>
  );
}

export default Stack;
