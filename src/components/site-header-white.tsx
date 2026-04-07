import Image from "next/image";
import Link from "next/link";

import { contactDetails, navLinks } from "@/lib/site-content";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-3.5 w-3.5 fill-current"
    >
      <path d="M5.4 2.5c.4-.4 1-.6 1.6-.4l1.8.6c.7.2 1.1.9 1 1.6l-.3 1.8c0 .4.1.8.4 1.1l2.6 2.6c.3.3.7.4 1.1.4l1.8-.3c.7-.1 1.4.3 1.6 1l.6 1.8c.2.6 0 1.2-.4 1.6l-1.2 1.2c-.8.8-1.9 1.2-3.1 1-2.6-.4-5.2-1.9-7.5-4.2C4.5 10.3 3 7.7 2.6 5.1c-.2-1.2.2-2.3 1-3.1l1.2-1.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-3.5 w-3.5 fill-current"
    >
      <path d="M2.5 4.5A1.5 1.5 0 0 1 4 3h12a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 16 17H4a1.5 1.5 0 0 1-1.5-1.5v-11Zm2 .3 5.1 3.8a.7.7 0 0 0 .8 0l5.1-3.8H4.5Zm11.5 1.9-4.7 3.5a2.2 2.2 0 0 1-2.6 0L4 6.7v8.8h12V6.7Z" />
    </svg>
  );
}

export function SiteHeaderWhite() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-300 bg-white shadow-[0_1px_0_rgba(15,23,42,0.08)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/assets/ptl-crest-transparent.png"
              alt="Premier Tennis League logo"
              width={96}
              height={96}
              className="h-20 w-auto lg:h-24"
              priority
            />
          </Link>
          <div className="hidden min-w-0 lg:block">
            <div className="flex items-center gap-6 text-xs font-semibold text-[#1f5f8f]">
              <a
                href={`tel:${contactDetails.phone}`}
                className="inline-flex items-center gap-2 transition hover:text-black"
              >
                <PhoneIcon />
                <span>{contactDetails.phone}</span>
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                className="inline-flex items-center gap-2 transition hover:text-black"
              >
                <MailIcon />
                <span>{contactDetails.email}</span>
              </a>
            </div>
          </div>
        </div>

        <nav className="relative z-10 hidden flex-1 items-center justify-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="pointer-events-auto border-b-2 border-transparent pb-1 text-[16px] font-black tracking-[0.01em] transition hover:border-[#123e63] hover:text-[#123e63]"
              style={{ color: "#0b1f57" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="shrink-0 rounded-full border border-[#8ec5f2] bg-[#8ec5f2] px-6 py-2.5 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(142,197,242,0.2)] transition hover:bg-[#9fd0f7]"
        >
          Start a Team
        </Link>
      </div>
    </header>
  );
}
