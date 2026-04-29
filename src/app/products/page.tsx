"use client";

import React, { useState, useEffect, Suspense } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

// Expanded Mock Data
import { INVENTORY as PRODUCTS, categories as DATA_CATEGORIES } from "@/data/inventory";

const CATEGORIES = ["All", ...DATA_CATEGORIES.map(c => c.name)];

function CatalogContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") || "";

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(queryParam);

  useEffect(() => {
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [queryParam]);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
          High-quality materials sourced directly from manufacturers, delivered
          directly to your site.
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
                onClick={() => setSearchQuery("")}
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
          {CATEGORIES.map((category) => (
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
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-[3rem]">
            <h3 className="text-2xl font-bold text-gray-500 mb-4">
              No materials found.
            </h3>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
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
      <Suspense
        fallback={
          <div className="p-24 text-center font-bold text-xl">
            Loading catalog...
          </div>
        }
      >
        <CatalogContent />
      </Suspense>
    </div>
  );
}
