import { ISkill } from '@/app/types/skill'

export function SkillsCard({ icon, name }: ISkill) {
  return (
    <div className="flex flex-col items-center gap-1">
      <img className="size-12 text-white stroke-white" src={icon} alt={name} />
      <p className="text-center text-sm hidden md:block">{name}</p>
    </div>
  )
}
