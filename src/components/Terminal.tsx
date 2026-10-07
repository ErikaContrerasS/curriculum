import type { ReactNode } from 'react';

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
};

function Terminal({ title = 'erika@bogota: ~', children, className = '' }: Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-term-line/60 bg-term-panel shadow-2xl shadow-black/40 ${className}`}>
      <div className="relative flex h-10 items-center gap-2 bg-term-bar px-4">
        <span className="h-3 w-3 rounded-full bg-term-rose" />
        <span className="h-3 w-3 rounded-full bg-term-amber" />
        <span className="h-3 w-3 rounded-full bg-term-teal" />
        <span className="absolute inset-x-0 text-center font-mono text-xs text-term-muted">{title}</span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}

export default Terminal;
