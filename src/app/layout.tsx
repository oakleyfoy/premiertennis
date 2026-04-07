import type { Metadata } from "next";
import "./globals.css";

import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Premier Tennis League",
    template: "%s | Premier Tennis League",
  },
  description:
    "Premier Tennis League is a structured, team-based tennis league built around results, seasons, and earned movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 text-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
