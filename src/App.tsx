import { useEffect } from 'react'
import { Element, scrollSpy } from 'react-scroll'

import Header from '@/components/Header'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from './components/sections/Contact'

function App() {
  useEffect(() => {
    scrollSpy.update()
  })

  return (
    <main className="relative">
      <Header />
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </main>
  )
}

export default App
