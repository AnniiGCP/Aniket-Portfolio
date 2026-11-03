import { heroConfig, socialLinks } from "@/config/hero";
import { siteConfig } from "@/config/meta";

const profileLinks = socialLinks
  .filter((link) => link.href.startsWith("http"))
  .map((link) => link.href);

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: heroConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}${heroConfig.avatar}`,
        jobTitle: "DevOps-focused Software Engineer",
        description: siteConfig.description,
        email: heroConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        sameAs: [
          ...profileLinks,
          "https://github.com/AnniiGCP",
          "https://linkedin.com/in/aniketyadav9099/",
          "https://x.com/AniketYadav1105",
        ].filter((val, idx, arr) => arr.indexOf(val) === idx),
        knowsAbout: [
          "DevOps",
          "Cloud Computing",
          "Google Cloud Platform",
          "Docker",
          "Kubernetes",
          "FastAPI",
          "Python",
          "React",
          "CI/CD Automation",
          "Artificial Intelligence",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${heroConfig.name} — Portfolio`,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
