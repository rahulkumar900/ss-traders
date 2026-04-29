"use client";

import React from "react";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "./LocationProvider";
import { openWhatsApp } from "@/lib/whatsapp";

export const FloatingWA = () => {
  const { location } = useLocation();
  
  const handleWA = () => {
    openWhatsApp("All Services", location);
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
