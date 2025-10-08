import { useTranslations } from "next-intl";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";

export function ExperienceSection() {
  const t = useTranslations("portfolio.sections.experience");
  const items = t.raw("items") as Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold px-1">{t("title")}</h2>
      <ItemGroup>
        {items.map((item, index) => (
          <Item
            key={`${item.company}-${item.title}`}
            className="bg-card"
            variant="outline"
          >
            <ItemContent>
              <ItemTitle>{t(`items.${index}.title`)}</ItemTitle>
              <ItemDescription>
                {t(`items.${index}.company`)} • {t(`items.${index}.period`)}
              </ItemDescription>
              <p className="text-sm text-muted-foreground mt-2">
                {t(`items.${index}.description`)}
              </p>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
