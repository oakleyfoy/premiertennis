import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
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
      <body className="min-h-full bg-[#F7F5F0] text-[#111827]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
