import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Sharma",
    role: "Project Manager",
    text: "S S Traders provided all the TMT bars and cement for our multi-story project in Asansol. Their pricing is competitive and the delivery was always on time.",
  },
  {
    name: "Sunita Das",
    role: "Homeowner",
    text: "Used their drone survey service for my new house map. The precision and digital mapping help us plan the architecture perfectly. High-end technology indeed!",
  },
  {
    name: "Vikram Singh",
    role: "Industrial Contractor",
    text: "Best machinery rental in the region. Their equipment is well-maintained and our mechanical work proceeded without any downtime. Highly reliable.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase">Client Testimonials</h2>
          <div className="h-1 w-20 bg-orange-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Card key={i} className="bg-neutral-900 border-neutral-800 p-8 hover:border-orange-500/30 transition-all">
              <CardContent className="p-0 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <Quote className="text-orange-950" size={40} />
                <p className="text-neutral-400 italic leading-relaxed text-sm">
                  "{review.text}"
                </p>
                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-white font-bold">{review.name}</p>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
