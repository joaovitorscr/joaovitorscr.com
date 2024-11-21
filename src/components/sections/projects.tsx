import { JsonData, useDataContext } from '@/hooks/data-context'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { SectionBorder } from '../ui/section-border'
import {
  ProjectCardDescription,
  ProjectCardRoot,
  ProjectCardSubTitle,
  ProjectCardTitle,
} from '../ui/project-card'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/alert-dialog'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { Radio } from 'lucide-react'
import GitHubIcon from '#/assets/img/profile-link-icons/github'
import { IPersonalData } from '@/app/types/data/personal-data'

export function Projects({ data }: { data: IPersonalData }) {
  return (
    <SectionBorder title="Projects" className="w-full">
      <div>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {data.projects.map((item, index) => (
              <CarouselItem key={index} className="basis-[80%] md:basis-1/4">
                <Dialog>
                  <DialogTrigger className="text-left">
                    <ProjectCardRoot className="flex flex-col">
                      <div>
                        <img
                          className="rounded-md"
                          src={item.image.thumbnail}
                          alt={item.name}
                        />
                      </div>
                      <ProjectCardTitle>{item.name}</ProjectCardTitle>
                      <ProjectCardSubTitle>
                        {item.type} · {item.purpose}
                      </ProjectCardSubTitle>
                      <ProjectCardDescription className="line-clamp-4">
                        {item.description}
                      </ProjectCardDescription>
                    </ProjectCardRoot>
                  </DialogTrigger>
                  <DialogContent className="h-[52svh] md:h-auto">
                    <ProjectCardRoot className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                      <div className="flex flex-col gap-4">
                        <img
                          className="rounded-md mt-4"
                          src={item.image.thumbnail}
                          alt={item.name}
                        />
                        <a
                          href={item.links.github}
                          className={cn(
                            'mx-auto items-center gap-2 text-lg',
                            buttonVariants({
                              variant: 'default',
                              className: 'hidden md:flex',
                            }),
                          )}
                        >
                          <GitHubIcon className="size-6 fill-white" />
                          <span>GitHub Repository</span>
                        </a>
                        {item.links.live ? (
                          <>
                            <a
                              href={item.links.live}
                              className={cn(
                                'mx-auto items-center gap-2 text-lg',
                                buttonVariants({
                                  variant: 'default',
                                  className: 'hidden md:flex',
                                }),
                              )}
                            >
                              <Radio className="size-6" />
                              <span>Live website</span>
                            </a>
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                      <div>
                        <ProjectCardTitle>{item.name}</ProjectCardTitle>
                        <ProjectCardSubTitle>
                          {item.type} · {item.purpose}
                        </ProjectCardSubTitle>
                        <ProjectCardDescription className="line-clamp-none h-[10svh] overflow-y-auto md:h-[30svh]">
                          {item.description}
                        </ProjectCardDescription>
                        <div className="flex flex-col gap-4 my-4 md:hidden">
                          <a
                            href={item.links.github}
                            className={cn(
                              'mx-auto items-center gap-2 text-lg',
                              buttonVariants({
                                variant: 'default',
                                className: 'flex md:hidden',
                              }),
                            )}
                          >
                            <GitHubIcon className="size-6 fill-white" />
                            <span>GitHub Repository</span>
                          </a>
                          {item.links.live ? (
                            <>
                              <a
                                href={item.links.live}
                                className={cn(
                                  'mx-auto items-center gap-2 text-lg',
                                  buttonVariants({
                                    variant: 'default',
                                    className: 'flex md:hidden',
                                  }),
                                )}
                              >
                                <Radio className="size-6" />
                                <span>Live website</span>
                              </a>
                            </>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </ProjectCardRoot>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </SectionBorder>
  )
}
