export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="surface-dark relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="animate-rise text-xs font-bold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
        <h1 className="animate-rise mt-3 text-4xl md:text-5xl">{title}</h1>
        {intro && (
          <p className="animate-rise mt-5 max-w-2xl text-asphalt-foreground/75">{intro}</p>
        )}
      </div>
      <div className="road-dashes opacity-30" />
    </section>
  );
}
