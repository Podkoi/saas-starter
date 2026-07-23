import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div>
          <div className="font-bold">SaaS Starter</div>
          <div className="text-sm text-gray-600 mt-2">© {new Date().getFullYear()} SaaS Starter</div>
        </div>
        <nav className="mt-4 sm:mt-0 space-x-4">
          <a className="text-sm text-gray-600" href="/privacy.html">Privacy</a>
          <a className="text-sm text-gray-600 ml-4" href="/terms.html">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
