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
            ABOUT
          </p>
          <h1 className="mt-5 text-[1.25rem] font-medium leading-snug text-[#1F2933]/78 sm:text-[1.45rem]">
            A New Structure for Amateur Team Tennis
          </h1>
        </div>

        <div className="mt-16 space-y-12">
          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
              Mission Statement
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-[#1F2933]/85">
              Premier Tennis League exists to bring clarity, accountability, and
              real competition back to amateur tennis through team-based league
              play built on results, not ratings.
            </p>
          </section>

          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
              About PTL
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#1F2933]/85">
              PTL is designed around teams, seasons, standings, and earned
              movement. It replaces ambiguity with a format players can
              understand, commit to, and compete inside with real consequence.
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            {leaguePillars.map((pillar) => (
              <section
                key={pillar.title}
                className="ptl-rule-card text-center"
              >
                <h2 className="font-display text-[1.75rem] leading-tight text-[#111827] sm:text-[1.95rem]">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#1F2933]/85">
                  {pillar.description}
                </p>
              </section>
            ))}
          </div>

          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.25rem]">
              PTL is built to make league tennis clearer and more meaningful.
            </h2>
          </section>

          <section className="pt-2 text-center">
            <Link
              href="/league-structure"
              className="btn-ptl-primary px-8 py-3"
            >
              View League Structure
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
