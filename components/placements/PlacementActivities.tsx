"use client";

import React, { useState } from "react";
import Image from "next/image";

export function PlacementActivities() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const activities = [
    { title: "Pre-Placement Talk", src: "/placements/activity-1.jpg", desc: "Corporate orientation in the main auditorium" },
    { title: "Recruiter Interaction", src: "/placements/activity-2.jpg", desc: "Faculty & corporate HR delegation meet" },
    { title: "Panel Interviews", src: "/placements/activity-3.jpg", desc: "Group discussions and executive personal interviews" },
    { title: "Industry Conclave", src: "/placements/activity-4.jpg", desc: "Interactive management symposiums & seminars" },
    { title: "Offer Letter Day", src: "/placements/activity-5.jpg", desc: "Celebrating selected MBA cohort placements" },
  ];

  return (
    <section className="relative py-14 sm:py-20 bg-[#FDFBF7] text-[#2D070F] border-b border-[#E8DEC9] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D0C16] tracking-tight">
            Campus Placement Activities
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Industry interactions, recruitment drives and corporate visits
          </p>
          <div className="w-16 h-1 bg-[#C69A60] mt-2.5 rounded-full" />
        </div>

        {/* 5 Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {activities.map((act, idx) => {
            const isLast = idx === activities.length - 1;

            return (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(act.src)}
                className={`relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E0D0BA] shadow-md group cursor-pointer ${
                  isLast ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <Image
                  src={act.src}
                  alt={act.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Caption / Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="text-xs font-bold truncate">{act.title}</div>
                  <div className="text-[10px] text-white/70 truncate">{act.desc}</div>
                </div>

                {/* View Gallery Badge on Last Card (Matches Mockup) */}
                {isLast && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-xs group-hover:bg-black/25 transition-colors">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] shadow-lg flex items-center gap-1.5">
                      <span>View Gallery</span>
                      <span>→</span>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-3xl w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <Image
              src={selectedPhoto}
              alt="Campus Placement Activity Enlarge"
              fill
              className="object-cover"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
