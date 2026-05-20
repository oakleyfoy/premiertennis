import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
import { captainSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Captain's Corner",
  description:
    "Guidance for captains preparing to build a team and lead it through Premier Tennis League.",
};

const captainChecklist = [
  "Identify the most dependable core of your roster",
  "Look for players who buy into a team-first model",
  "Plan for a fixed schedule and weekly availability",
  "Start organizing before launch markets are announced",
];

export default function CaptainsCornerPage() {
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-stretch">
          <section className="overflow-hidden rounded-[24px] border border-[#243043] bg-[linear-gradient(180deg,#1a2332_0%,#131b28_100%)] px-6 py-8 text-white shadow-[0_18px_54px_rgba(0,0,0,0.22)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="flex justify-start">
              <EditorialRule surface="dark" align="start" />
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DCC9A0]">
              Captain&apos;s Corner
            </p>
            <h1 className="mt-6 max-w-[24rem] font-display text-[2.45rem] leading-[1.03] tracking-[-0.02em] text-white sm:text-[3rem] lg:text-[3.45rem]">
              Build your team.
              <br />
              Commit to the season.
              <br />
              Earn your place.
            </h1>
            <p className="mt-6 max-w-[36rem] text-[1rem] leading-8 text-white/82 sm:text-[1.04rem]">
              Captains are the people who give PTL its structure. They shape the
              roster, set expectations, build reliability, and lead a team
              through a season where results have real consequence.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Roster", "Reliability", "Culture"].map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                    Captain Focus
                  </p>
                  <p className="mt-2 font-display text-[1.18rem] leading-tight text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
              The Captain&apos;s Role
            </p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.2rem]">
              Strong captains turn interest into a real team.
            </h2>
            <div className="mt-7 space-y-4">
              {captainChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-[#E7E2D8] bg-[#FBF8F1] px-4 py-4 shadow-[0_3px_12px_rgba(17,24,39,0.03)] sm:px-5"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8A96A]"
                      aria-hidden
                    />
                    <p className="text-[0.96rem] leading-[1.72] text-[#1F2933]/88">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-6 py-8 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                Captain Sequence
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                The three responsibilities every captain carries.
              </h2>
            </div>
            <p className="max-w-[20rem] text-sm leading-7 text-[#1F2933]/72 sm:text-right">
              Each stage builds trust before the first official match is ever
              played.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-4">
            {captainSteps.map((step) => (
              <section
                key={step.title}
                className="rounded-[18px] border border-[#E5E1D8] bg-white px-5 py-6 shadow-[0_6px_20px_rgba(17,24,39,0.06),0_1px_3px_rgba(17,24,39,0.04)]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                  {step.title}
                </p>
                <h3 className="mt-4 font-display text-[1.55rem] leading-[1.12] text-[#111827]">
                  {step.subtitle}
                </h3>
                <p className="mt-4 text-[0.96rem] leading-[1.74] text-[#1F2933]/86">
                  {step.description}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[24px] border border-[#243043] bg-[#111827] px-6 py-8 text-center shadow-[0_16px_46px_rgba(0,0,0,0.24)] sm:px-8 sm:py-9">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
            Captain Standard
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-tight text-white sm:text-[2.35rem]">
            Great captains organize early.
          </h2>
          <div className="mt-7">
            <Link href="/contact" className="btn-ptl-primary px-8 py-3">
              Contact PTL as a Captain
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
