import { experience } from "@/content/resume";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Panel } from "@/components/ui/Panel";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      className="py-16 sm:py-20"
      eyebrow="Career"
    >
      <ol className="relative space-y-5 border-l border-panel-border pl-6 sm:pl-8">
        {experience.map((job, index) => (
          <Reveal key={`${job.company}-${job.period}`} delay={index * 0.04}>
            <li className="relative">
              <span
                aria-hidden="true"
                className="bloom-ring absolute -left-[1.95rem] top-5 h-3 w-3 rounded-full border-2 border-accent-text bg-background sm:-left-[2.45rem]"
              />
              <Panel variant="glass" className="p-5 sm:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{job.company}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-text md:text-right">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-7 text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-text/70"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
