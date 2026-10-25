export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2.5" aria-label="Sameday Lojistik ana sayfa">
      <span className="relative grid size-9 place-items-center rounded-xl bg-brand text-white shadow-[0_6px_20px_-6px] shadow-brand">
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
          <path d="M13.5 2 5 13.5h6L9.5 22 19 9.5h-6.5L13.5 2Z" />
        </svg>
      </span>
      <span className={`leading-none ${light ? "text-white" : "text-ink"}`}>
        <span className="block text-[17px] font-extrabold tracking-tight">sameday</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.3em] ${light ? "text-white/50" : "text-ink/50"}`}>
          lojistik
        </span>
      </span>
    </a>
  );
}
