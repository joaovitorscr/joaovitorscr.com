import React, { createContext, useContext, useEffect, useState } from 'react'

export interface Project {
  name: string
  type: string
  purpose: string
  image: {
    thumbnail: string
  }
  links: {
    github: string
    live: string
  }
  description: string
}

interface PersonalInfo {
  avatar: string
  name: string
  handler: string
  githubUrl: string
  linkedinUrl: string
  bio: string
}

interface Education {
  course: string
  institution: string
  timeSpan: string
}

interface Languages {
  name: string
  icon: string
}

interface Experience {
  company: string
  role: string
  timeSpan: string
}

export interface Skills {
  name: string
  icon: string
}

export interface JsonData {
  projects: Project[]
  personal: PersonalInfo
  education: Education[]
  languages: Languages[]
  experience: Experience[]
  skills: Skills[]
}

const DataContext = createContext<JsonData[]>([])

const fetchJsonData = async (): Promise<JsonData[]> => {
  try {
    const response = await fetch('/data.json')
    const data: JsonData[] = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching JSON data:', error)
    return []
  }
}

interface DataProviderProps {
  children: JSX.Element
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [jsonData, setJsonData] = useState<JsonData[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJsonData()
      setJsonData(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <DataContext.Provider value={jsonData}>
      {loading ? <div /> : children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  const context = useContext(DataContext)
  return context
}
