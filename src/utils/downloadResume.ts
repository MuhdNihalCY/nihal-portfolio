export const downloadResume = (resumeUrl: string, filename = 'Muhammed_Nihal_CY_Resume.pdf'): void => {
  const link = document.createElement('a')
  link.href = resumeUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

