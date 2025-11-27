import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Clock } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100/80 text-[#4A1F7A] px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-[#4A1F7A] rounded-full animate-pulse" />
          NDIS Support Coordination & Care Management
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
          Get Personalised{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A1F7A] to-[#7C3AED]">
            NDIS Support
          </span>{' '}
          That Makes Life Easier
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          Dedicated support coordination that helps you access services, manage your plan, and reduce stress. So you can live more independently.
        </p>

        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-[#4A1F7A] hover:bg-[#3D1A66] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-xl shadow-purple-300/40 transition-all hover:shadow-2xl hover:shadow-purple-400/40 hover:-translate-y-0.5"
        >
          Get Support Today
        </Button>

        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-[#4A1F7A]" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-500">Client Satisfaction</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-[#4A1F7A]" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-500">Plan Navigation</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#4A1F7A]" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">10+</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
