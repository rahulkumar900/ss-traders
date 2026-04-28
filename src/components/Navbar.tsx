"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocation, LOCATIONS } from "./LocationProvider";
import { MapPin, Menu } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/materials", label: "Materials" },
  { href: "/services", label: "Services" },
];

export function Navbar() {
  const pathname = usePathname();
  const { location, setLocation } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/LOGO.png"
            alt="SS Constructions & Traders"
            width={70}
            height={70}
            className=" object-contain"
          />
          <span className="text-xl md:text-2xl font-black tracking-tighter">
            SS Constructions <span className="text-gray-400">& Traders</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Location Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="outline"
                  className="hidden sm:flex rounded-full px-5 font-bold border-gray-200"
                />
              }
            >
              <MapPin className="mr-2 h-4 w-4" />
              {location}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2">
              {LOCATIONS.map((loc) => (
                <DropdownMenuItem
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className={`cursor-pointer rounded-xl font-bold py-3 px-4 ${
                    location === loc
                      ? "bg-gray-100 text-black"
                      : "text-gray-500"
                  }`}
                >
                  {loc}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 rounded-l-[2rem] p-8"
            >
              <div className="flex flex-col h-full">
                <div className="mb-12 flex items-center gap-3">
                  <Image
                    src="/LOGO.jpeg"
                    alt="SS Constructions & Traders"
                    width={40}
                    height={40}
                    className="rounded-md object-contain"
                  />
                  <span className="text-2xl font-black tracking-tighter leading-tight">
                    SS Constructions
                    <br />
                    <span className="text-gray-400">& Traders</span>
                  </span>
                </div>

                <nav className="flex flex-col gap-6 flex-grow">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-3xl font-extrabold tracking-tight transition-colors ${
                        pathname === link.href ? "text-black" : "text-gray-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Your Location
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {LOCATIONS.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => setLocation(loc)}
                        className={`text-left text-sm font-bold p-3 rounded-xl transition-colors ${
                          location === loc
                            ? "bg-black text-white"
                            : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
