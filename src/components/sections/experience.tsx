import { IPersonalData } from '@/app/types/data/personal-data'
import { SectionBorder } from '../ui/section-border'
import { useTranslation } from 'react-i18next'

export function Experience({ data }: { data: IPersonalData }) {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  return (
    <SectionBorder title={language === 'en' ? 'Experience' : 'Experiência'}>
      <div>
        {data.experience.map((_item, index) => (
          <div key={index}>
            <h2 className="font-medium">{t(`experience.${index}.company`)}</h2>
            <h3 className="text-sm text-subText">
              {t(`experience.${index}.role`)} ·{' '}
              {t(`experience.${index}.timespan`)}
            </h3>
          </div>
        ))}
      </div>
    </SectionBorder>
  )
}
