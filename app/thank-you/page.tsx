"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, ChevronDown, Phone } from "lucide-react"
import { FooterLinks } from "@/components/polar/footer-links"


interface FAQItem {
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    question: "How does the process work?",
    answer: "It's simple: you submit your property info, we review it and send you a fair cash offer within 24 hours. If you accept, we handle all the paperwork and you pick your closing date. There are no fees, no commissions, and no repairs needed.",
  },
  {
    question: "How fast can I sell my house?",
    answer: "We can close in as few as 14 days, or on your timeline. Some homeowners need to move fast, others need a few months. You choose the closing date that works best for you.",
  },
  {
    question: "Will you visit my house?",
    answer: "In most cases, we can make an initial offer based on the information you provide. If we need to see the property, we'll schedule a quick walkthrough at a time that's convenient for you. There's never any obligation.",
  },
  {
    question: "Do I need to make repairs before selling?",
    answer: "No. We buy houses in any condition. Whether your home needs minor touch-ups or major renovations, we'll make you a fair offer as-is. You don't need to spend a dime on repairs.",
  },
  {
    question: "Are there any fees or commissions?",
    answer: "None. There are no realtor commissions, no closing costs, and no hidden fees. The cash offer we make is the amount you walk away with at closing.",
  },
  {
    question: "How is your offer calculated?",
    answer: "We look at your property's location, condition, recent comparable sales in the area, and current market conditions. Our goal is to give you the fairest possible offer while making the process fast and hassle-free.",
  },
  {
    question: "Do I need a realtor?",
    answer: "No. Since we're buying directly from you, there's no need for a realtor. This also means you save on commission fees (typically 5-6% of the sale price). Of course, you're welcome to consult with one if it makes you more comfortable.",
  },
  {
    question: "What if my house is in foreclosure?",
    answer: "We work with homeowners facing foreclosure regularly. In many cases, we can close before the foreclosure date and help you avoid the damage to your credit. The sooner you reach out, the more options we have to help.",
  },
  {
    question: "What areas do you buy houses in?",
    answer: "We buy houses across multiple markets including Baltimore MD, Hampton Roads VA, Richmond VA, Wilmington DE, Huntsville AL, Howell MI, Tallmadge OH, select counties in Georgia, New York, and New Jersey. If you're unsure whether we cover your area, submit your address and we'll let you know right away.",
  },
  {
    question: "Is there any obligation after I submit my info?",
    answer: "Absolutely not. Submitting your property information is free and comes with zero obligation. We'll send you an offer, and it's completely up to you whether to accept, negotiate, or walk away.",
  },
]

function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50"
      >
        <span className="text-sm md:text-base font-medium text-gray-900 pr-4">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4">
          <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function ThankYouPage() {
  // Fire Facebook Lead event once on page load
  useEffect(() => {
    // Lead event with eventID-based dedup. sessionStorage key persists across
    // page reloads in the same browser session so Meta dedupes refresh fires.
    try {
      if (!window.fbq) return
      const k = "lead_event_id"
      let eid = sessionStorage.getItem(k)
      if (!eid) {
        eid = `lead-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
        sessionStorage.setItem(k, eid)
      }
      window.fbq("track", "Lead", {}, { eventID: eid })
    } catch {}
  }, [])

  return (
    <main className="relative min-h-screen bg-gray-50">
      {/* Thank You Hero */}
      <div className="bg-gradient-to-b from-[#1a3d6b]/10 to-transparent py-8 md:py-10">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e]/10">
              <CheckCircle2 className="h-7 w-7 text-[#22c55e]" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl text-balance">
              Thank You for Your Submission!
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-gray-600">
              We will be in touch within 24 hours with your cash offer. In the meantime, here are answers to common questions.
            </p>
          </div>

          {/* Letter from the Founder */}
          <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="px-6 py-8 md:px-8 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1a3d6b]">A Personal Note</p>
              <h2 className="mt-2 text-xl font-bold text-gray-900 md:text-2xl">From Nestor & Zev, Founders</h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700 md:text-base">
                <p>
                  If you're reading this, you just took a step that most homeowners put off for months. Maybe years. So before anything else... we want you to know that was the right call.
                </p>
                <p>
                  Selling a house is stressful. We've seen it hundreds of times. The uncertainty, the waiting, the feeling like you're at the mercy of a system that wasn't built for you. Realtors want you to fix everything up, stage the house, wait 90 days, and hope for the best. That works for some people. But not everyone.
                </p>
                <p>
                  We started Ultra Homebuyers because we saw too many families struggling with exactly this. Good people stuck in bad situations. Inherited properties they couldn't afford to keep. Houses that needed more work than they had time or money for. Divorces, job relocations, tax liens... life happens. And when it does, the last thing you need is someone telling you to repaint your kitchen and "list it in the spring."
                </p>
                <p>
                  Here's what happens next. Our team is going to review the information you submitted. Within 24 hours, you'll hear from us with a fair, no-obligation cash offer. No pressure. No games. If the number works for you, great. If it doesn't, no hard feelings. We'll still answer any questions you have.
                </p>
                <p>
                  When you see our number come up on your phone, pick up. That call is the start of getting this weight off your shoulders. We handle the paperwork, the title work, the closing costs. You pick the date. You walk away with a check.
                </p>
                <p>
                  That's it. No hidden fees. No commissions. No surprises.
                </p>
                <p>
                  We built this company on one simple idea: treat people the way we'd want our own families treated. Every homeowner we work with gets our personal commitment to a fair deal and an honest process.
                </p>
                <p className="font-medium text-gray-900">
                  Talk soon,<br />
                  Nestor & Zev<br />
                  <span className="font-normal text-gray-500">Founders, Ultra Homebuyers</span>
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
              <h2 className="text-base font-semibold text-gray-900">Frequently Asked Questions</h2>
              <p className="text-xs text-gray-500">{FAQS.length} common questions answered</p>
            </div>
            <div>
              {FAQS.map((faq) => (
                <FAQAccordion key={faq.question} item={faq} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Have Questions?</h2>
          <p className="mt-2 text-gray-600">
            Our team is ready to help you every step of the way.
          </p>
          <a
            href="tel:8664536019"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a3d6b] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#0f2440]"
          >
            <Phone className="h-5 w-5" />
            Call (866) 453-6019
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-8">
        <FooterLinks />
      </div>
    </main>
  )
}
