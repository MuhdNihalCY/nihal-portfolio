import { useEffect } from 'react'
import { personal } from '../data/personal'

const SEO = () => {
  useEffect(() => {
    // Update document title
    document.title = `${personal.name} - ${personal.title}`

    // Add structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'structured-data'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personal.name,
      jobTitle: personal.title,
      email: personal.email,
      telephone: personal.phone,
      url: personal.website,
      sameAs: [personal.linkedin, personal.github],
    })
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('structured-data')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return null
}

export default SEO

