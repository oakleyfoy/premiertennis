import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { partnerTypes } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Connect with Premier Tennis League as a facility, community partner, or sponsor.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="page-section pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Facilities and Partners"
          title="PTL can grow faster with the right local infrastructure and relationships."
          description="If you run a facility, organize local players, or want to support the rollout of a stronger team-tennis model, this is where partnership conversations begin."
        />
      </section>

      <section className="page-section pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {partnerTypes.map((item) => (
            <div key={item.title} className="glass-panel p-7">
              <h2 className="text-2xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="glass-panel p-8 lg:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Early conversations can cover
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              "Court availability and launch support",
              "Community outreach in target markets",
              "Local partnerships and promotion",
              "What a future PTL season could look like in your city",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/8 bg-slate-950/50 p-5"
              >
                <p className="text-base leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#c7e3fb] px-6 py-3 text-sm font-semibold text-[#0b1f57] transition hover:bg-[#d6ebfd]"
            >
              Discuss a Partnership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
