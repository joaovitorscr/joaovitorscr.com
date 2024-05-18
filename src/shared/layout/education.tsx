import { useDataContext } from '@/hooks/data-context'
import { SectionBorder } from '../components/section-border'

export function Education() {
  const [data] = useDataContext()

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
