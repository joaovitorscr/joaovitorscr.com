interface SectionBorderInterface {
  children: JSX.Element
  title: string
}

export function SectionBorder({ children, title }: SectionBorderInterface) {
  return (
    <div className="space-y-2">
      <p className="tracking-widest uppercase font-medium text-foreground">
        {title}
      </p>
      <div className="border rounded-lg p-4">{children}</div>
    </div>
  )
}
