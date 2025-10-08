import { useTranslations } from "next-intl";

export function StructuredData() {
  const t = useTranslations("portfolio");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t("profile.name"),
    jobTitle: t("profile.title"),
    url: "https://joaovitorscr.com",
    image: t("profile.avatarUrl"),
    sameAs: [
      t("profile.socialLinks.github.href"),
      t("profile.socialLinks.linkedin.href"),
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Frontend Development",
      "Web Development",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Anexs Tecnologia",
    },
    worksFor: {
      "@type": "Organization",
      name: "Anexs Tecnologia",
    },
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe for JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
