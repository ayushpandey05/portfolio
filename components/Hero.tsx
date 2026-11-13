import { ArrowRight, FileText } from "lucide-react";
import { profile } from "@/content/resume";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-text">
            {profile.label}
          </p>
          <h1
            id="hero-heading"
            className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-4 text-xl text-foreground/85 sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-foreground/80 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#work"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:brightness-95 sm:w-auto"
            >
              View work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-border px-6 text-sm font-semibold text-foreground transition hover:border-foreground/40 hover:bg-surface sm:w-auto"
            >
              <FileText size={16} aria-hidden="true" />
              Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}
