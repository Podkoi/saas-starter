import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const secret = process.env.STRIPE_SECRET_KEY
  const customerId = req.body?.customerId || process.env.STRIPE_CUSTOMER_ID
  const returnUrl = req.body?.returnUrl || req.headers.origin

  if (!secret || !customerId) {
    return res.status(400).json({ error: 'Stripe secret and customerId are required' })
  }

  try {
    const stripe = new Stripe(secret, { apiVersion: '2022-11-15' })
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    })
    return res.status(200).json({ url: session.url })
  } catch (error) {
    console.error('Stripe portal creation failed', error)
    return res.status(500).json({ error: error.message })
  }
}
