import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export const metadata = {
  title: "The Truth About 'Lowball' Cash Offers | Ultra Homebuyers",
  description:
    "How a fair cash offer is really put together, why the net you keep beats the sticker price, and how to spot an offer that is actually too low.",
}

export default function Page() {
  return (
    <ArticleShell
      title="The Truth About 'Lowball' Cash Offers, From People Who Actually Write Them"
      dek="Everyone warns you cash buyers lowball. So let us open the books and show you how a fair number is really built, and how to spot one that is not."
      companyName={config.companyName}
    >
      <P>
        You have heard it from someone. A neighbor, a brother-in-law, maybe an agent who wanted your
        listing. <em>Those cash buyers will lowball you.</em> It is the warning that hangs over every
        conversation about selling your home for cash, and honestly, it is worth taking seriously.
        Some offers are too low. Some companies do play games.
      </P>
      <P>
        But here is what almost nobody explains. There is a difference between an offer that is low and
        an offer that is fair, and once you understand how the number is actually built, you can tell
        them apart in about two minutes. So let us do that. No spin. We are going to show you exactly
        how the math works, where the word lowball gets thrown around unfairly, and where it is dead on.
      </P>

      <ArticleImage
        src="/images/adv-handshake.jpg"
        alt="A homeowner and a buyer shaking hands on a fair number"
        caption="A fair offer is not a feeling. It is a number you can see the parts of. That is the whole test."
      />

      <H2>What a fair cash offer is actually made of</H2>
      <P>
        Start with the one number everything hangs off: what your home would be worth after it is fixed
        up and ready to sell. Not as it sits today. As it would look with a fresh kitchen, a sound
        roof, new flooring, all of it. Call that the finished value.
      </P>
      <P>
        From there, a fair buyer subtracts three plain things. The cost of doing all that work. The
        cost of carrying the home while the work happens, things like taxes, insurance, and utilities.
        And a margin, because a company that takes on the risk and the cash has to make something or it
        stops existing. What is left over is your offer.
      </P>
      <P>
        That is the entire formula. Finished value, minus repairs, minus carrying costs, minus a fair
        margin. Nothing mysterious is happening behind a curtain. When someone calls a cash offer a
        lowball, what they usually mean is they were comparing your offer to that finished value, as if
        the repairs and the months of work were free. They are not free. Somebody pays for them. The
        only question is whether it is you, before the sale, or the buyer, after it.
      </P>

      <H2>Why the sticker price is the wrong thing to chase</H2>
      <P>
        Here is the trap most sellers fall into. They fixate on the highest possible number and forget
        to ask what they would actually keep. A listing might show a bigger headline price. Of course
        it might. But watch what happens to that number on the way to your bank account.
      </P>
      <UL>
        <li>You pay for repairs first, out of your own pocket, before a buyer ever shows up.</li>
        <li>You hand over five or six percent in commissions, off the top.</li>
        <li>You cover closing costs and concessions the buyer asks for.</li>
        <li>You keep paying the mortgage, taxes, and utilities for the two or three months it sits.</li>
        <li>And you carry the risk that the buyer's loan collapses and you start over.</li>
      </UL>
      <P>
        By the time all of that is paid, the gap between a listing and a clean cash sale is usually a
        lot smaller than the sticker prices made it look. <strong>The number that matters is not the
        one on the sign in the yard. It is the one that lands in your hands after everyone else takes
        their cut.</strong>
      </P>

      <ArticleImage
        src="/images/adv-numbers-table.jpg"
        alt="An older couple working through numbers at the kitchen table"
        caption="The honest comparison is net to net. What you keep from a listing, against what you keep from a cash sale."
      />

      <H2>So when is an offer actually a lowball?</H2>
      <P>
        We promised to be straight, so here is the other side. There are bad offers out there, and you
        should be able to name one. An offer is a genuine lowball when:
      </P>
      <UL>
        <li>The buyer cannot or will not show you how they got to the number.</li>
        <li>They quote repair costs that are wildly higher than any honest contractor would.</li>
        <li>They throw out a high number to lock you in, then slash it after a walk-through.</li>
        <li>They pressure you to sign today, before you can think or compare.</li>
      </UL>
      <P>
        Notice the pattern. A lowball is not just a smaller number. It is a number you are not allowed
        to understand. A fair buyer does the opposite. They walk you through the finished value, the
        repair estimate, and the margin out loud, and they let the number sit while you decide.
      </P>

      <H2>How to use this the next time someone makes you an offer</H2>
      <P>
        You do not have to take anyone's word for fair, including ours. Just ask the buyer to show
        their work. What do you think this home is worth fixed up? What repairs are you assuming, and
        what do they cost? A real buyer answers without flinching. A buyer who gets cagey just told you
        everything you need to know.
      </P>
      <P>
        At {config.companyName}, we would rather lose a deal than hide the math behind it. When we make
        you an offer, we show you the pieces. If the number does not work for you, you walk away
        knowing exactly why it was what it was, and you owe us nothing for the look. That is what a fair
        offer is supposed to feel like.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="See the number, and see how we got there"
        subheading="Text us the word OFFER or call. We will show you the math, with no cost and no obligation."
      />
    </ArticleShell>
  )
}
