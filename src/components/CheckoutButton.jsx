import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        // If server returns a full URL, redirect browser
        window.location.href = data.url
        return
      }
      if (data.sessionId) {
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
        const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId })
        if (error) alert(error.message)
        return
      }
      alert('Checkout placeholder: ' + JSON.stringify(data))
    } catch (e) {
      alert('Checkout failed: ' + e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleCheckout} disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded">
      {loading ? 'Processing...' : 'Buy Pro'}
    </button>
  )
}
