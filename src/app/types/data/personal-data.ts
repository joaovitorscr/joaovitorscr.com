import { IEducation } from '../education'
import { IExperience } from '../experience'
import { ILanguage } from '../language'
import { IPersonalInfo } from '../personal-info'
import { IProject } from '../project'
import { ISkill } from '../skill'

export interface IPersonalData {
  projects: IProject[]
  personal: IPersonalInfo
  education: IEducation[]
  languages: ILanguage[]
  experience: IExperience[]
  skills: {
    hard: ISkill[]
    soft: ISkill[]
  }
}
