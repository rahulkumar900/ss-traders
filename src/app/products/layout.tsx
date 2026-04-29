import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materials Catalog",
  description: "Browse our comprehensive catalog of premium construction materials. Get real-time quotations for cement, steel, aggregates, wood, and more.",
  openGraph: {
    title: "Materials Catalog | SS Constructions",
    description: "Browse our comprehensive catalog of premium construction materials.",
  }
};

export default function MaterialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
