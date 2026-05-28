import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
import {
  foundingSeasonSteps,
  foundingSeasonTimeline,
  heroBullets,
  homeCorePrincipleCards,
} from "@/lib/site-content";

export function HomePageContent() {
  return (
    <>
      <section className="relative min-h-[76vh] overflow-hidden border-b border-[#D4CFC4]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/hero-court.jpeg"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Single flat overlay — identical treatment on every frame for motion-safe readability */}
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(8,12,20,0.48),rgba(8,12,20,0.48))]"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[76vh] w-full max-w-7xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-36">
          <div
            className="w-full max-w-[680px] rounded-[18px] border border-[rgba(255,255,255,0.18)] bg-[rgba(15,20,30,0.55)] px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:max-w-[740px] sm:rounded-[20px] sm:px-[52px] sm:py-[64px] lg:max-w-[780px] lg:rounded-[22px] lg:px-[64px] lg:py-[84px]"
          >
            <div className="mb-7 flex justify-center sm:mb-8">
              <EditorialRule surface="dark" />
            </div>
            <h1 className="font-display text-[2.35rem] font-semibold uppercase leading-[1.06] tracking-[0.1em] text-white sm:text-[2.85rem] lg:text-[3.25rem] [text-shadow:0_2px_18px_rgba(0,0,0,0.45),0_1px_2px_rgba(0,0,0,0.35)]">
              Premier Tennis League
            </h1>
            <h2 className="mt-6 font-display text-[1.3rem] leading-snug tracking-[0.02em] text-white/92 sm:mt-7 sm:text-[1.5rem] lg:mt-8 lg:text-[1.78rem] [text-shadow:0_2px_14px_rgba(0,0,0,0.4),0_1px_1px_rgba(0,0,0,0.28)]">
              Founding Season 2026. Evaluation-Based Entry. Fall 2026.
            </h2>
            <p className="mx-auto mt-5 max-w-[38rem] font-sans text-[0.8125rem] font-normal leading-[1.7] tracking-[0.03em] text-white/80 sm:mt-6 sm:text-sm lg:mt-6 lg:text-[0.9375rem] [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]">
              PTL is a structured, time-locked competitive league built around a
              one-time evaluation system that determines division placement
              before a fixed 14-week season begins in late August.
            </p>

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-3.5 sm:mt-12 sm:flex-row sm:gap-4.5 lg:mt-14">
              <Link href="/contact" className="btn-ptl-hero-primary w-full sm:w-auto sm:min-w-[220px]">
                Apply for Founding Season
              </Link>
              <Link href="#founding-season-timeline" className="btn-ptl-hero-secondary w-full sm:w-auto sm:min-w-[210px]">
                View Season Timeline
              </Link>
              <Link href="/play" className="btn-ptl-hero-secondary w-full sm:w-auto sm:min-w-[220px]">
                Learn Evaluation System
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ptl-section-border border-t border-[#E8E4DC] bg-[#FFFCF8] py-[5.25rem] shadow-[inset_0_1px_0_rgba(255,255,255,1)] sm:py-[7rem] lg:py-[8.25rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_minmax(0,1fr)] lg:items-stretch lg:gap-x-16">
            <div className="relative aspect-[4/3] min-h-[320px] w-full overflow-hidden rounded-[16px] border border-[#E5E1D8] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_18px_56px_rgba(17,24,39,0.16),0_6px_20px_rgba(17,24,39,0.1)] ring-1 ring-[rgba(17,24,39,0.06)] lg:min-h-[460px]">
              <div className="absolute inset-0">
                <Image
                  src="/assets/why-built-court-highfive.png"
                  alt="Two partners high-fiving over the net on a hard court, celebrating teamwork and competition"
                  fill
                  className="object-cover object-[50%_100%] contrast-[1.1] saturate-[1.02] scale-[1.2] origin-[50%_84%] sm:scale-[1.24] sm:origin-[50%_82%] lg:scale-[1.27] lg:origin-[50%_80%]"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(8,12,20,0.09)] via-[rgba(8,12,20,0.02)] via-45% to-[rgba(8,12,20,0.07)]"
                  aria-hidden
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-col lg:justify-center">
              <div className="max-w-[39rem]">
                <div className="flex justify-start">
                  <EditorialRule surface="light" align="start" />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A96A] sm:mt-6">
                  Why We Built Premier Tennis League
                </p>
                <h2 className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#0d1219] sm:mt-6 sm:text-[2.55rem] lg:text-[3rem] lg:leading-[1.02]">
                  A better way to compete in amateur tennis.
                </h2>

                <div className="mt-8 space-y-5 text-left text-[1.02rem] leading-[1.58] text-[#1F2933]/94 sm:text-[1.055rem] lg:space-y-4 lg:text-[1.075rem] lg:leading-[1.55]">
                  <p>Most leagues rely on ratings, guesswork, and artificial balance.</p>
                  <p>Premier Tennis League removes that.</p>
                  <p>It gives amateur tennis a clearer competitive identity from day one.</p>
                </div>
              </div>

              <div className="mt-9 grid grid-cols-1 gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4">
                {heroBullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-[14px] border border-[#E5E1D8] bg-white px-4 py-4 shadow-[0_3px_14px_rgba(17,24,39,0.05),0_1px_2px_rgba(17,24,39,0.03)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.08)] sm:px-4.5 sm:py-4.5"
                  >
                    <p className="text-[0.86rem] font-medium leading-[1.48] text-[#1a2330] sm:text-[0.9rem] sm:leading-[1.5]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="btn-ptl-primary px-6 py-2.5 text-[12.5px] font-semibold tracking-[0.04em] shadow-[0_6px_22px_rgba(8,12,20,0.38)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1a2330] hover:shadow-[0_10px_30px_rgba(8,12,20,0.48)]"
                >
                  Apply for Founding Season
                </Link>
                <Link href="#founding-season-timeline" className="btn-ptl-secondary px-6 py-2.5 text-[12.5px]">
                  View Season Timeline
                </Link>
                <Link href="/play" className="btn-ptl-secondary px-6 py-2.5 text-[12.5px]">
                  Learn Evaluation System
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="founding-season-timeline"
        className="ptl-section-border scroll-mt-32 bg-[#F7F4EE] py-[5.25rem] sm:py-[7rem] lg:py-[8.25rem]"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center">
              <EditorialRule surface="light" align="start" />
            </div>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C6A86B] sm:mt-6 sm:text-[11px] sm:tracking-[0.3em]">
              Founding Season Timeline
            </p>
            <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#111111] sm:mt-7 sm:text-[2.35rem] lg:text-[2.7rem] lg:leading-[1.03]">
              PTL Founding Season Timeline (Fall 2026)
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-[1.65] text-[#5c5c5c] sm:text-[1.055rem]">
              The Founding Season follows a fixed launch calendar from
              applications through playoffs.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {foundingSeasonTimeline.map((item, index) => (
              <article
                key={`${item.date}-${item.label}`}
                className="rounded-[18px] border border-[#E5E1D8] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(17,24,39,0.06),0_2px_8px_rgba(17,24,39,0.04)]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-[1.2rem] leading-[1.16] text-[#111827]">
                  {item.date}
                </p>
                <p className="mt-3 text-[0.94rem] leading-7 text-[#1F2933]/88">
                  {item.label}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl rounded-[18px] border border-[#E5E1D8] bg-[#FBF8F1] px-5 py-5 text-center shadow-[0_5px_18px_rgba(17,24,39,0.04)] sm:px-6 sm:py-6">
            <p className="text-[1rem] font-medium leading-8 text-[#111827] sm:text-[1.05rem]">
              Evaluation Weekends are a FOUNDING SEASON ONLY mechanism used to
              determine initial division placement. This system will not exist in
              future PTL seasons.
            </p>
          </div>
        </div>
      </section>

      <section className="ptl-section-border bg-[#F2F1ED] py-[5.25rem] sm:py-[7rem] lg:py-[8.25rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.16fr)_minmax(0,0.9fr)] lg:items-start lg:gap-x-10">
            <div className="order-2 space-y-7 lg:order-none lg:space-y-9">
              {homeCorePrincipleCards.slice(0, 2).map((item) => (
                <article
                  key={item.title}
                  className="border-t border-[#D8D3C8] pt-5 transition duration-[250ms] ease-out hover:-translate-y-0.5 lg:pt-6"
                >
                  <h3 className="font-display text-[1.25rem] font-semibold leading-[1.12] text-[#111] sm:text-[1.34rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[18rem] text-[0.875rem] leading-[1.66] text-[#555] sm:text-[0.9rem]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <article className="order-1 flex flex-col rounded-[22px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#f8f4ec_100%)] px-6 py-8 text-center shadow-[0_18px_42px_rgba(17,24,39,0.09),0_3px_12px_rgba(17,24,39,0.045)] sm:px-8 sm:py-9 lg:order-none lg:px-10 lg:py-10">
              <div className="flex justify-center">
                <EditorialRule surface="light" align="start" />
              </div>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C6A86B] sm:text-[11px] sm:tracking-[0.34em]">
                Core Principles
              </p>
              <h2 className="mt-5 font-display text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111111] sm:mt-6 sm:text-[2.4rem] lg:text-[2.72rem]">
                What Makes Premier Tennis League Different
              </h2>
              <p className="mx-auto mt-5 max-w-[28rem] text-[0.98rem] font-normal leading-[1.64] text-[#5c5c5c] sm:text-[1.02rem]">
                A team-based format that removes ratings and lets competition
                sort itself on court.
              </p>

              <div className="mt-8 flex justify-center">
                <div className="relative h-[160px] w-full max-w-[260px] sm:h-[180px] sm:max-w-[300px]">
                  <div className="absolute left-1/2 top-1/2 h-[142px] w-[142px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DCC9A0]/75 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98)_0%,rgba(250,247,241,0.94)_52%,rgba(239,231,216,0.82)_100%)] shadow-[0_10px_30px_rgba(17,24,39,0.08)] sm:h-[158px] sm:w-[158px]" />
                  <div className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A86B]/55" />
                  <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C6A86B]/35 to-transparent" />
                  <div className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#C6A86B]/25 to-transparent" />
                  <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A86B]" />
                  <div className="absolute left-1/2 top-[14px] -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8C7341]">
                    Teams
                  </div>
                  <div className="absolute bottom-[14px] left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8C7341]">
                    Movement
                  </div>
                  <div className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8C7341]">
                    Results
                  </div>
                  <div className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8C7341]">
                    Structure
                  </div>
                  <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A86B]/35 bg-white/92 shadow-[0_6px_18px_rgba(17,24,39,0.05)]">
                    <span className="font-display text-[1.2rem] font-semibold tracking-[0.08em] text-[#111827]">
                      PTL
                    </span>
                  </div>
                </div>
              </div>
            </article>

            <div className="order-3 space-y-7 lg:order-none lg:space-y-9">
              {homeCorePrincipleCards.slice(2, 4).map((item) => (
                <article
                  key={item.title}
                  className="border-t border-[#D8D3C8] pt-5 text-left transition duration-[250ms] ease-out hover:-translate-y-0.5 lg:pt-6"
                >
                  <h3 className="font-display text-[1.25rem] font-semibold leading-[1.12] text-[#111] sm:text-[1.34rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[18rem] text-[0.875rem] leading-[1.66] text-[#555] sm:text-[0.9rem]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ptl-section-border bg-[#EEEBE6] py-[5.25rem] sm:py-[7rem] lg:py-[8.25rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-x-14">
            <div className="lg:pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                How Premier Tennis League Works
              </p>
              <div className="mt-4 flex justify-start">
                <EditorialRule surface="light" align="start" />
              </div>
              <h2 className="mt-6 font-display text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#111827] sm:mt-7 sm:text-[2.55rem] lg:text-[2.85rem] lg:leading-[1.05]">
                The Founding Season application process follows a fixed launch
                calendar.
              </h2>
              <p className="mt-6 max-w-[30rem] text-base leading-[1.65] text-[#1F2933]/95 sm:mt-7 sm:text-lg sm:leading-[1.62]">
                Teams apply first, captains are vetted, evaluation weekends
                determine placement, and divisions are assigned before the season
                begins.
              </p>
              <p className="mt-5 max-w-[31rem] rounded-[16px] border border-[#E5E1D8] bg-white/75 px-4 py-4 text-[0.95rem] leading-7 text-[#1F2933]/86 shadow-[0_3px_12px_rgba(17,24,39,0.03)]">
                Evaluation Weekends are used only for Founding Season 2026, then
                regular seasonal competition takes over.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-[24rem]">
                <div className="rounded-[14px] border border-[#E5E1D8] bg-white/90 px-4 py-3 text-center shadow-[0_3px_14px_rgba(17,24,39,0.04)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                    Phase 1
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-none text-[#111827]">
                    Apply
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#E5E1D8] bg-white/90 px-4 py-3 text-center shadow-[0_3px_14px_rgba(17,24,39,0.04)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                    Phase 2
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-none text-[#111827]">
                    Vet
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#E5E1D8] bg-white/90 px-4 py-3 text-center shadow-[0_3px_14px_rgba(17,24,39,0.04)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                    Phase 3
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-none text-[#111827]">
                    Evaluate
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#E5E1D8] bg-white/90 px-4 py-3 text-center shadow-[0_3px_14px_rgba(17,24,39,0.04)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                    Phase 4
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-none text-[#111827]">
                    Assign
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href="/contact" className="btn-ptl-primary w-full sm:w-auto">
                  Apply for Founding Season
                </Link>
                <Link href="#founding-season-timeline" className="btn-ptl-secondary w-full sm:w-auto">
                  View Season Timeline
                </Link>
                <Link href="/play" className="btn-ptl-secondary w-full sm:w-auto">
                  Learn Evaluation System
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                className="pointer-events-none absolute left-[21px] top-5 bottom-5 hidden w-px bg-gradient-to-b from-[#D9C79C]/15 via-[#C6A86B]/45 to-[#D9C79C]/15 sm:block"
                aria-hidden
              />
              <div className="space-y-4 sm:space-y-5">
                {foundingSeasonSteps.map((item) => (
                  <article
                    key={item.step}
                    className="relative rounded-[18px] border border-[#E5E1D8] bg-white px-5 py-5 shadow-[0_5px_22px_rgba(17,24,39,0.075),0_1px_3px_rgba(17,24,39,0.05)] transition duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(17,24,39,0.11),0_4px_10px_rgba(17,24,39,0.05)] sm:pl-[4.75rem] sm:pr-6 sm:py-6"
                  >
                    <div className="mb-4 flex items-center gap-3 sm:absolute sm:left-5 sm:top-6 sm:mb-0 sm:flex-col sm:gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9C79C] bg-[#FBF8F1] font-sans text-[11px] font-semibold tracking-[0.08em] text-[#8C7341]">
                        {item.step}
                      </div>
                      <div
                        className="hidden h-8 w-px bg-gradient-to-b from-[#D9C79C]/0 via-[#C6A86B]/45 to-[#D9C79C]/0 sm:block"
                        aria-hidden
                      />
                    </div>
                    <div className="sm:max-w-[33rem]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                        Step {item.step}
                      </p>
                      <h3 className="mt-3 font-display text-[1.4rem] font-semibold leading-[1.12] text-[#0d1219] sm:text-[1.52rem]">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-[31rem] text-[0.9375rem] leading-[1.7] text-[#1F2933]/92 sm:text-[0.97rem]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a3344] bg-[#111827] py-[4.75rem] text-white sm:py-[6.5rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[1.4rem] border border-white/12 bg-[linear-gradient(180deg,#1a2332_0%,#141c29_100%)] px-6 py-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.34)] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
              Founding Season Applications
            </p>
            <div className="mt-4 flex justify-center">
              <EditorialRule surface="dark" align="start" />
            </div>
            <h2 className="mx-auto mt-6 max-w-[24rem] font-display text-[2rem] font-semibold leading-[1.08] text-white sm:max-w-[30rem] sm:text-[2.3rem] lg:text-[2.65rem]">
              Ready to enter PTL Founding Season 2026?
            </h2>
            <p className="mx-auto mt-6 max-w-[42rem] text-[1rem] leading-8 text-[#E8E4DC]/92 sm:text-[1.05rem]">
              Review the timeline, understand the entry process, and submit your
              application when you are ready to join the launch season.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="btn-ptl-primary">
                Apply for Founding Season
              </Link>
              <Link href="#founding-season-timeline" className="btn-ptl-secondary">
                View Season Timeline
              </Link>
              <Link href="/vision" className="btn-ptl-secondary">
                Read PTL Vision
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
