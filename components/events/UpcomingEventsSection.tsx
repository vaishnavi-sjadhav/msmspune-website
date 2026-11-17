"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface EventCardData {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  description: string;
  location: string;
  time: string;
  image: string;
  icon: React.ReactNode;
}

export function UpcomingEventsSection() {
  // Default to index 2 (Center card: "Industry Expert Session", matching user mockup)
  const [activeIndex, setActiveIndex] = useState(2);
  const [selectedEvent, setSelectedEvent] = useState<EventCardData | null>(null);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [regForm, setRegForm] = useState({ name: "", email: "", mobile: "", college: "" });
  const [isMobile, setIsMobile] = useState(false);

  // Touch swipe support for mobile
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  // Responsive mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const events: EventCardData[] = [
    {
      id: "ceramic-arts",
      day: "15",
      month: "OCT",
      year: "2026",
      title: "Ceramic Arts Workshop",
      description: "Learn the fundamentals of pottery, clay shaping, and glazing.",
      location: "Studio 4",
      time: "10:00 AM - 2:00 PM",
      image: "/events/ceramic-arts.jpg",
      icon: (
        <svg className="w-4 h-4 text-[#FCE9C2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: "campus-recruitment",
      day: "02",
      month: "DEC",
      year: "2026",
      title: "Campus Recruitment",
      description: "Meet top recruiters and explore executive management career opportunities.",
      location: "Studio 4",
      time: "10:00 AM - 2:00 PM",
      image: "/events/campus-recruitment.jpg",
      icon: (
        <svg className="w-4 h-4 text-[#FCE9C2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "expert-session",
      day: "23",
      month: "NOV",
      year: "2026",
      title: "Industry Expert Session",
      description: "Gain valuable leadership insights from renowned industry leaders and experts.",
      location: "Seminar Hall",
      time: "10:00 AM - 12:00 PM",
      image: "/events/expert-session.jpg",
      icon: (
        <svg className="w-4 h-4 text-[#FCE9C2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "digital-marketing",
      day: "10",
      month: "DEC",
      year: "2026",
      title: "Digital Marketing Workshop",
      description: "Enhance your skills with hands-on training in growth marketing & analytics.",
      location: "Seminar Hall",
      time: "10:00 AM - 12:00 PM",
      image: "/events/digital-marketing.jpg",
      icon: (
        <svg className="w-4 h-4 text-[#FCE9C2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6M4 20h16" />
        </svg>
      ),
    },
    {
      id: "robotics",
      day: "20",
      month: "JAN",
      year: "2027",
      title: "Robotics Fundamentals",
      description: "Build and program your first automated robot with microcontroller logic.",
      location: "Lab B",
      time: "01:00 PM - 5:00 PM",
      image: "/events/robotics.jpg",
      icon: (
        <svg className="w-4 h-4 text-[#FCE9C2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  }, [events.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  }, [events.length]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegisterSuccess(true);
  };

  return (
    <section id="upcoming-events-section" className="relative bg-[#FAF3E8] py-14 sm:py-24 overflow-hidden text-[#3D0C16] select-none">
      
      {/* Decorative Blueprint / Architectural Watermark Pattern on Right (Matching Mockup) */}
      <div className="absolute top-0 right-0 w-[500px] h-full opacity-[0.07] pointer-events-none hidden md:block">
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M50 50L350 200M350 200L200 450M200 450L50 50M100 100L300 220M300 220L180 400M50 300L350 300M150 50L150 550" stroke="#3D0C16" strokeWidth="1.5" />
          <circle cx="200" cy="300" r="140" stroke="#3D0C16" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="300" r="80" stroke="#3D0C16" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Decorative Dot Grid Pattern on Left */}
      <div className="absolute top-16 left-6 sm:left-12 opacity-30 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C69A60]" />
          ))}
        </div>
      </div>

      {/* Ambient Radial Golden Glows */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#C69A60]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#DEB887]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header Block: Title, Subtitle, and Decorative Flourish (Exact match to Mockup) */}
        <div className="text-center space-y-2 mb-8 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#3D0C16] tracking-tight leading-tight">
            Upcoming Events
          </h2>
          <p className="text-xs sm:text-base text-[#5B1525]/85 font-medium max-w-xl mx-auto">
            Be a part of inspiring events and opportunities
          </p>

          {/* Decorative Gold Flourish: ─── ◆ ─── */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#C69A60]" />
            <span className="w-2 h-2 rotate-45 bg-[#C69A60]" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#C69A60]" />
          </div>
        </div>

        {/* 3D CoverFlow Carousel Stage */}
        <div
          className="relative py-4 sm:py-8 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous event"
            className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-[#3D0C16] border border-[#C69A60]/50 shadow-[0_8px_25px_rgba(61,12,22,0.14)] flex items-center justify-center text-lg sm:text-xl font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            ‹
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next event"
            className="absolute right-1 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-[#3D0C16] border border-[#C69A60]/50 shadow-[0_8px_25px_rgba(61,12,22,0.14)] flex items-center justify-center text-lg sm:text-xl font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            ›
          </button>

          {/* 3D CoverFlow Viewport */}
          <div
            className="relative h-[480px] sm:h-[510px] w-full flex items-center justify-center overflow-hidden md:overflow-visible"
            style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
          >
            {events.map((evt, idx) => {
              // Calculate relative offset from active card (-2, -1, 0, 1, 2)
              let offset = idx - activeIndex;
              const half = Math.floor(events.length / 2);
              if (offset > half) offset -= events.length;
              if (offset < -half) offset += events.length;

              const isCenter = offset === 0;
              const isImmediateLeft = offset === -1;
              const isImmediateRight = offset === 1;
              const isFarLeft = offset === -2;
              const isFarRight = offset === 2;

              // Responsive 3D transform properties
              let translateX = 0;
              let rotateY = 0;
              let scale = 1;
              let zIndex = 10;
              let opacity = 1;

              if (isCenter) {
                translateX = 0;
                rotateY = 0;
                scale = isMobile ? 1.0 : 1.08;
                zIndex = 30;
                opacity = 1;
              } else if (isImmediateLeft) {
                translateX = isMobile ? -135 : -260;
                rotateY = isMobile ? 16 : 24;
                scale = isMobile ? 0.82 : 0.92;
                zIndex = 20;
                opacity = isMobile ? 0.6 : 0.95;
              } else if (isImmediateRight) {
                translateX = isMobile ? 135 : 260;
                rotateY = isMobile ? -16 : -24;
                scale = isMobile ? 0.82 : 0.92;
                zIndex = 20;
                opacity = isMobile ? 0.6 : 0.95;
              } else if (isFarLeft) {
                translateX = isMobile ? -240 : -480;
                rotateY = 36;
                scale = isMobile ? 0.6 : 0.82;
                zIndex = 10;
                opacity = isMobile ? 0 : 0.75;
              } else if (isFarRight) {
                translateX = isMobile ? 240 : 480;
                rotateY = -36;
                scale = isMobile ? 0.6 : 0.82;
                zIndex = 10;
                opacity = isMobile ? 0 : 0.75;
              } else {
                translateX = offset < 0 ? -600 : 600;
                rotateY = offset < 0 ? 45 : -45;
                scale = 0.7;
                zIndex = 5;
                opacity = 0;
              }

              return (
                <motion.div
                  key={evt.id}
                  onClick={() => setActiveIndex(idx)}
                  initial={false}
                  animate={{
                    x: translateX,
                    scale: scale,
                    rotateY: rotateY,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                    mass: 0.8,
                  }}
                  style={{
                    position: "absolute",
                    transformStyle: "preserve-3d",
                  }}
                  className={`w-[270px] sm:w-[290px] md:w-[310px] cursor-pointer transition-shadow duration-300 ${
                    isCenter ? "pointer-events-auto" : "pointer-events-auto hover:opacity-100"
                  }`}
                >
                  {/* Thick Metallic 3D Gold Extruded Beveled Frame (Exact match to Mockup) */}
                  <div
                    className={`p-3 rounded-[30px] sm:rounded-[34px] bg-gradient-to-br from-[#E2B774] via-[#FCE9C2] to-[#A87432] transition-all duration-300 ring-1 ring-white/60 ${
                      isCenter
                        ? "shadow-[0_28px_60px_rgba(61,12,22,0.22),0_12px_24px_rgba(198,154,96,0.38)] ring-2 ring-[#C69A60]/50"
                        : "shadow-[0_16px_35px_rgba(61,12,22,0.12),0_6px_14px_rgba(198,154,96,0.22)]"
                    }`}
                  >
                    <div className="rounded-[22px] sm:rounded-[24px] overflow-hidden bg-white shadow-inner flex flex-col justify-between h-[420px] sm:h-[440px]">
                      
                      {/* Event Banner Image with Date Badge & Floating Icon */}
                      <div className="relative w-full h-[185px] sm:h-[195px] overflow-hidden bg-neutral-100">
                        <Image
                          src={evt.image}
                          alt={evt.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 hover:scale-105"
                          priority={isCenter}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                        {/* Top-Left Date Badge (Maroon Rounded Rect) */}
                        <div className="absolute top-3 left-3 rounded-xl bg-gradient-to-b from-[#6B182B] via-[#521120] to-[#3B0B16] text-[#FAF3E8] p-2 text-center min-w-[46px] shadow-lg border border-[#E2B774]/70">
                          <span className="block font-serif text-lg font-black leading-none text-white">
                            {evt.day}
                          </span>
                          <span className="block text-[9.5px] font-bold tracking-wider uppercase text-[#FCE9C2] mt-0.5">
                            {evt.month}
                          </span>
                          <span className="block text-[8px] text-white/75 font-medium">
                            {evt.year}
                          </span>
                        </div>

                        {/* Bottom-left Overlapping Circular Icon Badge */}
                        <div className="absolute -bottom-3.5 left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#6B182B] to-[#3B0B16] border-2 border-[#E2B774] flex items-center justify-center shadow-md z-10">
                          {evt.icon}
                        </div>
                      </div>

                      {/* Content Box */}
                      <div className="p-4 sm:p-5 pt-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-base sm:text-lg font-bold text-[#3D0C16] leading-snug line-clamp-2">
                            {evt.title}
                          </h3>
                          <p className="text-xs text-[#5B1525]/85 mt-1.5 leading-relaxed font-normal line-clamp-2">
                            {evt.description}
                          </p>
                        </div>

                        <div>
                          {/* Location & Time Strip */}
                          <div className="pt-3 border-t border-[#C69A60]/20 flex items-center gap-1.5 text-[11px] text-[#3D0C16]/80 font-medium">
                            <span className="text-[#8A253A] font-bold">📍</span>
                            <span className="truncate">{evt.location}</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-[#8A253A] font-bold">🕒</span>
                            <span className="truncate">{evt.time}</span>
                          </div>

                          {/* "Register Now →" Maroon Pill Button */}
                          <div className="pt-3.5 flex justify-end">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedEvent(evt);
                                setIsRegisterSuccess(false);
                                setRegForm({ name: "", email: "", mobile: "", college: "" });
                              }}
                              className="py-1.5 px-4 rounded-full text-xs font-bold text-[#FAF3E8] bg-gradient-to-r from-[#6B182B] via-[#521120] to-[#3D0C16] hover:brightness-110 border border-[#C69A60]/50 shadow-md transition-all duration-200 flex items-center gap-1 cursor-pointer group/btn"
                            >
                              <span>Register Now</span>
                              <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Soft 3D Floor Shadow under center card */}
                  <div
                    className={`w-3/4 h-3.5 bg-black/15 blur-lg rounded-full mx-auto mt-2 transition-opacity duration-300 ${
                      isCenter ? "opacity-100" : "opacity-40"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to event ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === i
                    ? "bg-[#6B182B] w-7 h-2.5 shadow-sm"
                    : "bg-[#C69A60]/40 hover:bg-[#C69A60]/70 w-2.5 h-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Registration Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#C69A60]/40 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>

              {isRegisterSuccess ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#3D0C16]">
                    Registration Confirmed!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D0C16]/80 leading-relaxed">
                    Thank you, <span className="font-bold text-[#5B1525]">{regForm.name}</span>. Your seat for{" "}
                    <span className="font-bold text-[#5B1525]">{selectedEvent.title}</span> ({selectedEvent.day} {selectedEvent.month} {selectedEvent.year}) has been reserved. A confirmation email has been sent to{" "}
                    <span className="font-bold text-[#5B1525]">{regForm.email}</span>.
                  </p>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="mt-4 px-6 py-2 rounded-full text-xs font-bold text-[#FAF3E8] bg-[#5B1525]"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div>
                  <span className="text-[10px] font-bold text-[#C69A60] uppercase tracking-wider block">
                    Event Registration
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D0C16] mt-0.5">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-xs text-[#5B1525] mt-1 font-semibold">
                    📅 {selectedEvent.day} {selectedEvent.month} {selectedEvent.year} • 🕒 {selectedEvent.time} • 📍 {selectedEvent.location}
                  </p>

                  <form onSubmit={handleRegisterSubmit} className="mt-5 space-y-3.5 text-xs">
                    <div>
                      <label className="block font-semibold text-[#3D0C16] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={regForm.name}
                        onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                        placeholder="e.g. Priya Deshmukh"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-[#C69A60] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-[#3D0C16] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={regForm.email}
                          onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-[#C69A60] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-[#3D0C16] mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={regForm.mobile}
                          onChange={(e) => setRegForm({ ...regForm, mobile: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-[#C69A60] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#3D0C16] mb-1">
                        College / Organization
                      </label>
                      <input
                        type="text"
                        value={regForm.college}
                        onChange={(e) => setRegForm({ ...regForm, college: e.target.value })}
                        placeholder="Matrix School of Management Studies / Other"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-[#C69A60] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-3 py-3 rounded-full text-xs sm:text-sm font-bold text-[#FAF3E8] bg-gradient-to-r from-[#6B182B] via-[#521120] to-[#3D0C16] hover:brightness-110 shadow-md cursor-pointer border border-[#C69A60]/40"
                    >
                      Confirm Event Registration →
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default UpcomingEventsSection;
