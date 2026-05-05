import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CenteredLineItem } from "@/components/centered-line-item";
import { leagueStructure } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "League Structure",
  description:
    "See how Premier Tennis League is structured, from season length and format to standings, scoring, and promotion and relegation.",
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

export default function LeagueStructurePage() {
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
          <div className="text-center">
            <p className="font-display text-[2.5rem] leading-none tracking-[0.02em] text-[#111827] uppercase sm:text-[3.15rem]">
              LEAGUE STRUCTURE
            </p>
            <p className="mt-5 text-[1.75rem] font-semibold leading-tight tracking-[0.08em] text-[#1F2933]/72 uppercase sm:text-[2.05rem]">
              (INAUGURAL SEASON)
            </p>
            <h1 className="mt-5 text-[1.25rem] font-medium leading-snug text-[#1F2933]/78 sm:text-[1.45rem]">
              Fixed Divisions. Full Season. Earned Movement
            </h1>
          </div>

          <div className="mx-auto mt-16 max-w-[64rem] space-y-12">
            <section className="ptl-rule-card text-center">
              <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
                Season Format Overview
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-[#1F2933]/85">
                Premier Tennis League operates on a fixed, season-based structure
                with defined teams, match formats, standings, and earned
                promotion and relegation.
              </p>
            </section>

            <div className="grid gap-8 lg:grid-cols-2">
              <section className="ptl-rule-card text-center">
                <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
                  Season Length
                </h2>
                <div className="mt-5 space-y-3">
                  {leagueStructure[0].points.map((point) => (
                    <CenteredLineItem key={point}>{point}</CenteredLineItem>
                  ))}
                </div>
              </section>

              <section className="ptl-rule-card text-center">
                <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
                  Teams &amp; Divisions (Year One)
                </h2>
                <div className="mt-5 space-y-3">
                  <CenteredLineItem>16 teams total</CenteredLineItem>
                  <CenteredLineItem>2 divisions of 8 teams</CenteredLineItem>
                  <CenteredLineItem>Teams compete only within division</CenteredLineItem>
                  <CenteredLineItem>
                    Each team plays every opponent twice (home &amp; away)
                  </CenteredLineItem>
                  <CenteredLineItem>Unlimited team rosters</CenteredLineItem>
                </div>
              </section>
            </div>

            <section className="ptl-rule-card text-center">
              <div className="grid gap-8 lg:grid-cols-[auto_1.25fr_0.95fr] lg:items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src="/assets/ptl-crest-transparent.png"
                      alt="Premier Tennis League crest"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
                    Opening Weekend Evaluation
                  </h2>
                  <div className="mt-5 space-y-3">
                    <CenteredLineItem>All teams participate</CenteredLineItem>
                    <CenteredLineItem>
                      Used only for initial division placement
                    </CenteredLineItem>
                    <CenteredLineItem>No ratings or algorithms</CenteredLineItem>
                    <CenteredLineItem>
                      After Year One, all new teams enter at bottom of table
                    </CenteredLineItem>
                  </div>
                </div>

                <div className="self-center lg:pl-4">
                  <div className="mx-auto flex max-w-[25rem] flex-col items-center text-center">
                    <DownCircleIcon />
                    <p className="mt-5 text-lg leading-8 text-[#1F2933]/85">
                      This evaluation occurs only during the inaugural season.
                      All future teams enter at the bottom of the table and earn
                      advancement through results.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid gap-8 lg:grid-cols-2">
              <section className="ptl-rule-card text-center">
                <h2 className="font-display text-[1.75rem] leading-tight text-[#111827] sm:text-[1.95rem]">
                  Match Format
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#1F2933]/85">
                  Each team match includes:
                </p>
                <div className="mt-4 space-y-3">
                  {leagueStructure[3].points.map((point) => (
                    <CenteredLineItem key={point}>{point}</CenteredLineItem>
                  ))}
                </div>
              </section>

              <section className="ptl-rule-card text-center">
                <h2 className="font-display text-[1.75rem] leading-tight text-[#111827] sm:text-[1.95rem]">
                  Standings &amp; Results
                </h2>
                <div className="mt-5 space-y-3">
                  {leagueStructure[5].points.map((point) => (
                    <CenteredLineItem key={point}>{point}</CenteredLineItem>
                  ))}
                </div>
              </section>

              <section className="ptl-rule-card text-center">
                <h2 className="font-display text-[1.75rem] leading-tight text-[#111827] sm:text-[1.95rem]">
                  Scoring
                </h2>
                <div className="mt-5 space-y-3">
                  {leagueStructure[4].points.map((point) => (
                    <CenteredLineItem key={point}>{point}</CenteredLineItem>
                  ))}
                </div>
              </section>

              <section className="ptl-rule-card text-center">
                <h2 className="font-display text-[1.75rem] leading-tight text-[#111827] sm:text-[1.95rem]">
                  Promotion &amp; Relegation
                </h2>
                <div className="mt-5 space-y-3">
                  {leagueStructure[6].points.slice(0, 3).map((point) => (
                    <CenteredLineItem key={point}>{point}</CenteredLineItem>
                  ))}
                </div>
                <p className="mt-5 text-lg font-semibold leading-8 text-[#111827]">
                  Movement is earned only through season performance.
                </p>
              </section>
            </div>

            <section className="ptl-rule-card text-center">
              <h2 className="font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.25rem]">
                Every line matters. Every set matters.
              </h2>
            </section>

            <section className="pt-2 text-center">
              <Link
                href="/contact"
                className="btn-ptl-primary px-8 py-3"
              >
                Start a Team
              </Link>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
