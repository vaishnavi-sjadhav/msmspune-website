"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowUpRight, X, Calendar, MapPin, Award } from "lucide-react";
import { EVENTS_DATA } from "@/data/events";
import { MatrixEvent } from "@/types";

export const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<MatrixEvent | null>(null);

  // Stagger offsets matching the editorial layout in the reference
  const getStaggerClass = (index: number) => {
    switch (index) {
      case 0:
        return "lg:translate-y-0";
      case 1:
        return "lg:translate-y-10";
      case 2:
        return "lg:translate-y-3";
      case 3:
        return "lg:translate-y-12";
      default:
        return "";
    }
  };

  return (
    <section id="events" className="relative py-16 sm:py-24 bg-[#091517] text-white overflow-hidden border-t border-b border-[#142c30]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c89650]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#124d54]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 pb-4 border-b border-white/10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#c89650] uppercase mb-1">
              {EVENTS_DATA.sectionSubtitle}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {EVENTS_DATA.sectionTitle}
            </h2>
          </div>

          {/* View All Collection / Events Link with diagonal arrow */}
          <Link
            href={EVENTS_DATA.viewAllLink.href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#d97768] hover:text-[#f09a8d] uppercase transition-colors group self-start sm:self-auto"
          >
            <span>{EVENTS_DATA.viewAllLink.label}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4 Staggered Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 pb-10">
          {EVENTS_DATA.events.map((event, index) => {
            const isAccent = !!event.accentColor;

            return (
              <div
                key={event.id}
                className={`group transition-transform duration-500 ease-out ${getStaggerClass(index)}`}
              >
                {/* Image Container with Floating '+' Button */}
                <div
                  onClick={() => setSelectedEvent(event)}
                  className="relative aspect-[3/4] w-full overflow-hidden rounded-md sm:rounded-lg bg-[#142528] cursor-pointer shadow-lg group-hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Overlaid '+' Button (Bottom Right Corner) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(event);
                    }}
                    aria-label={`View details for ${event.title}`}
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/65 backdrop-blur-md border border-white/25 flex items-center justify-center text-white/90 hover:bg-[#c89650] hover:text-slate-900 hover:border-[#c89650] transition-all duration-300 shadow-md group-hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

                {/* Left-Aligned Information Underneath */}
                <div className="mt-3.5 sm:mt-4 text-left">
                  <h3
                    onClick={() => setSelectedEvent(event)}
                    style={{ color: isAccent ? event.accentColor : undefined }}
                    className={`font-serif text-base sm:text-lg font-medium leading-snug cursor-pointer transition-colors duration-200 ${
                      !isAccent
                        ? "text-gray-100 group-hover:text-[#c89650]"
                        : "group-hover:opacity-85"
                    }`}
                  >
                    {event.title}
                  </h3>

                  {/* Category / Subtitle Underneath */}
                  <p className="mt-1 text-[10px] sm:text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                    {event.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#0e1f22] text-white rounded-2xl shadow-2xl border border-white/15 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f22] via-[#0e1f22]/30 to-transparent" />

              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-[#c89650] hover:text-slate-900 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#c89650] uppercase">
                  {selectedEvent.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {selectedEvent.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  {selectedEvent.subtitle}
                </p>
              </div>

              {/* Event Metadata Badges */}
              <div className="flex flex-wrap gap-3 py-2 border-y border-white/10 text-xs text-gray-300">
                {selectedEvent.date && (
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#c89650]" />
                    <span>{selectedEvent.date}</span>
                  </div>
                )}
                {selectedEvent.venue && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c89650]" />
                    <span>{selectedEvent.venue}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#c89650]" />
                  <span>{selectedEvent.organizedBy}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                {selectedEvent.description}
              </p>

              {/* CTA in Modal */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="w-full py-2.5 bg-[#c89650] hover:bg-[#b5883d] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition"
                >
                  Close Event Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
