"use client";

import React from "react";
import Image from "next/image";
import { useLocation } from "./LocationProvider";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: {
    id: number;
    category: string;
    name: string;
    price: number | string;
    unit: string;
    image: string;
    seoDesc: string;
    features: string[];
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { location } = useLocation();

  const handleWhatsApp = () => {
    const message = `Hi! I'd like a quote for: ${product.name} in ${location}.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="buildmate-card p-4 sm:p-6 flex flex-col h-full group">
      {/* Image Placeholder */}
      <div className="w-full h-48 sm:h-64 bg-gray-200 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
        {product.image && product.image !== "..." ? (
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        ) : (
          <span className="text-gray-400 font-medium">Image: {product.name}</span>
        )}
      </div>

      <div className="flex-grow flex flex-col">
        <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
          {product.category}
        </div>
        <h3 className="text-2xl font-extrabold mb-2 text-black leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow">{product.seoDesc}</p>
        
        <div className="flex items-end justify-between mt-auto pt-6 border-t border-gray-100">
          <div>
            <div className="text-sm text-gray-500 mb-1">Starting from</div>
            <div className="text-3xl font-black text-black">
              ₹{product.price.toLocaleString()} <span className="text-lg font-bold text-gray-500">/{product.unit}</span>
            </div>
          </div>
        </div>
      </div>

      <Button 
        onClick={handleWhatsApp}
        className="w-full mt-6 bg-black hover:bg-[#25D366] text-white rounded-xl py-6 text-lg font-bold transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg flex items-center justify-center gap-2"
      >
        <MessageCircle size={24} />
        Inquire on WhatsApp
      </Button>
    </div>
  );
}
