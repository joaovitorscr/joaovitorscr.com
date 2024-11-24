import { IPersonalData } from '@/app/types/data/personal-data'
import GitHubIcon from '#/assets/img/profile-link-icons/github'
import LinkedinIcon from '#/assets/img/profile-link-icons/linkedin'
import { useTranslation } from 'react-i18next'

export function Sidebar({ data }: { data: IPersonalData }) {
  const { t } = useTranslation()

  return (
    <div className="space-y-4 border rounded-lg px-4 py-6 h-full">
      <div className="flex flex-col align-center text-center">
        <img
          src={data.personal.avatar}
          alt="Avatar"
          className="rounded-full size-16 mx-auto"
        />
        <h1 className="font-medium text-lg">{data.personal.name}</h1>
        <h4 className="text-subText">{data.personal.handler}</h4>
      </div>
      <nav>
        <ul className="flex justify-center gap-4 items-center">
          <li>
            <a href={data.personal.githubUrl} target="#blank">
              <GitHubIcon className="size-10 fill-white hover:fill-zinc-200 transition ease-in-out delay-75 hover:scale-105" />
            </a>
          </li>
          <li>
            <a href={data.personal.linkedinUrl} target="#blank">
              <LinkedinIcon className="size-8 fill-white hover:fill-zinc-200 transition ease-in-out delay-75 hover:scale-105" />
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-pretty text-center">{t('personal.bio')}</p>
    </div>
  )
}
