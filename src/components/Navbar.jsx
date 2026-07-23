import React from 'react'

export default function Navbar({ onAction }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold">SaaS Starter</div>
        <nav className="space-x-4">
          <button onClick={onAction} className="px-4 py-2 bg-indigo-600 text-white rounded">Open demo</button>
        </nav>
      </div>
    </header>
  )
}
