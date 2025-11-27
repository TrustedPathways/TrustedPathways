import React from 'react';
import { Mail, Phone, Linkedin, Facebook, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="TrustedPathways/Public/TP.webp"
                alt="Trusted Pathways Logo"
                className="h-12 w-auto"
              />
              <span className="font-semibold text-xl">Trusted Pathways</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Dedicated NDIS support coordination that puts you first. Your goals become our mission.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/feed/?trk=onboarding-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4A1F7A] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574954287896"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4A1F7A] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Talk to Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:christine@trustedpathways.com.au"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 group-hover:bg-[#4A1F7A] flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>christine@trustedpathways.com.au</span>
              </a>
              <a
                href="tel:0408941847"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 group-hover:bg-[#4A1F7A] flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>0408 941 847</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trusted Pathways. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#7C3AED] fill-[#7C3AED]" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
