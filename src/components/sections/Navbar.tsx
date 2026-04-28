"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl py-3 border-b border-neutral-100 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-28 md:h-12 md:w-36 overflow-hidden">
            <Image
              src="/LOGO.jpeg"
              alt="SS Constructions Logo"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-neutral-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all text-sm font-semibold tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="ml-4">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 shadow-lg shadow-orange-500/20 font-bold transition-all h-11 border-none">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-neutral-900 p-2 bg-neutral-100 rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[calc(100%+12px)] left-4 right-4 bg-white rounded-[24px] border border-neutral-100 p-8 flex flex-col gap-6 shadow-2xl animate-in fade-in zoom-in-95 duration-500">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-900 hover:text-orange-600 text-xl font-bold tracking-tight border-b border-neutral-50 pb-4 last:border-none"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full py-7 w-full text-lg font-bold">
              Contact Now
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
