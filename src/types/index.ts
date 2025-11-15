export interface Personal {
  name: string
  title: string
  location: string
  phone: string
  email: string
  website: string
  linkedin: string
  github: string
  resumeUrl: string
}

export interface Experience {
  company: string
  position: string
  startDate: string
  endDate: string
  description: string[]
}

export interface Project {
  title: string
  description: string
  githubUrl: string
  technologies: string[]
  liveUrl?: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
}

export interface Education {
  institution: string
  degree: string
  field: string
  gpa?: string
  year: string
  type: string
}

export interface Language {
  name: string
}

