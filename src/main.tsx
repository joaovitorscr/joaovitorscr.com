import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import './app/index.css'
import './i18n.ts'

import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: import.meta.env.POSTHOG_HOST,
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <PostHogProvider apiKey={import.meta.env.POSTHOG_KEY} options={options}>
        <App />
      </PostHogProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
