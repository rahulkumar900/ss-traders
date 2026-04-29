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
    default: "S S Constructions & Traders | Direct B2B Construction Material Supply",
    template: "%s | S S Constructions & Traders",
  },
  description: "India's premier B2B marketplace for construction materials & heavy machinery. Sourcing TMT steel, cement, sand, and aggregates directly from manufacturers to your site.",
  keywords: ["construction materials India", "B2B construction marketplace", "TMT steel bar suppliers", "wholesale cement supply", "sand and aggregate delivery", "heavy machinery rental", "Asansol construction company", "Anand Kumar Dubey", "industrial building materials"],
  authors: [{ name: "Anand Kumar Dubey" }],
  creator: "S S Constructions & Traders",
  publisher: "S S Constructions & Traders",
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
    title: "S S Constructions & Traders | Direct B2B Construction Material Supply",
    description: "Sourcing premium TMT steel, cement, sand, and aggregates directly from manufacturers to your construction site. Reliable B2B supply chain across India.",
    siteName: "S S Constructions & Traders",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "S S Constructions & Traders Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S S Constructions & Traders",
    description: "Premium B2B marketplace for construction materials and heavy machinery rental.",
    images: ["/twitter-image.png"],
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
