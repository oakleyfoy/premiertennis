import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
import { leagueStructure } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "League Structure",
  description:
    "See how the PTL Founding Season is structured, from evaluation-based placement and division assignment to season format, scoring, and movement.",
};

function DownCircleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-9 w-9 text-[#C8A96A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v7" />
      <path d="m8.8 11.8 3.2 3.2 3.2-3.2" />
    </svg>
  );
}

function StructureList({ points }: { points: string[] }) {
  return (
    <div className="space-y-3.5">
      {points.map((point) => (
        <div key={point} className="flex items-start gap-3">
          <div
            className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8A96A]"
            aria-hidden
          />
          <p className="text-[0.95rem] leading-[1.72] text-[#1F2933]/92 sm:text-[1rem]">
            {point}
          </p>
        </div>
      ))}
    </div>
  );
}

function StructureCard({
  title,
  points,
  summary,
  className = "",
}: {
  title: string;
  points: string[];
  summary?: string;
  className?: string;
}) {
  return (
    <section
      className={`rounded-[22px] border border-[#E5E1D8] bg-white px-6 py-7 shadow-[0_8px_28px_rgba(17,24,39,0.08),0_2px_8px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8 ${className}`}
    >
      <h2 className="font-display text-[1.85rem] leading-[1.08] text-[#111827] sm:text-[2.05rem]">
        {title}
      </h2>
      <div className="mt-6">
        <StructureList points={points} />
      </div>
      {summary ? (
        <p className="mt-6 text-[0.98rem] font-semibold leading-[1.7] text-[#111827]">
          {summary}
        </p>
      ) : null}
    </section>
  );
}

export default function LeagueStructurePage() {
  const seasonLength = leagueStructure[0];
  const teamsAndDivisions = leagueStructure[1];
  const openingWeekend = leagueStructure[2];

  return (
    <>
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
          <div className="mx-auto max-w-[68rem] text-center">
            <div className="flex justify-center">
              <EditorialRule surface="light" align="start" />
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C8A96A] sm:mt-6">
              League Structure
            </p>
            <h1 className="mt-6 font-display text-[2.45rem] leading-[1.04] tracking-[-0.02em] text-[#111827] sm:text-[3.1rem] lg:text-[3.6rem]">
              PTL Founding Season Structure (Fall 2026)
            </h1>
            <p className="mt-5 max-w-4xl mx-auto text-[1rem] leading-[1.75] text-[#1F2933]/78 sm:text-[1.08rem]">
              This structure applies only to the Founding Season. Future PTL
              seasons will operate without evaluation-based placement.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-[68rem] space-y-10 sm:mt-18 lg:mt-20">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Founding Season Only",
                "Evaluation Before Placement",
                "Full 14-Week Season",
                "Earned Promotion & Relegation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-[#E5E1D8] bg-white/85 px-5 py-4 text-center shadow-[0_3px_14px_rgba(17,24,39,0.04)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                    Structure
                  </p>
                  <p className="mt-2 font-display text-[1.28rem] leading-tight text-[#111827]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <section className="grid gap-6 rounded-[24px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-6 py-7 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:px-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                  Season Format Overview
                </p>
                <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                  A Founding Season structure built around evaluation, placement,
                  and earned movement.
                </h2>
                <p className="mt-5 max-w-[42rem] text-[1rem] leading-[1.75] text-[#1F2933]/86 sm:text-[1.03rem]">
                  This page covers the season-level operating format for Fall
                  2026. Official competition mechanics live in the PTL Rulebook.
                </p>
              </div>
              <div className="rounded-[18px] border border-[#E3DDD1] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(17,24,39,0.045)] sm:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                  Founding Season Note
                </p>
                <p className="mt-3 font-display text-[1.45rem] leading-[1.22] text-[#111827]">
                  PTL uses a one-time evaluation system in 2026 to establish
                  competitive divisions. This ensures balanced league structure
                  from the Founding Season onward.
                </p>
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-2">
              <StructureCard
                title={seasonLength.title}
                points={seasonLength.points}
              />
              <StructureCard
                title="Teams & Divisions (Founding Season Baseline)"
                points={teamsAndDivisions.points}
              />
            </div>

            <section className="rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[auto_minmax(0,1.15fr)_minmax(0,0.92fr)] lg:items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[18px] border border-[#E5E1D8] bg-[#F8F4EC] p-2 shadow-[0_4px_16px_rgba(17,24,39,0.04)]">
                    <Image
                      src="/assets/ptl-crest-transparent.png"
                      alt="Premier Tennis League crest"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                    Opening Weekend Evaluation
                  </p>
                  <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                    Founding Season Evaluation Weekends determine all initial
                    division placement.
                  </h2>
                  <div className="mt-6">
                    <StructureList points={openingWeekend.points} />
                  </div>
                </div>

                <div className="rounded-[18px] border border-[#E3DDD1] bg-[#FBF8F1] px-5 py-6 text-center shadow-[0_4px_18px_rgba(17,24,39,0.045)] sm:px-6">
                  <div className="flex justify-center">
                    <DownCircleIcon />
                  </div>
                  <p className="mt-5 text-[0.98rem] leading-[1.74] text-[#1F2933]/86 sm:text-[1.02rem]">
                    Evaluation Weekends occur before season start, teams are
                    assigned only after results are reviewed, and this one-time
                    placement system is used only for the Founding Season.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 text-center shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                Competition Rules
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.35rem]">
                Match format, scoring, scheduling, playoffs, and movement all
                follow the PTL Rulebook.
              </h2>
              <div className="mt-7">
                <Link href="/rules" className="btn-ptl-secondary px-8 py-3">
                  Competition Rules
                </Link>
              </div>
            </section>

            <section className="pt-2 text-center">
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="btn-ptl-primary px-8 py-3">
                  Apply for Founding Season
                </Link>
                <Link href="/rules" className="btn-ptl-secondary px-8 py-3">
                  Competition Rules
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
