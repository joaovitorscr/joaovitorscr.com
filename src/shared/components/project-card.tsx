import { cn } from '@/lib/utils'
import * as React from 'react'
import { HTMLAttributes } from 'react'

const ProjectCardRoot = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn('min-h-72 max-h-72 space-y-2', className)}
    ref={ref}
    {...props}
  />
))
ProjectCardRoot.displayName = 'ProjectCardRoot'

const ProjectCardTitle = React.forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h2 className={cn('text-lg font-medium', className)} ref={ref} {...props}>
    {children}
  </h2>
))
ProjectCardTitle.displayName = 'ProjectCardTitle'

const ProjectCardSubTitle = React.forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3 className={cn('text-subText', className)} ref={ref} {...props}>
    {children}
  </h3>
))
ProjectCardSubTitle.displayName = 'ProjectCardSubTitle'

const ProjectCardDescription = React.forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={(cn('line-clamp-3'), className)} ref={ref} {...props} />
))
ProjectCardDescription.displayName = 'ProjectCardDescription'

export {
  ProjectCardRoot,
  ProjectCardDescription,
  ProjectCardTitle,
  ProjectCardSubTitle,
}
