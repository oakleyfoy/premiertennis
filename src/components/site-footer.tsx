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
      <div className="mx-auto max-w-7xl px-5 pt-11 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="flex justify-center pb-9 sm:pb-11">
          <EditorialRule surface="dark" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-10">
          <div className="space-y-5">
            <Image
              src="/assets/ptl-crest-transparent.png"
              alt="Premier Tennis League logo"
              width={88}
              height={88}
              className="h-[4.5rem] w-auto opacity-[0.94]"
            />
            <p className="max-w-xl text-sm leading-7 text-white/58">
              A structured, team-based tennis league built around results,
              accountability, and earned movement.
            </p>
            <p className="text-sm text-white/45">{contactDetails.launchNote}</p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              League
            </p>
            <div className="mt-5 space-y-3">
              {footerLeagueLinks.map((link) => (
                <div key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/58 transition hover:text-[#C8A96A]"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              Players &amp; Captains
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/58">
              {footerPlayerLinks.map((link) => (
                <p key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#93D0FF]"
                  >
                    {link.label}
                  </Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/58">
              <p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="transition hover:text-[#93D0FF]"
                >
                  {contactDetails.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="transition hover:text-[#C8A96A]"
                >
                  {contactDetails.phone}
                </a>
              </p>
              <p className="text-white/45">Launching in select U.S. cities</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
