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
    <main className="container py-8 md:py-0 md:flex flex-col items-center justify-center h-dvh overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-[15rem_1fr] lg:grid-cols-[20rem_1fr] gap-8">
        <Sidebar data={data} />
        <Projects data={data} />
        <div className="grid grid-cols-1 gap-8">
          <Education data={data} />
          <Experience data={data} />
          <Languages data={data} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <HardSkills data={data} />
          <SoftSkills data={data} />
        </div>
      </div>
    </main>
  )
}

export default App
