import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
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
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <EditorialRule surface="light" align="start" />
          </div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A] sm:mt-6">
            FAQ
          </p>
          <h1 className="mt-6 font-display text-[2.55rem] leading-[1.03] tracking-[-0.02em] text-[#111827] sm:text-[3.1rem] lg:text-[3.55rem]">
            Answers to the questions
            <br />
            captains and players ask first.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-[1.72] text-[#1F2933]/78 sm:text-[1.08rem]">
            These answers cover the most common PTL questions. Full competition
            mechanics now live in the PTL Rulebook so the site does not repeat
            rule logic in multiple places.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-x-10">
          <aside className="overflow-hidden rounded-[24px] border border-[#243043] bg-[linear-gradient(180deg,#1a2332_0%,#131b28_100%)] px-6 py-8 text-white shadow-[0_18px_54px_rgba(0,0,0,0.22)] sm:px-8 sm:py-9 lg:sticky lg:top-28 lg:px-10 lg:py-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
              Before You Ask
            </p>
            <h2 className="mt-5 max-w-[22rem] font-display text-[2rem] leading-[1.08] text-white sm:text-[2.25rem] lg:text-[2.5rem]">
              What most people need to understand before launch.
            </h2>
            <p className="mt-6 max-w-[34rem] text-[1rem] leading-8 text-white/84">
              Use this page for high-level clarity, then move to the PTL
              Rulebook for official match, lineup, scheduling, playoff, and
              movement rules.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {["No ratings", "Fixed season", "Official rules"].map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <p className="text-sm leading-6 text-white/88">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Link href="/rules" className="btn-ptl-secondary">
                View PTL Official Rules
              </Link>
            </div>
          </aside>

          <div className="space-y-5">
            {faqItems.map((item, idx) => (
              <section
                key={item.question}
                className={`rounded-[20px] border border-[#E5E1D8] bg-white px-5 py-6 shadow-[0_8px_26px_rgba(17,24,39,0.06),0_2px_8px_rgba(17,24,39,0.04)] sm:px-6 sm:py-7 ${idx % 2 === 1 ? "lg:ml-8" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8C28D] bg-[#FBF8F0] text-[11px] font-semibold tracking-[0.08em] text-[#8C7341]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                      Question
                    </p>
                    <h2 className="mt-3 font-display text-[1.55rem] leading-[1.12] text-[#111827] sm:text-[1.72rem]">
                      {item.question}
                    </h2>
                    <p className="mt-4 max-w-[42rem] text-[0.98rem] leading-[1.76] text-[#1F2933]/86">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="mt-10 rounded-[24px] border border-[#E5E1D8] bg-white px-6 py-7 text-center shadow-[0_10px_34px_rgba(17,24,39,0.07),0_2px_10px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
            Still Need Help?
          </p>
          <h2 className="mt-4 font-display text-[2rem] leading-tight text-[#111827] sm:text-[2.35rem]">
            Need an answer that is not covered here?
          </h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/rules" className="btn-ptl-secondary px-8 py-3">
              View PTL Official Rules
            </Link>
            <Link href="/contact" className="btn-ptl-primary px-8 py-3">
              Contact PTL
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
