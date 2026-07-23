import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'saas_starter_content'

export default function CmsEditor() {
  const [content, setContent] = useState({ heroTitle: '', heroSub: '' })
  const [raw, setRaw] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setContent(parsed)
        setRaw(JSON.stringify(parsed, null, 2))
      } catch (e) {}
    }
  }, [])

  function save() {
    try {
      const parsed = JSON.parse(raw)
      setContent(parsed)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed))
      alert('Saved to localStorage (demo)')
    } catch (e) {
      alert('Invalid JSON: ' + e.message)
    }
  }

  function resetExample() {
    const example = { heroTitle: 'Managed by CMS', heroSub: 'Edit this content in the demo CMS.' }
    setRaw(JSON.stringify(example, null, 2))
  }

  return (
    <div className="mt-4">
      <h3 className="font-semibold">CMS (demo)</h3>
      <p className="text-sm text-gray-600">Edit JSON below to change content stored in browser localStorage.</p>
      <textarea value={raw} onChange={(e) => setRaw(e.target.value)} className="w-full h-40 p-2 mt-2 border rounded" />
      <div className="mt-2 space-x-2">
        <button onClick={save} className="px-3 py-2 bg-indigo-600 text-white rounded">Save</button>
        <button onClick={resetExample} className="px-3 py-2 bg-gray-200 rounded">Load example</button>
      </div>
    </div>
  )
}
