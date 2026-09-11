export function Measure({ value, unit, note }: { value: string; unit: string; note: string }) {
  return (
    <div className="bg-paper px-5 py-9 sm:px-8">
      <p className="au-measure font-display text-4xl font-semibold text-ink sm:text-5xl">{value}</p>
      <p className="mt-2 text-sm font-medium text-copper-text">{unit}</p>
      <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-ink-2">{note}</p>
    </div>
  );
}
