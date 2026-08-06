export function PageHeader({
  label,
  title,
  lead,
}: {
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mx-auto w-full max-w-6xl px-5 pb-block pt-14 sm:px-8 sm:pt-20">
      <p className="au-label">{label}</p>
      <h1 className="mt-5 max-w-[20ch] font-display text-display font-semibold">{title}</h1>
      {lead ? (
        <p className="mt-7 max-w-prose text-lg leading-relaxed text-ink-2">{lead}</p>
      ) : null}
    </header>
  );
}

/**
 * Legal copy is long, dense and read once. It gets a narrower measure and tighter
 * rhythm than the marketing pages — this is a document, not a composition.
 */
export function LegalProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-section sm:px-8">
      <div
        className="max-w-prose space-y-5 text-[15px] leading-relaxed text-ink-2
          [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4
          [&_dt]:font-medium [&_dt]:text-ink
          [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink
          [&_h3]:mt-8 [&_h3]:font-medium [&_h3]:text-ink
          [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5"
      >
        {children}
      </div>
    </div>
  );
}
