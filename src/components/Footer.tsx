import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-24 rounded-t-[3rem] mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="text-4xl font-black tracking-tighter block mb-6">
              Build<span className="text-gray-500">Mate.</span>
            </span>
            <p className="text-gray-400 text-lg max-w-sm font-medium mb-8">
              The frictionless B2B marketplace for construction materials and heavy machinery.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Platform</h4>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><Link href="/materials" className="hover:text-white transition-colors">Materials Catalog</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Heavy Services</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 font-medium text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-gray-500 mt-0.5" />
                <span>Holding No :- 00, Ground Floor, Ward No 56 Hirapur, Asansol, 713326</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-gray-500" />
                <span>+91 7677178930</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-gray-500" />
                <span>contact@ssconstructions.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-gray-500 font-medium text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} BuildMate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
