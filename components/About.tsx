import { education, profile } from "@/content/resume";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Panel } from "@/components/ui/Panel";
import { SignalLabel } from "@/components/ui/SignalLabel";

export function About() {
  return (
    <Section id="about" title="About" className="py-16 sm:py-20" eyebrow="Profile">
      <Reveal>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <Panel variant="glass" className="p-6 sm:p-8">
            <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {profile.about}
            </p>
          </Panel>
          <Panel as="aside" variant="glass" corners className="p-6">
            <SignalLabel>Education</SignalLabel>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
              {education.degree}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{education.school}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-accent-text">
              {education.period}
            </p>
          </Panel>
        </div>
      </Reveal>
    </Section>
  );
}
