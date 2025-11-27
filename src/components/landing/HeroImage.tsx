import React from 'react';
import { CheckCircle2 } from "lucide-react";

export default function HeroImage() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A1F7A]/20 to-purple-300/20 rounded-3xl transform rotate-3" />
            <img
              src="src/components/Images/Angelika-image.webp"
              alt="Supportive care"
              className="relative rounded-3xl shadow-2xl shadow-purple-200/50 w-full h-[400px] sm:h-[500px] lg:h-[580px] object-cover"
            />

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 sm:p-5 max-w-[200px] sm:max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A1F7A] to-[#7C3AED] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Trusted Support</p>
              </div>
              <p className="text-xs text-gray-500">Support That Lets You Enjoy Life Again.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
