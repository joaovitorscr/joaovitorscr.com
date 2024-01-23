import Container from '@/components/Container'

export default function Header() {
  return (
    <header className="py-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-full backdrop-blur-sm border-b z-40">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-2xl">{'<joaovitorscr />'}</h1>
          <nav>
            <ul className="flex space-x-4 text-lg">
              <li>About me</li>
              <li>Skills</li>
              <li>Education</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
