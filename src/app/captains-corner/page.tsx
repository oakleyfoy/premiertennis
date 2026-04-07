import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CenteredLineItem } from "@/components/centered-line-item";
import { captainSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Captain's Corner",
  description:
    "Guidance for captains preparing to build a team and lead it through Premier Tennis League.",
};

const captainChecklist = [
  "Identify the most dependable core of your roster",
  "Look for players who buy into a team-first model",
  "Plan for a fixed schedule and weekly availability",
  "Start organizing before launch markets are announced",
];

export default function CaptainsCornerPage() {
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
            CAPTAIN&apos;S CORNER
          </p>
          <h1 className="mt-5 text-[1.35rem] font-semibold leading-tight text-slate-500 sm:text-[1.55rem]">
            Build Your Team. Commit to the Season. Earn Your Place
          </h1>
        </div>

        <div className="mt-16 space-y-12">
          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#121826] sm:text-[2.1rem]">
              The Captain&apos;s Role
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-600">
              Captains are central to how PTL works. They shape the roster,
              manage reliability, build team culture, and lead their group
              through a season with meaningful stakes.
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-3">
            {captainSteps.map((step) => (
              <section
                key={step.title}
                className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70"
              >
                <h2 className="font-display text-[1.65rem] leading-tight text-[#121826]">
                  {step.title.replace("Step 1 - ", "").replace("Step 2 - ", "").replace("Step 3 - ", "")}
                </h2>
                {"subtitle" in step ? (
                  <p className="mt-3 text-base font-semibold leading-7 text-slate-500">
                    {step.subtitle}
                  </p>
                ) : null}
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {step.description}
                </p>
              </section>
            ))}
          </div>

          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#121826] sm:text-[2.1rem]">
              What Strong Captains Should Be Thinking About Now
            </h2>
            <div className="mt-5 space-y-3 text-lg leading-8 text-slate-600">
              {captainChecklist.map((item) => (
                <CenteredLineItem key={item}>{item}</CenteredLineItem>
              ))}
            </div>
          </section>

          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[2rem] leading-tight text-[#121826] sm:text-[2.25rem]">
              Great captains organize early.
            </h2>
          </section>

          <section className="pt-2 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[#8ec5f2] bg-[#8ec5f2] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(142,197,242,0.25)] transition hover:bg-[#9fd0f7]"
            >
              Contact PTL as a Captain
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
