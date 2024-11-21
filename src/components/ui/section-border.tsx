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
    <div className={cn('relative rounded-lg bg-card shadow-lg', className)}>
      <div className="absolute bg-primary -translate-y-1/2 left-[1rem] top-0 px-2 z-20">
        <h2 className="font-medium text-white text-md tracking-widest uppercase">
          {title}
        </h2>
      </div>
      <div className="border rounded-lg px-4 py-6 h-full">{children}</div>
    </div>
  )
}
