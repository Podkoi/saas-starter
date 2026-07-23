import React from 'react'

export default function Navbar({ onAction, user, onLogout, onOpenLogin }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold">SaaS Starter</div>
        <nav className="flex items-center gap-4">
          <button onClick={onAction} className="px-4 py-2 bg-indigo-600 text-white rounded">Open demo</button>
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">{user.email}</span>
              <button onClick={onLogout} className="px-3 py-2 border rounded">Sign out</button>
            </div>
          ) : (
            <button onClick={onOpenLogin} className="px-3 py-2 border rounded">Sign in</button>
          )}
        </nav>
      </div>
    </header>
  )
}
