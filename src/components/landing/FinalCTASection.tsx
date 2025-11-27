import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function FinalCTASection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4A1F7A] to-[#7C3AED] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready for Better Support?
        </h2>

        <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
          Let's make your NDIS journey easier, clearer, and stress-free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-[#4A1F7A] hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-semibold shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Book Support Today
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>

          <button
            onClick={scrollToServices}
            className="text-purple-200 hover:text-white underline underline-offset-4 font-medium transition-colors"
          >
            Learn About Our Services
          </button>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="mailto:christine@trustedpathways.com.au"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all group"
          >
            <p className="text-purple-200 text-sm mb-2">Email Us</p>
            <p className="text-white font-semibold group-hover:underline">
              christine@trustedpathways.com.au
            </p>
          </a>

          <a
            href="tel:0408941847"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all group"
          >
            <p className="text-purple-200 text-sm mb-2">Call Us</p>
            <p className="text-white font-semibold group-hover:underline">
              0408 941 847
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
