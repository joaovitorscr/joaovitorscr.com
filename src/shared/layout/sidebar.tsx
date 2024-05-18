import { GithubIcon } from '@/assets/img/sidebar-icons/github-icon'
import { LinkedinIcon } from '@/assets/img/sidebar-icons/linkedin-icon'
import { useDataContext } from '@/hooks/data-context'

export function Sidebar() {
  const [data] = useDataContext()

  return (
    <div className="space-y-4 border rounded-lg px-4 py-6">
      <div className="flex flex-col align-center text-center">
        <img
          src={data.personal.avatar}
          alt="Avatar"
          className="rounded-full size-16 mx-auto"
        />
        <h3 className="font-medium text-lg">{data.personal.name}</h3>
        <h4 className="text-subText">{data.personal.handler}</h4>
      </div>
      <nav>
        <ul className="flex justify-center gap-4 items-center">
          <li>
            <a href={data.personal.githubUrl} target="#blank">
              <GithubIcon className="size-10 fill-white hover:fill-zinc-200 transition ease-in-out delay-75 hover:scale-105" />
            </a>
          </li>
          <li>
            <a href={data.personal.linkedinUrl} target="#blank">
              <LinkedinIcon className="size-8 fill-white hover:fill-zinc-200 transition ease-in-out delay-75 hover:scale-105" />
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <p className="text-pretty text-center">{data.personal.bio}</p>
      </div>
    </div>
  )
}
