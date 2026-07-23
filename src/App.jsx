import React, { useState, useEffect } from 'react'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import ThemeSwitcher from './components/ThemeSwitcher'
import LoginForm from './components/LoginForm'

export default function App() {
  const [route, setRoute] = useState('landing')
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('saas_user')
      if (raw) setUser(JSON.parse(raw))
    } catch (e) {}
  }, [])

  function handleLogin(u) {
    setUser(u)
    localStorage.setItem('saas_user', JSON.stringify(u))
    setShowLogin(false)
  }

  function handleLogout() {
    setUser(null)
    localStorage.removeItem('saas_user')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
      {route === 'landing' ? (
        <Landing
          onOpenDashboard={() => setRoute('dashboard')}
          user={user}
          onLogin={handleLogin}
          onLogout={handleLogout}
          onOpenLogin={() => setShowLogin(true)}
        />
      ) : (
        <Dashboard onBack={() => setRoute('landing')} user={user} onLogout={handleLogout} />
      )}

      {showLogin && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Sign in (demo)</h3>
            <LoginForm onLogin={handleLogin} onCancel={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </div>
  )
}
