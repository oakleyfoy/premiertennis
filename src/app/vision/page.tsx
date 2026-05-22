import type { Metadata } from "next";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
import {
  visionFoundations,
  visionGlobalDestinations,
  visionIdentityPoints,
  visionNetworkLayers,
  visionSportsExperience,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "PTL Vision",
  description:
    "Read the long-term vision for Premier Tennis League: a connected team tennis ecosystem built around identity, earned movement, and lasting competitive culture.",
};

export default function VisionPage() {
  return (
    <div className="bg-[#F5F1E8] text-[#111827]">
      <section className="relative overflow-hidden border-b border-[#D8D1C5] bg-[#111827] text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.16),transparent_34%),linear-gradient(180deg,#172132_0%,#101722_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-x-12">
            <div className="max-w-4xl">
              <div className="flex justify-start">
                <EditorialRule surface="dark" align="start" />
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DCC9A0] sm:mt-6">
                PTL Vision
              </p>
              <h1 className="mt-6 max-w-[15ch] font-display text-[2.9rem] leading-[0.96] tracking-[-0.03em] text-white sm:text-[3.7rem] lg:text-[4.85rem]">
                Build the kind of team tennis people stay invested in for years.
              </h1>
              <p className="mt-7 max-w-3xl text-[1.03rem] leading-8 text-white/82 sm:text-[1.08rem]">
                Premier Tennis League was not created to be another local tennis
                league. It is being built as a long-term competitive ecosystem
                with real teams, real rivalries, real identity, and a structure
                that grows more meaningful over time.
              </p>

              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href="/contact" className="btn-ptl-primary">
                  Start a Team
                </Link>
                <Link
                  href="/league-structure"
                  className="inline-flex min-h-10 items-center justify-center rounded-[12px] border border-white/18 bg-white/[0.05] px-[1.35rem] py-2.5 text-[13px] font-medium tracking-[0.02em] text-white/92 transition hover:bg-white/[0.09]"
                >
                  View League Structure
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {visionFoundations.map((item, idx) => (
                <article
                  key={item}
                  className="rounded-[18px] border border-white/10 bg-white/[0.045] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[2px]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
                    Vision 0{idx + 1}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-7 text-white/84">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DDD5C8] bg-[linear-gradient(180deg,#f6f1e8_0%,#f2ece1_100%)] py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-12 lg:px-8">
          <div className="lg:pt-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A68952]">
              The Horizon
            </p>
            <h2 className="mt-5 max-w-[12ch] font-display text-[2.3rem] leading-[1.01] tracking-[-0.025em] text-[#111827] sm:text-[2.9rem] lg:text-[3.45rem]">
              Bigger than weekly local matches.
            </h2>
            <p className="mt-6 max-w-[32rem] text-[1rem] leading-8 text-[#1F2933]/84">
              As PTL grows across the United States and internationally, top
              teams can eventually earn opportunities to qualify for regional,
              national, and destination-based Premier events held around the
              world.
            </p>
          </div>

          <div className="overflow-hidden rounded-[26px] border border-[#D7CFBE] bg-white shadow-[0_18px_50px_rgba(17,24,39,0.08),0_3px_14px_rgba(17,24,39,0.04)]">
            <div className="border-b border-[#EEE7DA] px-6 py-5 sm:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A68952]">
                Future Premier Circuit
              </p>
              <p className="mt-3 max-w-[40rem] text-[0.98rem] leading-7 text-[#1F2933]/78">
                Teams may one day travel together, represent their city, and
                compete in destination events that extend the league beyond the
                local calendar.
              </p>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start lg:gap-x-8">
                <div className="relative min-h-[280px] overflow-hidden rounded-[22px] border border-[#E7E0D4] bg-[#111827] px-5 py-5 text-white sm:px-6 sm:py-6">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,201,160,0.16),transparent_42%)]"
                    aria-hidden
                  />
                  <div
                    className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DCC9A0]/30"
                    aria-hidden
                  />
                  <div
                    className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DCC9A0]/35"
                    aria-hidden
                  />
                  <div className="relative flex h-full flex-col">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DCC9A0]">
                      Destinations
                    </p>
                    <div className="relative mt-6 min-h-[210px]">
                      {visionGlobalDestinations.map((place, idx) => {
                        const positions = [
                          "left-[8%] top-[12%]",
                          "right-[8%] top-[18%]",
                          "left-[16%] bottom-[16%]",
                          "right-[12%] bottom-[14%]",
                          "left-1/2 top-1/2",
                        ];

                        return (
                          <div
                            key={place}
                            className={`absolute ${positions[idx]} ${idx === 4 ? "-translate-x-1/2 -translate-y-1/2" : ""} rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-[2px]`}
                          >
                            {place}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {visionNetworkLayers.map((item) => (
                    <div
                      key={item}
                      className="rounded-[16px] border border-[#E7E0D4] bg-[#FBF8F1] px-4 py-4 shadow-[0_4px_14px_rgba(17,24,39,0.04)]"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="mt-[0.48rem] h-[7px] w-[7px] shrink-0 rounded-full bg-[#C6A86B]"
                          aria-hidden
                        />
                        <p className="text-[0.94rem] leading-7 text-[#1F2933]/88">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#2A3344] bg-[#111827] py-16 text-white sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-x-12 lg:px-8">
          <div className="lg:pt-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#DCC9A0]">
              The Sports Layer
            </p>
            <h2 className="mt-5 max-w-[12ch] font-display text-[2.25rem] leading-[1.02] tracking-[-0.025em] text-white sm:text-[2.85rem] lg:text-[3.35rem]">
              More than matches. An ongoing competitive story.
            </h2>
            <p className="mt-6 max-w-[30rem] text-[1rem] leading-8 text-white/82">
              PTL is being designed to bring the deeper sports experience into
              recreational tennis, so players do not simply show up and leave.
              They follow the table, defend position, chase titles, and build
              team legacy over time.
            </p>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.025)_100%)] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-6 sm:py-6">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {visionSportsExperience.map((item) => (
                <div
                  key={item}
                  className="rounded-[15px] border border-white/10 bg-white/[0.05] px-4 py-4 text-sm leading-6 text-white/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[18px] border border-[#DCC9A0]/22 bg-[#0C121C] px-5 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                End Result
              </p>
              <p className="mt-3 max-w-[48rem] text-[1rem] leading-8 text-white/84">
                The goal is to create the kind of emotional investment and
                competitive continuity fans love in professional sports, but at
                the recreational team tennis level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DDD5C8] bg-[#F8F4EC] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A68952]">
              Long-Term Identity
            </p>
            <h2 className="mt-5 font-display text-[2.3rem] leading-[1.03] tracking-[-0.025em] text-[#111827] sm:text-[2.95rem] lg:text-[3.45rem]">
              Something recreational tennis has rarely had.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-8 text-[#1F2933]/82">
              Not just organized matches, but a lasting competitive community
              where players feel connected to something larger than themselves.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visionIdentityPoints.map((item) => (
              <article
                key={item}
                className="rounded-[18px] border border-[#E5DED1] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(17,24,39,0.05),0_2px_8px_rgba(17,24,39,0.03)]"
              >
                <div
                  className="h-px w-12 bg-gradient-to-r from-[#C6A86B]/70 to-transparent"
                  aria-hidden
                />
                <p className="mt-4 font-display text-[1.38rem] leading-[1.16] text-[#111827]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EEE4] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[28px] border border-[#D8D0C1] bg-[linear-gradient(180deg,#fffefb_0%,#f7f1e6_100%)] shadow-[0_20px_60px_rgba(17,24,39,0.08),0_4px_14px_rgba(17,24,39,0.04)]">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
              <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="flex justify-start">
                  <EditorialRule surface="light" align="start" />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A68952]">
                  Founding Window
                </p>
                <h2 className="mt-5 max-w-[12ch] font-display text-[2.15rem] leading-[1.04] tracking-[-0.025em] text-[#111827] sm:text-[2.65rem] lg:text-[3.05rem]">
                  This is only the beginning.
                </h2>
                <p className="mt-6 max-w-[38rem] text-[1rem] leading-8 text-[#1F2933]/84">
                  The founding players, captains, clubs, and cities involved in
                  the early years of PTL will help shape the culture, structure,
                  and history of what Premier Tennis League becomes for decades
                  to come.
                </p>
              </div>

              <div className="border-t border-[#EAE2D5] bg-[#FBF8F1] px-6 py-8 sm:px-8 sm:py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A68952]">
                  Join Early
                </p>
                <div className="mt-5 space-y-3">
                  {[
                    "Build a founding team",
                    "Track pilot-city momentum",
                    "Help define early league culture",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[15px] border border-[#E8E0D3] bg-white px-4 py-4"
                    >
                      <p className="text-[0.95rem] leading-7 text-[#1F2933]/86">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/contact" className="btn-ptl-primary">
                    Start a Team
                  </Link>
                  <Link href="/about" className="btn-ptl-secondary">
                    Read About PTL
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
