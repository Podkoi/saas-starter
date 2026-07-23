import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Landing({ onOpenDashboard, onOpenBilling, user, onLogout, onOpenLogin }) {
  return (
    <div>
      <Navbar onAction={onOpenDashboard} onOpenBilling={onOpenBilling} user={user} onLogout={onLogout} onOpenLogin={onOpenLogin} />
      <main className="py-16 px-6 max-w-6xl mx-auto">
        <Hero onAction={onOpenDashboard} />
        <section className="mt-8 p-6 bg-white rounded shadow">
          <p className="text-slate-700">
            Access the dashboard and billing tools after signing in. This demo starter includes a gated admin experience for more realistic SaaS workflows.
          </p>
          {!user ? (
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenLogin}
                className="px-5 py-3 bg-indigo-600 text-white rounded"
              >
                Sign in to unlock dashboard
              </button>
              <button
                onClick={onOpenBilling}
                className="px-5 py-3 border border-slate-300 rounded text-slate-700"
              >
                Explore billing flow
              </button>
            </div>
          ) : (
            <div className="mt-4 text-sm text-slate-600">You are signed in as {user.email}. Access dashboard and billing from the top navigation.</div>
          )}
        </section>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            <li className="p-4 bg-white rounded shadow">Fast landing builder</li>
            <li className="p-4 bg-white rounded shadow">Stripe-ready checkout</li>
            <li className="p-4 bg-white rounded shadow">Customizable theme</li>
            <li className="p-4 bg-white rounded shadow">Gated admin dashboard</li>
          </ul>
        </section>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-bold">Starter</h3>
              <p className="mt-2">Free · Basic features</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-bold">Pro</h3>
              <p className="mt-2">$19 / month · Recommended</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-bold">Agency</h3>
              <p className="mt-2">Custom pricing</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
