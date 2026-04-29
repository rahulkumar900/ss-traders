import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocationProvider } from "@/components/LocationProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ssconstructionsandtraders.com"),
  title: {
    default: "SS Constructions & Traders | Premium B2B Construction Marketplace",
    template: "%s | SS Constructions & Traders",
  },
  description: "The frictionless B2B marketplace for construction materials and heavy machinery. Serving contractors pan-India from Asansol, West Bengal.",
  keywords: ["construction materials", "heavy machinery rental", "B2B marketplace", "Asansol contractors", "civil contracting", "industrial supply", "TMT bars", "premium cement", "SS Constructions", "Anand Kumar Dubey"],
  authors: [{ name: "Anand Kumar Dubey" }],
  creator: "SS Constructions & Traders",
  publisher: "SS Constructions & Traders",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ssconstructionsandtraders.com",
    title: "SS Constructions & Traders | Premium B2B Construction Marketplace",
    description: "The frictionless B2B marketplace for construction materials and heavy machinery. Delivering industrial excellence across India.",
    siteName: "SS Constructions & Traders",
  },
  twitter: {
    card: "summary_large_image",
    title: "SS Constructions & Traders",
    description: "The frictionless B2B marketplace for construction materials and heavy machinery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-black min-h-screen flex flex-col`}>
        <LocationProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LocationProvider>
      </body>
    </html>
  );
}
