"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  title: string;
  category: "Infrastructure" | "Learning" | "Student Life" | "Recreation";
  image: string;
  caption: string;
}

export function CampusLifeGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const gallery: GalleryItem[] = [
    {
      id: "1",
      title: "Lush Green Campus Main Plaza",
      category: "Infrastructure",
      image: "/campus-life/campus-hero.jpg",
      caption: "The verdant 15+ acre academic sanctuary in Pune.",
    },
    {
      id: "2",
      title: "Interactive Smart Amphitheater",
      category: "Learning",
      image: "/campus-life/smart-classrooms.jpg",
      caption: "Executive Harvard case study discussions in session.",
    },
    {
      id: "3",
      title: "Central Digital Library & Research Hub",
      category: "Learning",
      image: "/campus-life/central-library.jpg",
      caption: "Air-conditioned reference reading arena with 25,000+ volumes.",
    },
    {
      id: "4",
      title: "Advanced Data Science & Computing Lab",
      category: "Learning",
      image: "/campus-life/tech-lab.jpg",
      caption: "Equipped with high-end compute nodes for business analytics.",
    },
    {
      id: "5",
      title: "Central Air-Conditioned Auditorium",
      category: "Infrastructure",
      image: "/campus-life/auditorium.jpg",
      caption: "600-seater venue for CEO conclaves and cultural milestones.",
    },
    {
      id: "6",
      title: "Student Leadership Collaboration",
      category: "Student Life",
      image: "/campus-life/student-clubs.jpg",
      caption: "Autonomous student councils deliberating event strategies.",
    },
    {
      id: "7",
      title: "Outdoor Athletic Sports Arena",
      category: "Recreation",
      image: "/campus-life/sports-arena.jpg",
      caption: "Floodlit basketball, volleyball, and athletic sports arena.",
    },
    {
      id: "8",
      title: "Gourmet Dining Cafeteria & Lounge",
      category: "Recreation",
      image: "/campus-life/cafeteria.jpg",
      caption: "Hygienic multi-cuisine student dining hall and coffee bar.",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF3E8] text-[#3D0C16] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A0E1B]/10 border border-[#4A0E1B]/20 text-[#4A0E1B] text-xs font-bold uppercase tracking-wider">
            Visual Tour
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#3D0C16] tracking-tight">
            Moments &amp; Spaces: The Campus Gallery
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-medium">
            Explore our architectural landmarks, high-tech labs, and energetic student life through our lens.
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-12 h-px bg-[#C69A60]" />
            <span className="w-2 h-2 rotate-45 bg-[#C69A60]" />
            <span className="w-12 h-px bg-[#C69A60]" />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {["All", "Infrastructure", "Learning", "Student Life", "Recreation"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === f
                  ? "bg-[#3D0C16] text-[#FAF3E8] shadow-md scale-105"
                  : "bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-[#C69A60]/30 shadow-md hover:shadow-xl cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold text-[#E0BA85] uppercase tracking-wider block">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-bold text-white drop-shadow-sm truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-neutral-300 truncate mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </p>
              </div>

              {/* Top Zoom Badge */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                🔍
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full border border-[#C69A60]/40 shadow-2xl relative text-[#3D0C16]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="relative w-full h-[380px] sm:h-[480px] bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 bg-white flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#4A0E1B] uppercase tracking-wider block">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D0C16]">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    {selectedItem.caption}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#3D0C16] hover:bg-[#5B1525] shrink-0"
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

export default CampusLifeGallery;
