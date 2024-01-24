import Container from '@/components/Container'
import ProjectCard, {
  ProjectCardInterface,
} from '@/components/sections/Projects/ProjectCard'

import breakdance from '@/assets/breakdance.png'
import country from '@/assets/country.jpg'
import easy from '@/assets/easy.png'
import weather from '@/assets/weather.jpg'

const items: ProjectCardInterface[] = [
  {
    img: easy,
    title: 'EasyCheckBox',
    content:
      'Project created to help me organize my daily tasks, this app will help you create task lists so you can alway have knowledge about your daily tasks.',
    liveLink: 'https://easycheckbox-joaovitorscr.vercel.app/',
    repositoryLink: 'https://github.com/joaovitorscr/easycheckbox',
  },
  {
    img: weather,
    title: 'Weather App',
    content:
      'Weather App created using OpenWeather API so you can always check the weather of you city in a easy way.',
    liveLink: 'https://weather-app-liard-seven.vercel.app/',
    repositoryLink: 'https://github.com/joaovitorscr/weather-app',
  },
  {
    img: country,
    title: 'My Country',
    content:
      'Project created to exercise my TypeScript skills, the idea was to create a website where people could verify simples informations about countries in a easy and fast way.',
    liveLink: 'https://my-country-beige.vercel.app/',
    repositoryLink: 'https://github.com/joaovitorscr/my-country',
  },
  {
    img: breakdance,
    title: 'BreakDance Hotel',
    content:
      'Project create using a Figma layout found in Figma community where I used to exercise my CSS skills reproducing this beautiful and modern landing page.',
    liveLink: 'https://breakdance-hotel-landingpage.vercel.app/',
    repositoryLink:
      'https://github.com/joaovitorscr/breakdance-hotel-landingpage',
  },
]

export default function Projects() {
  return (
    <section className="flex md:h-screen py-20 md:py-0">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-6xl font-bold">Projects</h2>
          <p className="max-w-[480px] mt-8 font-medium text-lg text-center">
            A few of my personal projects that I made using the most recent
            technologies in the market.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-4 mt-10 md:grid-cols-4">
          {items.map(
            ({ content, img, title, repositoryLink, liveLink }, index) => (
              <ProjectCard
                key={index}
                title={title}
                content={content}
                img={img}
                repositoryLink={repositoryLink}
                liveLink={liveLink}
              />
            ),
          )}
        </div>
      </Container>
    </section>
  )
}
