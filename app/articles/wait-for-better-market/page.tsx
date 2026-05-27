import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export default function Page() {
  return (
    <ArticleShell
      title="Is Now a Bad Time to Sell? Why Waiting for a Better Market Can Quietly Cost You"
      dek="Holding out for a higher price feels patient and smart. Here is the price tag the waiting itself carries, the one nobody adds up."
      companyName={config.companyName}
    >
      <P>
        It is one of the most natural thoughts in the world. Maybe I should just wait. Wait for prices
        to climb, wait for the right season, wait until the market feels friendlier. Hold the home a
        little longer and sell it for more. On the surface, that sounds like patience, and patience
        usually sounds wise.
      </P>
      <P>
        But waiting is not free, and that is the part the patient plan always leaves out. Every month
        you hold a home you are ready to be done with, the home keeps charging you, in money and in
        other ways that are harder to see. Before you decide to wait, it is worth tallying up what the
        waiting actually costs. The number tends to surprise people.
      </P>

      <ArticleImage
        src="/images/adv-couple-window.jpg"
        alt="An older couple looking out the window of their longtime home, weighing whether to wait"
        caption="Waiting feels like doing nothing. But the home keeps running a meter the whole time you hold it."
      />

      <H2>Nobody actually knows where the market goes next</H2>
      <P>
        Start with the honest truth that no one will tell you, because it does not sell anything.
        Nobody knows where home prices go from here. Not the experts, not the headlines, not your
        neighbor who follows it closely. The market might rise next year. It might not. It might do the
        opposite. Anyone who promises you it will be higher later is guessing, and they are guessing
        with your asset and your time, not theirs.
      </P>
      <P>
        So waiting for a better market is not a plan. It is a bet on a coin flip you cannot see. You
        might win it. You might also hold for two years, watch values dip, and end up selling for less
        than you could have today, having paid for the privilege of waiting the whole time.
      </P>

      <H2>The meter that runs the whole time you hold</H2>
      <P>
        Here is the cost people forget. While you wait, the home keeps billing you every single month,
        whether prices move or not.
      </P>
      <UL>
        <li>Property taxes, due like clockwork no matter what the market does.</li>
        <li>Homeowner's insurance, which on an older home keeps creeping up.</li>
        <li>Utilities and basic upkeep, just to keep the place from sliding backward.</li>
        <li>Repairs, because an older home does not pause its aging while you wait for a better price.</li>
      </UL>
      <P>
        Add those up over a year or two of waiting and it is real money, often many thousands of
        dollars. For that bet on higher prices to pay off, the market has to climb enough to cover all
        of that carrying cost first, and then some, just to put you back where you started. That is a
        steeper hill than it looks.
      </P>

      <ArticleImage
        src="/images/adv-homeowner-repair.jpg"
        alt="An older home showing its age while the owner waits to sell"
        caption="An older home keeps aging on its own schedule. The longer you hold, the more it tends to ask of you."
      />

      <H2>The cost you cannot put a number on</H2>
      <P>
        Then there is the part that never lands on a spreadsheet, and often matters most. Time. If you
        are past 55 and ready to move on, to be nearer family, to shed the upkeep, to lift the worry,
        then a year spent waiting on the market is a year of your life spent maintaining a house you
        were already done with.
      </P>
      <P>
        That is the quiet cost of waiting. Not just the taxes and the insurance, but the months you do
        not get back, lived in limbo, waiting on a number that may never come. For a lot of homeowners,
        once they weigh it honestly, the freedom of being done is worth more than the maybe of a
        slightly higher price down the road.
      </P>

      <H2>How to decide without guessing the market</H2>
      <P>
        You do not have to predict anything. Just compare two real things. What you can get for the home
        today, clean and certain, against the gamble of holding it, paying to carry it, and hoping the
        market is kinder later.
      </P>
      <P>
        Get a real cash number from {config.companyName} on the home as it sits right now. With that
        number in hand, the choice gets clear. If selling today and being free of the place is worth
        more to you than a coin flip on next year's prices, you have your answer, and it cost you
        nothing to find it.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="See today's number before you decide to wait"
        subheading="Text us the word OFFER or call. Weigh a sure thing now against a maybe later. No cost, no obligation."
      />
    </ArticleShell>
  )
}
