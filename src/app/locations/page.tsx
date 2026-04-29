import React from "react";
import { Metadata } from "next";
import { INVENTORY, TARGET_CITIES, slugify } from "@/data/inventory";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas & Product Availability",
  description: "Explore the complete directory of S S Constructions & Traders service areas and material availability across India. Find local supply for sand, aggregates, cement and steel.",
};

export default function LocationsDirectoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6">
            Service <br />
            <span className="text-[#25D366]">Directory</span>.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
            Browse our complete inventory categorized by your local service area. We ensure direct delivery and guaranteed supply chain management across these key regions.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TARGET_CITIES.map((city) => (
            <div key={city} className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-[#25D366]">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl font-bold text-black tracking-tight">{city}</h2>
              </div>
              
              <ul className="space-y-4">
                {INVENTORY.map((item) => (
                  <li key={item.id}>
                    <Link 
                      href={`/buy-${slugify(item.name)}-in-${slugify(city)}`}
                      className="group flex items-center justify-between text-gray-500 hover:text-black font-medium transition-colors"
                    >
                      <span>Buy {item.name} in {city}</span>
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-[#25D366] transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
