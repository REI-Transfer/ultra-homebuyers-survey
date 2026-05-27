import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export default function Page() {
  return (
    <ArticleShell
      title="Why Not Just Sell It Yourself and Skip the Middleman? The Hidden Cost of Going It Alone"
      dek="Selling on your own sounds like keeping every dollar for yourself. Here is what it really takes, and the places it tends to go sideways."
      companyName={config.companyName}
    >
      <P>
        It is a fair question, and a smart-sounding one. If agents take five or six percent, and cash
        buyers build in a margin, why not cut everyone out, sell the home yourself, and keep the whole
        pile? On paper, for sale by owner looks like the move that saves you the most money.
      </P>
      <P>
        And sometimes it is. People do sell their own homes successfully. But the do-it-yourself plan
        carries costs that do not show up until you are already deep into it, and for an older homeowner
        with a home that needs work, those costs can quietly outweigh everything you set out to save.
        Let us walk through what going it alone actually involves before you commit to it.
      </P>

      <ArticleImage
        src="/images/adv-frustrated-laptop.jpg"
        alt="An older homeowner looking overwhelmed while trying to sell the home alone"
        caption="Selling solo means becoming the agent, the marketer, the negotiator, and the scheduler, all at once."
      />

      <H2>You become every job at once</H2>
      <P>
        When you sell on your own, every task an agent normally handles lands on you. Pricing the home
        correctly. Photographing it so it shows well. Listing it where buyers actually look. Answering
        every call and message. Scheduling and hosting showings. Screening who is serious and who is
        just curious. Then the negotiating, the contracts, the disclosures, and the closing paperwork.
      </P>
      <P>
        None of that is impossible. But it is a real job, and it does not pause for your life. For
        someone past 55 who wanted selling to mean less stress, not more, taking on a second unpaid job
        is a heavy way to save a commission.
      </P>

      <H2>The strangers problem is bigger on your own</H2>
      <P>
        With a listing, at least an agent stands between you and the parade of strangers. On your own,
        there is no buffer. You are the one opening your door to people you have never met, walking them
        through your home, and trusting that they are who they say they are. For many older homeowners,
        especially those living alone, that alone is reason enough to think twice.
      </P>

      <ArticleImage
        src="/images/adv-strangers-open-house.jpg"
        alt="Strangers touring a home being sold by the owner"
        caption="Sell it yourself and there is no one standing between you and every stranger who wants a look inside."
      />

      <H2>Where the savings quietly disappear</H2>
      <P>
        Here is the part that surprises people. The commission you save is often eaten up by the things
        you did not see coming.
      </P>
      <UL>
        <li>Homes sold by owner frequently sell for less, because most buyers come with their own agent expecting a discount for the saved commission.</li>
        <li>Pricing it wrong, too high or too low, costs more than any commission would have.</li>
        <li>A mistake in the contract or the disclosures can turn into a legal headache long after closing.</li>
        <li>Every month it sits unsold while you learn on the job is another mortgage, tax, and utility bill.</li>
      </UL>
      <P>
        Add it up and going it alone often nets you less than you imagined, after far more work and far
        more risk. The middleman you cut out was, in a lot of cases, doing things that quietly protected
        your number.
      </P>

      <H2>If the goal is simple and clean, there is a better door</H2>
      <P>
        Step back and ask what you actually wanted from selling it yourself. Usually it is two things. To
        keep more of the money, and to stay in control of the process. A cash sale gives you both,
        without the second job.
      </P>
      <P>
        With a cash buyer you pay no commission and no closing costs, so the savings you were chasing are
        already there. And you stay in control of the timeline, the closing date, and the decision, with
        none of the marketing, the showings, the strangers, or the paperwork landing on your shoulders.
        It is the keep-more-and-stay-in-control plan, minus the part where you do all the work and carry
        all the risk yourself.
      </P>

      <H2>So should you sell it yourself?</H2>
      <P>
        If your home is in good shape, you enjoy the process, and you have the time and energy for it,
        for sale by owner can work. But if the home needs work, or you simply want this handled without
        turning your life upside down, the do-it-yourself savings tend to be smaller and the cost higher
        than they first appear.
      </P>
      <P>
        Before you take it all on yourself, see what {config.companyName} would pay for the home as-is,
        with no commission, no closing costs, and none of the work on you. You may find it delivers the
        very thing you were trying to build alone, without the second job attached.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Keep more, without doing it all yourself"
        subheading="Text us the word OFFER or call. No commission, no closing costs, no second job. No cost, no obligation."
      />
    </ArticleShell>
  )
}
