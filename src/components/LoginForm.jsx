import React, { useState } from 'react'

export default function LoginForm({ onLogin, onCancel }) {
  const [email, setEmail] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!email) return
    onLogin({ email })
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="px-3 py-2 border rounded"
      />
      <button className="px-3 py-2 bg-indigo-600 text-white rounded" type="submit">Sign in</button>
      {onCancel && (
        <button type="button" onClick={onCancel} className="px-3 py-2 border rounded">Cancel</button>
      )}
    </form>
  )
}
