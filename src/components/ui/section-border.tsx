interface SectionBorderInterface {
  children: JSX.Element
  title: string
}

export function SectionBorder({ children, title }: SectionBorderInterface) {
  return (
    <div className="bg-card border rounded-lg">
      <div className="-translate-y-1/2 translate-x-5">
        <span className="font-medium text-primary-foreground text-md tracking-widest uppercase bg-primary px-2 py-1">
          {title}
        </span>
      </div>
      <div className="p-2">{children}</div>
    </div>
  )
}
