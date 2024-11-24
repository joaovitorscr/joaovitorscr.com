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
import { useTranslation } from 'react-i18next'

export function Projects({ data }: { data: IPersonalData }) {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  return (
    <SectionBorder title={language === 'en' ? 'Projects' : 'Projetos'}>
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
                    className="rounded-md w-full object-fill border"
                    src={item.image.thumbnail}
                    alt={item.name}
                  />
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>
                    {t(`projects.${index}.type`)} ·{' '}
                    {t(`projects.${index}.purpose`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-full">
                  {t(`projects.${index}.description`)}
                </CardContent>
                <CardFooter className="justify-end">
                  <a
                    href={item.links.github}
                    className={buttonVariants({
                      variant: 'ghost',
                      className: 'flex gap-2',
                    })}
                  >
                    <span>{language === 'en' ? 'Check On' : 'Ver no'}</span>
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
