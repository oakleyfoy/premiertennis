import type { Metadata } from "next";
import Image from "next/image";

import { EditorialRule } from "@/components/editorial-rule";
import { InterestForm } from "@/components/interest-form";
import { contactDetails } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Premier Tennis League to ask about launch markets, future teams, and partnership opportunities.",
};

const contactReasons = [
  "Start organizing a team for a future pilot city",
  "Ask about launch timing and upcoming market announcements",
  "Discuss partnerships, facilities, or local interest",
];

export default function ContactPage() {
  const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY ?? "";

  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] py-16 text-[#111827] sm:py-20">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-court.jpeg"
          alt="Premier Tennis League court background"
          fill
          priority
          className="object-cover opacity-[0.11]"
        />
        <div className="absolute inset-0 bg-[#F7F5F0]/91" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start lg:gap-x-10">
          <aside className="overflow-hidden rounded-[24px] border border-[#243043] bg-[linear-gradient(180deg,#1a2332_0%,#131b28_100%)] px-6 py-8 text-white shadow-[0_18px_54px_rgba(0,0,0,0.22)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="flex justify-start">
              <EditorialRule surface="dark" align="start" />
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DCC9A0]">
              Contact
            </p>
            <h1 className="mt-6 max-w-[24rem] font-display text-[2.35rem] leading-[1.04] tracking-[-0.02em] text-white sm:text-[2.85rem] lg:text-[3.2rem]">
              Reach out if you want to help shape PTL&apos;s launch.
            </h1>
            <p className="mt-6 max-w-[36rem] text-[1rem] leading-8 text-white/84 sm:text-[1.04rem]">
              The league is still in its pre-launch phase. If you are interested
              as a captain, player, partner, or facility, this is the place to
              start the conversation.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                  Email
                </p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-2 block text-[1rem] font-semibold text-white transition hover:text-[#93D0FF]"
                >
                  {contactDetails.email}
                </a>
              </div>
              <div className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                  Phone
                </p>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="mt-2 block text-[1rem] font-semibold text-white transition hover:text-[#DCC9A0]"
                >
                  {contactDetails.phone}
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                Common Reasons to Contact PTL
              </p>
              <div className="mt-5 space-y-4">
                {contactReasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <div
                      className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#DCC9A0]"
                      aria-hidden
                    />
                    <p className="text-[0.96rem] leading-[1.72] text-white/84">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 shadow-[0_12px_38px_rgba(17,24,39,0.08),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="max-w-2xl">
              <div className="flex justify-start">
                <EditorialRule surface="light" align="start" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Interest Form
              </p>
              <h2 className="mt-4 font-display text-[2.2rem] leading-[1.08] text-[#111827] sm:text-[2.65rem]">
                Submit your interest and keep your team or market on PTL&apos;s
                radar.
              </h2>
              <p className="mt-5 max-w-[42rem] text-base leading-8 text-[#1F2933]/85">
                Tell PTL a little about your interest, your city, or the kind of
                team or partnership you want to build.
              </p>
            </div>

            <div className="mt-8 rounded-[18px] border border-[#EEE8DE] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-4 py-4 sm:px-5 sm:py-5">
              <InterestForm recaptchaSiteKey={recaptchaSiteKey} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
