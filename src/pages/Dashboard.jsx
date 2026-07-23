import React from 'react'
import CmsEditor from '../components/CmsEditor'
import CheckoutButton from '../components/CheckoutButton'

export default function Dashboard({ onBack, user, onLogout }) {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold">SaaS Starter — Dashboard</div>
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700">{user.email}</span>
                <button onClick={onLogout} className="px-3 py-2 border rounded">Sign out</button>
              </div>
            ) : null}
            <CheckoutButton />
            <button onClick={onBack} className="px-4 py-2 bg-indigo-600 text-white rounded">Back</button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">Users: 124</div>
          <div className="p-4 bg-white rounded shadow">Revenue: $1,230</div>
          <div className="p-4 bg-white rounded shadow">Active trials: 5</div>
        </div>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Content</h2>
          <div className="mt-4 p-4 bg-white rounded shadow">
            <CmsEditor />
          </div>
        </section>
      </main>
    </div>
  )
}
