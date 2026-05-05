import Image from "next/image";
import Link from "next/link";

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
      <section className="relative min-h-[72vh] overflow-hidden border-b border-[#D4CFC4]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full scale-[1.04] object-cover contrast-[1.06] saturate-[1.07]"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/hero-court.jpeg"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Cinematic depth: darker vignette, clearer center, no pale wash */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_92%_82%_at_50%_46%,rgba(17,24,39,0.06)_0%,rgba(17,24,39,0.42)_55%,rgba(10,14,22,0.78)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#111827]/58 via-[#15202f]/22 via-[48%] to-[#121826]/58"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f141d]/50 from-[0%] via-transparent via-[32%] to-transparent"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-7xl items-center justify-center px-5 pb-20 pt-10 text-center sm:px-6 lg:px-8">
          <div className="max-w-[42rem] lg:max-w-4xl">
            <h1 className="font-display text-[2.45rem] font-semibold uppercase leading-[1.02] tracking-[0.11em] text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.55)] sm:text-[3.1rem] lg:text-[3.55rem] xl:text-[3.85rem]">
              Premier Tennis League
            </h1>
            <h2 className="font-display mt-2 text-[1.55rem] leading-[1.14] tracking-[0.01em] text-[#F7F4EC] drop-shadow-[0_3px_22px_rgba(0,0,0,0.48)] sm:mt-2 sm:text-[2rem] lg:text-[2.4rem]">
              Teams. Seasons. Promotion and Relegation.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[1rem] font-medium leading-8 tracking-[0.01em] text-[#EDE9DF] drop-shadow-[0_2px_14px_rgba(0,0,0,0.42)] sm:mt-8 sm:text-[1.07rem]">
              A structured, team-based tennis league built around results, not
              ratings.
            </p>

            <div className="mt-9 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
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

      <section className="ptl-section-border bg-[#FFFCF8] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-[1.25rem] border border-[#D4CFC4] shadow-[0_4px_32px_rgba(17,24,39,0.11),0_1px_3px_rgba(17,24,39,0.07)] lg:min-h-[340px] lg:rounded-[1.375rem]">
              <Image
                src="/assets/home-community-team.png"
                alt="Tennis players sitting together between matches"
                fill
                className="object-cover"
              />
            </div>

            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Why We Built Premier Tennis League
              </p>
              <div className="mt-4 h-px w-12 bg-[#C8A96A]/55" aria-hidden />
              <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] text-[#0d1219] sm:text-[2.45rem] lg:text-[2.8rem]">
                A better structure for competitive amateur tennis.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#1F2933]/92 sm:text-[1.06rem]">
                Too many leagues are built around ratings, ambiguity, and low
                stakes. PTL is built around teams, seasons, standings, and
                earned outcomes.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2 sm:gap-4">
                {heroBullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.125rem] border border-[#D4CFC4] bg-white p-4 shadow-[0_3px_22px_rgba(17,24,39,0.08)] sm:p-5"
                  >
                    <p className="text-sm leading-7 text-[#1F2933]/90">{item}</p>
                  </div>
                ))}
              </div>

              <Link href="/league-structure" className="btn-ptl-primary mt-9">
                View League Structure
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ptl-section-border bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Makes Premier Tennis League Different"
            title="Team-Built, Not Rating-Built"
            description="Captains build teams from friends, partners, and mixed experience levels. There are no ratings, caps, or algorithms separating players. Teams rise or fall together."
            theme="light"
            align="center"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.92fr_1fr] lg:items-center lg:gap-10">
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

      <section className="ptl-section-border bg-[#EBEAE6] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How Premier Tennis League Works"
            title="A structured season built around teams, standings, and earned movement."
            description="The model is meant to be easy to understand and meaningful to compete in."
            theme="light"
            align="center"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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

      <section className="ptl-section-border bg-[#FAFAF8] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who Will Thrive in Premier Tennis League"
            title="A competitive team league built for players who value structure, accountability, and earned outcomes."
            description="PTL is not for everyone, and that is intentional."
            theme="light"
            align="center"
          />

          <div className="mt-12">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[1.25rem] border border-[#D4CFC4] shadow-[0_4px_32px_rgba(17,24,39,0.11)] sm:aspect-[16/6] lg:rounded-[1.375rem]">
              <Image
                src="/assets/home-team-huddle.png"
                alt="Tennis team huddling together before a match"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
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

      <section className="border-t border-[#2a3344] bg-[#111827] py-16 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[1.25rem] border border-white/14 bg-[#1a2332]/92 px-6 py-10 shadow-[0_12px_48px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:rounded-[1.375rem] lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Ready to Register a Team?
              </p>
              <div className="mt-4 h-px w-12 bg-[#C8A96A]/45" aria-hidden />
              <h2 className="mt-6 font-display text-[1.85rem] font-semibold leading-snug text-white sm:text-[2.15rem] lg:text-[2.35rem]">
                Ready to learn more or start organizing a team?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#E8E4DC]/95 sm:text-lg">
                Explore the format, learn the structure, and reach out if you
                want to organize a team or bring PTL to your city.
              </p>
              <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
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
