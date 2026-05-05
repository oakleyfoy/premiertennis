"use client";

import { usePathname } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteHeaderWhite } from "@/components/site-header-white";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isDarkHeaderComparison = pathname === "/compare-dark-bar";

  return (
    <div className="relative flex min-h-full flex-col">
      {isDarkHeaderComparison ? <SiteHeader /> : <SiteHeaderWhite />}
      <main className="flex-1 pt-[86px] lg:pt-[98px]">{children}</main>
      <SiteFooter />
    </div>
  );
}
