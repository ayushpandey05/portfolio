import { profile } from "@/content/resume";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © 2026 {profile.name}
        </p>
        <div className="flex flex-wrap gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition hover:text-foreground"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition hover:text-foreground"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
