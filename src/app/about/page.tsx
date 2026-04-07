import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { leaguePillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Premier Tennis League works and what makes its team-based model different.",
};

export default function AboutPage() {
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
            ABOUT
          </p>
          <h1 className="mt-5 text-[1.35rem] font-semibold leading-tight text-slate-500 sm:text-[1.55rem]">
            A New Structure for Amateur Team Tennis
          </h1>
        </div>

        <div className="mt-16 space-y-12">
          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#121826] sm:text-[2.1rem]">
              Mission Statement
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-600">
              Premier Tennis League exists to bring clarity, accountability, and
              real competition back to amateur tennis through team-based league
              play built on results, not ratings.
            </p>
          </section>

          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#121826] sm:text-[2.1rem]">
              About PTL
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              PTL is designed around teams, seasons, standings, and earned
              movement. It replaces ambiguity with a format players can
              understand, commit to, and compete inside with real consequence.
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            {leaguePillars.map((pillar) => (
              <section
                key={pillar.title}
                className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70"
              >
                <h2 className="font-display text-[1.75rem] leading-tight text-[#121826] sm:text-[1.95rem]">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {pillar.description}
                </p>
              </section>
            ))}
          </div>

          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[2rem] leading-tight text-[#121826] sm:text-[2.25rem]">
              PTL is built to make league tennis clearer and more meaningful.
            </h2>
          </section>

          <section className="pt-2 text-center">
            <Link
              href="/league-structure"
              className="inline-flex rounded-full border border-[#8ec5f2] bg-[#8ec5f2] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(142,197,242,0.25)] transition hover:bg-[#9fd0f7]"
            >
              View League Structure
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
