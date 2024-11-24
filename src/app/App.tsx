import { Education } from '@/components/sections/education'
import { Experience } from '@/components/sections/experience'
import { Languages } from '@/components/sections/languages'
import { Projects } from '@/components/sections/projects'
import { Sidebar } from '@/components/sections/sidebar'
import { HardSkills } from '@/components/sections/hard-skills'
import { SoftSkills } from '@/components/sections/soft-skills'
import data from '@/data.json'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { GlobeIcon } from 'lucide-react'
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

function App() {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation()

  function handleLanguageSwitch(lang: string) {
    const newLanguage = lang === 'en' ? 'pt' : 'en'

    changeLanguage(newLanguage)
  }

  return (
    <>
      <header className="container flex justify-end fixed end-5 top-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <GlobeIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card border w-32">
            <DropdownMenuItem asChild>
              <Button
                disabled={language === 'en'}
                className="w-full flex justify-start cursor-pointer"
                onClick={() => handleLanguageSwitch('pt')}
                variant="ghost"
              >
                <img
                  className="size-4"
                  src="/assets/img/flags/us.svg"
                  alt={language}
                />
                <span>English</span>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                disabled={language === 'pt'}
                className="w-full flex justify-start cursor-pointer"
                onClick={() => handleLanguageSwitch('en')}
                variant="ghost"
              >
                <img
                  className="size-4"
                  src="/assets/img/flags/br.svg"
                  alt={language}
                />
                <span>Português</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="container flex flex-col items-center h-dvh p-8">
        <div className="grid h-full gap-8 grid-cols-1 lg:grid-cols-[20rem_1fr]">
          <div className="grid grid-cols-1 md:grid-cols-[auto_30rem] lg:grid-cols-[20rem_1fr] gap-8 lg:col-span-2">
            <div className="grid grid-cols-1 gap-8">
              <Sidebar data={data} />
              <Experience data={data} />
            </div>
            <Projects data={data} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 lg:col-span-1 gap-8">
            <Education data={data} />
            <Languages data={data} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-1 gap-8">
            <HardSkills data={data} />
            <SoftSkills data={data} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
