import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";

export function ProjectsSection() {
  const t = useTranslations("portfolio.sections.projects");
  const projects = t.raw("items") as Array<{
    title: string;
    description: string;
    technologies: string[];
    link: string;
    linkText: string;
  }>;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold px-1">{t("title")}</h2>
      <ItemGroup>
        {projects.map((project, index) => (
          <Item key={project.title} className="bg-card" variant="outline">
            <ItemContent>
              <ItemTitle>{t(`items.${index}.title`)}</ItemTitle>
              <ItemDescription>
                {t(`items.${index}.description`)}
              </ItemDescription>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {t(`items.${index}.technologies.${techIndex}`)}
                  </Badge>
                ))}
              </div>
            </ItemContent>
            <ItemActions>
              <a
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
                href={t(`items.${index}.link`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(`items.${index}.linkText`)}
              </a>
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
