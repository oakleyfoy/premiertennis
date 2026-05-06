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
            </div>
          </div>
        </div>
      </section>

      <section className="ptl-section-border border-t border-[#E8E4DC] bg-[#FFFCF8] py-[5.25rem] shadow-[inset_0_1px_0_rgba(255,255,255,1)] sm:py-[7rem] lg:py-[8.25rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-x-16 lg:gap-y-0">
            <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden rounded-[16px] border border-[#E5E1D8] shadow-[0_10px_40px_rgba(17,24,39,0.12),0_2px_8px_rgba(17,24,39,0.06)] lg:min-h-[360px]">
              <div className="absolute inset-0">
                <Image
                  src="/assets/why-built-court-highfive.png"
                  alt="Two partners high-fiving over the net on a hard court, celebrating teamwork and competition"
                  fill
                  className="object-cover object-[56%_100%] brightness-[1.03] contrast-[1.06] saturate-[1.02] scale-[1.1] origin-[56%_88%] sm:scale-[1.14] sm:origin-[55%_86%] lg:scale-[1.16]"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
            </div>

            <div className="flex max-w-xl flex-col lg:max-w-none">
              <div className="mb-5 flex justify-center sm:mb-6 lg:justify-start">
                <EditorialRule surface="light" align="start" />
              </div>
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A96A] lg:text-left">
                Why We Built Premier Tennis League
              </p>

              <h2 className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#0d1219] sm:mt-6 sm:text-[2.55rem] lg:text-[2.95rem] lg:leading-[1.05]">
                A better way to compete in amateur tennis.
              </h2>
              <p className="mt-7 max-w-[26rem] text-[1.02rem] leading-[1.72] text-[#1F2933]/92 lg:max-w-[27rem] lg:text-[1.055rem] lg:leading-[1.74]">
                Most leagues rely on ratings, guesswork, and artificial balance.
                <br />
                <br />
                Premier Tennis League removes that.
                <br />
                <br />
                Teams compete, results matter, and movement is earned.
              </p>

              <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                {heroBullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-[#E5E1D8] bg-white px-5 py-5 shadow-[0_5px_22px_rgba(17,24,39,0.08),0_1px_3px_rgba(17,24,39,0.05)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(17,24,39,0.12)] sm:px-6 sm:py-6"
                  >
                    <p className="text-[0.875rem] font-medium leading-[1.55] text-[#1a2330] sm:text-[0.9375rem] sm:leading-[1.58]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/league-structure"
                className="btn-ptl-primary mt-12 self-start px-6 py-2.5 text-[12.5px] font-semibold tracking-[0.04em] shadow-[0_6px_22px_rgba(8,12,20,0.38)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1a2330] hover:shadow-[0_10px_30px_rgba(8,12,20,0.48)] sm:mt-14"
              >
                View League Structure
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ptl-section-border bg-[#F2F1ED] py-[5.25rem] sm:py-[7rem] lg:py-[8.25rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)_minmax(0,1fr)] lg:grid-rows-2 lg:gap-x-10 lg:gap-y-7">
            {homeCorePrincipleCards.slice(0, 2).map((item, idx) => (
              <article
                key={item.title}
                className={`flex flex-col rounded-[18px] border border-[#E5E1D8] bg-white p-[22px] shadow-[0_5px_24px_rgba(17,24,39,0.08),0_1px_3px_rgba(17,24,39,0.05)] transition duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_14px_36px_rgba(17,24,39,0.12),0_4px_10px_rgba(17,24,39,0.06)] sm:px-[26px] sm:py-6 ${idx === 0 ? "order-2 lg:order-none lg:col-start-1 lg:row-start-1" : "order-3 lg:order-none lg:col-start-1 lg:row-start-2"}`}
              >
                <h3 className="font-display text-[1.28rem] font-semibold leading-snug text-[#111] sm:text-[1.38rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.875rem] font-normal leading-[1.68] text-[#555] sm:text-[0.9rem]">
                  {item.text}
                </p>
              </article>
            ))}

            <article className="order-1 flex h-full min-h-0 flex-col overflow-hidden rounded-[18px] border border-[#E5E1D8] bg-white shadow-[0_8px_32px_rgba(17,24,39,0.1),0_2px_8px_rgba(17,24,39,0.06)] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="flex flex-col px-6 pb-1 pt-6 text-center sm:px-8 sm:pt-7">
                <div className="flex justify-center">
                  <EditorialRule surface="light" align="start" />
                </div>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C6A86B] sm:text-[11px] sm:tracking-[0.34em]">
                  Core Principles
                </p>
                <h2 className="mt-5 font-display text-[1.85rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#111111] sm:mt-6 sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.05]">
                  What Makes Premier Tennis League Different
                </h2>
                <p className="mx-auto mt-4 max-w-[26rem] text-[0.98rem] font-normal leading-[1.62] text-[#5c5c5c] sm:mt-5 sm:text-[1.02rem]">
                  A competitive structure built on teams, results, and earned
                  movement.
                </p>
              </div>
              <div className="relative mt-5 min-h-[220px] w-full flex-1 sm:min-h-[260px] lg:mt-6 lg:min-h-[min(40vh,320px)]">
                <Image
                  src="/assets/core-principles-center.png"
                  alt="Team huddle on court: unity, accountability, and competitive spirit"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                />
              </div>
            </article>

            {homeCorePrincipleCards.slice(2, 4).map((item, idx) => (
              <article
                key={item.title}
                className={`flex flex-col rounded-[18px] border border-[#E5E1D8] bg-white p-[22px] shadow-[0_5px_24px_rgba(17,24,39,0.08),0_1px_3px_rgba(17,24,39,0.05)] transition duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_14px_36px_rgba(17,24,39,0.12),0_4px_10px_rgba(17,24,39,0.06)] sm:px-[26px] sm:py-6 ${idx === 0 ? "order-4 lg:order-none lg:col-start-3 lg:row-start-1" : "order-5 lg:order-none lg:col-start-3 lg:row-start-2"}`}
              >
                <h3 className="font-display text-[1.28rem] font-semibold leading-snug text-[#111] sm:text-[1.38rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.875rem] font-normal leading-[1.68] text-[#555] sm:text-[0.9rem]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ptl-section-border bg-[#EEEBE6] py-[5.25rem] sm:py-[7rem] lg:py-[8.25rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
              How Premier Tennis League Works
            </p>
            <div className="mt-4 flex justify-center">
              <EditorialRule surface="light" align="start" />
            </div>
            <h2 className="mt-6 font-display text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#111827] sm:mt-7 sm:text-[2.55rem] lg:text-[2.85rem] lg:leading-[1.05]">
              A structured season built around teams, standings, and earned
              movement.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.65] text-[#1F2933]/95 sm:mt-7 sm:text-lg sm:leading-[1.62]">
              The model is meant to be easy to understand and meaningful to
              compete in.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[5.25rem] lg:grid-cols-4 lg:gap-7">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="relative min-w-0">
                <article className="flex h-full flex-col rounded-[18px] border border-[#E5E1D8] bg-white px-5 py-5 shadow-[0_4px_22px_rgba(17,24,39,0.075),0_1px_2px_rgba(17,24,39,0.04)] sm:px-6 sm:py-6">
                  <p className="text-[11px] font-bold uppercase leading-none tracking-[0.2em] text-[#A8894A] sm:text-[12px] sm:tracking-[0.22em]">
                    Step {item.step}
                  </p>
                  <h3 className="mt-5 font-display text-[1.38rem] font-semibold leading-[1.14] text-[#0d1219] sm:text-[1.48rem]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-[20rem] text-[0.9375rem] leading-[1.72] text-[#1F2933]/92">
                    {item.description}
                  </p>
                </article>
                {i < howItWorks.length - 1 && (
                  <span
                    className="pointer-events-none absolute top-1/2 right-0 z-[1] hidden -translate-y-1/2 translate-x-1/2 select-none font-sans text-[11px] font-normal leading-none text-[#C8A96A]/45 lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row sm:gap-10">
            <Link
              href="/contact"
              className="text-[13px] font-semibold tracking-[0.1em] text-[#0d1219] underline decoration-[#C8A96A]/35 decoration-1 underline-offset-[6px] transition hover:decoration-[#C8A96A]/70"
            >
              Start a Team
            </Link>
            <span
              className="hidden h-4 w-px shrink-0 bg-[#C8A96A]/25 sm:block"
              aria-hidden
            />
            <Link
              href="/league-structure"
              className="text-[13px] font-semibold tracking-[0.1em] text-[#0d1219] underline decoration-[#C8A96A]/35 decoration-1 underline-offset-[6px] transition hover:decoration-[#C8A96A]/70"
            >
              View League Structure
            </Link>
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
            <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[1.25rem] border border-[#D4CFC4] shadow-[0_4px_32px_rgba(17,24,39,0.11)] sm:aspect-[16/6] lg:rounded-[1.375rem]">
              <Image
                src="/assets/home-team-huddle.png"
                alt="Tennis team huddling together before a match"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-[1.25rem] border border-[#D4CFC4] bg-white p-6 shadow-[0_4px_26px_rgba(17,24,39,0.088)] sm:p-8 lg:rounded-[1.375rem]">
              <h2 className="font-display text-2xl font-semibold text-[#0d1219] sm:text-3xl">
                This league is for
              </h2>
              <div className="mt-8 grid gap-4">
                {teamFit.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.125rem] border border-[#D9D4CA] bg-[#FFFCF8] p-4 shadow-[0_2px_14px_rgba(17,24,39,0.06)] sm:p-5"
                  >
                    <p className="text-sm leading-7 text-[#1F2933]/92 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-[#D4CFC4] bg-white p-6 shadow-[0_4px_26px_rgba(17,24,39,0.088)] sm:p-8 lg:rounded-[1.375rem]">
              <h2 className="font-display text-2xl font-semibold text-[#0d1219] sm:text-3xl">
                This league is not for
              </h2>
              <div className="mt-8 grid gap-4">
                {teamNotFit.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.125rem] border border-[#D9D4CA] bg-[#FFFCF8] p-4 shadow-[0_2px_14px_rgba(17,24,39,0.06)] sm:p-5"
                  >
                    <p className="text-sm leading-7 text-[#1F2933]/92 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a3344] bg-[#111827] py-[4.75rem] text-white sm:py-[6.5rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[1.25rem] border border-white/14 bg-[#1a2332]/92 px-6 py-10 shadow-[0_12px_48px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:rounded-[1.375rem] lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Ready to Register a Team?
              </p>
              <div className="mt-4">
                <EditorialRule surface="dark" align="start" />
              </div>
              <h2 className="mt-6 font-display text-[1.85rem] font-semibold leading-snug text-white sm:text-[2.15rem] lg:text-[2.35rem]">
                Ready to learn more or start organizing a team?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#E8E4DC]/95 sm:text-lg">
                Explore the format, learn the structure, and reach out if you
                want to organize a team or bring PTL to your city.
              </p>
              <div className="mt-8 flex justify-start">
                <EditorialRule surface="dark" align="start" />
              </div>
              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/league-structure"
                  className="inline-flex min-h-9 items-center justify-center rounded-[11px] bg-white px-[1.35rem] py-2 text-center text-[13px] font-medium tracking-[0.02em] text-[#111827] shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition hover:bg-[#F7F5F0]"
                >
                  View League Structure
                </Link>
                <Link
                  href="/captains-corner"
                  className="inline-flex min-h-9 items-center justify-center rounded-[11px] border border-white/55 bg-transparent px-[1.35rem] py-2 text-center text-[13px] font-medium tracking-[0.02em] text-white shadow-[0_2px_12px_rgba(0,0,0,0.15)] transition hover:border-white hover:bg-white/10"
                >
                  Captain&apos;s Corner
                </Link>
              </div>
            </div>

            <div className="mt-10 rounded-[1.125rem] border border-white/18 bg-[#252f3f]/95 p-6 sm:p-7 lg:mt-0 lg:rounded-[1.25rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Start a Team
              </p>
              <div className="mt-4">
                <EditorialRule surface="dark" align="start" />
              </div>
              <p className="mt-5 text-lg font-semibold text-white">
                {contactDetails.email}
              </p>
              <p className="mt-2 text-sm text-[#D4D0C8]">{contactDetails.phone}</p>
              <p className="mt-6 text-sm leading-7 text-[#C9C5BC]">
                Want to start organizing early? Reach out and PTL will keep you
                updated as launch markets are announced.
              </p>
              <Link href="/contact" className="btn-ptl-primary mt-8 w-full sm:w-auto">
                Start a Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
