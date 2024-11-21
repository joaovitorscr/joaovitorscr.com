import { IPersonalData } from '@/app/types/data/personal-data'
import { SectionBorder } from '../ui/section-border'
import { SkillsCard } from '../ui/skills-card'

export function SoftSkills({ data }: { data: IPersonalData }) {
  return (
    <SectionBorder title="soft skills">
      <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-4 select-none">
        {data.skills.soft.map((item, index) => (
          <SkillsCard key={index} skill={item} />
        ))}
      </div>
    </SectionBorder>
  )
}
