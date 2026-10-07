import Section from './Section';
import Terminal from './Terminal';
import { certifications, education, languages } from '../data';

type Item = { title: string; place: string; year: string };

function List({ label, items }: { label: string; items: Item[] }) {
  return (
    <div>
      <p className="mb-3 font-mono text-sm text-term-violet">## {label}</p>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.title} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-6">
            <span>
              <span className="text-term-bright">{i.title}</span>
              <span className="text-term-muted"> · {i.place}</span>
            </span>
            <span className="font-mono text-sm text-term-amber">{i.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Education() {
  return (
    <Section id="education" command="cat education.txt">
      <Terminal title="education.txt">
        <div className="space-y-8">
          <List label="formación" items={education} />
          <List label="certificaciones" items={certifications} />
          <div>
            <p className="mb-2 font-mono text-sm text-term-violet">## idiomas</p>
            <p className="text-term-text">{languages}</p>
          </div>
        </div>
      </Terminal>
    </Section>
  );
}

export default Education;
