"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Club {
  id: string;
  name: string;
  category: "Professional" | "Cultural" | "Social Impact" | "Analytics";
  mandate: string;
  activities: string[];
  flagshipEvent: string;
  icon: string;
}

export function ClubsAndCommittees() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const clubs: Club[] = [
    {
      id: "finance",
      name: "Vittashastra",
      category: "Professional",
      mandate: "Finance & Capital Markets Club",
      activities: [
        "Live Virtual Stock Market Simulations",
        "Equity Research & Valuation Hackathons",
        "Weekly Global FinTech & Macro Newsletters",
      ],
      flagshipEvent: "Matrix Bull & Bear Trading Championship",
      icon: "📈",
    },
    {
      id: "marketing",
      name: "MarkMatrix",
      category: "Professional",
      mandate: "Marketing & Growth Strategy Cell",
      activities: [
        "Brand Strategy & Ad-Mad Competitions",
        "Digital Performance Marketing Live Campaigns",
        "CXO Product Case Discussion Series",
      ],
      flagshipEvent: "National Brand Conclave: BrandStorm",
      icon: "🎯",
    },
    {
      id: "analytics",
      name: "Technocraft",
      category: "Analytics",
      mandate: "AI, Big Data & Decision Science Hub",
      activities: [
        "Python & Machine Learning Bootcamps",
        "Business Intelligence Dashboard Hackathons",
        "Kaggle Data Challenges & Cloud Analytics",
      ],
      flagshipEvent: "Matrix DataHack & AI Summit",
      icon: "⚡",
    },
    {
      id: "hr",
      name: "Humanitas",
      category: "Professional",
      mandate: "HR & People Strategy Guild",
      activities: [
        "Corporate Mock HR Negotiations",
        "People Analytics & Talent Case Studies",
        "Labor Law Debates & HRBP Simulations",
      ],
      flagshipEvent: "HR Leadership Symposium: Prerna",
      icon: "🤝",
    },
    {
      id: "cultural",
      name: "KalaKriti",
      category: "Cultural",
      mandate: "Fine Arts, Theatre & Music Society",
      activities: [
        "Inter-College Street Play (Nukkad Natak)",
        "Annual Band Battles & Vocal Competitions",
        "Fine Art Exhibitions & Photography Walks",
      ],
      flagshipEvent: "Matrix Fiesta Cultural Night",
      icon: "🎭",
    },
    {
      id: "social",
      name: "Rotaract & CSR Wing",
      category: "Social Impact",
      mandate: "Community Outreach & Stewardship",
      activities: [
        "Annual Mega Blood Donation & Health Camps",
        "Rural Education & Digital Literacy Drives",
        "Tree Plantation & Eco-Sustainability Drives",
      ],
      flagshipEvent: "Gram Vikas Village Immersion Project",
      icon: "🌱",
    },
  ];

  const filteredClubs =
    activeCategory === "All"
      ? clubs
      : clubs.filter((c) => c.category === activeCategory);

  return (
    <section id="clubs" className="py-20 sm:py-28 bg-gradient-to-b from-[#20040A] via-[#2D060F] to-[#1C0308] text-[#FAF3E8] relative overflow-hidden border-t border-[#C69A60]/20">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#C69A60]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/30 text-[#E0BA85] text-xs font-bold uppercase tracking-wider">
            Student Leadership
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FAF3E8] tracking-tight">
            25+ Student-Run Clubs &amp; Societies
          </h2>
          <p className="text-sm sm:text-base text-[#FAF3E8]/85 font-medium leading-relaxed">
            Campus life at Matrix is vibrant, autonomous, and driven entirely by students. Spearhead national fests, organize high-level corporate summits, and forge lifelong bonds.
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-12 h-px bg-[#C69A60]" />
            <span className="w-2 h-2 rotate-45 bg-[#C69A60]" />
            <span className="w-12 h-px bg-[#C69A60]" />
          </div>
        </div>

        {/* Top Image Banner showcasing Student Collaboration */}
        <div className="relative rounded-3xl overflow-hidden border border-[#C69A60]/30 shadow-2xl h-56 sm:h-72">
          <Image
            src="/campus-life/student-clubs.jpg"
            alt="Matrix Students Collaborating in Clubs"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 max-w-xl text-white">
            <span className="text-xs font-extrabold text-[#E0BA85] tracking-widest uppercase mb-1">
              Autonomous Governance
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              Lead Real Budgets, Real Events &amp; Real Impact
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200 mt-2">
              Every club operates with an executive council, faculty mentor, and industry advisory panel.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {["All", "Professional", "Analytics", "Cultural", "Social Impact"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#C69A60] text-[#3D0C16] shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-white/80 border border-[#C69A60]/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#C69A60]/25 hover:border-[#C69A60] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_10px_20px_rgba(198,154,96,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{club.icon}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#C69A60]/15 text-[#E0BA85] text-[10px] font-extrabold uppercase tracking-wider">
                    {club.category}
                  </span>
                </div>

                <h4 className="font-serif text-xl font-bold text-white group-hover:text-[#FAF3E8]">
                  {club.name}
                </h4>
                <span className="text-xs font-semibold text-[#E0BA85] block mt-0.5">
                  {club.mandate}
                </span>

                <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                    Key Activities:
                  </span>
                  {club.activities.map((act, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-neutral-300">
                      <span className="text-[#C69A60] font-bold">›</span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10">
                <span className="text-[10px] text-neutral-400 block uppercase font-medium">Flagship Event</span>
                <span className="text-xs font-bold text-[#E0BA85] mt-0.5 block">{club.flagshipEvent}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ClubsAndCommittees;
