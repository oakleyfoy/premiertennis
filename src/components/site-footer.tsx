import Image from "next/image";
import Link from "next/link";

import { EditorialRule } from "@/components/editorial-rule";
import {
  contactDetails,
  footerLeagueLinks,
  footerPlayerLinks,
} from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#111827]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,#192231_0%,#121a28_100%)] px-6 py-8 shadow-[0_16px_52px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="flex justify-center pb-8 sm:pb-10">
            <EditorialRule surface="dark" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,0.95fr)_minmax(0,0.95fr)] lg:gap-x-10">
            <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-6 sm:py-7">
              <Image
                src="/assets/ptl-crest-transparent.png"
                alt="Premier Tennis League logo"
                width={88}
                height={88}
                className="h-[4.5rem] w-auto opacity-[0.96]"
              />
              <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
                A structured, team-based tennis league built around results,
                accountability, and earned movement.
              </p>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#C8A96A]/55 to-transparent" />
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/48">
                {contactDetails.launchNote}
              </p>
            </div>

            <div className="lg:pl-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                League
              </p>
              <div className="mt-5 space-y-3.5 text-sm text-[#E8E4DC]">
                {footerLeagueLinks.map((link) => (
                  <p key={`${link.label}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="font-medium transition hover:text-[#DCC9A0]"
                    >
                      {link.label}
                    </Link>
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:pl-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Players &amp; Captains
              </p>
              <div className="mt-5 space-y-3.5 text-sm text-white/76">
                {footerPlayerLinks.map((link) => (
                  <p key={`${link.label}-${link.href}`}>
                    <Link href={link.href} className="transition hover:text-[#93D0FF]">
                      {link.label}
                    </Link>
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:pl-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Contact
              </p>
              <div className="mt-5 space-y-4 text-sm text-white/62">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/34">
                    Email
                  </p>
                  <p className="mt-2">
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="transition hover:text-[#93D0FF]"
                    >
                      {contactDetails.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/34">
                    Phone
                  </p>
                  <p className="mt-2">
                    <a
                      href={`tel:${contactDetails.phone}`}
                      className="transition hover:text-[#DCC9A0]"
                    >
                      {contactDetails.phone}
                    </a>
                  </p>
                </div>
                <p className="pt-2 text-white/45">Launching in select U.S. cities</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/8 pt-5 text-[12px] text-white/36 sm:flex sm:items-center sm:justify-between">
            <p>Premier Tennis League</p>
            <p className="mt-2 sm:mt-0">Built for teams, standings, and earned movement.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
