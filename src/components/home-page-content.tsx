import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
import { SectionHeading } from "@/components/section-heading";
import {
  contactDetails,
  heroBullets,
  homeCorePrincipleCards,
  howItWorks,
  teamFit,
  teamNotFit,
  whoPtlIsForCards,
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
            className="w-full max-w-[700px] rounded-[18px] border border-[rgba(255,255,255,0.18)] bg-[rgba(15,20,30,0.55)] px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:max-w-[760px] sm:rounded-[20px] sm:px-[50px] sm:py-[60px] lg:max-w-[820px] lg:rounded-[22px] lg:px-[60px] lg:py-[80px]"
          >
            <div className="mb-7 flex justify-center sm:mb-8">
              <EditorialRule surface="dark" />
            </div>
            <h1 className="font-display text-[2.35rem] font-semibold uppercase leading-[1.06] tracking-[0.1em] text-white sm:text-[2.85rem] lg:text-[3.25rem] [text-shadow:0_2px_18px_rgba(0,0,0,0.45),0_1px_2px_rgba(0,0,0,0.35)]">
              Premier Tennis League
            </h1>
            <h2 className="font-display mt-4 text-[1.35rem] leading-snug tracking-[0.02em] text-white sm:text-[1.55rem] lg:text-[1.85rem] [text-shadow:0_2px_14px_rgba(0,0,0,0.4),0_1px_1px_rgba(0,0,0,0.28)]">
              Teams. Seasons. Promotion and Relegation.
            </h2>
            <p className="mx-auto mt-7 max-w-xl font-sans text-[0.8125rem] font-normal leading-[1.65] tracking-[0.03em] text-white/88 sm:mt-8 sm:text-sm lg:text-[0.9375rem] [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]">
              A structured, team-based tennis league built around results, not
              ratings.
            </p>

            <div className="mt-10 flex justify-center sm:mt-11">
              <EditorialRule surface="dark" />
            </div>

            <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link href="/league-structure" className="btn-ptl-hero-primary w-full sm:w-auto sm:min-w-[200px]">
                View League Structure
              </Link>
              <Link href="/play" className="btn-ptl-hero-secondary w-full sm:w-auto sm:min-w-[180px]">
                Explore Formats
              </Link>
              <Link href="/vision" className="btn-ptl-hero-secondary w-full sm:w-auto sm:min-w-[180px]">
                PTL Vision
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
                  <p>Teams compete, results matter, and movement is earned.</p>
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
                  href="/league-structure"
                  className="btn-ptl-primary px-6 py-2.5 text-[12.5px] font-semibold tracking-[0.04em] shadow-[0_6px_22px_rgba(8,12,20,0.38)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1a2330] hover:shadow-[0_10px_30px_rgba(8,12,20,0.48)]"
                >
                  View League Structure
                </Link>
                <Link href="/vision" className="btn-ptl-secondary px-6 py-2.5 text-[12.5px]">
                  Read PTL Vision
                </Link>
              </div>
            </div>
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
                A competitive structure built on teams, results, and earned
                movement.
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
                A structured season built around teams, standings, and earned
                movement.
              </h2>
              <p className="mt-6 max-w-[30rem] text-base leading-[1.65] text-[#1F2933]/95 sm:mt-7 sm:text-lg sm:leading-[1.62]">
                The model is meant to be easy to understand and meaningful to
                compete in.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-[24rem]">
                <div className="rounded-[14px] border border-[#E5E1D8] bg-white/90 px-4 py-3 text-center shadow-[0_3px_14px_rgba(17,24,39,0.04)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                    Phase 1
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-none text-[#111827]">
                    Form
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#E5E1D8] bg-white/90 px-4 py-3 text-center shadow-[0_3px_14px_rgba(17,24,39,0.04)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                    Phase 2
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-none text-[#111827]">
                    Play
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#E5E1D8] bg-white/90 px-4 py-3 text-center shadow-[0_3px_14px_rgba(17,24,39,0.04)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                    Phase 3
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-none text-[#111827]">
                    Standings
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#E5E1D8] bg-white/90 px-4 py-3 text-center shadow-[0_3px_14px_rgba(17,24,39,0.04)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                    Phase 4
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] leading-none text-[#111827]">
                    Movement
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href="/contact" className="btn-ptl-primary w-full sm:w-auto">
                  Start a Team
                </Link>
                <Link href="/league-structure" className="btn-ptl-secondary w-full sm:w-auto">
                  View League Structure
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                className="pointer-events-none absolute left-[21px] top-5 bottom-5 hidden w-px bg-gradient-to-b from-[#D9C79C]/15 via-[#C6A86B]/45 to-[#D9C79C]/15 sm:block"
                aria-hidden
              />
              <div className="space-y-4 sm:space-y-5">
                {howItWorks.map((item) => (
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

      <section className="ptl-section-border bg-white py-[5.25rem] sm:py-[7rem] lg:py-[8.25rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center">
              <EditorialRule surface="light" align="start" />
            </div>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C6A86B] sm:mt-6 sm:text-[11px] sm:tracking-[0.3em]">
              Who Premier Tennis League Is For
            </p>
            <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#111111] sm:mt-7 sm:text-[2.35rem] lg:text-[2.7rem] lg:leading-[1.03]">
              Built for players who want more than casual tennis.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-[1.65] text-[#5c5c5c] sm:text-[1.055rem]">
              This league is designed for competitors who value structure, team
              play, and real outcomes.
            </p>
          </div>

          <div className="mt-16 rounded-[22px] border border-[#E5E1D8] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f0_100%)] p-4 shadow-[0_10px_34px_rgba(17,24,39,0.06),0_2px_10px_rgba(17,24,39,0.035)] sm:mt-18 sm:p-5 lg:mt-20 lg:p-6">
            <div className="grid grid-cols-1 overflow-hidden rounded-[18px] border border-[#E7E2D8] bg-white lg:grid-cols-3">
              {whoPtlIsForCards.map((card, idx) => (
                <article
                  key={card.title}
                  className={`px-5 py-6 sm:px-6 sm:py-7 ${idx < whoPtlIsForCards.length - 1 ? "border-b border-[#EAE5DC] lg:border-b-0 lg:border-r" : ""}`}
                >
                  <div
                    className="h-px w-11 bg-gradient-to-r from-[#C6A86B]/7 via-[#C6A86B]/65 to-transparent"
                    aria-hidden
                  />
                  <h3 className="mt-4 font-display text-[1.28rem] font-semibold leading-[1.14] text-[#111] sm:text-[1.38rem]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[0.9rem] leading-[1.72] text-[#555] sm:text-[0.96rem]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-[18px] border border-[#E5E1D8] bg-[#FBF8F1] px-5 py-5 text-center shadow-[0_5px_18px_rgba(17,24,39,0.04)] sm:mt-10 sm:px-6 sm:py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
              The Fit
            </p>
            <p className="mt-3 font-display text-[1.4rem] leading-[1.22] text-[#111827] sm:text-[1.58rem]">
              If you want structure, competition, and team-based tennis,
              you&apos;ll fit here.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/contact" className="btn-ptl-primary w-full sm:w-auto">
                Start a Team
              </Link>
              <Link href="/cities" className="btn-ptl-secondary w-full sm:w-auto">
                Find a League Near You
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ptl-section-border bg-[#FAFAF8] py-[4.75rem] sm:py-[6.5rem] lg:py-[7.75rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who Will Thrive in Premier Tennis League"
            title="A competitive team league built for players who value structure, accountability, and earned outcomes."
            description="PTL is not for everyone, and that is intentional."
            theme="light"
            align="center"
          />

          <div className="mt-14">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[1.25rem] border border-[#D4CFC4] shadow-[0_10px_40px_rgba(17,24,39,0.12),0_2px_8px_rgba(17,24,39,0.05)] sm:aspect-[16/6] lg:rounded-[1.375rem]">
              <Image
                src="/assets/home-team-huddle.png"
                alt="Tennis team huddling together before a match"
                fill
                className="object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(8,12,20,0.18)] via-transparent to-[rgba(8,12,20,0.02)]"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[rgba(15,20,30,0.62)] px-5 py-4 backdrop-blur-[2px] sm:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                  Team Standard
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/90 sm:text-[0.95rem]">
                  PTL is built for players who want to commit, compete, and let
                  results decide what comes next.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
            <article className="rounded-[1.375rem] border border-[#D9D4CA] bg-[linear-gradient(180deg,#fffefb_0%,#faf7f1_100%)] p-6 shadow-[0_8px_28px_rgba(17,24,39,0.08),0_2px_8px_rgba(17,24,39,0.04)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8894A]">
                This League Is For
              </p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-[#0d1219] sm:text-[2.25rem]">
                Players and teams who want earned competition.
              </h2>
              <div className="mt-8 space-y-3">
                {teamFit.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-[#DED8CD] bg-white/92 px-4 py-4 shadow-[0_2px_12px_rgba(17,24,39,0.04)] sm:px-5"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-[0.4rem] h-[7px] w-[7px] shrink-0 rounded-full bg-[#C6A86B]"
                        aria-hidden
                      />
                      <p className="text-sm leading-7 text-[#1F2933]/92 sm:text-[0.98rem]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[1.375rem] border border-[#273243] bg-[#111827] p-6 shadow-[0_10px_34px_rgba(0,0,0,0.2),0_2px_10px_rgba(0,0,0,0.14)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                This League Is Not For
              </p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] text-white sm:text-[2.25rem]">
                Players looking for flexibility without consequence.
              </h2>
              <div className="mt-8 space-y-3">
                {teamNotFit.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-white/12 bg-white/5 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-5"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-[0.4rem] h-[7px] w-[7px] shrink-0 rounded-full bg-[#DCC9A0]"
                        aria-hidden
                      />
                      <p className="text-sm leading-7 text-white/84 sm:text-[0.98rem]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-[#D7CFBF] bg-[linear-gradient(180deg,#f7f2e8_0%,#efe8dc_100%)] py-[4.75rem] sm:py-[6.5rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#D9D0C0] bg-[#111827] shadow-[0_18px_56px_rgba(17,24,39,0.2),0_4px_14px_rgba(17,24,39,0.08)]">
            <div className="lg:grid lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]">
              <div className="relative overflow-hidden px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,201,160,0.2),transparent_34%),linear-gradient(180deg,#182131_0%,#101722_100%)]"
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex justify-start">
                    <EditorialRule surface="dark" align="start" />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DCC9A0]">
                    PTL Vision
                  </p>
                  <h2 className="mt-6 max-w-[12ch] font-display text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-[2.7rem] lg:text-[3.1rem]">
                    Bigger than a local league.
                  </h2>
                  <p className="mt-6 max-w-[30rem] text-[1rem] leading-8 text-white/84">
                    PTL is being built as a long-term team tennis ecosystem with
                    real identity, real rivalries, and a structure players can
                    stay invested in for years.
                  </p>

                  <div className="mt-8 grid max-w-[28rem] grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {[
                      "Real teams and lasting club identity",
                      "Promotion races and historical continuity",
                      "A future path to destination Premier events",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[15px] border border-white/10 bg-white/[0.05] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                      >
                        <p className="text-sm leading-6 text-white/88">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 bg-[linear-gradient(180deg,#fbf8f1_0%,#f4ecdf_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8894A]">
                  What The Vision Adds
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Beyond weekly play",
                      text: "The vision lays out where PTL can go over time, not just how the format works today.",
                    },
                    {
                      title: "A deeper sports experience",
                      text: "Standings, rivalries, records, streaks, and team history become part of the league story.",
                    },
                    {
                      title: "A longer horizon",
                      text: "It frames PTL as something clubs, captains, players, and cities can help shape from the start.",
                    },
                  ].map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[17px] border border-[#E6DECF] bg-white px-5 py-5 shadow-[0_6px_18px_rgba(17,24,39,0.05),0_2px_8px_rgba(17,24,39,0.03)]"
                    >
                      <div
                        className="h-px w-11 bg-gradient-to-r from-[#C6A86B]/70 to-transparent"
                        aria-hidden
                      />
                      <h3 className="mt-4 font-display text-[1.35rem] font-semibold leading-[1.14] text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[28rem] text-[0.95rem] leading-7 text-[#1F2933]/82">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link href="/vision" className="btn-ptl-primary">
                    Read PTL Vision
                  </Link>
                  <Link href="/about" className="btn-ptl-secondary">
                    Why PTL Exists
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a3344] bg-[#111827] py-[4.75rem] text-white sm:py-[6.5rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[1.4rem] border border-white/12 bg-[linear-gradient(180deg,#1a2332_0%,#141c29_100%)] shadow-[0_18px_60px_rgba(0,0,0,0.34)]">
            <div className="lg:grid lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)]">
              <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                  Ready to Register a Team?
                </p>
                <div className="mt-4">
                  <EditorialRule surface="dark" align="start" />
                </div>
                <h2 className="mt-6 max-w-[24rem] font-display text-[2rem] font-semibold leading-[1.08] text-white sm:text-[2.3rem] lg:max-w-[28rem] lg:text-[2.65rem]">
                  Ready to learn more or start organizing a team?
                </h2>
                <p className="mt-6 max-w-[38rem] text-[1rem] leading-8 text-[#E8E4DC]/92 sm:text-[1.05rem]">
                  Explore the format, learn the structure, and reach out if you
                  want to organize a team or bring PTL to your city.
                </p>

                <div className="mt-8 grid max-w-[28rem] grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                      League Format
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/88">
                      Teams, standings, and earned movement.
                    </p>
                  </div>
                  <div className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                      Launch Timing
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/88">
                      Early outreach helps organize before pilot markets open.
                    </p>
                  </div>
                </div>

                <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-10 min-w-[148px] items-center justify-center rounded-[12px] border border-[#F7F5F0]/90 px-[1.45rem] py-2.5 text-center text-[13px] font-semibold tracking-[0.02em] shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5"
                    style={{ backgroundColor: "#F7F5F0", color: "#111827" }}
                  >
                    <span style={{ color: "#111827" }}>Start a Team</span>
                  </Link>
                  <Link
                    href="/captains-corner"
                    className="inline-flex min-h-10 items-center justify-center rounded-[12px] border border-white/28 bg-transparent px-[1.45rem] py-2.5 text-center text-[13px] font-medium tracking-[0.02em] text-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition hover:border-white/55 hover:bg-white/8"
                  >
                    Captain&apos;s Corner
                  </Link>
                  <Link
                    href="/vision"
                    className="inline-flex min-h-10 items-center justify-center rounded-[12px] border border-white/16 bg-white/[0.045] px-[1.45rem] py-2.5 text-center text-[13px] font-medium tracking-[0.02em] text-white/92 transition hover:bg-white/[0.08]"
                  >
                    PTL Vision
                  </Link>
                  <Link
                    href="/league-structure"
                    className="inline-flex min-h-10 items-center justify-center rounded-[12px] border border-white/16 bg-white/[0.045] px-[1.45rem] py-2.5 text-center text-[13px] font-medium tracking-[0.02em] text-white/92 transition hover:bg-white/[0.08]"
                  >
                    View League Structure
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/[0.035] px-6 py-8 sm:px-10 sm:py-10 lg:border-l lg:border-t-0 lg:px-8 xl:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                  Start a Team
                </p>
                <div className="mt-4">
                  <EditorialRule surface="dark" align="start" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-[14px] border border-white/10 bg-[#273244]/78 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCC9A0]">
                      Email
                    </p>
                    <p className="mt-2 text-[1rem] font-semibold text-white sm:text-[1.05rem]">
                      {contactDetails.email}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-[#C9C5BC]">
                  Want to start organizing early? Reach out and PTL will keep you
                  updated as launch markets are announced.
                </p>
                <Link href="/contact" className="btn-ptl-primary mt-8 w-full">
                  Start a Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
