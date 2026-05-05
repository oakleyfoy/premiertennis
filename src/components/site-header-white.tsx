"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const heroOverlayHeader = pathname === "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const frostedOnHero =
    heroOverlayHeader &&
    !scrolled &&
    "border-b border-white/25 bg-[#F7F5F0]/78 backdrop-blur-md shadow-none";

  const solidBar =
    (!heroOverlayHeader || scrolled) &&
    "border-b border-[#E5E1D8] bg-[#F7F5F0]/96 backdrop-blur-sm shadow-[0_1px_0_rgba(17,24,39,0.04)]";

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`transition-colors duration-300 ${frostedOnHero || ""} ${solidBar || ""}`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-2.5 lg:gap-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3 lg:gap-5">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/assets/ptl-crest-transparent.png"
                alt="Premier Tennis League logo"
                width={96}
                height={96}
                className="h-14 w-auto lg:h-[4.25rem]"
                priority
              />
            </Link>
            <div className="hidden min-w-0 lg:block">
              <div className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.14em] text-[#1F2933]/75">
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="inline-flex items-center gap-2 transition hover:text-[#111827]"
                >
                  <PhoneIcon />
                  <span>{contactDetails.phone}</span>
                </a>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="inline-flex max-w-[220px] items-center gap-2 truncate transition hover:text-[#111827] xl:max-w-none"
                >
                  <MailIcon />
                  <span className="truncate">{contactDetails.email}</span>
                </a>
              </div>
            </div>
          </div>

          <nav className="relative z-10 hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[#111827] transition hover:text-[#C8A96A]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="btn-ptl-primary shrink-0 px-5 py-2 text-[13px]">
            Start a Team
          </Link>
        </div>
      </div>
    </header>
  );
}
