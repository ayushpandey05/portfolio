import { education, profile } from "@/content/resume";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" title="About" className="py-16 sm:py-20" eyebrow="Profile">
      <Reveal>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {profile.about}
          </p>
          <aside className="rounded-2xl border border-border bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-text">
              Education
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {education.degree}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{education.school}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              {education.period}
            </p>
          </aside>
        </div>
      </Reveal>
    </Section>
  );
}
