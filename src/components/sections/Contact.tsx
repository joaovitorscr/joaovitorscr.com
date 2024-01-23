import githubIcon from '@/assets/github.png'
import { DownloadIcon, LinkedinIcon } from 'lucide-react'
import Container from '../Container'

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-secondary"
    >
      <Container>
        <div>
          <div className="flex flex-col justify-center">
            <h2 className="text-6xl font-medium text-center">Contact me</h2>
            <p className="max-w-[480px] mt-8 font-medium text-lg text-center">
              If you are interest in talking to me or hiring me fell free to
              reach me in any of the platforms below!
            </p>
          </div>
          <nav className="mt-10">
            <ul className="flex space-x-4 justify-center items-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/joaovitorscruz/"
                  target="#blank"
                >
                  <LinkedinIcon className="w-10 h-10" />
                </a>
              </li>
              <li>
                <a href="https://www.github.com/joaovitorscr" target="#blank">
                  <img className="w-10 h-10" src={githubIcon} alt="GitHub" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-10 flex justify-center">
            <h3 className="text-lg font-medium">
              Email: <span>contato.joaovitorscr@gmail.com</span>
            </h3>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="flex justify-center items-center bg-primary px-16 py-2 rounded-md space-x-2 hover:bg-red-400"
            >
              <DownloadIcon />
              <span className="font-medium text-lg">Download my resume</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
