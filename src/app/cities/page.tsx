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
            CITIES
          </p>
          <h1 className="mt-5 text-[1.35rem] font-semibold leading-tight text-slate-500 sm:text-[1.55rem]">
            Launch Markets Are Still Being Finalized
          </h1>
        </div>

        <div className="mt-16 space-y-12">
          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[1.85rem] leading-tight text-[#121826] sm:text-[2.1rem]">
              Pilot City Rollout
            </h2>
            <div className="mt-5 space-y-3 text-lg leading-8 text-slate-600">
              {pilotCityDetails.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
              <h2 className="font-display text-[1.75rem] leading-tight text-[#121826] sm:text-[1.95rem]">
                What Helps a City Become Launch-Ready
              </h2>
              <div className="mt-5 space-y-3 text-lg leading-8 text-slate-600">
                {cityReadiness.map((item) => (
                  <CenteredLineItem key={item}>{item}</CenteredLineItem>
                ))}
              </div>
            </section>

            <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
              <h2 className="font-display text-[1.75rem] leading-tight text-[#121826] sm:text-[1.95rem]">
                What to Do Now
              </h2>
              <div className="mt-5 space-y-3 text-lg leading-8 text-slate-600">
                {nextSteps.map((item) => (
                  <CenteredLineItem key={item}>{item}</CenteredLineItem>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
            <h2 className="font-display text-[2rem] leading-tight text-[#121826] sm:text-[2.25rem]">
              City selection will follow real demand and rollout readiness.
            </h2>
          </section>

          <section className="pt-2 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[#8ec5f2] bg-[#8ec5f2] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(142,197,242,0.25)] transition hover:bg-[#9fd0f7]"
            >
              Raise Interest for Your City
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
