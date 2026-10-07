import Section from './Section';
import Terminal from './Terminal';
import { stack } from '../data';

function Stack() {
  return (
    <Section id="stack" command="cat tech-stack.yaml">
      <Terminal title="tech-stack.yaml">
        <div className="grid gap-6 sm:grid-cols-2">
          {stack.map((g, i) => {
            const hasIcons = g.items.some((item) => item.icon);
            return (
              <div key={g.key} className={hasIcons ? '' : 'sm:col-span-2'}>
                <p className="mb-3 font-mono text-sm text-term-violet">
                  {i === stack.length - 1 ? '╰─' : '├─'} {g.key}:
                </p>
                {hasIcons ? (
                  <ul className="flex flex-wrap gap-x-2 gap-y-4">
                    {g.items.map((item) => (
                      <li key={item.name} className="flex w-20 flex-col items-center gap-2 text-center">
                        {item.icon ? (
                          <img
                            src={`https://skillicons.dev/icons?i=${item.icon}`}
                            alt=""
                            className="h-11 w-11"
                            loading="lazy"
                          />
                        ) : (
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-term-bar font-mono text-xs font-semibold text-term-text">
                            {item.name}
                          </span>
                        )}
                        <span className="font-mono text-[11px] leading-tight text-term-text">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span key={item.name} className="rounded-md border border-term-line bg-term-bar px-2.5 py-1 font-mono text-xs text-term-text">
                        {item.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-6 border-t border-term-line/60 pt-4 font-mono text-xs text-term-muted">
          status: ready · environment: production
        </p>
      </Terminal>
    </Section>
  );
}

export default Stack;
