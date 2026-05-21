import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import Script from "next/script";
import "./globals.css";

import { SiteShell } from "@/components/site-shell";

const GOOGLE_TAG_ID = "G-5ST6HZWQNC";

export const metadata: Metadata = {
  title: {
    default: "Premier Tennis League",
    template: "%s | Premier Tennis League",
  },
  description:
    "Premier Tennis League is a structured, team-based tennis league built around results, seasons, and earned movement.",
  icons: {
    icon: "/assets/ptl-crest-transparent.png",
    shortcut: "/assets/ptl-crest-transparent.png",
    apple: "/assets/ptl-crest-transparent.png",
  },
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_TAG_ID}');
        `}
      </Script>
    </html>
  );
}
