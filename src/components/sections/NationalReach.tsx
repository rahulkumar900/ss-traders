import React from "react";
import { Badge } from "@/components/ui/badge";
import { Globe, Map, Truck, Building } from "lucide-react";

const stats = [
  { icon: Globe, label: "Pan-India Reach", value: "28+ States" },
  { icon: Building, label: "Industrial Hubs", value: "50+ Cities" },
  { icon: Truck, label: "Supply Network", value: "National" },
];

export const NationalReach = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <Badge className="bg-orange-50 text-orange-700 border-orange-100 px-5 py-1.5 rounded-full font-bold">National Presence</Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900 leading-[1.1]">
              Powering <span className="text-orange-500">Infrastructure</span> <br />
              Across The Subcontinent.
            </h2>
            <p className="text-neutral-500 text-xl leading-relaxed max-w-xl">
              From high-altitude mechanical projects to coastal industrial supplies, 
              we maintain a relentless logistics network serving all 28 states of India.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
               {stats.map((stat, i) => (
                 <div key={i} className="space-y-3 p-2">
                    <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center rounded-[12px] text-white">
                       <stat.icon size={24} />
                    </div>
                    <div>
                        <p className="text-neutral-900 text-2xl font-bold tracking-tight">{stat.value}</p>
                        <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative group lg:p-12">
             <div className="absolute inset-0 bg-neutral-900/5 rounded-full blur-[100px] scale-150"></div>
             {/* Map Graphic Placeholder */}
             <div className="aspect-square bg-white rounded-[40px] border border-neutral-100 flex items-center justify-center relative overflow-hidden shadow-2xl">
                <Map size={150} className="text-neutral-50 absolute opacity-30" />
                <div className="p-16 text-center z-10 space-y-6">
                   <p className="text-orange-500 font-bold text-xs uppercase tracking-[0.4em]">Integrated Logistics</p>
                   <p className="text-neutral-900 text-4xl font-bold tracking-tighter">Verified Pan-India Operations</p>
                   <div className="flex flex-wrap justify-center gap-3 pt-6">
                      {["Delhi", "Mumbai", "Kolkata", "Bangalore", "Pune"].map((city) => (
                        <span key={city} className="bg-neutral-50 border border-neutral-100 px-4 py-2 rounded-full text-xs font-bold text-neutral-600">{city}</span>
                      ))}
                   </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-500 rounded-full animate-ping delay-300"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
