import { projects } from "@/content/resume";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function SelectedWork() {
  return (
    <Section id="work" title="Selected work" className="py-16 sm:py-20" eyebrow="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {project.company} · {project.period}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-muted">{project.problem}</p>

              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-foreground/90">
                {project.built.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                {project.impact}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
