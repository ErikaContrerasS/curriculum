import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Section from './Section';
import { profile } from '../data';

const items = [
  { icon: Mail, label: 'email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'phone', value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: 'linkedin', value: 'erika-julieth-contreras-castillo', href: profile.linkedin },
  { icon: Github, label: 'github', value: 'ErikaContrerasS', href: profile.github },
  { icon: MapPin, label: 'location', value: profile.location },
];

function Contact() {
  return (
    <Section id="contact" command="connect --socials">
      <div className="rounded-xl border border-term-line/60 bg-term-panel p-6 sm:p-8">
        <p className="text-[17px] text-term-text">
          ¿Tienes un proyecto o una vacante donde pueda aportar? Escríbeme.
        </p>
        <ul className="mt-6 grid gap-4 font-mono text-sm sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-center gap-3">
              <Icon className="h-5 w-5 shrink-0 text-term-teal" />
              <span className="text-term-violet">{label}:</span>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="truncate text-term-text transition-colors hover:text-term-teal"
                >
                  {value}
                </a>
              ) : (
                <span className="text-term-text">{value}</span>
              )}
            </li>
          ))}
        </ul>
        <a
          href={profile.cv}
          download
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-term-teal px-4 py-2.5 font-mono text-sm font-bold text-term-panel transition hover:brightness-110"
        >
          <Download className="h-4 w-4" /> Descargar CV (PDF)
        </a>
      </div>
    </Section>
  );
}

export default Contact;
