import { skills } from "@/content/resume";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Panel } from "@/components/ui/Panel";

export function Skills() {
  return (
    <Section id="skills" title="Skills" className="py-16 sm:py-20" eyebrow="Toolkit">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.04}>
            <Panel variant="glass" corners className="h-full p-5 sm:p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent-text">
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-panel-border bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
