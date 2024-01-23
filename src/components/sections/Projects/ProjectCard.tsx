import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import easy from '@/assets/easy.png'
import { Button } from '@/components/ui/button'

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
        <Button type="button">Live</Button>
        <Button type="button">Repository</Button>
      </CardFooter>
    </Card>
  )
}
