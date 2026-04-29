"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, Plus, Minus, Building2, HardHat, Hammer, Factory, MapPin, PhoneCall, Mail } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveBackground } from "@/components/InteractiveBackground";

import { INVENTORY as PRODUCTS } from "@/data/inventory";

const FAQS = [
  { question: "How does the pricing work?", answer: "Prices are highly dynamic based on your selected region and current market rates. When you click 'Inquire on WhatsApp', our system prepares a message so our sales team can immediately give you the final, negotiated landed cost." },
  { question: "What is the minimum order quantity?", answer: "For bulk materials like sand and aggregates, the MOQ is typically one full truckload (approx 600-800 cft). For cement and steel, MOQs vary by manufacturer but generally start at 50 bags or 1 ton." },
  { question: "Do you handle logistics and delivery?", answer: "Yes. SS Constructions provides end-to-end logistics. We coordinate directly with the source and manage the transport to ensure the material reaches your site exactly when you need it." },
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push(`/products`);
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative z-10">
        
        {/* 1. Edge-to-Edge Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 rounded-b-[3rem] overflow-hidden mb-12 bg-black border-b border-gray-100/10">
          {/* Video Background */}
          <div className="absolute inset-0 z-0 bg-black overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            
            {/* Architectural Drafting/Blueprint Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.25]" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='white' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='url(%23smallGrid)'/%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='white' stroke-width='2' opacity='0.6'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
                backgroundPosition: "center top"
              }}
            />
            
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="relative">
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute -top-12 left-0 md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hidden"
              >
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Live Procurement Network</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">Build without</span> <br className="hidden md:block" />
                <span className="text-[#25D366] drop-shadow-[0_0_30px_rgba(37,211,102,0.2)]">friction.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-2xl mb-16"
            >
              <form onSubmit={handleSearch} className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 hover:border-white/40 focus-within:border-white transition-colors shadow-2xl">
                <div className="pl-6 pr-4">
                  <Search className="text-white w-6 h-6" />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search materials, machinery..." 
                  className="bg-transparent border-none outline-none w-full text-xl font-medium text-white placeholder:text-gray-400 py-4"
                />
                <button type="submit" className="bg-[#25D366] text-black rounded-full px-8 py-4 font-bold hover:bg-white transition-colors ml-2 shadow-lg">
                  Search
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Link href="/materials" className="group block">
                <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-12 h-full flex flex-col justify-between border border-white/10 hover:border-[#25D366] hover:bg-white/20 transition-all duration-500 min-h-[300px]">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Materials.</h2>
                    <p className="text-gray-300 text-lg md:text-xl font-medium max-w-sm">From foundational steel to finishing wood, sourced direct from top manufacturers.</p>
                  </div>
                  <div className="self-end bg-white rounded-full p-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight className="w-8 h-8 text-black" />
                  </div>
                </div>
              </Link>
              <Link href="/services" className="group block">
                <div className="bg-white text-black rounded-[3rem] p-12 h-full flex flex-col justify-between hover:bg-gray-100 transition-colors duration-500 min-h-[300px]">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Services.</h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium max-w-sm">Heavy machinery rental, drone surveys, and specialized site services.</p>
                  </div>
                  <div className="self-end bg-black rounded-full p-6 group-hover:bg-[#25D366] group-hover:scale-110 transition-all duration-500">
                    <ArrowRight className="w-8 h-8 text-white group-hover:text-black" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Trusted By Section */}
        <section className="container mx-auto px-4 py-12 border-y border-gray-100 overflow-hidden">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by leading contractors</p>
          <div className="flex justify-center items-center flex-wrap gap-12 md:gap-16 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-black" />
              <span className="text-2xl md:text-3xl font-black tracking-tighter">L&T<span className="text-gray-400">INFRA</span></span>
            </div>
            <div className="flex items-center gap-3">
              <HardHat className="w-8 h-8 text-[#25D366]" />
              <span className="text-2xl md:text-3xl font-black tracking-tighter">TATA<span className="font-bold text-gray-400 text-xl">PROJ</span></span>
            </div>
            <div className="flex items-center gap-3">
              <Factory className="w-8 h-8 text-black" />
              <span className="text-2xl md:text-3xl font-black tracking-tighter">SP<span className="text-gray-400 font-bold text-xl">CORP</span></span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-8 h-8 text-[#25D366]" />
              <span className="text-2xl md:text-3xl font-black tracking-tighter">AFCONS</span>
            </div>
            <div className="flex items-center gap-3">
              <Hammer className="w-8 h-8 text-black" />
              <span className="text-2xl md:text-3xl font-black tracking-tighter">HCC<span className="text-gray-400">IND</span></span>
            </div>
          </div>
        </section>

        {/* 3. Bento Grid (The Advantage) */}
        <section className="container mx-auto px-4 py-24">
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-16"
          >
            The SS Constructions <br/>Advantage.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="md:col-span-2 bg-gray-50 rounded-[3rem] p-12 flex flex-col justify-end">
              <span className="text-7xl font-black text-black mb-2">15m</span>
              <span className="text-2xl font-bold text-gray-500">Average quote time</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-black text-white rounded-[3rem] p-12 flex flex-col justify-end">
              <span className="text-7xl font-black text-[#25D366] mb-2">10k+</span>
              <span className="text-2xl font-bold text-gray-400">Tons delivered</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-black text-white rounded-[3rem] p-12 flex flex-col justify-end">
              <span className="text-4xl font-black text-white mb-4">Verified Quality.</span>
              <span className="text-lg font-medium text-gray-400">All materials are IS certified.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-2 bg-gray-50 rounded-[3rem] p-12 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-5">
                <ArrowRight className="w-96 h-96" />
              </div>
              <span className="text-4xl font-black text-black mb-4 z-10">Seamless Logistics.</span>
              <span className="text-xl font-medium text-gray-500 max-w-md z-10">End-to-end tracking from source to your construction site.</span>
            </motion.div>
          </div>
        </section>

        {/* 4. Top Materials */}
        <section className="container mx-auto px-4 py-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Top <br/>Materials.</h2>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-xl font-bold hover:text-gray-500 transition-colors">
              View Catalog <ArrowRight />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden">
            <Link href="/products" className="block text-center bg-gray-50 rounded-2xl py-6 font-bold text-xl hover:bg-gray-100">
              View Full Catalog
            </Link>
          </div>
        </section>

        {/* 5. Process Steps */}
        <section className="py-24 bg-gray-50 rounded-[3rem] mx-4 my-12">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
                <span className="text-[8rem] font-black leading-none text-gray-200 tracking-tighter mb-4">01</span>
                <h3 className="text-4xl font-extrabold mb-4">Find.</h3>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">Search our highly curated catalog of premium materials and heavy equipment tailored to your location.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col">
                <span className="text-[8rem] font-black leading-none text-gray-200 tracking-tighter mb-4">02</span>
                <h3 className="text-4xl font-extrabold mb-4">Quote.</h3>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">Instantly connect via WhatsApp for dynamic, real-time pricing and availability without friction.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col">
                <span className="text-[8rem] font-black leading-none text-gray-200 tracking-tighter mb-4">03</span>
                <h3 className="text-4xl font-extrabold mb-4">Deliver.</h3>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">Logistics handled start to finish. Site-ready delivery matching your strict project timeline.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">What our partners say.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500 group">
              <p className="text-xl font-medium leading-relaxed mb-8 text-gray-600 group-hover:text-gray-300">
                "SS Constructions completely removed the procurement friction. We get quotes in minutes, not days, and the delivery is flawlessly executed."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white group-hover:bg-white group-hover:text-black rounded-full flex items-center justify-center font-bold transition-colors">RK</div>
                <div>
                  <div className="font-bold text-lg text-black group-hover:text-white">Rajesh Kumar</div>
                  <div className="text-sm font-bold text-gray-400">Apex Constructions</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gray-50 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500 group">
              <p className="text-xl font-medium leading-relaxed mb-8 text-gray-600 group-hover:text-gray-300">
                "The ability to dynamically check aggregate pricing across different states and order via WhatsApp has saved us countless hours."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center font-bold">AM</div>
                <div>
                  <div className="font-bold text-lg text-black group-hover:text-white">Amit Mishra</div>
                  <div className="text-sm font-bold text-gray-400">L&T Infrastructure</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gray-50 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500 group">
              <p className="text-xl font-medium leading-relaxed mb-8 text-gray-600 group-hover:text-gray-300">
                "Finding heavy equipment like 50-ton cranes used to take a week. With SS Constructions' service catalog, it took a single text message."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 text-black group-hover:bg-white rounded-full flex items-center justify-center font-bold transition-colors">SP</div>
                <div>
                  <div className="font-bold text-lg text-black group-hover:text-white">Sanjay Patel</div>
                  <div className="text-sm font-bold text-gray-400">Patel Engineering</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. Contact & Location (NEW) */}
        <section className="container mx-auto px-4 py-24 border-t border-gray-100">
          <div className="bg-black text-white rounded-[3rem] overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Let's talk.</h2>
                <p className="text-xl text-gray-400 font-medium mb-12 max-w-md">
                  Have a massive project? Need a custom logistics quote? Our team is available 24/7.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-black transition-colors duration-300">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-500 mb-1">Direct Line</h4>
                      <p className="text-2xl font-bold">+91 9801282874</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-500 mb-1">Email</h4>
                      <p className="text-2xl font-bold">dubey.anandkumar193@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-500 mb-1">Headquarters</h4>
                      <p className="text-xl font-bold max-w-xs">Ground floor, Holding No 10/10, Ward no 56, Anand nagar, Asansol, Paschim Bardhaman, West Bengal, Pin-713325</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-[500px] lg:h-auto w-full relative grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116812.35626359521!2d86.89966144335936!3d23.682633099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0ea1022529%3A0xf888f7e7fd11cefe!2sAsansol%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714300000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ Section */}
        <section className="container mx-auto px-4 py-24 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-center">Questions?</h2>
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-3xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center font-bold text-xl hover:text-gray-600 transition-colors"
                  >
                    {faq.question}
                    {openFaq === index ? <Minus className="shrink-0 ml-4" /> : <Plus className="shrink-0 ml-4" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8 pb-6"
                      >
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
