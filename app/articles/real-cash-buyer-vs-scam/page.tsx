import { ArticleShell, H2, P, UL, ArticleImage } from "@/components/article/article-shell"
import { ContactCTA } from "@/components/article/contact-cta"
import config from "@/lib/config"

export default function Page() {
  return (
    <ArticleShell
      title="How to Tell a Real Cash Buyer From a Scam: Five Questions That Expose the Difference"
      dek="The model is honest. Some of the people using it are not. Here are five plain questions that flush out a bad actor before they can cost you anything."
      companyName={config.companyName}
    >
      <P>
        Selling your home for cash is a legitimate thing that honest companies do every day. But any
        time real money and trusting people meet, a few bad actors show up to take advantage,
        especially of older homeowners. That is not a reason to avoid cash buyers. It is a reason to
        know how to spot the rotten ones fast.
      </P>
      <P>
        The good news is that scammers and lazy operators all break in the same predictable places. You
        do not need to be an expert. You just need five questions and the nerve to ask them. A real
        buyer answers every one without blinking. A bad actor starts to squirm. Here they are.
      </P>

      <ArticleImage
        src="/images/adv-phone-vetting.jpg"
        alt="An older homeowner carefully vetting a buyer over the phone"
        caption="You do not need to outsmart anyone. You just need five plain questions and the willingness to ask them."
      />

      <H2>One: "Will you put the offer in writing?"</H2>
      <P>
        This is the fastest filter there is. A real buyer is happy to put the number and the terms on
        paper, in language you can read and hand to your family or an attorney. A scammer keeps
        everything verbal and exciting, because a written offer is a commitment they have no intention
        of honoring. If you cannot get it in writing, you do not have an offer. You have a sales pitch.
      </P>

      <H2>Two: "Do you ever ask me to pay anything up front?"</H2>
      <P>
        The answer from any honest buyer is a flat no. You should never pay an application fee, an
        inspection fee, a processing fee, or any charge at all simply to receive an offer or move
        toward closing. In a real sale, money flows to you. The moment someone asks you to send money,
        wire funds, or buy something first, the conversation is over. That is the single clearest sign
        of a scam, full stop.
      </P>

      <H2>Three: "Who actually handles the closing and the money?"</H2>
      <P>
        In a legitimate sale, a neutral third party handles the closing. A title company or a real
        estate attorney. They make sure the paperwork is right and the money moves correctly and
        safely. A real buyer names that third party without hesitation. A scammer wants to handle the
        money themselves, or routes you somewhere strange, because keeping a neutral party out of it is
        how they get their hands on your money or your home.
      </P>

      <ArticleImage
        src="/images/adv-paperwork-alone.jpg"
        alt="An older homeowner reviewing paperwork carefully"
        caption="A real closing runs through a neutral title company or attorney. Anyone trying to skip that step is the red flag."
      />

      <H2>Four: "Can I look you up and see your track record?"</H2>
      <P>
        A real buyer has bought homes before and leaves a trail you can follow. Reviews, a history of
        closings, a presence you can actually verify. They expect you to check and they welcome it. A
        scammer is allergic to scrutiny. The name is brand new, the reviews are thin or strange, and
        the details get vague the moment you start asking. Take the five minutes. The biggest asset you
        own deserves it.
      </P>

      <H2>Five: "What happens if I say no?"</H2>
      <P>
        This one tells you everything about how they operate. A real buyer says, plainly, that nothing
        happens. You owe nothing, there is no penalty, and there are no hard feelings. A scammer cannot
        stand the idea of you walking. So they pile on pressure. The offer expires today. You would be
        foolish to pass. Sign now before it is gone. Manufactured urgency aimed at an older homeowner is
        not a deadline. It is a trap, and the right move is to hang up.
      </P>

      <H2>Run the five questions on everyone, including us</H2>
      <P>
        Here is the reassuring part. These five questions do not just expose the bad actors. They make
        the honest buyers look even better, because the honest ones have been answering yes, plainly,
        the whole way down the list.
      </P>
      <UL>
        <li>Offer in writing? Yes.</li>
        <li>Anything up front? Never.</li>
        <li>Neutral title company or attorney handles closing? Yes.</li>
        <li>Look us up? Please do.</li>
        <li>What if you say no? Then nothing happens, and you owe us nothing.</li>
      </UL>
      <P>
        {config.companyName} answers every one of those the same way, every time. Ask us. We would much
        rather you check us out thoroughly and feel safe than rush into anything uneasy. That is exactly
        how a real cash buyer is supposed to behave.
      </P>

      <ContactCTA
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        smsKeyword={config.smsKeyword}
        heading="Ask us all five questions"
        subheading="Text us the word OFFER or call. Put us to the test. No cost, no obligation, nothing up front, ever."
      />
    </ArticleShell>
  )
}
