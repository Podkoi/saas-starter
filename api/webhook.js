// Example Stripe webhook handler (Vercel/Netlify compatible)
import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const payload = await new Promise((resolve) => {
    let data = ''
    req.on('data', chunk => (data += chunk))
    req.on('end', () => resolve(data))
  })

  if (!secret) {
    // No webhook secret configured — accept but log for demo
    console.log('Webhook received (no secret configured)')
    return res.status(200).json({ received: true })
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' })
    const event = stripe.webhooks.constructEvent(payload, req.headers['stripe-signature'], secret)
    console.log('Stripe webhook event:', event.type)
    // Handle relevant events here (checkout.session.completed, invoice.payment_succeeded, etc.)
    return res.status(200).json({ received: true })
  } catch (err) {
    console.error('Webhook error:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }
}
