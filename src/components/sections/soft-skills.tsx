import { IPersonalData } from '@/app/types/data/personal-data'
import { SectionBorder } from '../ui/section-border'
import { SkillsCard } from '../ui/skills-card'
import { useTranslation } from 'react-i18next'

export function SoftSkills({ data }: { data: IPersonalData }) {
  const { t } = useTranslation()

  return (
    <SectionBorder title="soft skills">
      <div className="grid grid-cols-5 md:grid-cols-4 lg:grid-cols-3 gap-4 select-none">
        {data.skills.soft.map((item, index) => (
          <SkillsCard
            key={index}
            name={t(`skills.soft.${index}.name`)}
            icon={item.icon}
          />
        ))}
      </div>
    </SectionBorder>
  )
}
