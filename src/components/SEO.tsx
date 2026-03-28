import { useEffect } from 'react'
import { personal } from '../data/personal'

// Structured data lives in index.html so Google sees it in the raw HTML response.
// This component only handles the document title (can't be set statically in index.html).
const SEO = () => {
  useEffect(() => {
    document.title = `${personal.name} — Full-Stack Developer | Kerala, India`
  }, [])

  return null
}

export default SEO
