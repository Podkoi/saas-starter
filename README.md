Local dev

If you want to test the demo checkout flow locally the project includes a mock serverless handler at `api/checkout.js` which responds with a placeholder URL.

Environment variables

- `VITE_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key (used in frontend when integrating Stripe.js)
- `ANALYTICS_ID`: Analytics identifier (GA4/UA/Plausible)
 - `STRIPE_SECRET_KEY`: Your Stripe secret key for server-side session creation (optional for local mock)
 - `STRIPE_WEBHOOK_SECRET`: The webhook signing secret for validating Stripe webhooks (optional)

Stripe setup (quick)

1. Create a Stripe account and get your Publishable and Secret keys.
2. Set `VITE_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` (and optionally `STRIPE_WEBHOOK_SECRET`) in your hosting env (Vercel/Netlify).
3. On the server, `api/checkout.js` will create Checkout sessions using `STRIPE_SECRET_KEY`.
4. Configure webhook endpoint `/api/webhook` in Stripe dashboard and set `STRIPE_WEBHOOK_SECRET`.

Theme & customization

- Use the Theme switcher in the top-right to preview themes. To persist themes or add more, extend `ThemeSwitcher.jsx` and wire to localStorage or a user setting.


# SaaS Starter — Landing + Dashboard Template

This is a minimal, sellable starter template: landing page, demo dashboard, Tailwind styles, and deployment-ready config (Vite + Tailwind).

Quick start

```bash
npm install
npm run dev
```

Deploy: push to Vercel or Netlify; build command is `npm run build`.

GitHub Pages

This repo includes a GitHub Actions workflow that builds the site and deploys the `dist` directory to the `gh-pages` branch on push to `main`.

To enable Pages:

1. In your repository settings, under "Pages", set the source to the `gh-pages` branch (root).
2. Push to `main` — the `pages.yml` workflow will build and publish automatically.

What's included

- Landing: hero, features, pricing
- Dashboard: demo metrics and CMS placeholder
- Tailwind CSS
- Vite dev server

Next steps (recommended)

- Add Stripe integration and serverless checkout (see `api/stripe-placeholder.js`)
- Hook up a headless CMS or simple JSON-based content API
- Add SEO and analytics keys in environment variables (replace analytics placeholder in `index.html`)

Deployment (Vercel)

1. Push this repo to GitHub.
2. Import project in Vercel and set build command `npm run build` and output directory `dist`.
3. Add environment variables for any API keys (Stripe, analytics).

Marketing pitch (short)

Sell a polished starter to early-stage founders: "Ship a branded landing, checkout, and admin dashboard in days — Stripe-ready, customizable, and deployable to Vercel."

