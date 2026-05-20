import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
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
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <EditorialRule surface="light" align="start" />
          </div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C8A96A] sm:mt-6">
            About
          </p>
          <h1 className="mt-6 font-display text-[2.55rem] leading-[1.03] tracking-[-0.02em] text-[#111827] sm:text-[3.1rem] lg:text-[3.55rem]">
            A new structure for
            <br />
            amateur team tennis.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-[1.72] text-[#1F2933]/78 sm:text-[1.1rem]">
            Premier Tennis League is designed to replace ambiguity with a format
            players can understand, commit to, and compete inside with real
            consequence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-stretch lg:gap-x-8">
          <section className="rounded-[24px] border border-[#243043] bg-[linear-gradient(180deg,#1a2332_0%,#131b28_100%)] px-6 py-8 text-white shadow-[0_18px_54px_rgba(0,0,0,0.22)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
              Mission Statement
            </p>
            <h2 className="mt-5 max-w-[24rem] font-display text-[2rem] leading-[1.08] text-white sm:text-[2.3rem] lg:text-[2.6rem]">
              Bring clarity, accountability, and real competition back to
              amateur tennis.
            </h2>
            <p className="mt-6 max-w-[38rem] text-[1rem] leading-8 text-white/84 sm:text-[1.04rem]">
              PTL is a team-based league model built on results, not ratings.
              Players enter a real season, play within fixed structure, and let
              outcomes determine where they belong.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/vision" className="btn-ptl-primary">
                Read PTL Vision
              </Link>
              <Link
                href="/league-structure"
                className="inline-flex min-h-10 items-center justify-center rounded-[12px] border border-white/18 bg-white/[0.05] px-[1.35rem] py-2.5 text-[13px] font-medium tracking-[0.02em] text-white/92 transition hover:bg-white/[0.09]"
              >
                View League Structure
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Teams", "Results", "Movement"].map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                    PTL
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
              About PTL
            </p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.2rem]">
              A league format built around teams, seasons, standings, and earned
              movement.
            </h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Team-based roster building",
                "Fixed weekly competition",
                "Transparent standings",
                "Promotion and relegation earned through results",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-[#E7E2D8] bg-[#FBF8F1] px-4 py-4 shadow-[0_3px_12px_rgba(17,24,39,0.03)] sm:px-5"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8A96A]"
                      aria-hidden
                    />
                    <p className="text-[0.95rem] leading-[1.68] text-[#1F2933]/88">
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
                Four Defining Principles
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                The model is built around four core ideas.
              </h2>
            </div>
            <p className="max-w-[22rem] text-sm leading-7 text-[#1F2933]/72 sm:text-right">
              These principles explain why PTL feels different from traditional
              amateur league formats.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-4">
            {leaguePillars.map((pillar) => (
              <section
                key={pillar.title}
                className="rounded-[18px] border border-[#E5E1D8] bg-white px-5 py-6 shadow-[0_6px_20px_rgba(17,24,39,0.06),0_1px_3px_rgba(17,24,39,0.04)]"
              >
                <div
                  className="h-px w-12 bg-gradient-to-r from-[#C6A86B]/65 to-transparent"
                  aria-hidden
                />
                <h2 className="mt-4 font-display text-[1.55rem] leading-[1.12] text-[#111827] sm:text-[1.72rem]">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-[0.98rem] leading-[1.74] text-[#1F2933]/86">
                  {pillar.description}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 text-center shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
            PTL Position
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.35rem]">
            PTL is built to make league tennis clearer and more meaningful.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-8 text-[#1F2933]/78">
            The format explains how PTL works. The vision explains what it is
            meant to become.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/vision" className="btn-ptl-secondary px-8 py-3">
              Read PTL Vision
            </Link>
            <Link href="/league-structure" className="btn-ptl-primary px-8 py-3">
              View League Structure
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
