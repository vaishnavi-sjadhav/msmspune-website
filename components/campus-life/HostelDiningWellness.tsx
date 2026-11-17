"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HostelDiningWellness() {
  const sections = [
    {
      title: "Executive Student Residences",
      tag: "Residential Living",
      image: "/campus-life/hostel-life.jpg",
      desc: "Designed as a vibrant home away from home. Separate secure hostel blocks for boys and girls featuring air-cooled rooms, high-speed Wi-Fi, ergonomic study stations, and biometric security.",
      features: [
        "Twin & Triple Sharing Fully-Furnished Rooms",
        "24x7 Biometric Turnstile Security & CCTV Coverage",
        "Dedicated Floor Wardens & Medical Attendants",
        "Common Recreation Lounge with Table Tennis & TV",
      ],
    },
    {
      title: "Multi-Cuisine Gourmet Cafeteria",
      tag: "Dining & Nutrition",
      image: "/campus-life/cafeteria.jpg",
      desc: "A lively social epicenter serving fresh, hygienic, and balanced meals crafted under strict nutritional standards. Features regional Indian delicacies, continental options, and a modern student cafe.",
      features: [
        "FSSAI-Certified Modern Steam Kitchen",
        "Nutritious Breakfast, Lunch, Snacks & Dinner",
        "Specialty Barista Coffee & Grab-and-Go Kiosk",
        "Spacious Sunlit Indoor & Outdoor Seating for 400",
      ],
    },
    {
      title: "Sports Complex & Modern Gymnasium",
      tag: "Athletics & Fitness",
      image: "/campus-life/sports-arena.jpg",
      desc: "Encouraging athletic vigor and mental rejuvenation. Boasts a full-sized basketball court, volleyball court, cricket nets, indoor badminton, and a modern fitness gym.",
      features: [
        "Full-Sized Outdoor Basketball & Volleyball Courts",
        "Modern Fitness Gym with Cardio & Weight Stations",
        "Indoor Arena: Table Tennis, Carrom & Chess",
        "Annual Synergy Sports Tournament & Coaching",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF3E8] text-[#3D0C16] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A0E1B]/10 border border-[#4A0E1B]/20 text-[#4A0E1B] text-xs font-bold uppercase tracking-wider">
            Comfort &amp; Well-being
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#3D0C16] tracking-tight">
            Hostels, Dining &amp; Recreation
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-medium">
            A comprehensive campus environment engineered to keep scholars energized, healthy, and focused throughout their 2-year MBA journey.
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-12 h-px bg-[#C69A60]" />
            <span className="w-2 h-2 rotate-45 bg-[#C69A60]" />
            <span className="w-12 h-px bg-[#C69A60]" />
          </div>
        </div>

        {/* 3 Showcase Pillars */}
        <div className="space-y-12">
          {sections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Box */}
              <div
                className={`lg:col-span-6 relative rounded-3xl overflow-hidden border-2 border-[#C69A60]/35 shadow-xl bg-neutral-900 aspect-[16/10] ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#3D0C16]/90 backdrop-blur-md border border-[#C69A60]/40 text-[#FAF3E8] text-xs font-bold shadow-md">
                  {item.tag}
                </span>
              </div>

              {/* Text Info */}
              <div
                className={`lg:col-span-6 space-y-4 ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className="text-xs font-extrabold text-[#C69A60] uppercase tracking-wider">
                  Campus Facilities
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D0C16] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.features.map((f, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-[#C69A60]/20 shadow-sm flex items-start gap-2 text-xs text-neutral-800"
                    >
                      <span className="text-[#C69A60] font-bold mt-0.5">✔</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HostelDiningWellness;
