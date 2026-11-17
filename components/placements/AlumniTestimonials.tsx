"use client";

import React, { useState } from "react";
import Image from "next/image";

export function AlumniTestimonials() {
  const testimonials = [
    {
      name: "Riya Shah",
      batch: "MBA 2022",
      company: "Deloitte",
      quote: "Matrix gave me the right platform to grow professionally.",
      photo: "/placements/alumni-riya.jpg",
    },
    {
      name: "Aditya Kulkarni",
      batch: "MBA 2022",
      company: "TCS",
      quote: "The placement support at Matrix is truly exceptional.",
      photo: "/placements/alumni-aditya.jpg",
    },
    {
      name: "Sneha Deshpande",
      batch: "MBA 2022",
      company: "Infosys",
      quote: "A great learning journey with excellent placement opportunities.",
      photo: "/placements/alumni-sneha.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#25040B] via-[#3D0C16] to-[#20040A] text-[#FAF3E8] border-b border-[#C69A60]/30 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF3E8] tracking-tight">
            Our Alumni. Their Journey.
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-1">
            From Matrix to a successful career
          </p>
          <div className="w-16 h-1 bg-[#C69A60] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* Testimonials Grid with Navigation Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#5B1525] border border-[#C69A60]/50 text-[#FAF3E8] items-center justify-center shadow-lg hover:bg-[#721B2F] transition-all cursor-pointer"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((alumni, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FAF3E8] text-[#2D070F] border border-[#E0D0BA] shadow-xl flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C69A60] shadow-sm bg-neutral-200">
                        <Image
                          src={alumni.photo}
                          alt={alumni.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-base font-bold text-[#3D0C16]">
                          {alumni.name}
                        </h3>
                        <div className="text-[11px] text-neutral-500 font-medium">
                          {alumni.batch} • <span className="font-bold text-[#A06C30]">{alumni.company}</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-3xl text-[#C69A60]/60 font-serif leading-none">
                      &rdquo;
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                    &ldquo;{alumni.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#5B1525] border border-[#C69A60]/50 text-[#FAF3E8] items-center justify-center shadow-lg hover:bg-[#721B2F] transition-all cursor-pointer"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}
