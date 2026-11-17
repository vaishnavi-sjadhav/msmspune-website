"use client";

import React, { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(1); // Default to center card (Industry Expert Session)
  const [selectedEvent, setSelectedEvent] = useState<EventCardData | null>(null);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [regForm, setRegForm] = useState({ name: "", email: "", mobile: "", college: "" });

  const events: EventCardData[] = [
    {
      id: "recruitment-drive",
      day: "02",
      month: "Dec",
      year: "2026",
      title: "Campus Recruitment Drive",
      description: "Meet top recruiters and explore career opportunities.",
      location: "Campus",
      time: "09:00 AM – 05:00 PM",
      image: "/events/3d-recruitment-drive.jpg",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "expert-session",
      day: "25",
      month: "Nov",
      year: "2026",
      title: "Industry Expert Session",
      description: "Gain insights from industry leaders and industry experts.",
      location: "Seminar Hall",
      time: "10:00 AM – 12:00 PM",
      image: "/events/3d-expert-session.jpg",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "digital-marketing",
      day: "10",
      month: "Dec",
      year: "2026",
      title: "Digital Marketing Workshop",
      description: "Enhance your skills with hands-on training.",
      location: "Seminar Hall",
      time: "02:00 PM – 04:00 PM",
      image: "/events/3d-digital-marketing.jpg",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6M4 20h16"
          />
        </svg>
      ),
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegisterSuccess(true);
  };

  return (
    <section id="upcoming-events-section" className="relative bg-[#FAF3E8] py-14 sm:py-20 overflow-hidden text-[#3D0C16]">
      {/* Decorative Dot Grid Pattern on Left (Matches Mockup) */}
      <div className="absolute top-16 left-6 sm:left-12 opacity-35 pointer-events-none hidden sm:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C69A60]" />
          ))}
        </div>
      </div>

      {/* Decorative Soft Golden Ribbon Wave Lines in Background */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#C69A60]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-[#DEB887]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Top Header Block: Pill, Title, Subtitle, Flourish & Right Button */}
        <div className="relative mb-12 sm:mb-16">
          {/* Centered Headings */}
          <div className="text-center space-y-2">
            {/* "What's Next" Golden Pill Badge */}
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#FAF3E8] border border-[#C69A60]/70 text-[#C69A60] text-xs font-bold uppercase tracking-wider shadow-sm">
              <span>What&apos;s Next</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5.5xl font-extrabold text-[#3D0C16] tracking-tight">
              Upcoming Events
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#5B1525]/85 font-medium max-w-xl mx-auto">
              Be a part of inspiring events and opportunities.
            </p>

            {/* Decorative Gold Flourish: ─── ◆ ─── */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#C69A60]" />
              <span className="w-2 h-2 rotate-45 bg-[#C69A60]" />
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#C69A60]" />
            </div>
          </div>

          {/* Top-Right "View All Events →" Button (Absolute on Desktop, matching mockup) */}
          <div className="flex justify-center sm:absolute sm:top-2 sm:right-0 mt-4 sm:mt-0">
            <button
              onClick={() => {
                const el = document.getElementById("past-events-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#FAF3E8] bg-gradient-to-r from-[#5B1525] via-[#4A0F1D] to-[#3D0C16] hover:brightness-110 border border-[#C69A60]/50 shadow-[0_6px_20px_rgba(61,12,22,0.2)] transition-all duration-300 cursor-pointer group"
            >
              <span>View All Events</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* 3D CoverFlow Carousel Stage */}
        <div className="relative py-4 sm:py-6">
          
          {/* Circular Navigation Arrows (Positioned at Edges) */}
          <button
            onClick={handlePrev}
            aria-label="Previous event"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-[#FAF3E8] text-[#3D0C16] border border-[#C69A60]/60 shadow-[0_8px_20px_rgba(61,12,22,0.12)] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span className="text-xl font-bold">‹</span>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next event"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-[#FAF3E8] text-[#3D0C16] border border-[#C69A60]/60 shadow-[0_8px_20px_rgba(61,12,22,0.12)] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span className="text-xl font-bold">›</span>
          </button>

          {/* Cards Display Grid: Desktop 3D Coverflow (3 cols) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 sm:gap-8 items-center px-8 sm:px-14">
            {events.map((evt, idx) => {
              const isActive = idx === activeIndex;
              const isLeft = (idx + 1) % events.length === activeIndex;
              const isRight = (idx - 1 + events.length) % events.length === activeIndex;

              return (
                <motion.div
                  key={evt.id}
                  onClick={() => setActiveIndex(idx)}
                  initial={false}
                  animate={{
                    scale: isActive ? 1.05 : 0.94,
                    y: isActive ? -8 : 6,
                    rotateY: isLeft ? 10 : isRight ? -10 : 0,
                    opacity: isActive ? 1 : 0.88,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  style={{ perspective: 1000 }}
                  className={`cursor-pointer transition-all duration-300 relative ${
                    isActive ? "z-20" : "z-10 hover:opacity-100"
                  }`}
                >
                  {/* Thick Metallic 3D Gold Extruded Beveled Frame */}
                  <div className="p-3 sm:p-3.5 rounded-[30px] sm:rounded-[34px] bg-gradient-to-br from-[#E2B774] via-[#FCE9C2] to-[#A87432] shadow-[0_22px_45px_rgba(61,12,22,0.16),0_8px_16px_rgba(198,154,96,0.35)] ring-1 ring-white/60">
                    <div className="rounded-[22px] sm:rounded-[26px] overflow-hidden bg-white shadow-inner flex flex-col justify-between">
                      {/* Event Banner Image with Date Badge & Floating Icon */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                        <Image
                          src={evt.image}
                          alt={evt.title}
                          fill
                          className="object-cover object-center"
                          priority={isActive}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                        {/* Top-Left Date Badge */}
                        <div className="absolute top-3.5 left-3.5 rounded-xl overflow-hidden bg-gradient-to-b from-[#6B182B] via-[#521120] to-[#3B0B16] text-[#FAF3E8] p-2 sm:p-2.5 text-center min-w-[50px] shadow-lg border border-[#E2B774]/60">
                          <span className="block font-serif text-lg sm:text-xl font-black leading-none text-white">
                            {evt.day}
                          </span>
                          <span className="block text-[10px] font-bold tracking-wider uppercase text-[#FCE9C2] mt-0.5">
                            {evt.month}
                          </span>
                          <span className="block text-[8.5px] text-white/75 font-medium">
                            {evt.year}
                          </span>
                        </div>

                        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-white to-transparent" />

                        {/* Floating Maroon Circular Icon Badge */}
                        <div className="absolute -bottom-4 left-5 w-11 h-11 rounded-full bg-gradient-to-br from-[#6B182B] to-[#3B0B16] border-2 border-[#E2B774] flex items-center justify-center shadow-lg z-10">
                          {evt.icon}
                        </div>
                      </div>

                      {/* Content Box */}
                      <div className="p-5 sm:p-6 pt-7 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-lg sm:text-1.5xl font-bold text-[#3D0C16] leading-snug">
                            {evt.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-[#5B1525]/85 mt-2 leading-relaxed font-normal">
                            {evt.description}
                          </p>

                          <div className="mt-4 pt-3 border-t border-[#C69A60]/20 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#3D0C16]/75 font-medium">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[#8A253A]">📍</span>
                              <span>{evt.location}</span>
                            </div>
                            <span>|</span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[#8A253A]">🕒</span>
                              <span>{evt.time}</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-5 flex justify-end">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedEvent(evt);
                              setIsRegisterSuccess(false);
                              setRegForm({ name: "", email: "", mobile: "", college: "" });
                            }}
                            className={`py-2 px-5 rounded-full text-xs font-bold text-[#FAF3E8] bg-gradient-to-r from-[#5B1525] via-[#4A0F1D] to-[#3D0C16] hover:brightness-110 border border-[#C69A60]/50 shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer group/btn ${
                              isActive ? "opacity-100" : "opacity-85 hover:opacity-100"
                            }`}
                          >
                            <span>Register Now</span>
                            <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Soft 3D Floor Shadow */}
                  <div className="w-4/5 h-4 bg-black/15 blur-lg rounded-full mx-auto mt-2 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Mobile & Tablet (<1024px): Single Active Featured Card with Carousel Animation */}
          <div className="lg:hidden px-4 sm:px-12 max-w-sm sm:max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={events[activeIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative z-20"
              >
                {/* Thick Metallic 3D Gold Extruded Beveled Frame */}
                <div className="p-3 sm:p-3.5 rounded-[30px] sm:rounded-[34px] bg-gradient-to-br from-[#E2B774] via-[#FCE9C2] to-[#A87432] shadow-[0_22px_45px_rgba(61,12,22,0.16),0_8px_16px_rgba(198,154,96,0.35)] ring-1 ring-white/60">
                  <div className="rounded-[22px] sm:rounded-[26px] overflow-hidden bg-white shadow-inner flex flex-col justify-between">
                    {/* Event Banner Image with Date Badge & Floating Icon */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                      <Image
                        src={events[activeIndex].image}
                        alt={events[activeIndex].title}
                        fill
                        className="object-cover object-center"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Top-Left Date Badge */}
                      <div className="absolute top-3.5 left-3.5 rounded-xl overflow-hidden bg-gradient-to-b from-[#6B182B] via-[#521120] to-[#3B0B16] text-[#FAF3E8] p-2 sm:p-2.5 text-center min-w-[50px] shadow-lg border border-[#E2B774]/60">
                        <span className="block font-serif text-lg sm:text-xl font-black leading-none text-white">
                          {events[activeIndex].day}
                        </span>
                        <span className="block text-[10px] font-bold tracking-wider uppercase text-[#FCE9C2] mt-0.5">
                          {events[activeIndex].month}
                        </span>
                        <span className="block text-[8.5px] text-white/75 font-medium">
                          {events[activeIndex].year}
                        </span>
                      </div>

                      <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-white to-transparent" />

                      {/* Floating Maroon Circular Icon Badge */}
                      <div className="absolute -bottom-4 left-5 w-11 h-11 rounded-full bg-gradient-to-br from-[#6B182B] to-[#3B0B16] border-2 border-[#E2B774] flex items-center justify-center shadow-lg z-10">
                        {events[activeIndex].icon}
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-5 sm:p-6 pt-7 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg sm:text-1.5xl font-bold text-[#3D0C16] leading-snug">
                          {events[activeIndex].title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#5B1525]/85 mt-2 leading-relaxed font-normal">
                          {events[activeIndex].description}
                        </p>

                        <div className="mt-4 pt-3 border-t border-[#C69A60]/20 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#3D0C16]/75 font-medium">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#8A253A]">📍</span>
                            <span>{events[activeIndex].location}</span>
                          </div>
                          <span>|</span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#8A253A]">🕒</span>
                            <span>{events[activeIndex].time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-5 flex justify-end">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEvent(events[activeIndex]);
                            setIsRegisterSuccess(false);
                            setRegForm({ name: "", email: "", mobile: "", college: "" });
                          }}
                          className="py-2 px-5 rounded-full text-xs font-bold text-[#FAF3E8] bg-gradient-to-r from-[#5B1525] via-[#4A0F1D] to-[#3D0C16] hover:brightness-110 border border-[#C69A60]/50 shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer group/btn"
                        >
                          <span>Register Now</span>
                          <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Soft 3D Floor Shadow */}
                <div className="w-4/5 h-4 bg-black/15 blur-lg rounded-full mx-auto mt-2 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Pagination Dots (Matching Mockup ● ○ ○) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to event ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === i
                    ? "bg-[#5B1525] w-7 h-2.5 shadow-sm"
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
                      className="w-full mt-3 py-3 rounded-full text-xs sm:text-sm font-bold text-[#FAF3E8] bg-gradient-to-r from-[#5B1525] via-[#4A0F1D] to-[#3D0C16] hover:brightness-110 shadow-md cursor-pointer border border-[#C69A60]/40"
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
