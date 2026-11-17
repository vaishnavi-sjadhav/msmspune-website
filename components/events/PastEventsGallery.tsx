"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PastEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  attendees: string;
  image: string;
  description: string;
}

export function PastEventsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<PastEvent | null>(null);

  const pastEvents: PastEvent[] = [
    {
      id: "formal-cohort",
      title: "MBA Placement Batch Felicitation",
      category: "Corporate Excellence",
      date: "October 2025",
      attendees: "250+ Students",
      image: "/events/past-formal-cohort.jpg",
      description: "Celebrating outstanding placement offers with marquee recruiters including Bajaj Finserv, HDFC Bank, TCS, and Infosys.",
    },
    {
      id: "cultural-fest",
      title: "Goonj Annual Cultural Extravaganza",
      category: "Campus Life & Arts",
      date: "September 2025",
      attendees: "1200+ Participants",
      image: "/events/past-cultural-fest.jpg",
      description: "Vibrant traditional dance performances, music competitions, and inter-college cultural events bringing energy to the campus.",
    },
    {
      id: "convocation-hall",
      title: "Matrix Annual Convocation Ceremony",
      category: "Academic Milestones",
      date: "July 2025",
      attendees: "1500+ Audience",
      image: "/events/past-convocation-hall.jpg",
      description: "Conferring MBA degrees upon the graduating cohort in the grand air-conditioned auditorium with distinguished chief guests.",
    },
    {
      id: "panel-discussion",
      title: "CXO Round-table & Leadership Conclave",
      category: "Industry Conclave",
      date: "May 2025",
      attendees: "45+ Corporate Leaders",
      image: "/events/past-panel-discussion.jpg",
      description: "Visionary industry executives debating emerging trends in AI in management, FinTech strategies, and sustainable supply chain.",
    },
    {
      id: "campus-gathering",
      title: "Campus Induction & Orientation Day",
      category: "Student Onboarding",
      date: "March 2025",
      attendees: "300+ New Entrants",
      image: "/events/past-campus-gathering.jpg",
      description: "Welcoming the incoming batch of MBA aspirants with interactive ice-breaking workshops and campus orientation walks.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? pastEvents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === pastEvents.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="past-events-section" className="bg-[#FAF3E8] pb-14 sm:pb-20 text-[#3D0C16]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header: Kicker, Title, Subtitle & View Gallery Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold text-[#C69A60] uppercase tracking-[0.22em] block mb-1">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#3D0C16] tracking-tight">
              Past Events
            </h2>
            <p className="text-xs sm:text-sm text-[#5B1525]/80 mt-1 font-medium">
              A glimpse of our memorable moments.
            </p>
          </div>

          <button
            onClick={() => setSelectedPhoto(pastEvents[currentIndex])}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#3D0C16] border border-[#C69A60] bg-white/70 hover:bg-[#C69A60] hover:text-white transition-all shadow-sm w-fit shrink-0 cursor-pointer"
          >
            <span>View Gallery</span>
            <span>→</span>
          </button>
        </div>

        {/* Carousel Container with Side Arrows */}
        <div className="relative">
          {/* Navigation Arrows (visible on sm+) */}
          <button
            onClick={handlePrev}
            aria-label="Previous past events slide"
            className="hidden sm:flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3D0C16] text-[#FAF3E8] hover:bg-[#5B1525] border border-[#C69A60]/40 items-center justify-center shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span className="text-lg font-bold">‹</span>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next past events slide"
            className="hidden sm:flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3D0C16] text-[#FAF3E8] hover:bg-[#5B1525] border border-[#C69A60]/40 items-center justify-center shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span className="text-lg font-bold">›</span>
          </button>

          {/* Cards Row: Swipeable on mobile, Grid on tablet/desktop */}
          <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory">
            {pastEvents.map((evt, idx) => {
              const isActive = idx === currentIndex;

              return (
                <motion.div
                  key={evt.id}
                  onClick={() => setSelectedPhoto(evt)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`min-w-[68vw] sm:min-w-0 snap-center shrink-0 sm:shrink relative rounded-2xl overflow-hidden cursor-pointer border shadow-md transition-all duration-300 aspect-[3/4] sm:aspect-[4/5] bg-white ${
                    isActive
                      ? "ring-2 ring-[#C69A60] border-[#C69A60] shadow-[0_10px_25px_rgba(198,154,96,0.3)]"
                      : "border-[#C69A60]/30 hover:border-[#C69A60]/70"
                  }`}
                >
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-black/60 text-[#C69A60] backdrop-blur-sm border border-[#C69A60]/40">
                      {evt.date}
                    </span>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="block text-[10px] font-semibold text-[#C69A60]">
                      {evt.category}
                    </span>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-[#FAF3E8] leading-tight line-clamp-2 mt-0.5">
                      {evt.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination Dots (Matching Mockup ● ○ ○ ○) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {pastEvents.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i
                    ? "bg-[#3D0C16] w-6"
                    : "bg-[#3D0C16]/25 hover:bg-[#3D0C16]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Photo Details */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-[#C69A60]/40 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>

              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#C69A60] font-bold">
                  <span>{selectedPhoto.category}</span>
                  <span>•</span>
                  <span>{selectedPhoto.date}</span>
                  <span>•</span>
                  <span>{selectedPhoto.attendees}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3D0C16]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3D0C16]/80 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
