import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { SectionBorder } from '../ui/section-border'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { IPersonalData } from '@/app/types/data/personal-data'
import { buttonVariants } from '../ui/button'
import GitHubIcon from '#/assets/img/profile-link-icons/github'

export function Projects({ data }: { data: IPersonalData }) {
  return (
    <SectionBorder title="Projects">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {data.projects.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardHeader>
                  <img
                    className="rounded-md w-full object-fill"
                    src={item.image.thumbnail}
                    alt={item.name}
                  />
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>
                    {item.type} · {item.purpose}
                  </CardDescription>
                </CardHeader>
                <CardContent className="line-clamp-4">
                  {item.description}
                </CardContent>
                <CardFooter className="justify-end">
                  <a
                    href={item.links.github}
                    className={buttonVariants({
                      variant: 'ghost',
                      className: 'flex gap-2',
                    })}
                  >
                    <span>Check On</span>
                    <GitHubIcon className="size-5 fill-white" />
                  </a>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </SectionBorder>
  )
}
