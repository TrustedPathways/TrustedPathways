import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl z-50 md:hidden">
      <Button
        onClick={scrollToContact}
        className="w-full bg-[#4A1F7A] hover:bg-[#3D1A66] text-white rounded-full py-6 text-lg font-semibold shadow-lg"
      >
        Get Support Today
        <ArrowDown className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
}
