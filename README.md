# Journey to Self

Next.js 16 landing + WayForPay checkout. Designed for **Vercel** serverless — **no database**. Order/tariff state lives in the order reference string and the browser (`localStorage` / `sessionStorage`).

## Deploy on Vercel

1. Import the repo in [Vercel](https://vercel.com/new).
2. Set environment variables (see `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` — production URL (e.g. `https://your-domain.com`)
   - `MERCHANT_ACCOUNT` / `MERCHANT_SECRET` — WayForPay
   - `FACEBOOK_ACCESS_TOKEN` — Meta Conversions API
3. In WayForPay, point return / service URLs at the same domain.
4. Deploy.

`VERCEL_URL` is used as a fallback for site origin when `NEXT_PUBLIC_SITE_URL` is unset.

## Local development

```bash
cp .env.example .env.local
# fill in secrets
npm install
npm run dev
```

## Storage model

| What | Where |
|------|--------|
| Pending payment / tariff | `orderReference` (`JOURNEY_self_…` / `JOURNEY_psychologist_…`) + `localStorage` |
| Offer countdown | `localStorage` |
| FB Purchase / PageView dedupe | `localStorage` / `sessionStorage` |
| Orders, users, access | **Not stored here** — Telegram bot after success page |

Payment API routes are stateless: create signature → WayForPay; callback verifies signature and returns `{ status: 'ok' }`; return redirects by tariff encoded in `orderRef`.
