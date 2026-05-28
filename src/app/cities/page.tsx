import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
import { pilotCityDetails } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Cities",
  description:
    "Learn how PTL activates Founding Season markets through captain selection, evaluation weekends, and structured rollout readiness.",
};

const cityReadiness = [
  "Committed captains in the region who can lead Founding Season teams",
  "Validated player pools that can support competitive team depth",
  "Facility readiness for PTL match operations",
  "Evaluation weekend participation capacity before season start",
];

const nextSteps = [
  "Identify captains ready to apply during the June 1 - July 10 window",
  "Confirm players who can participate in Evaluation Weekends (Aug 1 - 9)",
  "Show that facilities and team infrastructure are ready for activation",
];

const marketActivationSteps = [
  "Applications open (June 1 - July 10)",
  "Captain vetting (July 12 - 16)",
  "Captain selection (July 17)",
  "Evaluation weekends (Aug 1 - 9)",
  "Division assignment (Aug 10 - 13)",
  "Market activation (Aug 24 - 30 season start)",
];

export default function CitiesPage() {
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

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <EditorialRule surface="light" align="start" />
          </div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A] sm:mt-6">
            Cities
          </p>
          <h1 className="mt-6 font-display text-[2.55rem] leading-[1.03] tracking-[-0.02em] text-[#111827] sm:text-[3.1rem] lg:text-[3.55rem]">
            PTL launch markets are activated through real demand and structured
            evaluation.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-[1.72] text-[#1F2933]/78 sm:text-[1.1rem]">
            PTL operates through 8 Founding Season markets: 4 Florida regions
            and 4 national regions. These markets are activated through
            evaluation weekends and captain selection.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-x-8">
          <section className="rounded-[24px] border border-[#243043] bg-[linear-gradient(180deg,#1a2332_0%,#131b28_100%)] px-6 py-8 text-white shadow-[0_18px_54px_rgba(0,0,0,0.22)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
              Pilot City Rollout
            </p>
            <h2 className="mt-5 max-w-[24rem] font-display text-[2rem] leading-[1.08] text-white sm:text-[2.3rem] lg:text-[2.6rem]">
              Founding Season markets follow a fixed activation model.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pilotCityDetails.map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <p className="text-sm leading-6 text-white/88">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
              8-Market Structure
            </p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.2rem]">
              Four Florida regions and four national regions make up the
              Founding Season footprint.
            </h2>
            <p className="mt-5 text-[1rem] leading-[1.75] text-[#1F2933]/84">
              Activation is decided inside that defined footprint through the
              captain selection and evaluation process.
            </p>
            <div className="mt-7">
              <Link href="/rules#scheduling-rules" className="btn-ptl-secondary">
                Market Activation Rules
              </Link>
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-6 py-8 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                How PTL Markets Are Activated
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                Markets move through a fixed Founding Season rollout pipeline.
              </h2>
            </div>
            <p className="max-w-[26rem] text-sm leading-7 text-[#1F2933]/72 sm:text-right">
              Markets are not chosen by interest alone. They are activated
              through structured evaluation and team formation.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {marketActivationSteps.map((item, index) => (
              <section
                key={item}
                className="rounded-[18px] border border-[#E5E1D8] bg-white px-5 py-6 shadow-[0_6px_20px_rgba(17,24,39,0.06),0_1px_3px_rgba(17,24,39,0.04)]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-[0.98rem] leading-[1.72] text-[#1F2933]/88">
                  {item}
                </p>
              </section>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
          <section className="rounded-[22px] border border-[#E5E1D8] bg-white px-6 py-7 shadow-[0_8px_28px_rgba(17,24,39,0.07),0_2px_8px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
              Launch Readiness
            </p>
            <h2 className="mt-4 font-display text-[1.9rem] leading-[1.08] text-[#111827] sm:text-[2.1rem]">
              What helps a city become launch-ready
            </h2>
            <div className="mt-7 space-y-4">
              {cityReadiness.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8A96A]"
                    aria-hidden
                  />
                  <p className="text-[0.98rem] leading-[1.74] text-[#1F2933]/88">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-full w-[72px] flex-col items-center justify-center">
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#C8A96A]/45 to-transparent" />
              <div className="my-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#D8C28D] bg-[#FBF8F1] font-display text-[1.1rem] text-[#8C7341]">
                PTL
              </div>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#C8A96A]/45 to-transparent" />
            </div>
          </div>

          <section className="rounded-[22px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-6 py-7 shadow-[0_8px_28px_rgba(17,24,39,0.07),0_2px_8px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
              What to Do Now
            </p>
            <h2 className="mt-4 font-display text-[1.9rem] leading-[1.08] text-[#111827] sm:text-[2.1rem]">
              How to support market activation in your region
            </h2>
            <div className="mt-7 space-y-4">
              {nextSteps.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8A96A]"
                    aria-hidden
                  />
                  <p className="text-[0.98rem] leading-[1.74] text-[#1F2933]/88">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 text-center">
          <p className="mx-auto max-w-3xl text-[0.98rem] leading-[1.74] text-[#1F2933]/82">
            Market operations follow PTL Rules &amp; Competition Format.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn-ptl-primary px-8 py-3">
              Apply for Founding Season
            </Link>
            <Link href="/rules#scheduling-rules" className="btn-ptl-secondary px-8 py-3">
              Market Activation Rules
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
