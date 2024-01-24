import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import easy from '@/assets/easy.png'
import githubIcon from '@/assets/github.png'
import liveIcon from '@/assets/live.svg'

export default function ProjectCard() {
  return (
    <Card>
      <img className="w-full h-56 object-cover" src={easy} alt="" />
      <CardHeader>
        <CardTitle>Easy Check Box</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Website created for people be able to take notes about their daily
          tasks and check them
        </p>
      </CardContent>
      <CardFooter className="flex justify-around space-x-4">
        <Button type="button" className="flex items-center">
          <img className="w-4 h-4 mr-2" src={liveIcon} alt="Live" />
          <span>Live</span>
        </Button>
        <Button type="button" className="flex items-center">
          <img className="w-4 h-4 mr-2" src={githubIcon} alt="GitHub" />
          <span>Repository</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
