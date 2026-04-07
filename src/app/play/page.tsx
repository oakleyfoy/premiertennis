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
        <div className="text-center">
          <p className="font-display text-[2.7rem] leading-none tracking-[0.02em] text-[#0b1f57] uppercase sm:text-[3.6rem]">
            PLAY
          </p>
          <h1 className="mt-5 text-[1.35rem] font-semibold leading-tight text-slate-500 sm:text-[1.55rem]">
            Structured Team Tennis. Weekly Matches. Real Standings
          </h1>
        </div>

        <div className="mt-16 space-y-12">
          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#121826] sm:text-[2.1rem]">
              How Play Works
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-600">
              Premier Tennis League is a structured, team-based tennis league
              built on results, not ratings. Teams form, play the schedule,
              follow the standings, and earn movement through performance.
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            {playHighlights.map((item) => (
              <section
                key={item.title}
                className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70"
              >
                <h2 className="font-display text-[1.75rem] leading-tight text-[#121826] sm:text-[1.95rem]">
                  {item.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {item.description}
                </p>
              </section>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <section
                key={item.step}
                className="rounded-[1.7rem] bg-white px-7 py-7 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70"
              >
                <h2 className="font-display text-[1.45rem] leading-tight text-[#121826]">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </section>
            ))}
          </div>

          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[2rem] leading-tight text-[#121826] sm:text-[2.25rem]">
              Play with your team. Earn your place.
            </h2>
          </section>

          <section className="pt-2 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[#8ec5f2] bg-[#8ec5f2] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(142,197,242,0.25)] transition hover:bg-[#9fd0f7]"
            >
              Start a Team
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
