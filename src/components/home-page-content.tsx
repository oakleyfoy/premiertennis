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
      <section className="relative min-h-[74vh] overflow-hidden border-b border-white/10">
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
          <div className="absolute inset-0 bg-slate-950/42" />
        </div>

        <div className="relative mx-auto flex min-h-[74vh] w-full max-w-7xl items-center justify-center px-6 pb-24 pt-16 text-center lg:px-8">
          <div className="max-w-5xl">
            <h1 className="font-display text-[3.5rem] leading-none tracking-[0.02em] text-white sm:text-[4.5rem] lg:text-[5.2rem]">
              PREMIER TENNIS LEAGUE
            </h1>
            <h2 className="font-display mt-3 text-[2.35rem] leading-tight tracking-[0.01em] text-white sm:text-[3rem] lg:text-[3.35rem]">
              Teams. Seasons. Promotion and Relegation.
            </h2>
            <p className="mx-auto mt-12 max-w-3xl text-[1.05rem] leading-9 text-white/90 sm:text-[1.15rem]">
              A structured, team-based tennis league built around results, not
              ratings.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/league-structure"
                className="min-w-[260px] rounded-full border-2 border-white/35 bg-[#8ec5f2] px-10 py-4 text-center text-[1.05rem] font-semibold text-white shadow-[0_6px_18px_rgba(142,197,242,0.22)] transition hover:bg-[#9fd0f7]"
              >
                View League Structure
              </Link>
              <Link
                href="/play"
                className="min-w-[230px] rounded-full border-2 border-white/35 bg-[#8ec5f2] px-10 py-4 text-center text-[1.05rem] font-semibold text-white shadow-[0_6px_18px_rgba(142,197,242,0.22)] transition hover:bg-[#9fd0f7]"
              >
                Explore Formats
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[340px] overflow-hidden rounded-[2.25rem]">
              <Image
                src="/assets/home-community-team.png"
                alt="Tennis players sitting together between matches"
                fill
                className="object-cover"
              />
            </div>

            <div className="max-w-2xl">
              <p className="font-display text-[1rem] tracking-[0.16em] text-[#0b1f57] uppercase">
                Why We Built Premier Tennis League
              </p>
              <h2 className="mt-5 font-display text-[2.6rem] leading-tight text-[#121826] sm:text-[3rem]">
                A better structure for competitive amateur tennis.
              </h2>
              <p className="mt-6 text-[1.06rem] leading-8 text-slate-600">
                Too many leagues are built around ratings, ambiguity, and low
                stakes. PTL is built around teams, seasons, standings, and
                earned outcomes.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {heroBullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/league-structure"
                className="mt-8 inline-flex rounded-full border border-[#8ec5f2] bg-[#8ec5f2] px-8 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(142,197,242,0.3)] transition hover:bg-[#9fd0f7]"
              >
                View League Structure
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Makes Premier Tennis League Different"
            title="Team-Built, Not Rating-Built"
            description="Captains build teams from friends, partners, and mixed experience levels. There are no ratings, caps, or algorithms separating players. Teams rise or fall together."
            theme="light"
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.92fr_1fr] lg:items-center">
            <div className="grid gap-5">
              {leaguePillars.slice(0, 2).map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7"
                >
                  <h3 className="text-[1.8rem] leading-tight font-semibold text-[#121826]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:px-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem]">
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
                  className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7"
                >
                  <h3 className="text-[1.8rem] leading-tight font-semibold text-[#121826]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How Premier Tennis League Works"
            title="A structured season built around teams, standings, and earned movement."
            description="The model is meant to be easy to understand and meaningful to compete in."
            theme="light"
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7"
              >
                <h3 className="text-2xl font-semibold text-[#121826]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who Will Thrive in Premier Tennis League"
            title="A competitive team league built for players who value structure, accountability, and earned outcomes."
            description="PTL is not for everyone, and that is intentional."
            theme="light"
            align="center"
          />

          <div className="mt-12">
            <div className="relative mx-auto aspect-[16/6] max-w-5xl overflow-hidden rounded-[2.25rem]">
              <Image
                src="/assets/home-team-huddle.png"
                alt="Tennis team huddling together before a match"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8">
              <h2 className="text-3xl font-semibold tracking-tight text-[#121826]">
                This league is for
              </h2>
              <div className="mt-8 grid gap-4">
                {teamFit.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8">
              <h2 className="text-3xl font-semibold tracking-tight text-[#121826]">
                This league is not for
              </h2>
              <div className="mt-8 grid gap-4">
                {teamNotFit.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-[#eef6fd] px-8 py-12 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:px-10">
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-[#0b1f57] uppercase">
              Ready to Register a Team?
            </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-[#121826] sm:text-4xl">
                Ready to learn more or start organizing a team?
            </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Explore the format, learn the structure, and reach out if you
                want to organize a team or bring PTL to your city.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/league-structure"
                  className="inline-flex rounded-full border border-[#8ec5f2] bg-[#8ec5f2] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9fd0f7]"
                >
                  View League Structure
                </Link>
                <Link
                  href="/captains-corner"
                  className="inline-flex rounded-full border border-[#c4d8ea] bg-white px-6 py-3 text-sm font-semibold text-[#0b1f57] transition hover:bg-slate-50"
                >
                  Captain&apos;s Corner
                </Link>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#cfe3f5] bg-white p-6 lg:mt-0">
              <p className="text-sm font-semibold tracking-[0.22em] text-[#0b1f57] uppercase">
                Start a Team
              </p>
              <p className="mt-4 text-lg font-semibold text-[#121826]">
                {contactDetails.email}
              </p>
              <p className="mt-2 text-slate-600">{contactDetails.phone}</p>
              <p className="mt-6 text-sm leading-7 text-slate-600">
                Want to start organizing early? Reach out and PTL will keep you
                updated as launch markets are announced.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full border border-[#8ec5f2] bg-[#8ec5f2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9fd0f7]"
              >
                Start a Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
