import { Education } from './shared/layout/education'
import { Experience } from './shared/layout/experience'
import { Languages } from './shared/layout/languages'
import { Projects } from './shared/layout/projects'
import { Sidebar } from './shared/layout/sidebar'
import { Skills } from './shared/layout/skills'

function App() {
  return (
    <main className="container mx-auto my-8">
      <div className="flex flex-col gap-6 md:hidden">
        <Sidebar />
        <Experience />
        <Projects />
        <Languages />
        <div className="grid gap-6">
          <Skills />
          <Education />
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-[16rem_1fr] md:gap-6">
        <Sidebar />
        <Projects />
        <div className="grid gap-6">
          <Education />
          <Experience />
          <Languages />
        </div>
        <Skills />
      </div>
    </main>
  )
}

export default App
