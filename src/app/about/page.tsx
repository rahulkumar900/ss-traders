import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { CertificateSection } from "@/components/sections/AboutSection";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Building2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Our Legacy | S S CONSTRUCTIONS & TRADERS",
  description: "Learn more about Asansol's leading construction and material trading enterprise. Founded by Anand Kumar Dubey, we excel in engineering and supply chain excellence.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Our Mission",
      desc: "To provide the highest quality construction materials and technical services to empower residential and commercial infrastructure projects across India.",
      icon: Target,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Our Commitment",
      desc: "We are committed to transparency, punctuality, and excellence in every order supplied and every project executed on a national scale.",
      icon: Award,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Customer Focus",
      desc: "Guiding homeowners and builders through expert advice, cost-effective solutions, and timely doorstep delivery for every requirement.",
      icon: Users,
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-40 pb-24 bg-[#f8f9fa] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <Building2 size={600} className="text-neutral-900" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Badge className="bg-orange-600 mb-6 p-2 px-6 rounded-full font-bold tracking-widest">EST. 2026</Badge>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-900 mb-8 max-w-4xl">
            Engineering a <br />
            <span className="text-orange-500">Stronger India</span>, <br />
            One Project at a Time.
          </h1>
          <p className="text-neutral-500 max-w-2xl text-xl leading-relaxed font-medium">
            S S CONSTRUCTIONS & TRADERS is a premier multi-disciplinary enterprise specializing 
            in high-end construction, technical contracting, and direct industrial material supply.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <div key={i} className="p-10 bg-white border border-neutral-100 rounded-[32px] hover:shadow-2xl transition-all duration-500 group">
              <div className={`w-16 h-16 ${v.color} flex items-center justify-center rounded-[20px] mb-8 group-hover:scale-110 transition-transform`}>
                <v.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">{v.title}</h3>
              <p className="text-neutral-500 leading-relaxed font-medium">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certification Integration */}
      <div className="py-10">
        <CertificateSection />
      </div>

      {/* Proprietor's Vision */}
      <section className="py-32 bg-[#f8f9fa]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group">
               <Image 
                src="/proprietor_modern_industrial_1777281695421.png" 
                alt="Anand Kumar Dubey" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-3xl font-bold">Anand Kumar Dubey</p>
                  <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mt-1">Proprietor & Founder</p>
               </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <Badge variant="outline" className="text-orange-600 border-orange-200 bg-white px-4 py-1 font-bold">Visionary Leadership</Badge>
                <h2 className="text-5xl font-bold text-neutral-900 tracking-tight leading-tight">The Foundation of Our Commitment.</h2>
              </div>
              
              <div className="space-y-8">
                <div className="p-8 bg-white rounded-[24px] shadow-sm border border-neutral-100 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-600 flex items-center justify-center text-white rounded-full font-serif text-4xl leading-none pt-2">“</div>
                  <p className="text-neutral-700 text-xl leading-relaxed italic font-medium">
                    "Our journey in Asansol and across the nation is defined by our ability to simplify 
                    complex construction requirements. Whether it's a single truck of material or 
                    a large-scale industrial project, we approach every task with precision."
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    "Civil Contracting",
                    "Mechanical Expertise",
                    "Electrical Solutions",
                    "Material Supply Chain",
                    "National Logistics",
                    "Technical Consultancy"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-orange-500" size={20} />
                      <span className="text-neutral-600 font-bold text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { v: "2026", l: "ENLISTED SINCE" },
            { v: "100%", l: "COMPLIANCE" },
            { v: "24/7", l: "SUPPORT" },
            { v: "500+", l: "ORDERS DELIVERED" }
          ].map((s, i) => (
            <div key={i} className="text-center space-y-4">
              <p className="text-6xl font-bold text-neutral-900 tracking-tighter">{s.v}</p>
              <p className="text-xs text-orange-600 font-mono font-bold uppercase tracking-[0.2em]">{s.l}</p>
              <div className="h-1 w-12 bg-neutral-100 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
