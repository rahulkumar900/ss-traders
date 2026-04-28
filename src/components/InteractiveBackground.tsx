"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    setMounted(true);
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated Background Image (Ken Burns Effect) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center grayscale opacity-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888086225-eb4360e22a7f?q=80&w=2940&auto=format&fit=crop')`,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Frosted Glass White Overlay to maintain readability */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Subtle WhatsApp Green Orb following cursor */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-[0.25] pointer-events-none mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(37,211,102,1) 0%, rgba(37,211,102,0) 70%)",
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
