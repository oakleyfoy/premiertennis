import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { faqItems } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Premier Tennis League, its launch phase, and how the format works.",
};

export default function FaqPage() {
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
            FAQ
          </p>
          <h1 className="mt-5 text-[1.25rem] font-medium leading-snug text-[#1F2933]/78 sm:text-[1.45rem]">
            Answers to the questions captains and players ask first.
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#1F2933]/85">
            This launch-phase site is focused on clarity. These answers explain
            what PTL is, how the format works, and what prospective teams should
            expect ahead of launch.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {faqItems.map((item) => (
            <section
              key={item.question}
              className="ptl-rule-card"
            >
              <h2 className="font-display text-[1.6rem] leading-tight text-[#111827]">
                {item.question}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#1F2933]/85">
                {item.answer}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-12 ptl-rule-card text-center">
          <h2 className="font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.25rem]">
            Need an answer that is not covered here?
          </h2>
        </section>

        <section className="pt-6 text-center">
          <Link
            href="/contact"
            className="btn-ptl-primary px-8 py-3"
          >
            Contact PTL
          </Link>
        </section>
      </div>
    </section>
  );
}
