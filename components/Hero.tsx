import { ArrowRight, FileText } from "lucide-react";
import { profile } from "@/content/resume";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { SignalLabel } from "@/components/ui/SignalLabel";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <Reveal>
          <div className="mb-5 flex flex-col items-start gap-3">
            <div className="glass-surface inline-flex items-center gap-2 rounded-xl px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent-text animate-tick"
              />
              System online
            </div>
            <SignalLabel>{profile.label}</SignalLabel>
          </div>

          <h1
            id="hero-heading"
            className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-4 text-xl text-foreground/85 sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-foreground/75 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="#work" variant="primary">
              View work
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href={profile.resumePath} variant="secondary" external>
              <FileText size={16} aria-hidden="true" />
              Resume
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,var(--wash),transparent_70%)] blur-md"
            />
            <div className="glass-surface panel-corners relative rounded-[1.75rem] p-3">
              <PhoneMockup />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
