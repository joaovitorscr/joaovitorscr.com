import { IPersonalData } from '@/app/types/data/personal-data'
import { SectionBorder } from '../ui/section-border'

export function Education({ data }: { data: IPersonalData }) {
  return (
    <SectionBorder title="Education">
      <div>
        {data.education.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="font-medium">{item.course}</h2>
              <h3 className="text-sm text-subText">
                {item.institution} · {item.timeSpan}
              </h3>
            </div>
          )
        })}
      </div>
    </SectionBorder>
  )
}
