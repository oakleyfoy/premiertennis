import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
import { SectionHeading } from "@/components/section-heading";
import {
  contactDetails,
  heroBullets,
  howItWorks,
  leaguePillars,
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
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-x-20">
            <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-[18px] border border-[#E5E1D8] shadow-[0_6px_36px_rgba(17,24,39,0.09),0_1px_3px_rgba(17,24,39,0.05)] lg:min-h-[340px]">
              <Image
                src="/assets/hero-court.jpeg"
                alt="Competitive hard court tennis facility for structured league play"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>

            <div className="flex max-w-xl flex-col lg:max-w-none">
              <div className="mb-5 flex justify-center sm:mb-6 lg:justify-start">
                <EditorialRule surface="light" align="start" />
              </div>
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A96A] lg:text-left">
                Why We Built Premier Tennis League
              </p>

              <h2 className="mt-5 font-display text-[2.15rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#0d1219] sm:mt-6 sm:text-[2.55rem] lg:text-[2.95rem] lg:leading-[1.05]">
                A better structure for competitive amateur tennis.
              </h2>
              <p className="mt-7 max-w-[26rem] text-[1.02rem] leading-[1.72] text-[#1F2933]/92 lg:max-w-[27rem] lg:text-[1.055rem] lg:leading-[1.74]">
                Too many leagues are built around ratings, ambiguity, and low
                stakes. PTL is built around teams, seasons, standings, and
                earned outcomes.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {heroBullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-[#E5E1D8] bg-white px-4 py-3.5 shadow-[0_2px_14px_rgba(17,24,39,0.045)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(17,24,39,0.09)] sm:px-4 sm:py-4"
                  >
                    <p className="text-[0.8125rem] leading-[1.58] text-[#1F2933]/92 sm:text-sm sm:leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/league-structure"
                className="btn-ptl-primary mt-12 self-start px-5 py-[0.42rem] text-[12px] tracking-[0.04em] sm:mt-14"
              >
                View League Structure
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ptl-section-border bg-white py-[4.75rem] sm:py-[6.5rem] lg:py-[7.75rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Makes Premier Tennis League Different"
            title="Team-Built, Not Rating-Built"
            description="Captains build teams from friends, partners, and mixed experience levels. There are no ratings, caps, or algorithms separating players. Teams rise or fall together."
            theme="light"
            align="center"
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.92fr_1fr] lg:items-center lg:gap-10">
            <div className="grid gap-5">
              {leaguePillars.slice(0, 2).map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-[#D4CFC4] bg-[#FFFDF9] p-6 shadow-[0_4px_26px_rgba(17,24,39,0.085)] sm:p-7 lg:rounded-[1.375rem]"
                >
                  <div className="h-px w-10 bg-[#C8A96A]/45" aria-hidden />
                  <h3 className="mt-4 font-display text-[1.65rem] font-semibold leading-tight text-[#0d1219] sm:text-[1.85rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#1F2933]/92">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full lg:px-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.25rem] border border-[#D4CFC4] shadow-[0_4px_32px_rgba(17,24,39,0.11)] lg:max-w-none lg:rounded-[1.375rem]">
                <Image
                  src="/assets/player-portrait.jpg"
                  alt="Tennis player portrait on court"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="grid gap-5">
              {leaguePillars.slice(2).map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-[#D4CFC4] bg-[#FFFDF9] p-6 shadow-[0_4px_26px_rgba(17,24,39,0.085)] sm:p-7 lg:rounded-[1.375rem]"
                >
                  <div className="h-px w-10 bg-[#C8A96A]/45" aria-hidden />
                  <h3 className="mt-4 font-display text-[1.65rem] font-semibold leading-tight text-[#0d1219] sm:text-[1.85rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#1F2933]/92">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ptl-section-border bg-[#EBEAE6] py-[4.75rem] sm:py-[6.5rem] lg:py-[7.75rem]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How Premier Tennis League Works"
            title="A structured season built around teams, standings, and earned movement."
            description="The model is meant to be easy to understand and meaningful to compete in."
            theme="light"
            align="center"
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.25rem] border border-[#D4CFC4] bg-white p-6 shadow-[0_4px_26px_rgba(17,24,39,0.09)] sm:p-7 lg:rounded-[1.375rem]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
                  Step {item.step}
                </p>
                <h3 className="mt-3 font-display text-[1.35rem] font-semibold leading-snug text-[#0d1219] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#1F2933]/92 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </div>
            ))}
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
