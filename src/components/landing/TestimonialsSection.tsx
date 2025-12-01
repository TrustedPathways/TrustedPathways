import React, { useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      text: "Trusted Pathways are kind, compassionate, and truly caring. Their support helped me accept that I needed help, and it’s made a huge difference in how I manage my disability. I can’t recommend them enough! anyone they work with will be in safe hands.",
      author: "Angelika C"
    },
    {
      text: "I found the perfect support coordinator for my needs. The personalised care plans have been invaluable. Thank you for prioritising my well-being!",
      author: "Matthew H"
    },
    {
      text: "Booking appointments was a breeze, and the service exceeded my expectations. The support worker truly listened and provided effective solutions. 5 stars!",
      author: "Olivia T"
    },
    {
      text: "The support services are a game-changer! The emergency assistance provided was quick and efficient, making a critical situation manageable.",
      author: "James W"
    },
    {
      text: "The assistance I received was outstanding. The support coordinator's expertise and personalised approach made all the difference. Thank you!",
      author: "Daniel M"
    },
    {
      text: "I highly recommend these support services. The convenience and quality of care have been excellent.",
      author: "Liam J"
    },
    {
      text: "The personalised care and attention to detail were fantastic. Trusted Pathways made managing my NDIS plan straightforward and stress-free.",
      author: "Ava W"
    }
  ];

  const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const totalCards = testimonials.length;

  const startScroll = (direction: 'left' | 'right') => {
    if (scrollIntervalRef.current || !scrollRef.current) return;

    scrollIntervalRef.current = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const scrollSpeed = 5;
      container.scrollLeft += direction === 'left' ? -scrollSpeed : scrollSpeed;

      const cardWidth = container.scrollWidth / loopedTestimonials.length;
      if (!cardWidth) return;

      const segmentWidth = cardWidth * totalCards;
      const baseStart = segmentWidth;

      if (container.scrollLeft <= baseStart - segmentWidth) {
        container.scrollLeft += segmentWidth;
      }
      if (container.scrollLeft >= baseStart + segmentWidth) {
        container.scrollLeft -= segmentWidth;
      }
    }, 16);
  };

  const stopScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / loopedTestimonials.length || 0;
      const segmentWidth = cardWidth * totalCards;
      container.scrollLeft = segmentWidth;
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [loopedTestimonials.length, totalCards]);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[#4A1F7A] font-semibold text-sm tracking-wide uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A1F7A] to-[#7C3AED]">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people we've had the privilege to support
          </p>
        </div>

        <div className="relative mt-10">
          {/* 🔹 NEW: hide scrollbar but allow swipe */}
          <style>
            {`
              #testimonials-scroll {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              #testimonials-scroll::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          <div
            id="testimonials-scroll"
            ref={scrollRef}
            className="
              flex 
              overflow-x-auto overflow-y-hidden 
              scroll-smooth
            "
          >
            {loopedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 px-3"
              >
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-xl hover:border-purple-200 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 UPDATED: arrows hidden on mobile, same behaviour on desktop */}
          <button
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-[#4A1F7A] hover:bg-[#4A1F7A] hover:text-white transition-all duration-200 z-10"
            onMouseEnter={() => startScroll('left')}
            onMouseLeave={stopScroll}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-[#4A1F7A] hover:bg-[#4A1F7A] hover:text-white transition-all duration-200 z-10"
            onMouseEnter={() => startScroll('right')}
            onMouseLeave={stopScroll}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
