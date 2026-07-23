// Simple client utilities (placeholder)
export async function createCheckoutSession() {
  const res = await fetch('/api/checkout', { method: 'POST' })
  return res.json()
}
