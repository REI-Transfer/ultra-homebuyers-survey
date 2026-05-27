import type { Metadata } from "next"
import { AdvertorialPage } from "@/components/advertorial/advertorial-page"
import config from "@/lib/config"

const market = config.marketName || "Homeowners 55+"

export const metadata: Metadata = {
  title: `${config.marketName ? config.marketName + " " : ""}Homeowners 55+: Higher Cash Offers On Older Homes | ${config.companyName}`,
  description:
    "See your 24-hour cash offer estimate without listing, repairs, or showings. Turn the equity in your older home into cash on your timeline. No obligation.",
}

export default function AdvertorialRoute() {
  return (
    <main className="relative min-h-screen bg-white">
      <AdvertorialPage
        companyName={config.companyName}
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        marketName={config.marketName}
        accentColor={config.accentColor}
        ownerName={config.ownerName}
        writerName="Margaret Ellison"
        writerRole="Housing Correspondent"
        writerHeadshot="/images/adv-local-team.jpg"
      />
    </main>
  )
}
