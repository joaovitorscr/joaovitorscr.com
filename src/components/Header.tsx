import Container from '@/components/Container'

export default function Header() {
  return (
    <header className="py-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-full backdrop-blur-sm border-b z-40">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{'<joaovitorscr />'}</h1>
          <nav>
            <ul className="flex space-x-4 text-lg">
              <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
