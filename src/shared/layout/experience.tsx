import { useDataContext } from '@/hooks/data-context'
import { SectionBorder } from '../components/section-border'

export function Experience() {
  const [data] = useDataContext()

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
