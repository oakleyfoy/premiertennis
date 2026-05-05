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
            CAPTAIN&apos;S CORNER
          </p>
          <h1 className="mt-5 text-[1.25rem] font-medium leading-snug text-[#1F2933]/78 sm:text-[1.45rem]">
            Build Your Team. Commit to the Season. Earn Your Place
          </h1>
        </div>

        <div className="mt-16 space-y-12">
          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
              The Captain&apos;s Role
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-[#1F2933]/85">
              Captains are central to how PTL works. They shape the roster,
              manage reliability, build team culture, and lead their group
              through a season with meaningful stakes.
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-3">
            {captainSteps.map((step) => (
              <section
                key={step.title}
                className="ptl-rule-card text-center"
              >
                <h2 className="font-display text-[1.65rem] leading-tight text-[#111827]">
                  {step.title.replace("Step 1 - ", "").replace("Step 2 - ", "").replace("Step 3 - ", "")}
                </h2>
                {"subtitle" in step ? (
                  <p className="mt-3 text-base font-semibold leading-7 text-[#1F2933]/72">
                    {step.subtitle}
                  </p>
                ) : null}
                <p className="mt-4 text-base leading-8 text-[#1F2933]/85">
                  {step.description}
                </p>
              </section>
            ))}
          </div>

          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
              What Strong Captains Should Be Thinking About Now
            </h2>
            <div className="mt-5 space-y-3 text-lg leading-8 text-[#1F2933]/85">
              {captainChecklist.map((item) => (
                <CenteredLineItem key={item}>{item}</CenteredLineItem>
              ))}
            </div>
          </section>

          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.25rem]">
              Great captains organize early.
            </h2>
          </section>

          <section className="pt-2 text-center">
            <Link
              href="/contact"
              className="btn-ptl-primary px-8 py-3"
            >
              Contact PTL as a Captain
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
