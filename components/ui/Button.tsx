import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground cta-bloom hover:brightness-95"
      : "border border-panel-border bg-transparent text-foreground hover:border-accent-text/50 hover:bg-panel";

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition sm:w-auto ${styles} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
