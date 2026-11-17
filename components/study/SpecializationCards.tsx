"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface Specialization {
  id: string;
  code: string;
  title: string;
  tagline: string;
  image: string;
  badge: string;
  description: string;
  keyModules: string[];
  careerRoles: string[];
  topRecruiters: string[];
  averagePackage: string;
  highestPackage: string;
}

export function SpecializationCards() {
  const [selectedSpec, setSelectedSpec] = useState<Specialization | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const specializations: Specialization[] = [
    {
      id: "finance",
      code: "MBA-FIN",
      title: "Financial Management",
      badge: "Finance",
      tagline: "Corporate Valuation, Capital Markets & Investment Banking",
      image: "/study/spec-finance.jpg",
      description:
        "Master the mechanics of global financial markets, enterprise portfolio design, mergers & acquisitions, and algorithmic valuation techniques.",
      keyModules: [
        "Corporate Financial Restructuring",
        "Security Analysis & Portfolio Management",
        "Financial Derivatives & Risk Hedging",
        "FinTech, Blockchain & Algorithmic Trading",
        "Private Equity & Venture Capital",
      ],
      careerRoles: [
        "Investment Banking Analyst",
        "Financial Risk Manager (FRM)",
        "Equity Research Associate",
        "Corporate Treasury Specialist",
      ],
      topRecruiters: ["Goldman Sachs", "J.P. Morgan", "Morgan Stanley", "HDFC Bank", "Barclays"],
      averagePackage: "₹ 14.5 LPA",
      highestPackage: "₹ 54 LPA",
    },
    {
      id: "marketing",
      code: "MBA-MKT",
      title: "Marketing Management",
      badge: "Marketing",
      tagline: "Brand Leadership, Neuromarketing & Omni-channel Growth",
      image: "/study/spec-marketing.jpg",
      description:
        "Cultivate strategic brand authority, master digital performance acquisition, consumer behavioral neuroscience, and market expansion architectures.",
      keyModules: [
        "Strategic Brand Architecture & Equity",
        "Digital Marketing & Growth Hacking",
        "Consumer Psychology & Neuromarketing",
        "Omni-channel Retailing & E-commerce",
        "B2B Industrial Market Strategy",
      ],
      careerRoles: [
        "Brand Product Manager",
        "Chief Growth Strategist",
        "Digital Performance Marketing Lead",
        "Customer Experience (CX) Director",
      ],
      topRecruiters: ["Hindustan Unilever", "Amazon", "ITC", "Google", "Nestlé"],
      averagePackage: "₹ 13.8 LPA",
      highestPackage: "₹ 42 LPA",
    },
    {
      id: "hr",
      code: "MBA-HR",
      title: "Human Resource Management",
      badge: "Human Resources",
      tagline: "Strategic Talent Architecture, People Analytics & Future of Work",
      image: "/study/spec-hr.jpg",
      description:
        "Architect resilient organizational ecosystems, lead executive talent acquisition, navigate labor jurisprudence, and deploy modern workforce analytics.",
      keyModules: [
        "Strategic Human Resource Architecture",
        "People & Workforce Analytics",
        "Executive Talent Acquisition & Retention",
        "Labor Jurisprudence & Industrial Relations",
        "Organizational Design & Culture Engineering",
      ],
      careerRoles: [
        "HR Business Partner (HRBP)",
        "Talent Acquisition & Mobility Lead",
        "Organizational Development Consultant",
        "Total Rewards & Compensation Architect",
      ],
      topRecruiters: ["Deloitte", "Tata Consultancy Services", "Capgemini", "Adecco", "Infosys"],
      averagePackage: "₹ 12.6 LPA",
      highestPackage: "₹ 38 LPA",
    },
    {
      id: "analytics",
      code: "MBA-BA",
      title: "Business Analytics",
      badge: "Business Analytics",
      tagline: "AI Decision Intelligence, Big Data Modeling & Predictive Metrics",
      image: "/study/spec-analytics.jpg",
      description:
        "Harness Python, R, PowerBI, and machine learning to decode intricate datasets and architect predictive business intelligence frameworks.",
      keyModules: [
        "Predictive Modeling & Applied Machine Learning",
        "Python & R for Decision Science",
        "Big Data Engineering & Cloud Data Lakes",
        "Enterprise Business Intelligence & PowerBI",
        "Marketing & Supply Chain Analytics",
      ],
      careerRoles: [
        "Business Analytics Consultant",
        "Data Science & Strategy Manager",
        "Quantitative Decision Modeler",
        "BI Solutions Architect",
      ],
      topRecruiters: ["Microsoft", "NVIDIA", "Deloitte Analytics", "Mu Sigma", "Accenture AI"],
      averagePackage: "₹ 15.2 LPA",
      highestPackage: "₹ 54 LPA",
    },
    {
      id: "operations",
      code: "MBA-OSCM",
      title: "Operations & Supply Chain",
      badge: "Operations & Supply Chain",
      tagline: "Industry 4.0, Global Logistics Architecture & Lean Six Sigma",
      image: "/study/spec-operations.jpg",
      description:
        "Optimize end-to-end global supply networks, lead smart factory automation, deploy Lean Six Sigma, and engineer sustainable logistics value streams.",
      keyModules: [
        "Global Supply Chain Strategy & Logistics",
        "Lean Manufacturing & Six Sigma Green Belt",
        "Warehouse Automation & IoT in Operations",
        "Strategic Sourcing & Vendor Procurement",
        "Agile Project Leadership & Risk Mitigation",
      ],
      careerRoles: [
        "Global Logistics Director",
        "Supply Chain Strategy Architect",
        "Plant Operations & Efficiency Head",
        "Strategic Procurement Lead",
      ],
      topRecruiters: ["Amazon Operations", "John Deere", "Tata Motors", "DHL Global", "Schneider Electric"],
      averagePackage: "₹ 14.0 LPA",
      highestPackage: "₹ 41 LPA",
    },
  ];

  const displayedSpecs =
    activeTab === "all"
      ? specializations
      : specializations.filter((s) => s.id === activeTab);

  return (
    <div className="space-y-10">
      
      {/* Section Sub-Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/30 text-[#E0BA85] text-xs font-bold tracking-wider uppercase">
          5 Industry-Aligned Pillars
        </div>
        <h3 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#FAF3E8] tracking-tight">
          Explore Our Specializations
        </h3>
        <p className="text-xs sm:text-sm text-[#E0BA85]/90 font-medium">
          Choose your primary major with the freedom of modern dual-specialization under SPPU CBCS.
        </p>
      </div>

      {/* Filter Tabs for Quick Navigation */}
      <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl mx-auto px-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
            activeTab === "all"
              ? "bg-[#C69A60] text-[#3D0C16] shadow-md scale-105"
              : "bg-white/5 hover:bg-white/10 text-white/80 border border-[#C69A60]/20"
          }`}
        >
          All Specializations (5)
        </button>
        {specializations.map((spec) => (
          <button
            key={spec.id}
            onClick={() => setActiveTab(spec.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === spec.id
                ? "bg-[#C69A60] text-[#3D0C16] shadow-md scale-105"
                : "bg-white/5 hover:bg-white/10 text-white/80 border border-[#C69A60]/20"
            }`}
          >
            {spec.badge}
          </button>
        ))}
      </div>

      {/* 5 Interactive Specialization Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {displayedSpecs.map((spec) => (
          <motion.div
            key={spec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-3xl bg-gradient-to-b from-[#380913] to-[#20040A] border border-[#C69A60]/30 hover:border-[#C69A60] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_10px_20px_rgba(198,154,96,0.2)] flex flex-col justify-between overflow-hidden"
          >
            {/* Top Image Showcase */}
            <div className="relative w-full h-44 overflow-hidden bg-neutral-900 border-b border-[#C69A60]/20">
              <Image
                src={spec.image}
                alt={spec.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A] via-[#20040A]/40 to-transparent" />
              
              {/* Code Pill Overlay */}
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#3D0C16]/90 backdrop-blur-md border border-[#C69A60]/40 text-[#E0BA85] text-[10px] font-extrabold tracking-wider">
                {spec.code}
              </span>
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-extrabold text-[#C69A60] uppercase tracking-wider block">
                  {spec.badge}
                </span>
                <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#FAF3E8] tracking-wide mt-1 leading-snug">
                  {spec.title}
                </h4>
                <p className="text-xs text-neutral-300/90 leading-relaxed mt-2 line-clamp-3">
                  {spec.description}
                </p>
              </div>

              {/* Modules Highlights */}
              <div className="pt-2 border-t border-[#C69A60]/20 space-y-1.5">
                <span className="text-[10px] font-bold text-[#E0BA85] uppercase tracking-wider block">
                  Key Focus Areas
                </span>
                {spec.keyModules.slice(0, 3).map((mod, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                    <span className="text-[#C69A60] font-bold">›</span>
                    <span className="truncate">{mod}</span>
                  </div>
                ))}
              </div>

              {/* Package Badge & Action Button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-neutral-400 block uppercase">Top Offer</span>
                  <span className="text-xs font-black text-[#E0BA85]">{spec.highestPackage}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSpec(spec)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-[#C69A60] hover:text-[#3D0C16] border border-[#C69A60]/30 transition-all duration-200 cursor-pointer"
                >
                  Explore Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Specialization Detail Modal */}
      <AnimatePresence>
        {selectedSpec && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-[#C69A60]/40 shadow-2xl relative text-[#3D0C16] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedSpec(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-[#C69A60]/40">
                  <Image
                    src={selectedSpec.image}
                    alt={selectedSpec.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#3D0C16] text-[#E0BA85] text-[10px] font-bold uppercase tracking-wider mb-1">
                    {selectedSpec.code} • SPPU Approved
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D0C16]">
                    {selectedSpec.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-medium italic">
                    {selectedSpec.tagline}
                  </p>
                </div>
              </div>

              {/* Package Stats Box */}
              <div className="mt-5 p-4 rounded-2xl bg-[#FAF3E8] border border-[#C69A60]/30 grid grid-cols-2 gap-3 text-center">
                <div>
                  <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider block">
                    Average Package
                  </span>
                  <span className="text-lg font-black text-[#4A0E1B] block mt-0.5">
                    {selectedSpec.averagePackage}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider block">
                    Highest Package
                  </span>
                  <span className="text-lg font-black text-[#8B1D36] block mt-0.5">
                    {selectedSpec.highestPackage}
                  </span>
                </div>
              </div>

              {/* Curriculum Modules */}
              <div className="mt-5 space-y-2">
                <span className="text-xs font-bold text-[#4A0E1B] uppercase tracking-wider block">
                  Prescribed Specialization Electives:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSpec.keyModules.map((mod, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-800 flex items-start gap-2">
                      <span className="text-[#C69A60] font-bold">✔</span>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Roles & Top Recruiters */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] font-bold text-[#C69A60] uppercase tracking-wider block mb-2">
                    Key Career Designations
                  </span>
                  <ul className="text-xs text-neutral-700 space-y-1">
                    {selectedSpec.careerRoles.map((role, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A0E1B]" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] font-bold text-[#C69A60] uppercase tracking-wider block mb-2">
                    Key Hiring Recruiters
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSpec.topRecruiters.map((rec, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-semibold text-neutral-800">
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-100">
                <Link
                  href="/admissions/enquiry"
                  onClick={() => setSelectedSpec(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-105"
                >
                  Apply for {selectedSpec.badge} →
                </Link>
                <button
                  onClick={() => setSelectedSpec(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SpecializationCards;
