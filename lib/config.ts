/**
 * lib/config.ts. Single server-side env var read point for the advertorial funnel.
 * Import this ONLY in server components (page.tsx, API routes) and server-rendered
 * article pages. Never import in "use client" components. Pass values as props instead.
 *
 * Defaults below are Ultra Homebuyers' verified values, so the advertorial renders
 * correctly even if these envs are not set on Vercel. MARKET_NAME is intentionally
 * empty (Ultra is nationwide) so copy renders "the areas we serve".
 */
const config = {
  // Brand
  companyName:   process.env.COMPANY_NAME    ?? "Ultra Homebuyers",
  smsKeyword:    process.env.SMS_KEYWORD      ?? "OFFER",
  marketName:    process.env.MARKET_NAME      ?? "",
  phoneDisplay:  process.env.PHONE_DISPLAY    ?? "(866) 453-6019",
  phoneHref:     process.env.PHONE_HREF       ?? "8664536019",
  accentColor:   process.env.ACCENT_COLOR     ?? "#1a3d6b",

  // Owner / personalization
  ownerName:     process.env.OWNER_NAME       ?? "Nestor & Zev",

  // Footer routes (Ultra uses /privacy-policy and /terms-of-service)
  privacyPolicyUrl: process.env.PRIVACY_POLICY_URL ?? "/privacy-policy",
  termsUrl:         process.env.TERMS_URL          ?? "/terms-of-service",

  // Webhook (server-side only, never exposed to browser). Read here so any future
  // server use shares the same WEBHOOK_URL as /api/submit. We never change it.
  webhookUrl:    process.env.WEBHOOK_URL      ?? "",
} as const

export default config
export type Config = typeof config
