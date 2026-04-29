import React from "react";
import { Metadata } from "next";
import { INVENTORY, TARGET_CITIES, slugify } from "@/data/inventory";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Smartphone, Truck, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { CONTACT_CONFIG } from "@/lib/whatsapp";

// Generate Static Params for all combinations
export async function generateStaticParams() {
  const params: { slug: string }[] = [];

  INVENTORY.forEach((item) => {
    TARGET_CITIES.forEach((city) => {
      params.push({
        slug: `buy-${slugify(item.name)}-in-${slugify(city)}`,
      });
    });
  });

  return params;
}

// Helper to parse the slug
function parseSlug(slug: string) {
  // Expected format: buy-{product-slug}-in-{city-slug}
  if (!slug.startsWith("buy-") || !slug.includes("-in-")) {
    return null;
  }
  
  const content = slug.substring(4); // Remove "buy-"
  const parts = content.split("-in-");
  
  if (parts.length < 2) return null;
  
  // The last part is the location, the rest joined by "-in-" is the product
  const location = parts.pop()!;
  const product = parts.join("-in-");

  return { product, location };
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    return { title: "Not Found" };
  }

  const { product, location } = parsed;

  const item = INVENTORY.find((i) => slugify(i.name) === product);
  const city = TARGET_CITIES.find((c) => slugify(c) === location);

  if (!item || !city) {
    return { title: "Not Found" };
  }

  const title = `Buy ${item.name} in ${city} | Best Price & Fast Delivery`;
  const description = `Looking for ${item.name} in ${city}? SS Constructions & Traders offers the best rates for high-quality ${item.category.toLowerCase()}. Get instant quotations and seamless delivery to your site in ${city}.`;

  return {
    title,
    description,
    keywords: [
      item.name,
      `Buy ${item.name} in ${city}`,
      `${item.category} in ${city}`,
      `Best price for ${item.name} in ${city}`,
      "SS Constructions",
    ],
    openGraph: {
      title,
      description,
      type: "website",
    },
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function ProductLocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { product, location } = parsed;

  const item = INVENTORY.find((i) => slugify(i.name) === product);
  const city = TARGET_CITIES.find((c) => slugify(c) === location);

  if (!item || !city) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(CONTACT_CONFIG.whatsappMessage(item.name, city));

  return (

    <main className="min-h-screen bg-white">
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${item.name} in ${city}`,
            description: item.seoDesc,
            category: item.category,
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              areaServed: {
                "@type": "City",
                name: city,
              },
              seller: {
                "@type": "Organization",
                name: "SS Constructions & Traders",
              },
            },
          }),
        }}
      />

      <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <Badge className="bg-gray-100 text-[#25D366] border-gray-200 uppercase tracking-widest font-bold mb-6">
            Available in {city}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6">
            Buy {item.name} <br />
            <span className="text-[#25D366]">in {city}</span>.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed mb-10">
            {item.seoDesc} We guarantee the best landed price for {item.category.toLowerCase()} directly to your construction site in <strong>{city}</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${CONTACT_CONFIG.phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg"
            >
              <Smartphone size={20} />
              Get Instant Quote
            </a>
            <Link
              href="/products"
              className="bg-white border border-gray-200 hover:bg-gray-50 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-colors"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl font-black text-black tracking-tighter">Why Source from Us in {city}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
                <Truck className="w-10 h-10 text-[#25D366] mb-6" />
                <h3 className="text-xl font-bold mb-3 text-black">Local Logistics</h3>
                <p className="text-gray-500 font-medium">We handle the complete supply chain, ensuring on-time delivery anywhere in {city}.</p>
              </div>
              <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
                <ShieldCheck className="w-10 h-10 text-[#25D366] mb-6" />
                <h3 className="text-xl font-bold mb-3 text-black">Quality Guaranteed</h3>
                <p className="text-gray-500 font-medium">All our {item.category.toLowerCase()} meet strict industry standards and IS specifications.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-[24px]">
              <h3 className="text-2xl font-bold text-black mb-6">Product Specifications</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#25D366]" size={20} /> <span className="font-bold text-gray-700">Category:</span> {item.category}</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#25D366]" size={20} /> <span className="font-bold text-gray-700">Selling Unit:</span> per {item.unit}</li>
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3"><CheckCircle2 className="text-[#25D366]" size={20} /> <span className="text-gray-700">{feature}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <h3 className="text-2xl font-bold text-black tracking-tight">Related Materials</h3>
              <div className="space-y-6">
                {INVENTORY.filter(i => i.category === item.category && i.id !== item.id).slice(0, 3).map(related => (
                   <ProductCard key={related.id} product={related} />
                ))}
                {INVENTORY.filter(i => i.category === item.category && i.id !== item.id).length === 0 && (
                  <p className="text-gray-500">Explore our full <Link href="/products" className="text-[#25D366] font-bold">catalog</Link> for more.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
