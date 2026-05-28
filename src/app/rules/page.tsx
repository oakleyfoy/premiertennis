import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";

export const metadata: Metadata = {
  title: "PTL Rules & Competition Format",
  description:
    "The official PTL Rules page covering match format, lineup rules, scheduling, playoffs, and promotion/relegation for Founding Season competition.",
};

const rulesSections = [
  {
    letter: "A",
    id: "match-format-rules",
    eyebrow: "Match Format Rules",
    title: "Match Format Rules",
    intro:
      "Official PTL matches run on four simultaneous doubles lines and are valid only when the minimum completion conditions are met.",
    points: [
      "Exactly 4 doubles lines are played per team match.",
      "All 4 lines should begin within a 5-minute synchronization window.",
      "At least 3 of 4 lines must begin and complete validly for the match to stand.",
      "No-ad scoring applies to all games.",
      "Each line is best of 3 sets with standard 7-point tiebreaks at 6-6.",
      "If fewer than 3 lines are validly completed, the result becomes a full team default.",
    ],
  },
  {
    letter: "B",
    id: "lineup-rules",
    eyebrow: "Lineup Rules",
    title: "Lineup Rules",
    intro:
      "Lineups are submitted and locked through the PTL system before the match begins, then revealed simultaneously.",
    points: [
      "Captains submit exactly 4 doubles pairings before lineup lock.",
      "The PTL system validates duplicate players, eligibility, and roster compliance before accepting a lineup.",
      "Both teams lock at the same PTL-defined deadline and lineups reveal simultaneously.",
      "No edits are allowed after lock under normal conditions.",
      "Substitutions are only allowed before first serve for an approved emergency such as verified injury.",
      "Lineup disputes must be filed within 48 hours of match completion.",
    ],
  },
  {
    letter: "C",
    id: "scheduling-rules",
    eyebrow: "Scheduling Rules",
    title: "Scheduling Rules",
    intro:
      "PTL runs on a weekly match system with market-defined windows, home-team timing control inside those windows, and PTL override authority where needed.",
    points: [
      "Each team plays one official match per week unless PTL grants an exception.",
      "PTL defines approved weekly match windows for each market.",
      "Home teams choose the exact match time within the PTL-approved window.",
      "PTL controls the season calendar, buffer weeks, conflict resolution, and final scheduling authority.",
      "Rescheduling is permitted only for PTL-approved reasons such as weather, facility closure, or emergency.",
      "Buffer weeks exist to complete delayed fixtures without compromising competitive integrity.",
    ],
  },
  {
    letter: "D",
    id: "playoff-rules",
    eyebrow: "Playoff Rules",
    title: "Playoff Rules",
    intro:
      "Playoffs use the same base match format as the regular season, with qualification, seeding, and postseason tie resolution governed centrally by PTL.",
    points: [
      "Top 2 teams per division qualify in the base 8-team division model.",
      "Seeding is determined by points, head-to-head, wins, line differential, set differential, and game differential in that order.",
      "Higher seed hosts, subject to PTL-approved facilities and venue requirements.",
      "Playoff matches use the same 4-line doubles format, no-ad scoring, and best-of-3-set structure as the regular season.",
      "If a playoff ends 2-2, PTL activates the Golden Line: one pro set to 8, with a 7-point tiebreak at 7-7.",
      "PTL may delay seeding, review disputes, or override outcomes when competitive integrity is at risk.",
    ],
  },
  {
    letter: "E",
    id: "promotion-relegation-rules",
    eyebrow: "Promotion / Relegation Rules",
    title: "Promotion/Relegation Rules",
    intro:
      "Movement between divisions follows PTL's pyramid model, with automatic movement, playoff movement matches, and between-season resets.",
    points: [
      "Markets operate as stacked divisions built from 8-team blocks.",
      "Top teams promote automatically and bottom teams relegate automatically under PTL scaling rules.",
      "Additional movement matches may be used between the next-highest lower team and the lowest safe upper team.",
      "Season resets occur between seasons so divisions can be restructured and schedules regenerated cleanly.",
      "New teams enter at the bottom of the lowest division rather than being placed into upper tiers.",
      "PTL may rebalance divisions between seasons to preserve competitive integrity as markets scale.",
    ],
  },
] as const;

const governanceHighlights = [
  "Single source of truth for PTL competition rules",
  "Applies across match operations, scheduling, and movement",
  "Referenced by every system page instead of duplicated elsewhere",
] as const;

export default function RulesPage() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] py-16 text-[#111827] sm:py-20">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-court.jpeg"
          alt="Premier Tennis League court background"
          fill
          priority
          className="object-cover opacity-[0.1]"
        />
        <div className="absolute inset-0 bg-[#F7F5F0]/92" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <EditorialRule surface="light" align="start" />
          </div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A] sm:mt-6">
            Rules
          </p>
          <h1 className="mt-6 font-display text-[2.55rem] leading-[1.03] tracking-[-0.02em] text-[#111827] sm:text-[3.1rem] lg:text-[3.55rem]">
            PTL Rules &amp; Competition Format
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-[1.72] text-[#1F2933]/78 sm:text-[1.08rem]">
            This page is the official rules reference for PTL competition. Other
            pages summarize the system, but the rulebook governing match format,
            lineups, scheduling, playoffs, and movement lives here.
          </p>
        </div>

        <section className="mt-12 rounded-[24px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-6 py-7 shadow-[0_10px_34px_rgba(17,24,39,0.06),0_2px_10px_rgba(17,24,39,0.035)] sm:px-8 sm:py-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-x-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                System Of Record
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                The governance layer for PTL competition.
              </h2>
              <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-[1.76] text-[#1F2933]/84">
                Rules apply per PTL Rulebook. Match operations, lineup
                procedures, scheduling authority, postseason decisions, and
                division movement should be interpreted from this page as the
                governing layer of the PTL website.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {governanceHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-[#E7E2D8] bg-white px-4 py-4 shadow-[0_3px_12px_rgba(17,24,39,0.03)] sm:px-5"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8A96A]"
                      aria-hidden
                    />
                    <p className="text-[0.95rem] leading-[1.72] text-[#1F2933]/88">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#E5E1D8] bg-white/90 px-6 py-6 shadow-[0_8px_28px_rgba(17,24,39,0.05),0_2px_8px_rgba(17,24,39,0.03)] sm:px-8 sm:py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                Rule Index
              </p>
              <h2 className="mt-3 font-display text-[1.85rem] leading-[1.1] text-[#111827] sm:text-[2.05rem]">
                Jump directly to the rule section you need.
              </h2>
            </div>
            <p className="max-w-[24rem] text-sm leading-7 text-[#1F2933]/72 sm:text-right">
              Structured for quick scanning on desktop and mobile.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {rulesSections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="group rounded-[18px] border border-[#E7E2D8] bg-[#FBF8F1] px-4 py-4 shadow-[0_3px_12px_rgba(17,24,39,0.03)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#D8C28D] hover:bg-white hover:shadow-[0_8px_22px_rgba(17,24,39,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8C28D] bg-white text-[11px] font-semibold tracking-[0.08em] text-[#8C7341]">
                    {section.letter}
                  </div>
                  <p className="font-display text-[1.18rem] leading-tight text-[#111827] transition group-hover:text-[#0d1219]">
                    {section.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-6">
          {rulesSections.map((section) => (
            <section
              id={section.id}
              key={section.id}
              className="rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8 lg:px-10"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-x-10">
                <div className="lg:pt-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C28D] bg-[#FBF8F1] text-[11px] font-semibold tracking-[0.08em] text-[#8C7341]">
                      {section.letter}
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                      {section.eyebrow}
                    </p>
                  </div>
                  <h2 className="mt-5 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                    {section.title}
                  </h2>
                  <p className="mt-5 max-w-[28rem] text-[1rem] leading-[1.75] text-[#1F2933]/84">
                    {section.intro}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[16px] border border-[#E7E2D8] bg-[#FBF8F1] px-4 py-4 shadow-[0_3px_12px_rgba(17,24,39,0.03)] sm:px-5"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8A96A]"
                          aria-hidden
                        />
                        <p className="text-[0.96rem] leading-[1.72] text-[#1F2933]/88">
                          {point}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[24px] border border-[#2A3344] bg-[linear-gradient(180deg,#1a2332_0%,#141c29_100%)] px-6 py-8 text-center text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
            Next Step
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-tight text-white sm:text-[2.35rem]">
            Ready to enter the PTL system with the full rules in view?
          </h2>
          <p className="mx-auto mt-5 max-w-[38rem] text-[0.98rem] leading-8 text-white/82">
            Review the system layer here, then move into league structure or
            Founding Season application with the full rules context in place.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn-ptl-primary px-8 py-3">
              Apply for Founding Season
            </Link>
            <Link
              href="/league-structure"
              className="inline-flex min-h-9 items-center justify-center rounded-[11px] border border-white/20 bg-white/[0.05] px-8 py-3 text-center text-[13px] font-medium tracking-[0.02em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out hover:bg-white/[0.09]"
            >
              View League Structure
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
