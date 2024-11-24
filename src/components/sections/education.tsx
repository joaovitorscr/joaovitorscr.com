import { IPersonalData } from '@/app/types/data/personal-data'
import { SectionBorder } from '../ui/section-border'
import { useTranslation } from 'react-i18next'

export function Education({ data }: { data: IPersonalData }) {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  return (
    <SectionBorder title={language === 'en' ? 'Education' : 'Educação'}>
      <div>
        {data.education.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="font-medium">{t(`education.${index}.course`)}</h2>
              <h3 className="text-sm text-subText">
                {t(`education.${index}.institution`)} ·{' '}
                {t(`education.${index}.timespan`)}
              </h3>
            </div>
          )
        })}
      </div>
    </SectionBorder>
  )
}
