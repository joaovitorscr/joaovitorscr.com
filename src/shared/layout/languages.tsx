import { useDataContext } from '@/hooks/data-context'
import { SectionBorder } from '@/shared/components/section-border'

export function Languages() {
  const [data] = useDataContext()
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
