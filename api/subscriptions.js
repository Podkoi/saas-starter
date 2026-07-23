import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const secret = process.env.STRIPE_SECRET_KEY
  const priceId = process.env.STRIPE_PRO_PRICE_ID

  if (!secret || !priceId) {
    return res.status(400).json({ error: 'Stripe secret or price ID not configured' })
  }

  try {
    const stripe = new Stripe(secret, { apiVersion: '2022-11-15' })
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.headers.origin}/?success=1`,
      cancel_url: `${req.headers.origin}/?canceled=1`,
    })

    return res.status(200).json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Stripe subscription creation failed', error)
    return res.status(500).json({ error: error.message })
  }
}
