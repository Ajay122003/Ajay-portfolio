export default function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <header className="mb-9 max-w-2xl" data-reveal>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-rust">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title} <span className="text-rust">{accent}</span>
      </h2>
      {description && <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">{description}</p>}
    </header>
  )
}
