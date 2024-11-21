import { IPersonalData } from '@/app/types/data/personal-data'
import { SectionBorder } from '../ui/section-border'

export function Experience({ data }: { data: IPersonalData}) {
  return (
    <SectionBorder title="Experience">
      <div>
        {data.experience.map((item, index) => (
          <div key={index}>
            <h2 className="font-medium">{item.company}</h2>
            <h3 className="text-sm text-subText">
              {item.role} · {item.timeSpan}
            </h3>
          </div>
        ))}
      </div>
    </SectionBorder>
  )
}
