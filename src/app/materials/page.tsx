"use client";

import React, { useState, useEffect, Suspense } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

// Expanded Mock Data
const PRODUCTS = [
  { id: 1, category: 'Aggregates', name: 'Premium River Sand', price: 65, unit: 'cft', image: '', seoDesc: 'Double-washed coarse river sand, ideal for plastering and concrete.', features: ['High Strength', 'Silt-Free'] },
  { id: 2, category: 'Wood', name: 'Marine Plywood 18mm', price: 110, unit: 'sqft', image: '', seoDesc: 'IS:710 certified marine plywood for durable interior work.', features: ['Waterproof', 'Termite Resistant'] },
  { id: 3, category: 'Cement', name: 'PPC Cement (50kg)', price: 380, unit: 'bag', image: '', seoDesc: 'Portland Pozzolana Cement for mass concrete work.', features: ['High Strength', 'Sulfate Resistant'] },
  { id: 4, category: 'Steel', name: 'TMT Steel Bars (12mm)', price: 62000, unit: 'ton', image: '', seoDesc: 'Fe500D Grade TMT bars for critical structural loads.', features: ['Earthquake Resistant'] },
  { id: 5, category: 'Aggregates', name: 'Stone Chips 5/8"', price: 55, unit: 'cft', image: '', seoDesc: 'Crushed stone aggregate for high-grade concrete mixes.', features: ['High Strength'] },
  { id: 6, category: 'Cement', name: 'OPC 53 Grade Cement', price: 410, unit: 'bag', image: '', seoDesc: 'Ordinary Portland Cement for fast-paced construction.', features: ['Quick Setting'] },
  { id: 7, category: 'Bricks', name: 'Fly Ash Bricks', price: 8, unit: 'piece', image: '', seoDesc: 'Eco-friendly, high-density uniform bricks for masonry.', features: ['Uniform Shape'] },
  { id: 8, category: 'Bricks', name: 'Red Clay Bricks (Class A)', price: 12, unit: 'piece', image: '', seoDesc: 'Traditional kiln-fired red bricks with high compressive strength.', features: ['High Durability'] },
  { id: 9, category: 'Paint', name: 'Exterior Emulsion (20L)', price: 4500, unit: 'bucket', image: '', seoDesc: 'Weather-proof exterior paint with anti-algal properties.', features: ['Weather Proof'] },
  { id: 10, category: 'Steel', name: 'Binding Wire (18 Gauge)', price: 85, unit: 'kg', image: '', seoDesc: 'Soft annealed binding wire for tying TMT bars.', features: ['Rust Resistant'] },
  { id: 11, category: 'Plumbing', name: 'UPVC Pipe (4 inch)', price: 450, unit: 'length', image: '', seoDesc: 'Heavy duty UPVC pipes for drainage systems.', features: ['Leak Proof'] },
  { id: 12, category: 'Electrical', name: 'Copper Wire 2.5 sq mm', price: 1800, unit: 'coil', image: '', seoDesc: 'Flame retardant house wiring cable.', features: ['Fire Resistant'] },
];

const CATEGORIES = ['All', 'Aggregates', 'Cement', 'Steel', 'Wood', 'Bricks', 'Paint', 'Plumbing', 'Electrical'];

function CatalogContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(queryParam);

  useEffect(() => {
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [queryParam]);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Header */}
      <section className="container mx-auto px-4 pt-20 pb-12">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12">
          Catalog.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mb-12">
          High-quality materials sourced directly from manufacturers, delivered directly to your site.
        </p>

        {/* Local Search Bar */}
        <div className="max-w-2xl">
          <div className="flex items-center bg-gray-50 rounded-full p-2 border border-gray-200 focus-within:border-black transition-colors">
            <div className="pl-6 pr-4">
              <Search className="text-gray-400 w-6 h-6" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search materials by name or category..." 
              className="bg-transparent border-none outline-none w-full text-lg font-medium placeholder:text-gray-400 py-3"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="pr-6 text-gray-400 hover:text-black font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-8 py-4 rounded-full font-bold text-lg transition-colors ${
                activeCategory === category 
                  ? "bg-black text-white" 
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-[3rem]">
            <h3 className="text-2xl font-bold text-gray-500 mb-4">No materials found.</h3>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="text-black font-bold border-b-2 border-black pb-1"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default function MaterialsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Suspense fallback={<div className="p-24 text-center font-bold text-xl">Loading catalog...</div>}>
        <CatalogContent />
      </Suspense>
    </div>
  );
}
