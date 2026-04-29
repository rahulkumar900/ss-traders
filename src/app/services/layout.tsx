import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heavy Services & Equipment",
  description: "Specialized site services including heavy machinery rental, drone surveys, and technical civil/mechanical contracting for large-scale projects.",
  openGraph: {
    title: "Heavy Services | SS Constructions",
    description: "Specialized site services including heavy machinery rental and technical contracting.",
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
