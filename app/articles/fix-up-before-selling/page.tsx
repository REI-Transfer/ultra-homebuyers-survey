import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export default function Page() {
  return (
    <ArticleShell
      title="Should You Fix Up the House Before You Sell It? The Math Most Owners Get Wrong"
      dek="The gut instinct is to renovate first, then sell. Here is why that instinct quietly costs a lot of homeowners more than it ever earns them back."
      companyName={config.companyName}
    >
      <P>
        It feels like common sense. The house is dated, so before you sell it, you fix it up. New
        kitchen, fresh paint, maybe the bathrooms. Then it shows beautifully and you get top dollar.
        Everybody wins. That is the story most of us have in our heads.
      </P>
      <P>
        And for some homes, in some situations, it is exactly right. But for a great many homeowners,
        especially those past 55 sitting in a home that needs real work, that instinct leads straight
        into a trap. The renovate-then-sell plan can cost you money, time, and a great deal of stress
        you never had to spend. Let us walk through the math nobody does before they pick up a paintbrush.
      </P>

      <ArticleImage
        src="/images/adv-homeowner-repair.jpg"
        alt="An older homeowner looking up at a repair that needs doing"
        caption="Every repair you front comes out of your pocket now, on a promise of more money later that does not always show up."
      />

      <H2>You almost never get your money back dollar for dollar</H2>
      <P>
        Here is the first hard fact. Home improvements do not return what they cost. Spend twenty
        thousand on a kitchen and you do not add twenty thousand to the sale price. You add some
        fraction of it, often well under what you spent. The rest is simply gone. There are exceptions,
        but as a rule, you are paying a dollar to chase back maybe sixty or seventy cents.
      </P>
      <P>
        So the renovate-first plan starts from behind. You are spending real money today for a partial
        return later, and only if everything goes smoothly, which on an older home it rarely does.
      </P>

      <H2>The bills you forget to count</H2>
      <P>
        When people imagine fixing up the house, they picture the project cost. What they forget is
        everything that piles on around it.
      </P>
      <UL>
        <li>The repairs almost always run over budget once the walls are open and you find what is behind them.</li>
        <li>The timeline stretches, and every extra month is another mortgage payment, another tax bill, another round of utilities.</li>
        <li>Contractors on an older home turn up surprises. Old wiring, soft floors, a roof worse than it looked.</li>
        <li>You are living in a construction zone, or paying to live somewhere else while it happens.</li>
      </UL>
      <P>
        Add it all up and the true cost of fixing up before you sell is a good deal higher than the
        number on the contractor's first estimate. On an older home it can swallow the entire bump in
        sale price you were chasing.
      </P>

      <ArticleImage
        src="/images/adv-renovation.jpg"
        alt="A renovation in progress in an older home"
        caption="Once the walls come open, older homes have a habit of handing you a bigger bill than you signed up for."
      />

      <H2>The risk you take on for free</H2>
      <P>
        There is one more cost that never shows up in anyone's spreadsheet. Risk. When you spend your
        own money to fix up the house first, you are betting that the market holds, that the work comes
        out clean, and that a buyer shows up willing to pay the higher price. If any of those slips, you
        do not get a refund on the renovation. You just have a nicer house and a lighter bank account.
      </P>
      <P>
        For a younger household with savings to spare and time to absorb a setback, that bet can make
        sense. For someone on a fixed income, or anyone who needs this sale to go smoothly, taking on
        that risk to chase a partial return is a heavy thing to carry.
      </P>

      <H2>The version of the math that actually works</H2>
      <P>
        Here is the cleaner way to think about it. You do not have to choose between selling a tired
        home for nothing and pouring thousands into fixing it up. There is a third door. A cash buyer
        prices your home based on what it is worth fixed up, then does the fixing themselves on their
        own dime and their own risk.
      </P>
      <P>
        That means the value of the work still gets counted in your offer, but you never write the
        check, never manage the contractors, never live in the dust, and never carry the risk that it
        all goes sideways. You skip straight to the part you actually wanted: the money and the move-on.
      </P>

      <H2>So should you fix it up first?</H2>
      <P>
        If your home needs only light, cheap touches, and you have the time and stomach for it, a little
        spruce-up before a listing can pay off. But if it needs real work, the honest math usually says
        do not. The repairs cost more than they return, the timeline drags, and the risk is all yours.
      </P>
      <P>
        Before you spend a dollar on repairs, it is worth seeing what {config.companyName} would offer
        on the home exactly as it sits today. You may find the number, with zero out of pocket and zero
        hassle, makes the whole renovate-first plan look like a lot of work for very little gain.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="See your number before you spend a dime on repairs"
        subheading="Text us the word OFFER or call. We buy as-is, so the work is on us. No cost, no obligation."
      />
    </ArticleShell>
  )
}
