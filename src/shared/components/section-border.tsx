import { cn } from '@/lib/utils'

interface SectionBorderInterface {
  children: JSX.Element
  title: string
  className?: string
}

export function SectionBorder({
  children,
  title,
  className,
}: SectionBorderInterface) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute -translate-y-1/2 left-[1rem] top-0 bg-background px-2 z-20">
        <h2 className="font-medium text-lg tracking-widest uppercase">
          {title}
        </h2>
      </div>
      <div className="border rounded-lg px-4 py-6 h-full">{children}</div>
    </div>
  )
}
