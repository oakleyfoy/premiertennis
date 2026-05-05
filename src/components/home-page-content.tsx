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
      <section className="relative min-h-[72vh] overflow-hidden border-b border-[#E5E1D8]/80">
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/40 via-[#1F2933]/38 to-[#F7F5F0]/92" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-7xl items-center justify-center px-5 pb-20 pt-12 text-center sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-[2rem] uppercase leading-[1.08] tracking-[0.14em] text-white sm:text-[2.65rem] lg:text-[3.15rem]">
              Premier Tennis League
            </h1>
            <h2 className="font-display mt-4 text-[1.45rem] leading-snug text-white/95 sm:text-[1.85rem] lg:text-[2.15rem]">
              Teams. Seasons. Promotion and Relegation.
            </h2>
            <p className="mx-auto mt-9 max-w-2xl text-[0.98rem] leading-8 text-white/88 sm:text-[1.05rem]">
              A structured, team-based tennis league built around results, not
              ratings.
            </p>

            <div className="mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
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

      <section className="border-b border-[#E5E1D8]/70 bg-[#F7F5F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-[1.25rem] border border-[#E5E1D8] shadow-[0_2px_24px_rgba(17,24,39,0.06)] lg:min-h-[340px] lg:rounded-[1.375rem]">
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
              <h2 className="mt-6 font-display text-[2rem] leading-[1.15] text-[#111827] sm:text-[2.4rem] lg:text-[2.75rem]">
                A better structure for competitive amateur tennis.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#1F2933]/88 sm:text-[1.06rem]">
                Too many leagues are built around ratings, ambiguity, and low
                stakes. PTL is built around teams, seasons, standings, and
                earned outcomes.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2 sm:gap-4">
                {heroBullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.125rem] border border-[#E5E1D8] bg-white/90 p-4 shadow-[0_2px_16px_rgba(17,24,39,0.04)] sm:p-5"
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

      <section className="border-b border-[#E5E1D8]/70 bg-white py-16 sm:py-24 lg:py-28">
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
                  className="rounded-[1.25rem] border border-[#E5E1D8] bg-[#FDFCF8] p-6 shadow-[0_2px_20px_rgba(17,24,39,0.04)] sm:p-7 lg:rounded-[1.375rem]"
                >
                  <div className="h-px w-10 bg-[#C8A96A]/45" aria-hidden />
                  <h3 className="mt-4 font-display text-[1.65rem] leading-tight text-[#111827] sm:text-[1.85rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#1F2933]/88">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full lg:px-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.25rem] border border-[#E5E1D8] shadow-[0_2px_24px_rgba(17,24,39,0.06)] lg:max-w-none lg:rounded-[1.375rem]">
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
                  className="rounded-[1.25rem] border border-[#E5E1D8] bg-[#FDFCF8] p-6 shadow-[0_2px_20px_rgba(17,24,39,0.04)] sm:p-7 lg:rounded-[1.375rem]"
                >
                  <div className="h-px w-10 bg-[#C8A96A]/45" aria-hidden />
                  <h3 className="mt-4 font-display text-[1.65rem] leading-tight text-[#111827] sm:text-[1.85rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#1F2933]/88">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E5E1D8]/70 bg-[#F7F5F0] py-16 sm:py-24 lg:py-28">
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
                className="rounded-[1.25rem] border border-[#E5E1D8] bg-white p-6 shadow-[0_2px_20px_rgba(17,24,39,0.04)] sm:p-7 lg:rounded-[1.375rem]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
                  Step {item.step}
                </p>
                <h3 className="mt-3 font-display text-[1.35rem] leading-snug text-[#111827] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#1F2933]/88 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E5E1D8]/70 bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who Will Thrive in Premier Tennis League"
            title="A competitive team league built for players who value structure, accountability, and earned outcomes."
            description="PTL is not for everyone, and that is intentional."
            theme="light"
            align="center"
          />

          <div className="mt-12">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[1.25rem] border border-[#E5E1D8] shadow-[0_2px_24px_rgba(17,24,39,0.06)] sm:aspect-[16/6] lg:rounded-[1.375rem]">
              <Image
                src="/assets/home-team-huddle.png"
                alt="Tennis team huddling together before a match"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-[1.25rem] border border-[#E5E1D8] bg-[#FDFCF8] p-6 shadow-[0_2px_20px_rgba(17,24,39,0.04)] sm:p-8 lg:rounded-[1.375rem]">
              <h2 className="font-display text-2xl text-[#111827] sm:text-3xl">
                This league is for
              </h2>
              <div className="mt-8 grid gap-4">
                {teamFit.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.125rem] border border-[#E5E1D8] bg-white p-4 sm:p-5"
                  >
                    <p className="text-sm leading-7 text-[#1F2933]/90 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-[#E5E1D8] bg-[#FDFCF8] p-6 shadow-[0_2px_20px_rgba(17,24,39,0.04)] sm:p-8 lg:rounded-[1.375rem]">
              <h2 className="font-display text-2xl text-[#111827] sm:text-3xl">
                This league is not for
              </h2>
              <div className="mt-8 grid gap-4">
                {teamNotFit.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.125rem] border border-[#E5E1D8] bg-white p-4 sm:p-5"
                  >
                    <p className="text-sm leading-7 text-[#1F2933]/90 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111827] py-16 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[1.25rem] border border-white/10 bg-[#1F2933]/55 px-6 py-10 shadow-[0_2px_32px_rgba(0,0,0,0.2)] sm:px-10 sm:py-12 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:rounded-[1.375rem] lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Ready to Register a Team?
              </p>
              <div className="mt-4 h-px w-12 bg-[#C8A96A]/45" aria-hidden />
              <h2 className="mt-6 font-display text-[1.85rem] leading-snug text-white sm:text-[2.15rem] lg:text-[2.35rem]">
                Ready to learn more or start organizing a team?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
                Explore the format, learn the structure, and reach out if you
                want to organize a team or bring PTL to your city.
              </p>
              <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/league-structure"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-2.5 text-center text-sm font-semibold text-[#111827] transition hover:bg-[#F7F5F0]"
                >
                  View League Structure
                </Link>
                <Link
                  href="/captains-corner"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/35 bg-transparent px-6 py-2.5 text-center text-sm font-semibold text-white transition hover:border-white/55 hover:bg-white/8"
                >
                  Captain&apos;s Corner
                </Link>
              </div>
            </div>

            <div className="mt-10 rounded-[1.125rem] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7 lg:mt-0 lg:rounded-[1.25rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Start a Team
              </p>
              <p className="mt-5 text-lg font-semibold text-white">
                {contactDetails.email}
              </p>
              <p className="mt-2 text-sm text-white/72">{contactDetails.phone}</p>
              <p className="mt-6 text-sm leading-7 text-white/72">
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
