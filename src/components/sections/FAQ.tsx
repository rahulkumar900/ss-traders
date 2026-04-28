import React from "react";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "Do you provide doorstep delivery in Asansol?",
    a: "Yes, we provide quick and safe doorstep delivery across Asansol and surrounding regions of Paschim Bardhaman.",
  },
  {
    q: "Are the building materials branded?",
    a: "We only supply top-quality branded products from reputed vendors for cement, steel, and electrical items.",
  },
  {
    q: "How can I book a drone survey?",
    a: "You can book a survey by contacting us on WhatsApp. Our team will schedule a visit and provide a digital site map within 24-48 hours.",
  },
  {
    q: "What are your business hours?",
    a: "We are open 365 days a year from 6:00 AM to 7:00 PM.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="bg-orange-600 mb-2">Common Queries</Badge>
          <h2 className="text-3xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 bg-neutral-900 border border-neutral-800 space-y-3 hover:border-orange-500/20 transition-all">
              <h4 className="text-white font-bold text-lg">Q: {faq.q}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
