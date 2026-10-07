import type { ReactNode } from 'react';

type Props = {
  id: string;
  command: string;
  children: ReactNode;
};

function Section({ id, command, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 font-mono text-lg font-bold sm:text-xl">
        <span className="text-term-teal">$ </span>
        <code className="rounded-md bg-term-bar px-2 py-1 text-term-bright">{command}</code>
      </h2>
      {children}
    </section>
  );
}

export default Section;
