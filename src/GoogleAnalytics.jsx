import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_ID = 'G-4420Z7YV7Y'

function sendPageView(path) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    sendPageView(location.pathname + location.search)
  }, [location.pathname, location.search])

  return null
}

export default GoogleAnalytics
