import { SectionBorder } from '../ui/section-border'
import { IPersonalData } from '@/app/types/data/personal-data'
import { SkillsCard } from '../ui/skills-card'

export function HardSkills({ data }: { data: IPersonalData }) {
  return (
    <SectionBorder title="Hard skills">
      <div className="grid grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-4 select-none">
        {data.skills.hard.map((item, index) => (
          <SkillsCard key={index} skill={item} />
        ))}
      </div>
    </SectionBorder>
  )
}
