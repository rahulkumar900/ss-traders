"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { products, categories as dataCategories } from "@/data/products";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Search, Filter, Package, Hammer, Ruler, Droplets, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const WHATSAPP_NUMBER = "+917677178930";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "All", name: "All Products" },
    ...dataCategories,
    { id: "Rental", name: "Rental" },
    { id: "General", name: "General" }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory || product.id === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuotation = (productName: string) => {
    const message = encodeURIComponent(`Hi SS Constructions & Traders, I am interested in getting a quotation for: ${productName}. Please provide more details.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Area */}
      <section className="pt-40 pb-20 bg-[#f8f9fa] border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest">
                <span>Inventory</span>
                <ChevronRight size={14} />
                <span>Product Catalog</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900">Infrastructure <br /><span className="text-orange-500">Inventory</span>.</h1>
            </div>
            
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 h-5 w-5 group-focus-within:text-orange-500 transition-colors" />
              <Input 
                placeholder="Search materials, tools, services..." 
                className="pl-12 h-14 bg-white border-neutral-200 rounded-[16px] text-neutral-900 focus:border-orange-500 shadow-sm focus:ring-4 focus:ring-orange-500/5 transition-all text-lg font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6">Filter By Category</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center justify-between px-6 py-4 rounded-[16px] text-sm font-bold transition-all ${
                      selectedCategory === cat.id 
                      ? "bg-neutral-900 text-white shadow-xl shadow-neutral-900/20" 
                      : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-100"
                    }`}
                  >
                    <span>{cat.name}</span>
                    {selectedCategory === cat.id && <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 bg-orange-50 rounded-[32px] border border-orange-100 space-y-4">
               <div className="w-12 h-12 bg-white rounded-[12px] flex items-center justify-center text-orange-600 shadow-sm">
                  <Smartphone size={24} />
               </div>
               <h4 className="text-xl font-bold text-neutral-900">Direct Support</h4>
               <p className="text-neutral-600 text-sm font-medium leading-relaxed">Need help finding a specific material or service? Contact our experts directly.</p>
               <Button className="w-full bg-orange-600 hover:bg-neutral-900 text-white rounded-full font-bold h-12">Call Now</Button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3 space-y-10">
            <div className="flex justify-between items-center pb-6 border-b border-neutral-100">
               <p className="text-neutral-400 font-bold text-sm uppercase tracking-widest">Showing <span className="text-neutral-900">{filteredProducts.length}</span> Results</p>
               <div className="flex items-center gap-2 text-neutral-400 font-bold text-sm cursor-pointer hover:text-neutral-900 transition-colors">
                  <Filter size={16} />
                  <span>Sort By: Latest</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="bg-white border-neutral-100 rounded-[32px] flex flex-col group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-orange-500/20">
                  <div className="relative h-56 overflow-hidden bg-neutral-50">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-200 group-hover:scale-110 transition-transform duration-700">
                      {product.category === "Construction" ? <Package size={60} strokeWidth={1} /> : 
                       product.category === "Plumbing" ? <Droplets size={60} strokeWidth={1} /> : <Hammer size={60} strokeWidth={1} />}
                    </div>
                    <div className="absolute top-5 right-5">
                       <Badge className="bg-white/90 backdrop-blur-md text-neutral-600 border-neutral-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{product.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors tracking-tight">{product.name}</CardTitle>
                    <CardDescription className="text-neutral-400 text-xs font-bold uppercase tracking-tighter mt-1">Industrial Grade • Certified</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto p-6 pt-0">
                    <Button 
                      onClick={() => handleQuotation(product.name)}
                      className="w-full bg-neutral-900 hover:bg-orange-600 text-white rounded-[16px] h-12 font-bold transition-all gap-2"
                    >
                      <Smartphone size={16} />
                      Quotation
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-32 bg-neutral-50 rounded-[40px] border border-dashed border-neutral-200">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                   <Search size={32} className="text-neutral-300" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">No matching materials found</h3>
                <p className="text-neutral-500 mb-8 max-w-sm mx-auto font-medium">We couldn't find anything matching your search. Try adjusting your filters or search query.</p>
                <Button variant="outline" className="rounded-full border-neutral-200 px-10 h-14 font-bold" onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}>Clear all filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
