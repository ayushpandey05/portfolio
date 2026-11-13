import { stats } from "@/content/resume";
import { Reveal } from "@/components/Reveal";
import { Panel } from "@/components/ui/Panel";

export function StatsStrip() {
  return (
    <section
      aria-label="Impact highlights"
      className="px-4 py-6 sm:px-6 lg:px-8"
    >
      <Reveal>
        <Panel
          variant="glass"
          className="mx-auto w-full max-w-[1200px] p-5 sm:p-6"
        >
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`group px-0 md:px-6 ${
                  index > 0 ? "md:border-l md:border-panel-border" : ""
                }`}
              >
                <dt className="font-mono text-lg font-semibold tracking-tight text-foreground transition group-hover:text-accent-text sm:text-xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </Reveal>
    </section>
  );
}
