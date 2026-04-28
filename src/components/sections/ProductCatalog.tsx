"use client";

import React from "react";
import { products } from "@/data/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Package, Hammer, Ruler, Droplets } from "lucide-react";
import Link from "next/link";
const WHATSAPP_NUMBER = "+917677178930"; // Placeholder from reference site

export const ProductCatalog = () => {
  const handleQuotation = (productName: string) => {
    const message = encodeURIComponent(
      `Hi SS Constructions & Traders, I am interested in getting a quotation for: ${productName}. Please provide more details.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 uppercase tracking-widest font-bold">
              Catalogue
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Supplied With Precision,
              <br />
              Built For Forever.
            </h2>
          </div>
          <Link href="/products">
            <Button
              variant="outline"
              className="rounded-full border-neutral-200 px-8 hover:bg-neutral-900 hover:text-white transition-all h-12 font-bold"
            >
              View All Materials
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.slice(0, 6).map((product) => (
            <Card
              key={product.id}
              className="bg-white border-neutral-100 rounded-[32px] flex flex-col group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-200 group-hover:scale-110 transition-transform duration-700">
                  {product.category === "Construction" ? (
                    <Package size={80} strokeWidth={1} />
                  ) : product.category === "Rental" ||
                    product.category === "General" ? (
                    <Ruler size={80} strokeWidth={1} />
                  ) : product.category === "Plumbing" ? (
                    <Droplets size={80} strokeWidth={1} />
                  ) : (
                    <Hammer size={80} strokeWidth={1} />
                  )}
                </div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/90 backdrop-blur-md text-neutral-900 border-none shadow-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {product.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors tracking-tight">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-neutral-500 font-medium leading-relaxed line-clamp-2 mt-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-8 pt-4 mt-auto">
                <Button
                  onClick={() => handleQuotation(product.name)}
                  className="w-full bg-neutral-50 hover:bg-orange-600 text-neutral-900 hover:text-white rounded-[16px] h-14 font-bold transition-all gap-2 border border-neutral-100 hover:border-orange-600"
                >
                  <Smartphone size={18} />
                  Get Quotation
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
