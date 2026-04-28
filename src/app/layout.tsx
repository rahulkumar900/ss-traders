import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocationProvider } from "@/components/LocationProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BuildMate | Premium B2B Construction Marketplace",
  description: "The frictionless B2B marketplace for construction materials and heavy machinery.",
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
