import data from '@/data.json'
import { Education } from '@/components/sections/education'
import { Experience } from '@/components/sections/experience'
import { Languages } from '@/components/sections/languages'
import { Projects } from '@/components/sections/projects'
import { Sidebar } from '@/components/sections/sidebar'
import { HardSkills } from '@/components/sections/hard-skills'
import { SoftSkills } from '@/components/sections/soft-skills'

function App() {
  return (
    <main className="container flex flex-col items-center h-dvh p-8">
      <div className="grid h-full gap-8 grid-cols-1 lg:grid-cols-[15rem_1fr]">
        <div className="grid grid-cols-1 md:grid-cols-[auto_30rem] lg:grid-cols-[15rem_1fr] gap-8 lg:col-span-2">
          <Sidebar data={data} />
          <Projects data={data} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 lg:col-span-1 gap-8">
          <Education data={data} />
          <Experience data={data} />
          <Languages data={data} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-1 gap-8">
          <HardSkills data={data} />
          <SoftSkills data={data} />
        </div>
      </div>
    </main>
  )
}

export default App
