import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CenteredLineItem } from "@/components/centered-line-item";
import { pilotCityDetails } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Cities",
  description:
    "Learn how Premier Tennis League is approaching city rollout and what makes a market launch-ready.",
};

const cityReadiness = [
  "Committed captains and teams, not just casual inquiries",
  "Facilities or courts that can support a structured weekly schedule",
  "Enough local interest to create a credible competitive environment",
];

const nextSteps = [
  "Raise interest early if you want PTL in your city",
  "Identify players who would commit to a team-based season",
  "Help show that local demand is real and sustainable",
];

export default function CitiesPage() {
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
            CITIES
          </p>
          <h1 className="mt-5 text-[1.25rem] font-medium leading-snug text-[#1F2933]/78 sm:text-[1.45rem]">
            Launch Markets Are Still Being Finalized
          </h1>
        </div>

        <div className="mt-16 space-y-12">
          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#111827] sm:text-[2.1rem]">
              Pilot City Rollout
            </h2>
            <div className="mt-5 space-y-3 text-lg leading-8 text-[#1F2933]/85">
              {pilotCityDetails.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="ptl-rule-card text-center">
              <h2 className="font-display text-[1.75rem] leading-tight text-[#111827] sm:text-[1.95rem]">
                What Helps a City Become Launch-Ready
              </h2>
              <div className="mt-5 space-y-3 text-lg leading-8 text-[#1F2933]/85">
                {cityReadiness.map((item) => (
                  <CenteredLineItem key={item}>{item}</CenteredLineItem>
                ))}
              </div>
            </section>

            <section className="ptl-rule-card text-center">
              <h2 className="font-display text-[1.75rem] leading-tight text-[#111827] sm:text-[1.95rem]">
                What to Do Now
              </h2>
              <div className="mt-5 space-y-3 text-lg leading-8 text-[#1F2933]/85">
                {nextSteps.map((item) => (
                  <CenteredLineItem key={item}>{item}</CenteredLineItem>
                ))}
              </div>
            </section>
          </div>

          <section className="ptl-rule-card text-center">
            <h2 className="font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.25rem]">
              City selection will follow real demand and rollout readiness.
            </h2>
          </section>

          <section className="pt-2 text-center">
            <Link
              href="/contact"
              className="btn-ptl-primary px-8 py-3"
            >
              Raise Interest for Your City
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
