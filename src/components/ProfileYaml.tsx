import { profileYaml } from '../data';

function ProfileYaml() {
  const bytes = profileYaml.reduce((n, l) => n + l.key.length + (l.value?.length ?? 0) + 4, 0);
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-term-pink/25 bg-[#120c1a]">
      <div className="flex items-center justify-between border-b border-term-pink/20 px-4 py-2.5 font-mono text-xs">
        <span>
          <span className="font-bold text-term-lavender">profile.yml</span>
          <span className="text-term-muted">[YAML]</span>
        </span>
        <span className="rounded-full bg-term-pink/15 px-3 py-0.5 font-bold text-term-pink">@ErikaContrerasS</span>
      </div>

      <ol className="flex-1 py-3 font-mono text-[12.5px] leading-[1.85] sm:text-[13px]">
        {profileYaml.map((line, i) => (
          <li key={`${line.key}-${i}`} className="grid grid-cols-[2.5rem_1fr] pr-4">
            <span className="select-none pr-3 text-right text-term-muted/60">{i + 1}</span>
            <span className={`break-words ${line.indent ? 'pl-5' : ''}`}>
              <span className={line.indent ? 'text-term-pink' : 'font-bold text-term-lavender'}>{line.key}:</span>
              {line.value && (
                <span className={line.accent ? ' text-term-teal' : ' text-term-text'}> {line.value}</span>
              )}
            </span>
          </li>
        ))}
      </ol>

      <div className="flex items-center gap-3 border-t border-term-pink/20 font-mono text-[11px]">
        <span className="bg-term-magenta px-3 py-1.5 font-bold text-[#120c1a]">NORMAL</span>
        <span className="font-bold text-term-text">profile.yml</span>
        <span className="hidden text-term-muted sm:inline">[utf-8]</span>
        <span className="ml-auto pr-4 text-term-muted">
          {profileYaml.length}L, {bytes}B 100%
        </span>
      </div>
    </div>
  );
}

export default ProfileYaml;
