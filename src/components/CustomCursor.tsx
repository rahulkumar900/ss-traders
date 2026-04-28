"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(cursor.current, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(cursor.current, "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursor}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-orange-500 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
