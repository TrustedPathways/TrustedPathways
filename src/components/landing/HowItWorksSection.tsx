import React from 'react';
import { Phone, Users, FileCheck } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Phone,
      number: "1",
      title: "Book a Free Call",
      description: "Schedule a no-obligation chat to discuss your needs"
    },
    {
      icon: Users,
      number: "2",
      title: "Meet Your Coordinator",
      description: "Get matched with a dedicated support coordinator"
    },
    {
      icon: FileCheck,
      number: "3",
      title: "Get Your Personalised Support Plan",
      description: "Receive a tailored plan designed for your goals"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[#4A1F7A] font-semibold text-sm tracking-wide uppercase mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is easy. just three simple steps.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-purple-200 via-[#4A1F7A] to-purple-200" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4A1F7A] to-[#7C3AED] text-white font-bold text-2xl mb-6 shadow-xl shadow-purple-300/40 z-10">
                  {step.number}
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-[#4A1F7A]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
