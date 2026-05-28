import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
import { leaguePillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Play",
  description:
    "Learn how play works in the PTL Founding Season, from evaluation-based entry and division assignment to weekly matches, standings, and earned movement.",
};

const playHighlights = [
  leaguePillars[0],
  leaguePillars[1],
  {
    title: "Weekly Team Matches",
    description:
      "Teams play a fixed weekly schedule inside a defined season after evaluation and division assignment are complete. There is no casual drop-in model and no flexible reshuffling week to week.",
  },
  {
    title: "Meaningful Standings",
    description:
      "Wins, losses, and ties shape the table over time. Every line matters, and every result contributes to where your team finishes.",
  },
];

const foundingSeasonAssignment = [
  "Captains apply during the application window",
  "Teams participate in Evaluation Weekends (Aug 1 - 9)",
  "PTL evaluates performance and structure",
  "Divisions are assigned after evaluation completes",
  "Season begins only after assignments are finalized",
] as const;

const playSeasonFlow = [
  {
    step: "01",
    title: "Apply + Evaluation Participation",
    description:
      "Captains apply to enter the Founding Season, and teams are evaluated and finalized during Founding Season evaluation weekends before division assignment.",
  },
  {
    step: "02",
    title: "Division Assignment",
    description:
      "PTL reviews evaluation results and assigns final divisions. Teams are not placed into final divisions at signup.",
  },
  {
    step: "03",
    title: "Play the Season",
    description:
      "Once assignments are finalized, teams enter the fixed 14-week competitive schedule and play weekly matches inside their division.",
  },
  {
    step: "04",
    title: "Standings Drive Movement",
    description:
      "Wins, losses, and ties shape the table over the season. Promotion and relegation are earned through results on the court.",
  },
] as const;

export default function PlayPage() {
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
            Play
          </p>
          <h1 className="mt-6 font-display text-[2.55rem] leading-[1.03] tracking-[-0.02em] text-[#111827] sm:text-[3.15rem] lg:text-[3.7rem]">
            Structured team tennis,
            <br />
            played as a real season.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-[1.72] text-[#1F2933]/78 sm:text-[1.12rem]">
            Evaluation-based entry. Division assignment before play. A fixed
            14-week season earned through performance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start lg:gap-x-8">
          <section className="overflow-hidden rounded-[24px] border border-[#243043] bg-[linear-gradient(180deg,#1a2332_0%,#131b28_100%)] px-6 py-8 text-white shadow-[0_18px_54px_rgba(0,0,0,0.22)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
              How Play Works
            </p>
            <h2 className="mt-5 max-w-[20rem] font-display text-[2rem] leading-[1.08] text-white sm:text-[2.3rem] lg:text-[2.6rem]">
              Teams enter a structured Founding Season system where placement is
              determined through evaluation before the season begins, followed by
              a fixed 14-week competitive schedule.
            </h2>
            <p className="mt-6 max-w-[38rem] text-[1rem] leading-8 text-white/84 sm:text-[1.03rem]">
              PTL Founding Season uses evaluation weekends to determine initial
              division placement before the season begins. Teams are finalized
              only after this process.
            </p>
            <p className="mt-5 max-w-[38rem] rounded-[16px] border border-white/12 bg-white/[0.05] px-4 py-4 text-[0.95rem] leading-7 text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              Captains apply to enter Founding Season, team composition is
              validated during evaluation weekends, and final divisions are
              assigned after evaluation results are reviewed.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Evaluation before placement",
                "14-week fixed schedule",
                "Standings shape movement",
              ].map((item) => (
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
              What Defines Play
            </p>
            <div className="mt-6 divide-y divide-[#EEE8DE]">
              {playHighlights.map((item) => (
                <article key={item.title} className="py-5 first:pt-0 last:pb-0">
                  <h2 className="font-display text-[1.55rem] leading-[1.14] text-[#111827] sm:text-[1.72rem]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-[34rem] text-[0.98rem] leading-[1.74] text-[#1F2933]/84">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-8 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                How Teams Are Assigned in Founding Season
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                Evaluation determines placement before the season begins.
              </h2>
            </div>
            <p className="max-w-[22rem] text-sm leading-7 text-[#1F2933]/72 sm:text-right">
              Teams are not finalized into divisions at signup.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5 lg:gap-4">
            {foundingSeasonAssignment.map((item, index) => (
              <section
                key={item}
                className="rounded-[18px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-5 py-6 shadow-[0_6px_20px_rgba(17,24,39,0.06),0_1px_3px_rgba(17,24,39,0.04)]"
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

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-6 py-8 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                Season Flow
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                A four-stage path from Founding Season entry to earned movement.
              </h2>
            </div>
            <p className="max-w-[20rem] text-sm leading-7 text-[#1F2933]/72 sm:text-right">
              Every stage builds on the last, beginning with evaluation-based
              entry before season play starts.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4 lg:gap-4">
            {playSeasonFlow.map((item, index) => (
              <div key={item.step} className="relative">
                {index < playSeasonFlow.length - 1 ? (
                  <div
                    className="pointer-events-none absolute top-4 right-0 hidden h-px w-[calc(100%-2.5rem)] translate-x-1/2 bg-gradient-to-r from-[#C8A96A]/45 to-transparent lg:block"
                    aria-hidden
                  />
                ) : null}
                <section className="relative h-full rounded-[18px] border border-[#E5E1D8] bg-white px-5 py-6 shadow-[0_6px_20px_rgba(17,24,39,0.06),0_1px_3px_rgba(17,24,39,0.04)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8C28D] bg-[#FBF8F0] text-[11px] font-semibold tracking-[0.08em] text-[#8C7341]">
                      {item.step}
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                      Stage
                    </p>
                  </div>
                  <h3 className="mt-5 font-display text-[1.48rem] leading-[1.12] text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.72] text-[#1F2933]/86">
                    {item.description}
                  </p>
                </section>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 text-center shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
            Competitive Standard
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.35rem]">
            Enter through evaluation. Earn your place through results.
          </h2>
          <div className="mt-7">
            <Link href="/contact" className="btn-ptl-primary px-8 py-3">
              Apply for Founding Season
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
