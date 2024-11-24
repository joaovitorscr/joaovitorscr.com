import { IPersonalData } from '@/app/types/data/personal-data'
import { SectionBorder } from '@/components/ui/section-border'
import { useTranslation } from 'react-i18next'

export function Languages({ data }: { data: IPersonalData }) {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  return (
    <SectionBorder title={language === 'en' ? 'Languages' : 'Idiomas'}>
      <ul>
        {data.languages.map((item, index) => (
          <li className="flex items-center gap-2 text-lg" key={index}>
            <img
              className="size-4"
              src={item.icon}
              alt={t(`languages.${index}.name`)}
            />
            <span>{t(`languages.${index}.name`)}</span>
          </li>
        ))}
      </ul>
    </SectionBorder>
  )
}
