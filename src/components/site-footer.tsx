import Link from "next/link";
import { EnvelopeSimple, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { GitHubButton } from "@/components/ui/github-button";

const footerSocial = [
  { name: "X", href: "https://x.com/AniketYadavDev", icon: XLogo },
  { name: "LinkedIn", href: "https://linkedin.com/in/aniketyadav9099/", icon: LinkedinLogo },
  { name: "Email", href: "mailto:aniketyadav0078@gmail.com", icon: EnvelopeSimple },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <Container className="flex flex-col items-center gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center font-mono text-xs text-secondary sm:text-left sm:text-sm">
          <p>© 2026 Aniket Yadav</p>
          <p className="mt-0.5 whitespace-nowrap">Dreamed in pixels, coded at midnight, shipped with chai.</p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <GitHubButton href="https://github.com/AnniiGCP/Aniket-Portfolio" />

          <div className="flex items-center gap-2">
            {footerSocial.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex size-8 items-center justify-center rounded-lg border border-border text-secondary transition-colors hover:bg-muted hover:text-foreground sm:size-9"
                >
                  <Icon className="size-4 sm:size-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
