import type { ReactNode } from "react";
import { SignalLabel } from "@/components/ui/SignalLabel";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  eyebrow?: string;
};

export function Section({
  id,
  title,
  children,
  className = "",
  eyebrow,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 flex items-end gap-4 sm:mb-10">
          <div className="min-w-0">
            {eyebrow ? <SignalLabel className="mb-3">{eyebrow}</SignalLabel> : null}
            <h2
              id={`${id}-heading`}
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              {title}
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="mb-2 h-px min-w-12 flex-1 bg-gradient-to-r from-accent-text/70 via-panel-border to-transparent"
          />
        </div>
        {children}
      </div>
    </section>
  );
}
