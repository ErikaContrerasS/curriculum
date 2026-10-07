import Section from './Section';
import { about } from '../data';

function About() {
  return (
    <Section id="about" command="cat about.md">
      <div className="space-y-4 border-l-2 border-term-teal/60 pl-5 text-[17px] leading-relaxed text-term-text">
        {about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

export default About;
