import React from 'react';
import { Heart } from "lucide-react";

export default function StorySection() {
  return (
    <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A1F7A]/10 to-purple-300/10 rounded-3xl transform -rotate-3" />
            <img
              src="src/components/Images/RealSupport.webp"
              alt="Our caring team"
              className="relative rounded-3xl shadow-2xl shadow-purple-200/40 w-full h-[350px] sm:h-[450px] object-cover"
            />

            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#4A1F7A] to-[#7C3AED] flex items-center justify-center shadow-xl">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white" />
            </div>
          </div>

          <div>
            <span className="inline-block text-[#4A1F7A] font-semibold text-sm tracking-wide uppercase mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Why We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A1F7A] to-[#7C3AED]">
                Care
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Trusted Pathways was created to give NDIS participants the support they deserve — support that is personal, compassionate, and reliable.
              </p>
              <p>
                After years of helping families navigate the complicated NDIS system, we built a service that puts people first.
              </p>
              <p className="font-medium text-[#4A1F7A]">
                Your goals become our mission, and your independence becomes our priority.
              </p>
            </div>
            {/* Removed experience and care stats */}
          </div>
        </div>
      </div>
    </section>
  );
}
