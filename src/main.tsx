import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

posthog.init('phc_qspiCxaSsvbdvfV74uZfs6Gc8hQN5wiX6g6cvufeN7p8', {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'always',
  capture_pageview: true,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>,
)
