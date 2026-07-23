import React, { useState } from 'react'

export default function BillingButton({ label, endpoint, body }) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body || {}),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else alert(data.error || 'Unexpected response from billing endpoint')
    } catch (err) {
      alert('Billing action failed: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleClick} disabled={loading} className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded">
      {loading ? 'Redirecting…' : label}
    </button>
  )
}
