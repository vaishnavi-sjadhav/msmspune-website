"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PlacementStudent {
  id: string;
  name: string;
  role: string;
  packageLPA: string;
  company: string;
  companyLogo: React.ReactNode;
  photo: string;
  degree: string;
  batch: string;
  quote: string;
}

export function StarPlacementsSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Start centered on Aman P. (Google)
  const [selectedStudent, setSelectedStudent] = useState<PlacementStudent | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const targetScrollX = useRef<number | null>(null);
  const rAFId = useRef<number | null>(null);
  const snapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const students: PlacementStudent[] = [
    {
      id: "sarah",
      name: "Sarah K.",
      role: "Software Engineer",
      packageLPA: "₹ 38 LPA",
      company: "Amazon",
      companyLogo: (
        <span className="font-bold text-sm tracking-tight text-neutral-900 flex items-center justify-center gap-1">
          <span className="text-base font-black">amazon</span>
          <span className="text-[#FF9900] text-base leading-none">⌣</span>
        </span>
      ),
      photo: "/placements/placement-sarah.jpg",
      degree: "MBA – Systems & Technology",
      batch: "Batch: 2025-26",
      quote: "The rigorous case-based learning and corporate mentorship at Matrix helped me crack the campus interview at Amazon with a ₹38 LPA package.",
    },
    {
      id: "rahul",
      name: "Rahul M.",
      role: "Product Manager",
      packageLPA: "₹ 42 LPA",
      company: "Microsoft",
      companyLogo: (
        <span className="font-bold text-sm tracking-tight text-neutral-900 flex items-center justify-center gap-2">
          <span className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
            <span className="bg-[#F25022] w-1.5 h-1.5" />
            <span className="bg-[#7FBA00] w-1.5 h-1.5" />
            <span className="bg-[#00A4EF] w-1.5 h-1.5" />
            <span className="bg-[#FFB900] w-1.5 h-1.5" />
          </span>
          <span>Microsoft</span>
        </span>
      ),
      photo: "/placements/placement-rahul.jpg",
      degree: "MBA – Marketing & Product Strategy",
      batch: "Batch: 2025-26",
      quote: "Matrix provided an exceptional environment to cultivate strategic thinking, consumer analytics, and product management excellence.",
    },
    {
      id: "aman",
      name: "Aman P.",
      role: "Cloud Architect",
      packageLPA: "₹ 54 LPA",
      company: "Google",
      companyLogo: (
        <span className="font-bold text-lg tracking-tight flex items-center justify-center">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      ),
      photo: "/placements/placement-aman.jpg",
      degree: "MBA – Information Technology",
      batch: "Batch: 2025-26",
      quote: "Securing a ₹54 LPA package at Google as Cloud Architect has been a career-defining milestone. The continuous hackathons, cloud labs, and faculty support at Matrix made this possible.",
    },
    {
      id: "priya",
      name: "Priya N.",
      role: "Data Scientist",
      packageLPA: "₹ 46 LPA",
      company: "Deloitte",
      companyLogo: (
        <span className="font-bold text-sm tracking-tight text-neutral-900 flex items-center justify-center">
          <span>Deloitte</span>
          <span className="text-[#86BC25] text-lg font-black leading-none">.</span>
        </span>
      ),
      photo: "/placements/placement-priya.jpg",
      degree: "MBA – Business Analytics",
      batch: "Batch: 2025-26",
      quote: "From enterprise analytics simulations to live corporate consulting assignments, Matrix shaped my technical depth and executive presentation skills.",
    },
    {
      id: "vikram",
      name: "Vikram S.",
      role: "AI Specialist",
      packageLPA: "₹ 41 LPA",
      company: "NVIDIA",
      companyLogo: (
        <span className="font-bold text-sm tracking-tight text-[#76B900] flex items-center justify-center gap-1">
          <span>NVIDIA</span>
        </span>
      ),
      photo: "/placements/placement-vikram.jpg",
      degree: "MBA – Operations & Artificial Intelligence",
      batch: "Batch: 2025-26",
      quote: "Hands-on projects with modern machine learning infrastructure and alumni guidance gave me the competitive edge to land an AI leadership role at NVIDIA.",
    },
    {
      id: "ananya",
      name: "Ananya D.",
      role: "Hardware Systems Lead",
      packageLPA: "₹ 52 LPA",
      company: "Apple",
      companyLogo: (
        <span className="font-bold text-sm tracking-tight text-neutral-900 flex items-center justify-center gap-1.5">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.7-7.94-12-14.58-6.19-9.58-11.02-20.73-14.49-33.45-3.47-12.72-5.2-24.5-5.2-35.34 0-14.65 3.63-26.68 10.9-36.08 7.27-9.4 16.38-14.2 27.34-14.4 4.58 0 9.8 1.25 15.66 3.75 5.86 2.5 9.77 3.82 11.73 3.97 1.41-.15 5.5-1.5 12.3-4.05 6.8-2.55 12.33-3.74 16.59-3.57 12.44.63 22.38 5.4 29.82 14.31-10.89 6.64-16.22 15.77-16 27.4.22 9.07 3.71 16.7 10.47 22.89 6.76 6.19 14.86 9.64 24.3 10.35-2.28 7.08-5.06 14.27-8.33 21.57zM119.22 31.84c0-7.72 2.76-14.97 8.28-21.75 5.52-6.78 12.23-10.09 20.13-9.93.11 1.09.16 1.96.16 2.61 0 7.61-2.88 15.11-8.64 22.5-5.76 7.39-12.63 11.23-20.61 11.52-.43-1.63-.65-3.28-.65-4.95z" />
          </svg>
          <span>Apple</span>
        </span>
      ),
      photo: "/placements/placement-ananya.jpg",
      degree: "MBA – Technology Operations",
      batch: "Batch: 2025-26",
      quote: "Matrix gave me the global exposure and systems-thinking mindset to secure an engineering leadership opportunity at Apple headquarters.",
    },
    {
      id: "rohan",
      name: "Rohan V.",
      role: "Quantitative Strategist",
      packageLPA: "₹ 48 LPA",
      company: "Goldman Sachs",
      companyLogo: (
        <span className="font-serif font-bold text-xs tracking-tight text-[#1E3A8A] flex items-center justify-center leading-none">
          <span>Goldman Sachs</span>
        </span>
      ),
      photo: "/placements/placement-rohan.jpg",
      degree: "MBA – Finance & Quant Modeling",
      batch: "Batch: 2025-26",
      quote: "The high-frequency financial modeling simulations and capital market labs gave me the quantitative acumen demanded by Goldman Sachs.",
    },
    {
      id: "kavya",
      name: "Kavya S.",
      role: "Management Consultant",
      packageLPA: "₹ 45 LPA",
      company: "McKinsey & Company",
      companyLogo: (
        <span className="font-serif font-bold text-xs tracking-tight text-[#0F2027] flex items-center justify-center">
          <span>McKinsey&Company</span>
        </span>
      ),
      photo: "/placements/placement-kavya.jpg",
      degree: "MBA – Strategic Management",
      batch: "Batch: 2025-26",
      quote: "Intensive case study workshops, peer reviews, and executive communication training prepared me thoroughly for McKinsey's rigorous selection process.",
    },
    {
      id: "aditya",
      name: "Aditya T.",
      role: "Investment Banking Analyst",
      packageLPA: "₹ 44 LPA",
      company: "J.P. Morgan",
      companyLogo: (
        <span className="font-serif font-bold text-xs tracking-tight text-[#0A2540] flex items-center justify-center">
          <span>J.P. Morgan</span>
        </span>
      ),
      photo: "/placements/placement-aditya.jpg",
      degree: "MBA – Banking & Financial Services",
      batch: "Batch: 2025-26",
      quote: "The deep dive into valuation models, M&A simulations, and live corporate deals at Matrix built my confidence to excel at J.P. Morgan.",
    },
    {
      id: "tanvi",
      name: "Tanvi R.",
      role: "Risk & Portfolio Analyst",
      packageLPA: "₹ 47 LPA",
      company: "Morgan Stanley",
      companyLogo: (
        <span className="font-sans font-extrabold text-xs tracking-tight text-neutral-900 flex items-center justify-center">
          <span>Morgan Stanley</span>
        </span>
      ),
      photo: "/placements/placement-tanvi.jpg",
      degree: "MBA – Financial Risk Analytics",
      batch: "Batch: 2025-26",
      quote: "Corporate mentorship from Fortune 500 leaders gave me an invaluable perspective on global market volatility and risk analytics.",
    },
  ];

  // Dynamically update card transforms continuously during scroll / drag
  const updateCardTransforms = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    // Estimate pitch based on first card or default
    const firstCard = cardRefs.current[0];
    const secondCard = cardRefs.current[1];
    const cardPitch =
      firstCard && secondCard
        ? Math.abs(secondCard.offsetLeft - firstCard.offsetLeft)
        : 430;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = cardCenter - containerCenter;

      if (Math.abs(distance) < minDistance) {
        minDistance = Math.abs(distance);
        closestIdx = idx;
      }

      // Normalized distance (-3 to +3)
      const u = distance / Math.max(cardPitch, 280);

      // Continuous 3D transforms
      const rotY = Math.max(-28, Math.min(28, -u * 22));
      const scale = Math.max(0.82, Math.min(1.08, 1.08 - Math.abs(u) * 0.12));
      const translateY = Math.min(22, Math.abs(u) * 12);
      const opacity = Math.max(0.68, Math.min(1, 1 - Math.abs(u) * 0.14));
      const zIndex = Math.round(50 - Math.min(40, Math.abs(u) * 10));

      const inner = card.querySelector<HTMLElement>(".coverflow-card-inner");
      if (inner) {
        inner.style.transform = `perspective(1400px) rotateY(${rotY}deg) scale(${scale}) translateY(${translateY}px)`;
        inner.style.opacity = `${opacity}`;
        card.style.zIndex = `${zIndex}`;
      }
    });

    setActiveIndex((prev) => (prev !== closestIdx ? closestIdx : prev));
  }, []);

  // Smoothly center a specific card index
  const scrollToCard = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const container = scrollRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const targetScroll = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
    container.scrollTo({ left: targetScroll, behavior });
    setActiveIndex(index);
  }, []);

  // Center on Aman P. (Google) on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCard(2, "instant" as ScrollBehavior);
      updateCardTransforms();
    }, 120);
    return () => clearTimeout(timer);
  }, [scrollToCard, updateCardTransforms]);

  // Continuous listener on scroll with rAF
  const handleScroll = useCallback(() => {
    if (rAFId.current) cancelAnimationFrame(rAFId.current);
    rAFId.current = requestAnimationFrame(() => {
      updateCardTransforms();
    });

    // Auto-snap gently to nearest card after user stops scrolling
    if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
    if (!isDraggingRef.current) {
      snapTimeoutRef.current = setTimeout(() => {
        const container = scrollRef.current;
        if (!container) return;
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        let closest = 0;
        let minD = Infinity;
        cardRefs.current.forEach((c, i) => {
          if (!c) return;
          const rect = c.getBoundingClientRect();
          const d = Math.abs(rect.left + rect.width / 2 - containerCenter);
          if (d < minD) {
            minD = d;
            closest = i;
          }
        });
        if (minD > 20) {
          scrollToCard(closest, "smooth");
        }
      }, 250);
    }
  }, [updateCardTransforms, scrollToCard]);

  // Smooth mouse wheel interpolation with horizontal momentum
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let wheelAnimId: number | null = null;
    let targetX = container.scrollLeft;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // Intercept vertical wheel over carousel for horizontal glide
        e.preventDefault();
        const maxScroll = container.scrollWidth - container.clientWidth;
        targetX = Math.max(0, Math.min(maxScroll, targetX + e.deltaY * 1.3));

        if (!wheelAnimId) {
          const step = () => {
            const diff = targetX - container.scrollLeft;
            if (Math.abs(diff) > 0.8) {
              container.scrollLeft += diff * 0.16;
              wheelAnimId = requestAnimationFrame(step);
            } else {
              container.scrollLeft = targetX;
              wheelAnimId = null;
            }
          };
          wheelAnimId = requestAnimationFrame(step);
        }
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
      if (wheelAnimId) cancelAnimationFrame(wheelAnimId);
    };
  }, []);

  // Mouse Drag to Scroll Gesture Handling
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollStartRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const container = scrollRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    container.scrollLeft = scrollStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    // Snap to nearest card on drag release
    setTimeout(() => {
      const container = scrollRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      let closest = 0;
      let minD = Infinity;
      cardRefs.current.forEach((c, i) => {
        if (!c) return;
        const rect = c.getBoundingClientRect();
        const d = Math.abs(rect.left + rect.width / 2 - containerCenter);
        if (d < minD) {
          minD = d;
          closest = i;
        }
      });
      scrollToCard(closest, "smooth");
    }, 50);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#22040A] via-[#330711] to-[#1E0308] text-[#FAF3E8] overflow-hidden select-none border-t border-[#C69A60]/20">
      
      {/* Decorative Circuit Board / High-Tech Watermark (Matches Mockup) */}
      <div className="absolute top-0 right-0 w-[550px] h-full opacity-[0.09] pointer-events-none hidden md:block">
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M50 80h80v80h120v60h80M20 200h100v120h80v100h120M250 400v80h100" stroke="#C69A60" strokeWidth="2.5" />
          <circle cx="130" cy="80" r="6" fill="#C69A60" />
          <circle cx="250" cy="160" r="6" fill="#C69A60" />
          <circle cx="330" cy="220" r="6" fill="#C69A60" />
          <circle cx="120" cy="200" r="6" fill="#C69A60" />
          <circle cx="200" cy="320" r="6" fill="#C69A60" />
          <circle cx="280" cy="420" r="6" fill="#C69A60" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-[500px] h-full opacity-[0.09] pointer-events-none hidden md:block">
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M350 500h-80v-80h-120v-60h-80M380 380h-100v-120h-80v-100h-120" stroke="#C69A60" strokeWidth="2.5" />
          <circle cx="270" cy="500" r="6" fill="#C69A60" />
          <circle cx="150" cy="420" r="6" fill="#C69A60" />
          <circle cx="70" cy="360" r="6" fill="#C69A60" />
        </svg>
      </div>

      {/* Ambient Radial Golden Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#C69A60]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block: Title, Subtitle, and Decorative Flourish */}
        <div className="text-center space-y-2.5 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/30 text-[#E0BA85] text-xs font-semibold tracking-wider uppercase mb-1">
            <span>Corporate Milestones</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#FAF3E8] tracking-tight leading-tight">
            Our Star Placements
          </h2>
          <p className="text-sm sm:text-lg text-[#E0BA85]/95 font-medium max-w-xl mx-auto">
            Celebrating Excellence, Record Packages, and Global Career Milestones
          </p>

          {/* Decorative Gold Flourish: ─── ◆ ─── */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#C69A60]" />
            <span className="w-2.5 h-2.5 rotate-45 bg-[#C69A60]" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#C69A60]" />
          </div>
        </div>

        {/* Scroll-Based 3D CoverFlow Stage with Buttery Smooth Momentum */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
          className="overflow-x-auto scroll-smooth flex items-center gap-6 sm:gap-8 lg:gap-10 py-12 px-[calc(50vw-160px)] sm:px-[calc(50vw-200px)] md:px-[calc(50vw-220px)] lg:px-[calc(50vw-230px)] scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
        >
          {students.map((st, idx) => {
            const isCenter = idx === activeIndex;

            return (
              <div
                key={st.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => {
                  if (!hasDraggedRef.current) {
                    scrollToCard(idx);
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="shrink-0 focus:outline-none"
              >
                <div
                  className="coverflow-card-inner w-[310px] sm:w-[350px] md:w-[380px] lg:w-[410px] relative transition-transform duration-150 ease-out will-change-transform"
                >
                  {/* Outer Thick White Plaque / Pedestal (Enlarged with Luxury Shadow) */}
                  <div
                    className={`p-4 sm:p-5 rounded-[34px] sm:rounded-[40px] bg-white transition-all duration-300 ${
                      isCenter
                        ? "shadow-[0_35px_70px_rgba(0,0,0,0.7),0_14px_30px_rgba(198,154,96,0.35)] ring-2 ring-[#C69A60]/60"
                        : "shadow-[0_20px_45px_rgba(0,0,0,0.55)]"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      
                      {/* Floating Company Pill Badge */}
                      <div className="relative z-20 -mb-4">
                        <div className="px-5 py-2 rounded-full bg-white border border-neutral-200/90 shadow-md min-w-[120px] flex items-center justify-center">
                          {st.companyLogo}
                        </div>
                      </div>

                      {/* Enlarged Student Portrait Box */}
                      <div className="relative w-full h-[230px] sm:h-[260px] md:h-[285px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-100 shadow-inner">
                        <Image
                          src={st.photo}
                          alt={st.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 hover:scale-105"
                          priority={idx < 4}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Inner Dark Maroon Plaque below Portrait */}
                      <div className="w-full bg-gradient-to-b from-[#4A0E1B] via-[#3D0C16] to-[#2B060E] rounded-2xl p-4 sm:p-5 mt-3 text-center text-white border border-[#C69A60]/35 shadow-md flex flex-col items-center">
                        <h3 className="font-serif text-lg sm:text-2xl font-bold text-white tracking-wide">
                          {st.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/90 font-medium mt-1 truncate max-w-full">
                          {st.role}
                        </p>
                        <p className="text-sm sm:text-base font-black text-[#E0BA85] mt-1.5 tracking-wide">
                          Package: {st.packageLPA}
                        </p>

                        {/* "View Profile" Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!hasDraggedRef.current) {
                              setSelectedStudent(st);
                            }
                          }}
                          className={`mt-3.5 inline-flex items-center justify-center px-6 py-1.5 rounded-full border border-white/60 hover:border-white text-white text-xs sm:text-sm font-semibold hover:bg-white/10 active:scale-95 transition-all shadow-sm cursor-pointer ${
                            isCenter ? "opacity-100" : "opacity-80 hover:opacity-100"
                          }`}
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Soft 3D Floor Shadow under cards */}
                  <div
                    className={`w-4/5 h-4 bg-black/55 blur-xl rounded-full mx-auto mt-3 transition-opacity duration-300 ${
                      isCenter ? "opacity-100 scale-105" : "opacity-45"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots & Scroll Helper */}
        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap max-w-md mx-auto">
            {students.map((st, i) => (
              <button
                key={st.id}
                onClick={() => scrollToCard(i)}
                aria-label={`Scroll to ${st.name} (${st.company})`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === i
                    ? "bg-[#E0BA85] w-8 h-2.5 shadow-sm"
                    : "bg-white/30 hover:bg-white/60 w-2.5 h-2.5"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-white/50 tracking-wider pt-1">
            Drag or scroll horizontally to explore all 10 star achievers
          </span>
        </div>
      </div>

      {/* Interactive Student Profile Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#C69A60]/40 shadow-2xl relative text-[#3D0C16]"
            >
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-4">
                <div className="relative w-22 h-22 rounded-2xl overflow-hidden bg-neutral-100 border border-[#C69A60]/40 shrink-0 shadow-md">
                  <Image
                    src={selectedStudent.photo}
                    alt={selectedStudent.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#3D0C16] text-[#E0BA85] text-[10px] font-bold uppercase tracking-wider mb-1">
                    Placement Milestone
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D0C16]">
                    {selectedStudent.name}
                  </h3>
                  <p className="text-xs text-neutral-600 font-medium">
                    {selectedStudent.degree} • {selectedStudent.batch}
                  </p>
                </div>
              </div>

              {/* Offer Breakdown Box */}
              <div className="mt-5 p-4 rounded-2xl bg-[#FAF3E8] border border-[#C69A60]/30 grid grid-cols-2 gap-3 text-center">
                <div>
                  <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider block">
                    Recruiter
                  </span>
                  <div className="mt-1 flex items-center justify-center">
                    {selectedStudent.companyLogo}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider block">
                    Annual Package
                  </span>
                  <span className="text-xl font-black text-[#5B1525] block mt-0.5">
                    {selectedStudent.packageLPA}
                  </span>
                </div>
              </div>

              {/* Student Quote */}
              <div className="mt-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <span className="text-[11px] font-bold text-[#C69A60] uppercase tracking-wider block mb-1">
                  Student Experience
                </span>
                <p className="text-xs text-neutral-700 leading-relaxed italic">
                  &ldquo;{selectedStudent.quote}&rdquo;
                </p>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-[#FAF3E8] bg-[#3D0C16] hover:bg-[#5B1525] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default StarPlacementsSection;
