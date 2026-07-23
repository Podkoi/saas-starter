import React from 'react'
import BillingCard from '../components/BillingCard'
import BillingButton from '../components/BillingButton'

const plans = [
  {
    plan: 'Starter',
    price: 'Free',
    benefits: ['1 project', 'Basic analytics', 'Email support'],
    active: false,
  },
  {
    plan: 'Pro',
    price: '$19 / month',
    benefits: ['Unlimited projects', 'Priority analytics', 'Team seats'],
    active: true,
  },
  {
    plan: 'Agency',
    price: 'Custom',
    benefits: ['Dedicated onboarding', 'White label', 'Enterprise SLA'],
    active: false,
  },
]

export default function Billing({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold">Billing</div>
            <p className="text-sm text-slate-600">Manage subscriptions, payments, and invoices.</p>
          </div>
          <button onClick={onBack} className="px-4 py-2 bg-indigo-600 text-white rounded">Back</button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <BillingCard
              key={plan.plan}
              plan={plan.plan}
              price={plan.price}
              benefits={plan.benefits}
              active={plan.active}
              actionLabel={plan.active ? 'Current plan' : 'Switch to this plan'}
              onAction={() => alert(`Selected ${plan.plan}`)}
            />
          ))}
        </section>
        <section className="mt-10 bg-white rounded shadow p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Subscribe to Pro</h2>
              <p className="mt-2 text-slate-600">Start a monthly subscription with Stripe Checkout.</p>
              <BillingButton label="Subscribe to Pro" endpoint="/api/subscriptions" body={{}} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Manage subscription</h2>
              <p className="mt-2 text-slate-600">Open your Stripe customer portal to update payment details and plan settings.</p>
              <BillingButton
                label="Open Customer Portal"
                endpoint="/api/portal"
              />
            </div>
          </div>
        </section>
        <section className="mt-10 bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold">Payment methods</h2>
          <p className="mt-2 text-slate-600">Add your payment details when you connect Stripe or another billing provider.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="p-4 border rounded">Visa ending in 4242</div>
            <div className="p-4 border rounded">No additional cards added</div>
          </div>
        </section>
      </main>
    </div>
  )
}
