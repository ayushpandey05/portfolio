type SignalLabelProps = {
  children: string;
  className?: string;
};

export function SignalLabel({ children, className = "" }: SignalLabelProps) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-text ${className}`}
    >
      <span
        aria-hidden="true"
        className="h-3 w-0.5 shrink-0 bg-accent-text animate-signal origin-left"
      />
      {children}
    </p>
  );
}
