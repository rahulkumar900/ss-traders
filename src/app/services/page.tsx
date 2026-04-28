"use client";

import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useLocation } from "@/components/LocationProvider";

// Mock Data
const SERVICES = [
  { id: 101, title: 'Drone Site Survey', price: '₹5,000 / acre', desc: 'High-precision topographical surveys. Get point cloud data and orthomosaic maps.', img: '' },
  { id: 102, title: 'Excavator (JCB) Rental', price: '₹1,200 / hour', desc: 'Heavy-duty excavators with experienced operators. Minimum 8 hours booking.', img: '' },
  { id: 103, title: 'Concrete Mixer Rental', price: '₹2,500 / day', desc: 'High-capacity concrete mixers for large scale pouring operations.', img: '' },
  { id: 104, title: 'Soil Testing', price: '₹15,000 / report', desc: 'Comprehensive geotechnical investigation including borehole drilling and lab testing.', img: '' },
  { id: 105, title: 'Crane Rental (50 Ton)', price: '₹18,000 / shift', desc: 'Heavy lifting cranes for steel erection and precast concrete placement.', img: '' },
  { id: 106, title: 'Demolition Services', price: 'Custom / sqft', desc: 'Safe and controlled demolition with debris removal and site clearance.', img: '' },
  { id: 107, title: 'Architectural Planning', price: '₹40 / sqft', desc: 'Complete 2D and 3D architectural rendering and structural blueprints.', img: '' }
];

export default function ServicesPage() {
  const { location } = useLocation();

  const handleWhatsApp = (serviceName: string) => {
    const message = `Hi! I'd like to inquire about: ${serviceName} in ${location}.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12">
          Services.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl">
          Professional heavy equipment and specialized site services for seamless execution.
        </p>
      </section>

      {/* List */}
      <section className="container mx-auto px-4 pb-32">
        <div className="flex flex-col gap-6">
          {SERVICES.map(service => (
            <div 
              key={service.id} 
              className="group bg-gray-50 hover:bg-black text-black hover:text-white rounded-[3rem] p-8 md:p-12 transition-colors duration-500 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="flex-grow">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Professional Service
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-xl text-gray-500 group-hover:text-gray-400 font-medium max-w-2xl mb-8">
                  {service.desc}
                </p>
                <div className="text-3xl font-black">
                  {service.price.split(' / ')[0]} 
                  <span className="text-xl font-bold text-gray-500 group-hover:text-gray-400 ml-2">/ {service.price.split(' / ')[1]}</span>
                </div>
              </div>

              <div className="w-full md:w-auto shrink-0 flex flex-col gap-4 items-end">
                <button 
                  onClick={() => handleWhatsApp(service.title)}
                  className="w-full md:w-auto bg-black text-white group-hover:bg-[#25D366] group-hover:text-white rounded-full py-6 px-10 text-xl font-bold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle size={28} />
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
