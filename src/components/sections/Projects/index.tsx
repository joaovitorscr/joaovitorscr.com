import Container from '@/components/Container'
import ProjectCard from '@/components/sections/Projects/ProjectCard'

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-6xl font-bold">Projects</h2>
          <p className="max-w-[480px] mt-8 font-medium text-lg">
            A few of my personal projects that I made using the most recent
            technologies in the market.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Container>
    </div>
  )
}
