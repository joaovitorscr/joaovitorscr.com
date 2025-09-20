import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return <h1>{t("greeting")}</h1>;
}
