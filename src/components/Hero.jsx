import React from 'react'

export default function Hero({ onAction }) {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Launch faster with a SaaS-ready template</h1>
        <p className="mt-4">Beautiful landing, Stripe-ready checkout, and demo admin — ship a polished product to customers fast.</p>
        <div className="mt-6 flex gap-3">
          <button onClick={onAction} className="px-6 py-3 bg-white text-indigo-700 rounded font-semibold">Try demo</button>
          <a href="/pricing" className="px-6 py-3 bg-indigo-800 text-white rounded font-semibold">View pricing</a>
        </div>
      </div>
    </section>
  )
}
