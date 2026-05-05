import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { howItWorks, leaguePillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Play",
  description:
    "Learn how play works in Premier Tennis League, from team formation and weekly matches to standings and earned movement.",
};

const playHighlights = [
  leaguePillars[0],
  leaguePillars[1],
  {
    title: "Weekly Team Matches",
    description:
      "Teams play a fixed weekly schedule inside a defined season. There is no casual drop-in model and no flexible reshuffling week to week.",
  },
  {
    title: "Meaningful Standings",
    description:
      "Wins, losses, and ties shape the table over time. Every line matters, and every result contributes to where your team finishes.",
  },
];

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
        <div className="text-center">
          <p className="font-display text-[2.5rem] leading-none tracking-[0.02em] text-[#111827] uppercase sm:text-[3.15rem]">
            PLAY
          </p>
          <h1 className="mt-5 text-[1.25rem] font-medium leading-snug text-[#1F2933]/78 sm:text-[1.45rem]">
            Structured Team Tennis. Weekly Matches. Real Standings
          </h1>
        </div>

        <div className="mt-16 space-y-12">
          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
              How Play Works
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-[#1F2933]/85">
              Premier Tennis League is a structured, team-based tennis league
              built on results, not ratings. Teams form, play the schedule,
              follow the standings, and earn movement through performance.
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            {playHighlights.map((item) => (
              <section
                key={item.title}
                className="ptl-rule-card text-center"
              >
                <h2 className="font-display text-[1.75rem] leading-tight text-[#111827] sm:text-[1.95rem]">
                  {item.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#1F2933]/85">
                  {item.description}
                </p>
              </section>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <section
                key={item.step}
                className="ptl-rule-card text-center"
              >
                <h2 className="font-display text-[1.45rem] leading-tight text-[#111827]">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-[#1F2933]/85">
                  {item.description}
                </p>
              </section>
            ))}
          </div>

          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.25rem]">
              Play with your team. Earn your place.
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
  );
}
