const links = [
  { href: '#about', label: 'whoami' },
  { href: '#stack', label: 'stack' },
  { href: '#career', label: 'career' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-term-line/50 bg-term-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 font-mono text-sm">
        <a href="#top" className="font-bold text-term-teal">
          ~/erika<span className="text-term-muted">$</span>
        </a>
        <ul className="hidden gap-5 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-term-muted transition-colors hover:text-term-teal">
                ./{l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
