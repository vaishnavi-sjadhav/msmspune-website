"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onOpenEnquiry?: () => void;
}

interface SlideData {
  id: string;
  badge: string;
  title: string;
  kicker: string;
  headlineMain: string;
  headlineSub: string;
  headlineAccent: string;
  description: string;
  bgImage: string;
}

const SLIDES: SlideData[] = [
  {
    id: "the-campus",
    badge: "01",
    title: "The Campus",
    kicker: "MATRIX SCHOOL OF MANAGEMENT STUDIES • PUNE",
    headlineMain: "Shape Your Future",
    headlineSub: "in",
    headlineAccent: "Management",
    description:
      "Nurturing talent, fostering innovation, and building global leaders through quality management education.",
    bgImage: "/images/hero-slide-1.jpg",
  },
  {
    id: "academic-excellence",
    badge: "02",
    title: "Academic Excellence",
    kicker: "AICTE APPROVED & SPPU AFFILIATED • PUNE",
    headlineMain: "Empower Your Mind",
    headlineSub: "with",
    headlineAccent: "Excellence",
    description:
      "Transforming aspiring managers with experiential case studies, industry mentors, and state-of-the-art computer labs.",
    bgImage: "/images/hero-slide-2.jpg",
  },
  {
    id: "elite-placements",
    badge: "03",
    title: "Elite Placements",
    kicker: "98% PLACEMENT RECORD • 150+ RECRUITERS",
    headlineMain: "Launch Your Career",
    headlineSub: "with",
    headlineAccent: "Leaders",
    description:
      "Marquee placement partnerships with Deloitte, TATA, KPMG, Infosys, and ICICI Bank offering highest package of ₹24 LPA.",
    bgImage: "/images/hero-slide-3.jpg",
  },
  {
    id: "student-life",
    badge: "04",
    title: "Vibrant Student Life",
    kicker: "HOLISTIC GROWTH & INNOVATION HUB",
    headlineMain: "Experience Life",
    headlineSub: "at",
    headlineAccent: "Matrix",
    description:
      "Vibrant student council, national management conclaves, sports arenas, and inspiring peer camaraderie on a green campus.",
    bgImage: "/images/hero-slide-4.jpg",
  },
];

const HIGHLIGHTS = [
  "Quality Education",
  "Holistic Development",
  "Industry Connect",
  "Brighter Career Opportunities",
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Automatic slide progression every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeSlide, handleNextSlide]);

  const currentSlide = SLIDES[activeSlide];

  return (
    <section className="relative w-full min-h-[680px] sm:min-h-[760px] lg:min-h-[820px] xl:min-h-[860px] overflow-hidden flex items-center bg-[#041618]">
      {/* Background Slides with Automatic Crossfade Transition */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.bgImage}
                alt={slide.title}
                fill
                priority={index === 0}
                className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Atmospheric Multi-layer Gradient Vignettes */}
      {/* 1. Left dark gradient to guarantee headline legibility while keeping right imagery vibrant */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031518]/95 via-[#062024]/80 via-45% to-transparent z-10 pointer-events-none" />

      {/* 2. Top and bottom dark gradient for smooth navbar blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#031518]/90 via-transparent to-[#031518]/60 z-10 pointer-events-none" />

      {/* Main Container Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines, CTAs, Highlights Pill */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            {/* Kicker with Gold Line */}
            <div className="flex items-center gap-3">
              <span className="w-10 sm:w-12 h-[2px] bg-[#ebb14e]" />
              <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#ebb14e] uppercase font-sans">
                {currentSlide.kicker}
              </p>
            </div>

            {/* Main Headline with Serif Typography and Italic 'in' */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-white leading-[1.12] sm:leading-[1.1] tracking-tight">
              {currentSlide.headlineMain} <br />
              <span className="italic font-normal text-white">{currentSlide.headlineSub}</span>{" "}
              <span className="text-[#ebb14e]">{currentSlide.headlineAccent}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-xl font-normal leading-relaxed pt-1">
              {currentSlide.description}
            </p>

            {/* Call to Actions (Gold primary + Glass secondary) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
              <Link
                href="#programs"
                className="inline-flex items-center justify-center gap-2.5 bg-[#ebb14e] hover:bg-[#d49e3f] text-[#0c363b] text-xs sm:text-sm font-bold tracking-wider uppercase px-6 sm:px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-200 active:scale-95 group text-center"
              >
                <span>EXPLORE PROGRAMS</span>
                <ArrowRight className="w-4 h-4 text-[#0c363b] group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center bg-black/35 hover:bg-black/55 text-white border border-white/40 hover:border-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 sm:px-8 py-3.5 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95 shadow-sm text-center"
              >
                ADMISSION ENQUIRY
              </button>
            </div>

            {/* Frosted Glass Highlights Pill */}
            <div className="pt-3 sm:pt-6">
              <div className="inline-flex flex-wrap items-center gap-2.5 sm:gap-6 bg-black/45 backdrop-blur-md border border-white/20 px-3.5 sm:px-6 py-2.5 rounded-2xl sm:rounded-full text-xs font-medium text-white/95 shadow-xl">
                {HIGHLIGHTS.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ebb14e] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Automatic 5s Progress Bar & Pagination Controls */}
            <div className="flex items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10 max-w-xl">
              {/* Animated 5s Progress Line */}
              <div className="flex items-center gap-3">
                <div className="w-24 sm:w-36 h-[2px] bg-white/20 rounded-full overflow-hidden">
                  <div
                    key={activeSlide}
                    className="h-full bg-[#ebb14e] animate-hero-progress"
                  />
                </div>
                <div className="text-xs font-mono tracking-widest text-white/90">
                  <span className="text-[#ebb14e] font-bold text-sm">
                    {currentSlide.badge}
                  </span>{" "}
                  <span className="text-white/40">/</span>{" "}
                  <span className="text-white/70">04</span>
                </div>
              </div>

              {/* Prev / Next Circular Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 border border-white/25 hover:border-[#ebb14e] text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 border border-white/25 hover:border-[#ebb14e] text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean & Unobstructed Background Photo Showcase */}
          <div className="lg:col-span-4 hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
