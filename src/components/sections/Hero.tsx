import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Drill, Plane } from "lucide-react";

import Magnetic from "@/components/animations/Magnetic";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden technical-dot-grid">
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
               <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></div>
               <span className="text-orange-700 font-bold tracking-tight text-xs uppercase">Certified Pan-India Contractor</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter leading-[0.95]">
              Precision <br />
              <span className="text-orange-500">Engineering</span>. <br />
              National Reach.
            </h1>
            
            <p className="text-neutral-500 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
              S S Constructions & Traders delivers top-tier infrastructure solutions 
              and industrial grade materials to every corner of India. 
              Built on trust, verified by excellence.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <Magnetic>
                <Button size="lg" className="bg-neutral-900 hover:bg-orange-600 text-white rounded-full px-12 h-16 font-bold text-lg shadow-2xl transition-all border-none">
                  Get Started
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" className="text-neutral-900 border-neutral-200 hover:bg-neutral-50 rounded-full px-12 h-16 font-bold text-lg bg-white transition-all">
                  Our Catalog
                </Button>
              </Magnetic>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="absolute -inset-10 bg-orange-500/5 rounded-full blur-[100px]"></div>
            <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
               <Image 
                src="/industrial_modern_office_1777276988360.png" 
                alt="Modern Industrial Office" 
                fill 
                className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
               <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-md rounded-[24px] border border-white/20 text-white max-w-xs">
                  <p className="text-2xl font-bold mb-1">Corporate Excellence</p>
                  <p className="text-xs opacity-80 font-medium uppercase tracking-widest">Headquartered in Asansol, serving India.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
