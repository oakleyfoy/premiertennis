import type { Metadata } from "next";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
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
      <section className="page-section border-b border-[#E5E1D8]/70 bg-[#F7F5F0] pb-16 pt-12 sm:pb-24 sm:pt-16">
        <SectionHeading
          eyebrow="Facilities and Partners"
          title="PTL can grow faster with the right local infrastructure and relationships."
          description="If you run a facility, organize local players, or want to support the rollout of a stronger team-tennis model, this is where partnership conversations begin."
          theme="light"
          align="left"
        />
      </section>

      <section className="page-section border-b border-[#E5E1D8]/70 bg-white pb-16 pt-0 sm:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {partnerTypes.map((item) => (
            <div key={item.title} className="ptl-rule-card">
              <EditorialRule surface="light" align="start" />
              <h2 className="mt-4 font-display text-2xl text-[#111827]">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#1F2933]/88">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section bg-[#F7F5F0] pb-24 pt-0">
        <div className="ptl-rule-card lg:p-10">
          <h2 className="font-display text-2xl text-[#111827] sm:text-3xl">
            Early conversations can cover
          </h2>
          <div className="mt-5">
            <EditorialRule surface="light" align="start" />
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
            {[
              "Court availability and launch support",
              "Community outreach in target markets",
              "Local partnerships and promotion",
              "What a future PTL season could look like in your city",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.125rem] border border-[#E5E1D8] bg-[#FDFCF8] p-5"
              >
                <p className="text-base leading-7 text-[#1F2933]/88">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <EditorialRule surface="light" />
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-ptl-primary">
              Discuss a Partnership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
