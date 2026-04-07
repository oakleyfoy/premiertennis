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
    <section className="relative overflow-hidden bg-[#f3f8fc] py-16 text-slate-900 sm:py-20">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-court.jpeg"
          alt="Premier Tennis League court background"
          fill
          priority
          className="object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-white/78" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="flex h-full flex-col gap-8">
            <div>
              <p className="font-display text-[2.7rem] leading-none tracking-[0.02em] text-[#0b1f57] uppercase sm:text-[3.6rem]">
                CONTACT
              </p>
              <h1 className="mt-5 max-w-2xl text-[1.35rem] font-semibold leading-tight text-slate-500 sm:text-[1.55rem]">
                Reach out if you want to follow the launch or bring PTL to your market.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                The league is still in its pre-launch phase. If you are interested
                as a captain, player, partner, or facility, this is the place to
                start the conversation.
              </p>
            </div>

            <section className="rounded-[1.7rem] bg-white px-8 py-8 shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
              <p className="text-sm font-semibold tracking-[0.22em] text-[#0b1f57] uppercase">
                Get in touch directly
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="mt-1 block text-xl font-semibold text-[#121826] transition hover:text-[#0b1f57]"
                  >
                    {contactDetails.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="mt-1 block text-xl font-semibold text-[#121826] transition hover:text-[#0b1f57]"
                  >
                    {contactDetails.phone}
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-auto rounded-[1.7rem] bg-white px-8 py-8 shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
              <p className="text-sm font-semibold tracking-[0.22em] text-[#0b1f57] uppercase">
                Common reasons to contact PTL
              </p>
              <div className="mt-5 space-y-3">
                {contactReasons.map((reason) => (
                  <p key={reason} className="text-lg leading-8 text-slate-600">
                    {reason}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-[1.7rem] bg-white px-8 py-8 shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70 lg:px-10 lg:py-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.22em] text-[#0b1f57] uppercase">
                Interest form
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-[#121826] sm:text-4xl">
                Submit your interest and keep your team or market on PTL&apos;s radar.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
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
