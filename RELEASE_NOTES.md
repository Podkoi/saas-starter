# SaaS Starter — Release Notes

Version: 0.1.0
Date: 2026-07-23

Contents

- Source code: React + Vite + Tailwind template
- Landing page with hero, features, pricing
- Demo dashboard with CMS editor (localStorage)
- Stripe integration: `api/checkout.js` (creates Checkout session when `STRIPE_SECRET_KEY` set)
- Stripe subscription checkout: `api/subscriptions.js`
- Stripe customer portal example: `api/portal.js`
- Stripe webhook example: `api/webhook.js`
- Theme switcher UI
- Marketing assets: `marketing/` (pitch deck, one-pager, SVG screenshots)
- Deployment config: `vercel.json`, `netlify.toml`, GitHub Pages workflow
- Packaging script: `npm run package` -> `deliverables/saas-starter.zip`

Quick deploy

1. Set environment variables in your host (Vercel/Netlify): `VITE_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` (optional).
2. Build: `npm run build` or use `npm run package` to produce `deliverables/saas-starter.zip`.
3. Configure Stripe webhook endpoint to point to `/api/webhook` on your deployed URL.

Notes

- This is a starter template ready to customize. Replace placeholder legal text and analytics snippets before shipping.
