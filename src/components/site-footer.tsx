import Image from "next/image";
import Link from "next/link";

import {
  contactDetails,
  footerLeagueLinks,
  footerPlayerLinks,
} from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Image
            src="/assets/ptl-crest-transparent.png"
            alt="Premier Tennis League logo"
            width={88}
            height={88}
            className="h-20 w-auto"
          />
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            A structured, team-based tennis league built around results,
            accountability, and earned movement.
          </p>
          <p className="text-sm text-slate-500">{contactDetails.launchNote}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">LEAGUE</p>
          <div className="mt-4 space-y-3">
            {footerLeagueLinks.map((link) => (
              <div key={`${link.label}-${link.href}`}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">PLAYERS & CAPTAINS</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            {footerPlayerLinks.map((link) => (
              <p key={`${link.label}-${link.href}`}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">CONTACT</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition hover:text-white"
              >
                {contactDetails.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${contactDetails.phone}`}
                className="transition hover:text-white"
              >
                {contactDetails.phone}
              </a>
            </p>
            <p>Launching in select U.S. cities</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
