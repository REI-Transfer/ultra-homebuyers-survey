import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export default function Page() {
  return (
    <ArticleShell
      title="How to Spot a Real Local Home Buyer From a Tire-Kicker in About Five Minutes"
      dek="Not everyone who says they buy houses for cash actually does. Here is a simple five-point check that sorts the real ones from the time-wasters."
      companyName={config.companyName}
    >
      <P>
        Once you start looking into selling for cash, your phone will not stay quiet for long. The
        letters, the postcards, the calls. They all say more or less the same thing, and they all
        sound equally confident. The hard part is not finding someone who claims to buy houses. The
        hard part is figuring out which of them can actually close.
      </P>
      <P>
        Because here is the uncomfortable truth. A lot of the people sending those letters are not
        buyers at all. They are middlemen hoping to tie up your home under contract and then scramble
        to find someone with real money to take it off their hands. If they cannot, the deal dies, and
        you have lost weeks. So before you let anyone get attached to your home, run them through this.
        It takes about five minutes and it will save you a world of grief.
      </P>

      <ArticleImage
        src="/images/adv-local-team.jpg"
        alt="A friendly local home buyer on the porch of an older home"
        caption="A real buyer is easy to check. They have a track record, a local footprint, and nothing to dodge."
      />

      <H2>One: Ask where their money comes from</H2>
      <P>
        This is the question that ends most of these conversations fast. A real buyer pays with their
        own funds or a lender they have lined up, and they can tell you so plainly. A tire-kicker gets
        vague. They start talking about their network, their investors, their partners. Translation:
        they do not have the money themselves and are hoping to find it after you sign.
      </P>
      <P>
        Ask it straight. Are you the one buying my home, or are you going to assign this contract to
        someone else? A buyer with nothing to hide answers in one sentence.
      </P>

      <H2>Two: Look for a local track record</H2>
      <P>
        A genuine buyer has bought homes before, and you can find the evidence. Reviews from real
        sellers. A history of closings. A presence you can actually look up. A tire-kicker is usually
        brand new, all enthusiasm and no closings, or hiding behind a name with no trail at all.
      </P>
      <P>
        You are not being rude by checking. You are being smart. The biggest asset you own is on the
        table. A real buyer expects you to look them up and welcomes it.
      </P>

      <ArticleImage
        src="/images/adv-phone-vetting.jpg"
        alt="An older homeowner carefully vetting a buyer on the phone"
        caption="Five plain questions on a single phone call will tell you almost everything you need to know."
      />

      <H2>Three: See if the offer survives a real look at the home</H2>
      <P>
        Here is the classic tire-kicker move. A big, exciting number over the phone to get you hooked,
        then a sharp cut once they have actually seen the place or once you feel committed. A real
        buyer gives you a number they can stand behind, and they only adjust it for something they
        genuinely could not have known, never as a tactic to grind you down at the table.
      </P>
      <P>
        If the number drops for no clear reason, that is not a buyer. That is a negotiator who was
        never honest with you to begin with.
      </P>

      <H2>Four: Watch how they handle your timeline</H2>
      <P>
        A real buyer asks when you want to close and works around your answer. Two weeks, two months,
        whatever fits your life. A tire-kicker pushes hard for speed in one direction, usually
        pressuring you to sign immediately, because their whole plan depends on locking you up before
        you can talk to anyone else.
      </P>
      <UL>
        <li>A real buyer: "When works for you? We will build the closing around that."</li>
        <li>A tire-kicker: "This offer is only good if you sign today."</li>
      </UL>

      <H2>Five: Notice whether they put it in writing</H2>
      <P>
        Talk is cheap. A real buyer puts the offer in writing, in plain terms you can read and show to
        your family or an attorney. A tire-kicker keeps everything verbal and exciting, because a
        written offer is a commitment, and commitment is the one thing they cannot make.
      </P>
      <P>
        If you cannot get the number on paper, you do not have an offer. You have a conversation
        someone is hoping turns into one.
      </P>

      <H2>Run the check before you get attached</H2>
      <P>
        None of this means every cash buyer is a fraud. Plenty are exactly what they say they are. The
        point is simply that you should never have to take it on faith. Five questions, five minutes,
        and the real buyers come out the other side looking even better, because they had nothing to
        hide in the first place.
      </P>
      <P>
        {config.companyName} buys with our own funds, closes on your timeline, and puts every offer in
        writing. Run us through the same five questions you would ask anyone. We would rather you check
        and feel sure than sign and feel uneasy.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Put us through the five-minute test"
        subheading="Text us the word OFFER or call. Ask us anything. No cost, no obligation, no games."
      />
    </ArticleShell>
  )
}
