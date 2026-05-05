import type { Metadata } from "next";
import Image from "next/image";

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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-12">
          <div className="flex h-full flex-col gap-8">
            <div>
              <p className="font-display text-[2.5rem] leading-none tracking-[0.02em] text-[#111827] uppercase sm:text-[3.15rem]">
                CONTACT
              </p>
              <h1 className="mt-5 max-w-2xl text-[1.25rem] font-medium leading-snug text-[#1F2933]/78 sm:text-[1.45rem]">
                Reach out if you want to follow the launch or bring PTL to your market.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#1F2933]/85">
                The league is still in its pre-launch phase. If you are interested
                as a captain, player, partner, or facility, this is the place to
                start the conversation.
              </p>
            </div>

            <section className="ptl-rule-card">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Get in touch directly
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-[#1F2933]/55">Email</p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="mt-1 block text-xl font-semibold text-[#111827] transition hover:text-[#C8A96A]"
                  >
                    {contactDetails.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-[#1F2933]/55">Phone</p>
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="mt-1 block text-xl font-semibold text-[#111827] transition hover:text-[#93D0FF]"
                  >
                    {contactDetails.phone}
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-auto ptl-rule-card">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Common reasons to contact PTL
              </p>
              <div className="mt-5 space-y-3">
                {contactReasons.map((reason) => (
                  <p key={reason} className="text-lg leading-8 text-[#1F2933]/85">
                    {reason}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <section className="ptl-rule-card lg:px-10 lg:py-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Interest form
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-[#111827] sm:text-4xl">
                Submit your interest and keep your team or market on PTL&apos;s radar.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#1F2933]/85">
                Tell PTL a little about your interest, your city, or the kind of
                team or partnership you want to build.
              </p>
            </div>

            <div className="mt-8">
              <InterestForm />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
