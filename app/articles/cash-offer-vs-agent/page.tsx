import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export default function Page() {
  const area = config.marketName || "the areas we serve"
  return (
    <ArticleShell
      title="Cash Offer or List With an Agent? An Honest Look at What You Truly Walk Away With"
      dek="Both routes are real and both have a place. Here is a fair side-by-side, so you can pick the one that actually fits your home and your life."
      companyName={config.companyName}
    >
      <P>
        Let us settle one thing right at the top. Listing with an agent is not a scam, and selling for
        cash is not a trick. They are two different tools for two different situations, and the worst
        outcome is picking the wrong one for yours because nobody laid them side by side honestly.
      </P>
      <P>
        So that is what we are going to do here. We make cash offers for a living, and we will still
        tell you plainly when listing is the better move. Because if a listing genuinely nets you more
        and the wait does not cost you anything, you should list. The goal is not to talk you into us.
        The goal is to help you choose with your eyes open.
      </P>

      <ArticleImage
        src="/images/adv-strangers-open-house.jpg"
        alt="Strangers touring an older home during an open house"
        caption="A listing means weeks of strangers in your home. For some sellers that is fine. For others it is the dealbreaker."
      />

      <H2>What listing with an agent really involves</H2>
      <P>
        On the open market, an agent markets your home, holds showings, and tries to drum up competing
        buyers to push the price up. When it works well, you can reach the highest possible sale price.
        That is the genuine upside, and it is a real one.
      </P>
      <P>Here is the full picture of what it asks of you in return:</P>
      <UL>
        <li>You usually fix the home up first, paint, flooring, repairs, often thousands out of pocket.</li>
        <li>You keep the place show-ready and let strangers walk through, sometimes for weeks.</li>
        <li>You pay commissions, typically five or six percent of the price.</li>
        <li>You wait two or three months to close, and the buyer's loan can still fall through.</li>
        <li>You keep covering the mortgage, taxes, and utilities the entire time it sits.</li>
      </UL>
      <P>
        If your home is already in good shape, and you have the time and the patience for all of that,
        listing can absolutely come out ahead. We mean that.
      </P>

      <H2>What a cash sale really involves</H2>
      <P>
        A cash sale flips the trade. You give up the chance at the very top-end price. In exchange, you
        cut out almost everything on that list above.
      </P>
      <UL>
        <li>You sell as-is. No repairs, no paint, no cleaning out the whole house.</li>
        <li>No showings. No strangers. No keeping it spotless for weeks.</li>
        <li>No commission and no closing costs taken off your number.</li>
        <li>You close in as little as two weeks, or on whatever date you choose.</li>
        <li>A real written offer, with no loan that can collapse at the finish line.</li>
      </UL>
      <P>
        The trade is honest and it is simple. A bit less on the sticker, a lot less hassle, and far
        more certainty about what you actually keep and when.
      </P>

      <ArticleImage
        src="/images/adv-numbers-table.jpg"
        alt="An older couple comparing the two routes at the kitchen table"
        caption="The only comparison worth making is net to net. What you keep one way against the other, after every cost."
      />

      <H2>The comparison nobody does honestly</H2>
      <P>
        Most people compare the listing price to the cash offer and stop there. That is the wrong
        comparison, and it always makes the cash offer look worse than it is. The right comparison is
        what you actually pocket each way, after every cost and every month of waiting.
      </P>
      <P>
        Take a listing price and subtract the repairs you front, the commission, the closing costs, and
        three months of carrying the home. Now line that net up against a cash offer with none of those
        deductions. On a home that needs work, the two numbers are often much closer than the sticker
        prices suggested, and sometimes the cash sale wins outright once you count the time and risk.
      </P>

      <H2>So which one is right for you?</H2>
      <P>Here is the plain rule of thumb, with no agenda attached:</P>
      <UL>
        <li><strong>Lean toward listing</strong> if your home is in good shape, you can afford to wait two or three months, and the showings and repairs do not weigh on you.</li>
        <li><strong>Lean toward a cash sale</strong> if the home needs work, you want it done quickly, you would rather skip the strangers and the uncertainty, or you simply value knowing the exact number you walk away with.</li>
      </UL>
      <P>
        Neither answer is the smart one in the abstract. The smart one is whichever fits your home and
        your life right now.
      </P>

      <H2>How to actually decide</H2>
      <P>
        Do not settle this in your head with guesses. Get a real cash offer on your actual home, then
        hold it up against what a listing would truly net you after the fees, the repairs, and the
        wait. With both real numbers in front of you, the right choice usually becomes obvious.
      </P>
      <P>
        {config.companyName} buys homes across {area}, and seeing our number costs you nothing and ties
        you to nothing. If a listing is genuinely your better move, we will be the first to say so.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Get a real number to compare against"
        subheading="Text us the word OFFER or call. Then weigh it against a listing, with no cost and no obligation."
      />
    </ArticleShell>
  )
}
