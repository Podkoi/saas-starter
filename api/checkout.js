// Simple dev-friendly checkout mock endpoint for Vercel/Netlify serverless
import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const secret = process.env.STRIPE_SECRET_KEY
  if (!secret) {
    // No secret configured — return mock URL for demo
    return res.status(200).json({ url: '/placeholder-checkout' })
  }

  try {
    const stripe = new Stripe(secret, { apiVersion: '2022-11-15' })
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        { price_data: { currency: 'usd', product_data: { name: 'Pro plan' }, unit_amount: 1900 }, quantity: 1 },
      ],
      success_url: `${req.headers.origin}/?success=1`,
      cancel_url: `${req.headers.origin}/?canceled=1`,
    })
    return res.status(200).json({ sessionId: session.id, url: session.url })
  } catch (e) {
    console.error('Stripe checkout error', e)
    return res.status(500).json({ error: e.message })
  }
}
