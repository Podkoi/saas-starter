import React, { useState, useEffect } from 'react'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import ThemeSwitcher from './components/ThemeSwitcher'

export default function App() {
  const [route, setRoute] = useState('landing')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
      {route === 'landing' ? (
        <Landing onOpenDashboard={() => setRoute('dashboard')} />
      ) : (
        <Dashboard onBack={() => setRoute('landing')} />
      )}
    </div>
  )
}
