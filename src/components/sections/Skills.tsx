import Container from '@/components/Container'

type IconsType = {
  name: string
  iconLink: string
  webLink?: string
}

const icons: IconsType[] = [
  {
    name: 'React',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    webLink: 'https://react.dev/',
  },
  {
    name: 'TypeScript',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    webLink: 'https://www.typescriptlang.org/',
  },
  {
    name: 'JavaScript',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    webLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  },
  {
    name: 'Next.js',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    webLink: 'https://nextjs.org/',
  },
  {
    name: 'PostgreSQL',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    webLink: 'https://www.postgresql.org/',
  },
  {
    name: 'Jest',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    webLink: 'https://jestjs.io/pt-BR/',
  },
  {
    name: 'Angular',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg',
    webLink: 'https://angular.io/',
  },
  {
    name: 'TailwindCSS',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    webLink: 'https://tailwindcss.com/',
  },
  {
    name: 'Ubuntu',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
    webLink: 'https://ubuntu.com/',
  },
  {
    name: 'Node.js',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    webLink: 'https://nodejs.org/en',
  },
  {
    name: 'SASS',
    iconLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    webLink: 'https://sass-lang.com/',
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <div className="flex flex-col justify-around items-center h-screen md:flex-row">
          <div>
            <h2 className="text-6xl font-bold">Skills</h2>
            <p className="max-w-[480px] mt-8 font-medium text-lg">
              In my short history in front-end development I have been able to
              acquire knowledge about important technologies like React,
              JavaScript, TypeScript, Postgres, Jest, Cypress, Next.js, Angular,
              Ubuntu, TailwindCSS and SASS.
            </p>
          </div>
          <div className="flex flex-wrap w-64 gap-2">
            {icons.map(({ iconLink, name, webLink }, index) => (
              <a
                target="#blank"
                className="border p-2"
                key={index}
                href={webLink}
                title={name}
              >
                <img
                  className="w-12 h-12  md:w-24 md:h-24 hover:scale-110 hover:cursor-pointer"
                  src={iconLink}
                  alt={name}
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
