import { stats } from "@/content/resume";
import { Reveal } from "@/components/Reveal";

export function StatsStrip() {
  return (
    <section
      aria-label="Impact highlights"
      className="border-y border-border px-4 py-8 sm:px-6 lg:px-8"
    >
      <Reveal>
        <dl className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`px-0 md:px-6 ${
                index > 0 ? "md:border-l md:border-border" : ""
              }`}
            >
              <dt className="font-mono text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
