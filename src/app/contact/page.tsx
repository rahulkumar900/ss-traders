import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | S S CONSTRUCTIONS & TRADERS",
  description: "Get in touch with S S Constructions & Traders for building material supply and technical contracting services in Asansol. WhatsApp us for quick quotations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-[120px] opacity-40"></div>
        <div className="container mx-auto px-6 z-10 relative">
          <Badge className="bg-orange-600 mb-6 p-2 px-6 rounded-full font-bold tracking-widest text-[10px]">GET IN TOUCH</Badge>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-900 mb-8">Let's <span className="text-orange-500">Collaborate</span>.</h1>
          <p className="text-neutral-500 max-w-2xl text-xl leading-relaxed font-medium">
            Whether you need a bulk supply of industrial materials or a complex technical 
            contracting solution, our team is ready to respond in record time.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Contact Info */}
            <div className="space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6 p-8 bg-neutral-50 rounded-[32px] border border-neutral-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                     <div className="w-14 h-14 bg-orange-100 flex items-center justify-center text-orange-600 rounded-[16px] group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Smartphone size={28} />
                     </div>
                     <div>
                        <p className="text-neutral-400 uppercase tracking-widest text-xs font-bold mb-2">Direct Line</p>
                        <p className="text-2xl font-bold text-neutral-900">+91 7677178930</p>
                     </div>
                  </div>
                  <div className="space-y-6 p-8 bg-neutral-50 rounded-[32px] border border-neutral-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                     <div className="w-14 h-14 bg-blue-100 flex items-center justify-center text-blue-600 rounded-[16px] group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Mail size={28} />
                     </div>
                     <div>
                        <p className="text-neutral-400 uppercase tracking-widest text-xs font-bold mb-2">Email Address</p>
                        <p className="text-lg font-bold text-neutral-900 break-words leading-none">contact@ssconstructions.in</p>
                     </div>
                  </div>
               </div>

               <div className="p-10 bg-neutral-900 rounded-[40px] text-white space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-10">
                     <MapPin size={200} />
                  </div>
                  <div className="space-y-4 relative z-10">
                    <p className="text-orange-500 uppercase tracking-widest text-xs font-bold">Office Headquarters</p>
                    <h3 className="text-3xl font-bold tracking-tight">Visit Us In Asansol</h3>
                    <p className="text-neutral-400 text-xl leading-relaxed max-w-sm font-medium">
                       Holding No :- 00, Ground Floor, Ward No 56 Hirapur, Asansol, 713326
                    </p>
                  </div>
                  
                  <div className="pt-8 border-t border-neutral-800 grid grid-cols-2 gap-8 relative z-10">
                     <div className="space-y-2">
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Business Days</p>
                        <p className="text-lg font-bold">Mon - Sun (365 Days)</p>
                     </div>
                     <div className="space-y-2">
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Operation Hours</p>
                        <p className="text-lg font-bold">6:00 AM - 7:00 PM</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Modern Form */}
            <div className="bg-white p-12 rounded-[48px] border border-neutral-100 shadow-2xl relative">
                <div className="space-y-10">
                    <div className="space-y-3">
                      <h3 className="text-4xl font-bold text-neutral-900 tracking-tight">Quick Inquiry</h3>
                      <p className="text-neutral-500 text-lg font-medium">We respond within 30 minutes on WhatsApp.</p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-3">
                           <Label htmlFor="name" className="text-sm font-bold text-neutral-600 ml-2">Your Full Name</Label>
                           <Input 
                            id="name" 
                            placeholder="John Doe" 
                            className="h-16 bg-neutral-50 border-neutral-100 rounded-[20px] px-6 text-neutral-900 focus:bg-white focus:ring-4 focus:ring-orange-500/5 transition-all text-lg font-medium" 
                           />
                        </div>
                        <div className="space-y-3">
                           <Label htmlFor="message" className="text-sm font-bold text-neutral-600 ml-2">Project Requirements</Label>
                           <textarea 
                            id="message" 
                            placeholder="Describe your material or contracting needs..."
                            className="w-full h-48 bg-neutral-50 border border-neutral-100 rounded-[24px] p-6 focus:bg-white focus:ring-4 focus:ring-orange-500/5 outline-none text-neutral-900 text-lg font-medium transition-all"
                          ></textarea>
                        </div>
                        <Button className="w-full bg-orange-600 hover:bg-neutral-900 text-white font-bold h-20 rounded-[24px] gap-3 text-xl shadow-xl shadow-orange-500/10 transition-all group">
                           <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
                           Send to WhatsApp
                           <Send size={20} className="ml-2 opacity-50" />
                        </Button>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-6 pb-32">
         <div className="h-[500px] w-full bg-neutral-50 rounded-[48px] border-4 border-white shadow-2xl overflow-hidden relative flex items-center justify-center group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="text-center z-10 space-y-6">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-700">
                  <MapPin size={40} className="text-orange-600" />
               </div>
               <div>
                  <p className="text-neutral-900 text-2xl font-bold tracking-tight">Visit Our Command Center</p>
                  <p className="text-neutral-400 font-bold uppercase tracking-widest text-[10px] mt-2">Interactive Location Map Loading...</p>
               </div>
               <Button variant="outline" className="rounded-full border-neutral-200 px-10 h-14 font-bold bg-white shadow-sm">Open in Google Maps</Button>
            </div>
         </div>
      </section>
    </main>
  );
}
