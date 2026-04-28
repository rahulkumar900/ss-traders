import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Smartphone } from "lucide-react";

export const CertificateSection = () => {
  return (
    <section id="about" className="py-20 bg-neutral-50 text-neutral-900 border-y border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
              National Certification
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              S S CONSTRUCTIONS & TRADERS
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              We are a premier construction and logistics entity serving clients **All Over India**. 
              Under the visionary leadership of our proprietor, <strong>Anand Kumar Dubey</strong>, 
              we have established a nationwide network for industrial material supply and 
              technical contracting excellence.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-100 rounded-full">
                  <CheckCircle className="text-orange-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Professional Contracting</h4>
                  <p className="text-neutral-500">Civil, Mechanical, and Electrical expertise.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-100 rounded-full">
                  <CheckCircle className="text-orange-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Verified National Enterprise</h4>
                  <p className="text-neutral-500">Permanent Certificate of Enlistment holder.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
            <Card className="relative bg-white border-neutral-100 text-neutral-900 overflow-hidden premium-shadow rounded-2xl">
              <CardHeader className="bg-neutral-50 border-b border-neutral-100 pb-8 pt-8">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-neutral-900 text-2xl font-bold">Registration Data</CardTitle>
                    <CardDescription className="text-neutral-500">West Bengal Municipal Corporation Act, 2006</CardDescription>
                  </div>
                  <Shield className="text-orange-600 h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent className="pt-10 pb-10 space-y-6 text-sm font-sans px-8">
                <div className="grid grid-cols-2 gap-8 border-b border-neutral-50 pb-6">
                  <div>
                    <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold mb-1">Certificate No</p>
                    <p className="text-neutral-900 font-mono font-bold">0917P1004426460610</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold mb-1">Status</p>
                    <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100">PERMANENT</Badge>
                  </div>
                </div>
                
                <div>
                  <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold mb-1">Issued To</p>
                  <p className="text-neutral-900 font-bold text-lg">ANAND KUMAR DUBEY</p>
                  <p className="text-neutral-500 uppercase tracking-tight text-xs">Proprietor of S S CONSTRUCTIONS & TRADERS</p>
                </div>

                <div>
                  <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold mb-1">Registered Address</p>
                  <p className="text-neutral-700 leading-relaxed italic">
                    Holding No :- 00, GROUND FLOOR, WARD NO 56<br />
                    HIRAPUR, ASANSOL. PASCHIM BARDHAMAN<br />
                    WEST BENGAL, 713326
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-neutral-50">
                  <div>
                    <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold mb-1">Issuance</p>
                    <p className="text-neutral-900 font-bold">04-Apr-2026</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold mb-1">Validity</p>
                    <p className="text-neutral-900 font-bold">03-Apr-2027</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
