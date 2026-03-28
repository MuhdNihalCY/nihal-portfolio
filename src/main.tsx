import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Remove loading screen once React has painted
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const el = document.getElementById('app-loading')
    if (el) {
      el.classList.add('hidden')
      el.addEventListener('transitionend', () => el.remove(), { once: true })
    }
  })
})
