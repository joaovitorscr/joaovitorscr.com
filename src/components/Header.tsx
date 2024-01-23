import Container from '@/components/Container'
import { Link } from 'react-scroll'

export default function Header() {
  return (
    <header className="py-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-full backdrop-blur-sm border-b z-40">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{'<joaovitorscr />'}</h1>
          <nav>
            <ul className="flex space-x-4 text-lg">
              <li>
                <Link
                  className="cursor-pointer"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
