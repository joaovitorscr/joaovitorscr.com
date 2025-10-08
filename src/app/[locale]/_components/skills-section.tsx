import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent } from "@/components/ui/item";

export function SkillsSection() {
  const t = useTranslations("portfolio.sections.skills");
  const categories = t.raw("categories") as Array<{
    name: string;
    items: string[];
  }>;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold px-1">{t("title")}</h2>
      <Item className="bg-card" variant="outline">
        <ItemContent>
          <div className="space-y-4">
            {categories.map((category, categoryIndex) => (
              <div key={category.name}>
                <h3 className="text-sm font-medium mb-2">
                  {t(`categories.${categoryIndex}.name`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <Badge key={skill} variant="secondary">
                      {t(`categories.${categoryIndex}.items.${skillIndex}`)}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ItemContent>
      </Item>
    </div>
  );
}
