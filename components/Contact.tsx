import { Download, ExternalLink, Mail, Phone } from "lucide-react";
import { profile } from "@/content/resume";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";

export function Contact() {
  return (
    <Section id="contact" title="Contact" className="py-16 sm:py-20" eyebrow="Next step">
      <Reveal>
        <Panel variant="glass" corners className="p-6 sm:p-8">
          <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Open to conversations about mobile architecture, React Native product
            work, and frontend engineering roles. Reach out by email, phone, or
            LinkedIn.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={`mailto:${profile.email}`} variant="primary">
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </Button>
            <Button href={profile.phoneHref} variant="secondary">
              <Phone size={16} aria-hidden="true" />
              {profile.phone}
            </Button>
            <Button href={profile.linkedin} variant="secondary" external>
              <ExternalLink size={16} aria-hidden="true" />
              LinkedIn
            </Button>
            <Button href={profile.resumePath} variant="secondary" external>
              <Download size={16} aria-hidden="true" />
              Download resume
            </Button>
          </div>
        </Panel>
      </Reveal>
    </Section>
  );
}
