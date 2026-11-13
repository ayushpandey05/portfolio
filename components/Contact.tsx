import { Download, ExternalLink, Mail, Phone } from "lucide-react";
import { profile } from "@/content/resume";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Contact() {
  return (
    <Section id="contact" title="Contact" className="py-16 sm:py-20" eyebrow="Next step">
      <Reveal>
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Open to conversations about mobile architecture, React Native product
            work, and frontend engineering roles. Reach out by email, phone, or
            LinkedIn.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:brightness-95 sm:w-auto"
            >
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.phoneHref}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-border px-6 text-sm font-semibold text-foreground transition hover:border-foreground/40 hover:bg-background sm:w-auto"
            >
              <Phone size={16} aria-hidden="true" />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-border px-6 text-sm font-semibold text-foreground transition hover:border-foreground/40 hover:bg-background sm:w-auto"
            >
              <ExternalLink size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-border px-6 text-sm font-semibold text-foreground transition hover:border-foreground/40 hover:bg-background sm:w-auto"
            >
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
