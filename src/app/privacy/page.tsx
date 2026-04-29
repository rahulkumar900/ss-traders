import React from "react";

import { Badge } from "@/components/ui/badge";
import { Shield, FileText, Building, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and legal company details for S S Constructions & Traders.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-40 pb-24 bg-gray-50 relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[120px] opacity-40"></div>
        <div className="container mx-auto px-6 z-10 relative">
          <Badge className="bg-black mb-6 p-2 px-6 rounded-full font-bold tracking-widest text-[10px] text-white">LEGAL & PRIVACY</Badge>
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] text-black mb-8">
            Privacy <span className="text-[#25D366]">Policy</span> & <br/>Company <span className="text-[#25D366]">Details</span>.
          </h1>
          <p className="text-gray-500 max-w-2xl text-xl leading-relaxed font-medium">
            We value your trust. This page outlines our privacy practices and provides our official corporate registration details to ensure complete transparency.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-32 space-y-2 border-l-2 border-gray-100 pl-6">
               <a href="#company-details" className="block text-lg font-bold text-black py-2 hover:text-[#25D366] transition-colors">Official Company Details</a>
               <a href="#data-collection" className="block text-lg font-bold text-gray-400 py-2 hover:text-black transition-colors">Data Collection</a>
               <a href="#information-usage" className="block text-lg font-bold text-gray-400 py-2 hover:text-black transition-colors">Information Usage</a>
               <a href="#data-protection" className="block text-lg font-bold text-gray-400 py-2 hover:text-black transition-colors">Data Protection</a>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-20">
            
            {/* Official Company Details */}
            <div id="company-details" className="scroll-mt-32 space-y-8">
               <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                 <Building className="text-[#25D366] w-8 h-8" />
                 <h2 className="text-3xl font-black tracking-tighter text-black">Official Company Details</h2>
               </div>
               
               <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-200 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <Shield size={200} />
                 </div>
                 <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Entity Name</p>
                            <h3 className="text-2xl font-black text-black tracking-tighter">S S CONSTRUCTIONS & TRADERS</h3>
                        </div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-4 py-1 text-xs font-bold uppercase tracking-widest">Enlisted & Verified</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-200/60">
                        <div>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Proprietor</p>
                            <p className="text-lg font-bold text-black">ANAND KUMAR DUBEY</p>
                        </div>
                        <div>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Certificate No.</p>
                            <p className="text-lg font-bold text-black font-mono">0917P1004426460610</p>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200/60">
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Registered Address</p>
                        <p className="text-lg font-medium text-gray-800 leading-relaxed max-w-md">
                            Holding No :- 00, GROUND FLOOR, WARD NO 56 HIRAPUR, ASANSOL. PASCHIM BARDHAMAN, WEST BENGAL, 
                            P.O:- HIRAPUR, P.S:- HIRAPUR, District :- Paschim Bardhaman, Pincode :- 713326 in ward no. 1
                        </p>
                    </div>

                    <div className="pt-6 border-t border-gray-200/60">
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Nature of Business</p>
                        <p className="text-lg font-medium text-gray-800 leading-relaxed">
                            Civil, Mechanical And Electrical Contractor And General Order Supplier
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-200/60">
                        <div>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Date of Issuance</p>
                            <p className="text-lg font-bold text-black">04-Apr-2026</p>
                        </div>
                        <div>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Validity Until</p>
                            <p className="text-lg font-bold text-black">03-Apr-2027</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-sm font-medium text-gray-500 leading-relaxed">
                        <strong className="text-black">Legal Declaration:</strong> The Board of Councillors of Asansol hereby grant unto ANAND KUMAR DUBEY, the Proprietor of S S CONSTRUCTIONS & TRADERS... this Permanent Certificate of Enlistment under Section 118 of the West Bengal Municipal Act, 1993 and acknowledge to have received in consideration thereof, a total fee of Rs.2970/- (Rupees: Two Thousand Nine Hundred Seventy) only.
                    </div>
                 </div>
               </div>
            </div>

            {/* Privacy Content */}
            <div id="data-collection" className="scroll-mt-32 space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
               <h3 className="text-2xl font-black tracking-tighter text-black">1. Data Collection</h3>
               <p>
                  S S CONSTRUCTIONS & TRADERS respects your privacy. We collect minimal, necessary information to facilitate our business operations, primarily through direct communication such as WhatsApp inquiries, phone calls, and email correspondence.
               </p>
               <ul className="space-y-3 mt-4">
                  <li className="flex gap-3"><CheckCircle2 className="text-[#25D366] shrink-0 mt-1" size={20} /> <span>Name and Contact Details (Phone Number, Email Address)</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[#25D366] shrink-0 mt-1" size={20} /> <span>Business or Project Requirements</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[#25D366] shrink-0 mt-1" size={20} /> <span>Site Location for Delivery Logistics</span></li>
               </ul>
            </div>

            <div id="information-usage" className="scroll-mt-32 space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
               <h3 className="text-2xl font-black tracking-tighter text-black">2. Information Usage</h3>
               <p>
                  The information we collect is strictly used to fulfill your requests for material supply, heavy machinery rental, or technical contracting services. We use your data to:
               </p>
               <p>
                  Generate accurate quotations based on your site location, coordinate seamless delivery logistics, and communicate project updates. We do not engage in unauthorized marketing or data selling.
               </p>
            </div>

            <div id="data-protection" className="scroll-mt-32 space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
               <h3 className="text-2xl font-black tracking-tighter text-black">3. Data Protection & Sharing</h3>
               <p>
                  We prioritize the security of your business and personal information. Your details are accessible only to authorized personnel at S S CONSTRUCTIONS & TRADERS required to process your order or inquiry.
               </p>
               <div className="bg-gray-50 text-gray-900 p-6 rounded-2xl border border-gray-100">
                  <p className="font-bold mb-2">Third-Party Disclosure</p>
                  <p className="text-gray-800">
                    We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless required for logistics (e.g., sharing site address with transport drivers) or mandated by law under the jurisdiction of West Bengal, India.
                  </p>
               </div>
            </div>

            <div className="pt-10 border-t border-gray-100 text-gray-500">
               <p>Last Updated: April 2026</p>
               <p className="mt-2">For any privacy-related inquiries, please contact us at <a href="mailto:dubey.anandkumar193@gmail.com" className="font-bold text-black hover:text-[#25D366]">dubey.anandkumar193@gmail.com</a>.</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
