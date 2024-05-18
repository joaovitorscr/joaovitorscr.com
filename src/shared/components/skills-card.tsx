import { Skills } from '@/hooks/data-context'

interface SkillsCardProps {
  data: Skills
}

export function SkillsCard({ data }: SkillsCardProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <img className="size-12" src={data.icon} alt={data.name} />
      <p className="text-center text-sm text-subText">{data.name}</p>
    </div>
  )
}
