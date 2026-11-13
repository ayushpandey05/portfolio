import type { ReactNode } from "react";

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
        <div className="mb-8 flex items-center gap-3 sm:mb-10">
          <div>
            {eyebrow ? (
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={`${id}-heading`}
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              {title}
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="mt-1 h-px flex-1 bg-gradient-to-r from-accent/80 to-transparent"
          />
        </div>
        {children}
      </div>
    </section>
  );
}
