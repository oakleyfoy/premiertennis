import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";

export const metadata: Metadata = {
  title: "Captain's Corner",
  description:
    "Guidance for PTL team owners entering the Founding Season through a structured evaluation-based system.",
};

const captainChecklist = [
  "Build and manage the roster",
  "Ensure team readiness for evaluation weekends",
  "Maintain competitive participation across the season",
  "Coordinate weekly match availability",
  "Operate the team within PTL structure",
] as const;

const foundingSeasonEntry = [
  "Apply (June 1 - July 10)",
  "Vetting (July 12 - 16)",
  "Captain Selection (July 17)",
  "Evaluation Weekends (Aug 1 - 9)",
  "Division Assignment (Aug 10 - 13)",
  "Season Begins (Aug 24 - 30)",
] as const;

const teamOwnerResponsibilities = [
  "Captains are designated as team owners within PTL",
  "They are responsible for roster construction and season participation",
  "Teams are not finalized until after evaluation weekends",
  "Ownership is operational responsibility, not casual participation",
] as const;

const commitmentPoints = [
  "Captains are committing to a full structured season",
  "Entry requires participation in evaluation weekends",
  "Division placement is determined after evaluation performance",
  "Season schedule is fixed once released",
] as const;

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
              Captains operate as team owners within PTL. They are responsible
              for building, managing, and leading a competitive franchise
              through a structured Founding Season system.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Ownership", "Evaluation", "Commitment"].map((item) => (
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
              The Team Owner Role
            </p>
            <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.2rem]">
              Team owners are accountable for readiness before PTL entry begins.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-[1.74] text-[#1F2933]/82">
              Captain responsibilities are governed by PTL Rulebook.
            </p>
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
            <div className="mt-7">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/rules#lineup-rules" className="btn-ptl-secondary">
                  View Team Ownership Rules
                </Link>
                <a
                  href="/PTL_Rulebook.pdf"
                  download
                  className="btn-ptl-secondary"
                >
                  Download Rulebook PDF
                </a>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] px-6 py-8 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                PTL Team Owners
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                Team ownership is an operating role inside a competitive system.
              </h2>
            </div>
            <p className="max-w-[24rem] text-sm leading-7 text-[#1F2933]/72 sm:text-right">
              PTL captains function as team owners within a structured
              competitive system.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {teamOwnerResponsibilities.map((item) => (
              <section
                key={item}
                className="rounded-[18px] border border-[#E5E1D8] bg-white px-5 py-6 shadow-[0_6px_20px_rgba(17,24,39,0.06),0_1px_3px_rgba(17,24,39,0.04)]"
              >
                <p className="text-[0.98rem] leading-[1.72] text-[#1F2933]/88">
                  {item}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-8 shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                How Entry Works in Founding Season
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.08] text-[#111827] sm:text-[2.25rem]">
                Entry is structured, time-bound, and evaluation-based.
              </h2>
            </div>
            <p className="max-w-[24rem] text-sm leading-7 text-[#1F2933]/72 sm:text-right">
              Teams are not finalized until after Evaluation Weekends are
              completed.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {foundingSeasonEntry.map((item, index) => (
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

        <section className="mt-10 rounded-[24px] border border-[#243043] bg-[#111827] px-6 py-8 text-center shadow-[0_16px_46px_rgba(0,0,0,0.24)] sm:px-8 sm:py-9">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
            Founding Season Commitment
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-tight text-white sm:text-[2.35rem]">
            Entry requires commitment before participation begins.
          </h2>
          <div className="mt-7 mx-auto grid max-w-4xl gap-3 text-left sm:grid-cols-2">
            {commitmentPoints.map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <p className="text-[0.96rem] leading-7 text-white/86">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 text-center shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
            Team Owner Entry
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.35rem]">
            Apply for team ownership, enter the evaluation-based system, and be
            assigned through competitive evaluation.
          </h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn-ptl-primary px-8 py-3">
              Apply as a Team Owner
            </Link>
            <Link href="/#founding-season-timeline" className="btn-ptl-secondary px-8 py-3">
              View Founding Season Timeline
            </Link>
            <Link href="/rules#lineup-rules" className="btn-ptl-secondary px-8 py-3">
              View Team Ownership Rules
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
