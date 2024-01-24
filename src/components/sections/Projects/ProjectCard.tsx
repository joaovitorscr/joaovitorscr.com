import repositoryIcon from '@/assets/github.png'
import liveIcon from '@/assets/live.svg'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export interface ProjectCardInterface {
  img: string
  title: string
  content: string
  liveLink: string
  repositoryLink: string
}

export default function ProjectCard({
  content,
  img,
  title,
  liveLink,
  repositoryLink,
}: ProjectCardInterface) {
  return (
    <Card className="flex flex-col">
      <img className="rounded-t-md h-56 object-cover" src={img} alt={title} />
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="mt-auto justify-between">
        <a
          href={liveLink}
          target="#blank"
          className={`flex items-center ${buttonVariants({ variant: 'default' })}`}
        >
          <img className="w-4 h-4 mr-2" src={liveIcon} alt="Live" />
          Live Version
        </a>
        <a
          href={repositoryLink}
          target="#blank"
          className={`flex items-center ${buttonVariants({ variant: 'default' })}`}
        >
          <img className="w-4 h-4 mr-2" src={repositoryIcon} alt="Repository" />
          Repository
        </a>
      </CardFooter>
    </Card>
  )
}
