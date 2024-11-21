import { IPersonalData } from '@/app/types/data/personal-data'
import { SectionBorder } from '@/components/ui/section-border'

export function Languages({ data }: { data: IPersonalData}) {
  return (
    <SectionBorder title="Languages">
      <ul>
        {data.languages.map((item, index) => (
          <li className="flex items-center gap-2 text-lg" key={index}>
            <img className="size-4" src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </SectionBorder>
  )
}
