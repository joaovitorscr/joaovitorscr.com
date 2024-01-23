import { ReactNode } from 'react'

interface ContainerInterface {
  children: ReactNode
}

export default function Container({ children }: ContainerInterface) {
  return (
    <div className="m-auto sm:max-w-[768px] md:max-w-[1440px]">{children}</div>
  )
}
