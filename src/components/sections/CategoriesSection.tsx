import React from "react";
import Link from "next/link";
import { categories } from "@/data/products";
import { Card } from "@/components/ui/card";
import { Hammer, Droplets, ShieldCheck, Grid3X3, Trees, Users } from "lucide-react";

const iconMap: Record<string, any> = {
  Construction: Hammer,
  Plumbing: Droplets,
  Sanitaryware: ShieldCheck,
  Tiles: Grid3X3,
  Wood: Trees,
  Manpower: Users,
};

export const CategoriesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => {
            const Icon = iconMap[cat.name] || Hammer;
            return (
              <Link key={cat.id} href={`/products?category=${cat.name}`}>
                <Card className="group relative h-48 flex flex-col items-center justify-center border border-neutral-100 rounded-[24px] overflow-hidden hover:border-orange-200 transition-all cursor-pointer bg-neutral-50 hover:bg-orange-50/50">
                  <div className="p-5 bg-white rounded-[20px] mb-4 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-neutral-900 group-hover:text-orange-600 transition-colors" size={32} />
                  </div>
                  <span className="text-neutral-900 font-bold text-xs uppercase tracking-[0.15em] text-center px-4">
                    {cat.name}
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
