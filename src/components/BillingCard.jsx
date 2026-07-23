import React from 'react'

export default function BillingCard({ plan, price, benefits, active, actionLabel, onAction }) {
  return (
    <div className={`p-6 rounded shadow ${active ? 'border-2 border-indigo-600 bg-indigo-50' : 'bg-white'}`}>
      <div className="text-lg font-semibold">{plan}</div>
      <div className="mt-2 text-3xl font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {benefits.map((benefit) => (
          <li key={benefit}>• {benefit}</li>
        ))}
      </ul>
      <button onClick={onAction} className="mt-6 w-full px-4 py-2 bg-indigo-600 text-white rounded">
        {actionLabel}
      </button>
    </div>
  )
}
