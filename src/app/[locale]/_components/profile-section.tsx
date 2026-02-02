import { CalendarIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GitHubIcon } from "@/components/github-icon";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  calendar: CalendarIcon,
} as const;

const socialLinks = ["github", "linkedin", "calendar"] as const;

export function ProfileSection() {
  const t = useTranslations("portfolio.profile");

  return (
    <Item className="bg-card" variant="outline">
      <ItemMedia>
        <Avatar className="size-16">
          <AvatarImage src={t("avatarUrl")} />
          <AvatarFallback>{t("avatarFallback")}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="text-xl">{t("name")}</ItemTitle>
        <ItemDescription>{t("title")}</ItemDescription>
      </ItemContent>
      <ItemActions>
        {socialLinks.map((linkType) => {
          const Icon = iconMap[linkType];
          return (
            <Tooltip key={linkType}>
              <TooltipTrigger asChild>
                <Link
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon-sm",
                  })}
                  href={t(`socialLinks.${linkType}.href`) as Route}
                  target="_blank"
                >
                  <Icon />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                {t(`socialLinks.${linkType}.tooltip`)}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </ItemActions>
    </Item>
  );
}
