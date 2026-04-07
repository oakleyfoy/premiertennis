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
            FAQ
          </p>
          <h1 className="mt-5 text-[1.35rem] font-semibold leading-tight text-slate-500 sm:text-[1.55rem]">
            Answers to the questions captains and players ask first.
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            This launch-phase site is focused on clarity. These answers explain
            what PTL is, how the format works, and what prospective teams should
            expect ahead of launch.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {faqItems.map((item) => (
            <section
              key={item.question}
              className="rounded-[1.7rem] bg-white px-8 py-8 shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70"
            >
              <h2 className="font-display text-[1.6rem] leading-tight text-[#121826]">
                {item.question}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {item.answer}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-[1.7rem] bg-white px-8 py-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
          <h2 className="font-display text-[2rem] leading-tight text-[#121826] sm:text-[2.25rem]">
            Need an answer that is not covered here?
          </h2>
        </section>

        <section className="pt-6 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-[#8ec5f2] bg-[#8ec5f2] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(142,197,242,0.25)] transition hover:bg-[#9fd0f7]"
          >
            Contact PTL
          </Link>
        </section>
      </div>
    </section>
  );
}
