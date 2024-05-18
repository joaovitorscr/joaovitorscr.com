import { ChevronDown } from 'lucide-react'
import { SectionBorder } from '../components/section-border'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/shared/components/alert-dialog'
import { useDataContext } from '@/hooks/data-context'
import { SkillsCard } from '../components/skills-card'

export function Skills() {
  const [data] = useDataContext()

  return (
    <SectionBorder title="Main skills">
      <div>
        <div className="hidden md:grid grid-cols-5 gap-4 select-none">
          {data.skills.slice(0, 15).map((item, index) => (
            <SkillsCard key={index} data={item} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 md:hidden select-none">
          {data.skills.slice(0, 9).map((item, index) => (
            <SkillsCard key={index} data={item} />
          ))}
        </div>
        <div>
          <Dialog>
            <DialogTrigger className="flex justify-center mx-auto mt-8">
              <div className="flex flex-col items-center">
                <span className="text-subText leading-none group-hover:text-white transition">
                  See more
                </span>
                <ChevronDown className="stroke-subText group-hover:stroke-white transition" />
              </div>
            </DialogTrigger>
            <DialogContent className="grid grid-cols-3 gap-2 max-h-96 overflow-auto md:grid-cols-5 md:gap-4 hidden-scrollbar select-none">
              {data.skills.map((item, index) => (
                <SkillsCard key={index} data={item} />
              ))}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </SectionBorder>
  )
}
