import React from 'react'

export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm">Theme</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)} className="px-2 py-1 border rounded">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="indigo">Indigo</option>
      </select>
    </div>
  )
}
