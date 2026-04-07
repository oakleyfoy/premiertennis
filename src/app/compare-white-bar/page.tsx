import type { Metadata } from "next";

import { HomePageContent } from "@/components/home-page-content";

export const metadata: Metadata = {
  title: "Compare White Bar",
  description:
    "Comparison version of the homepage using a white header bar treatment.",
};

export default function CompareWhiteBarPage() {
  return <HomePageContent />;
}
