"use client";

import React from "react";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingWA = () => {
  const handleWA = () => {
    window.open("https://wa.me/918617484725?text=Hi%20SS%20Constructions,%20I'm%20interested%20in%20your%20All-India%20services.", "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] md:bottom-12 md:right-12">
      <Button 
        onClick={handleWA}
        className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-2xl animate-bounce flex items-center justify-center p-0"
      >
        <Smartphone size={32} />
      </Button>
    </div>
  );
};
