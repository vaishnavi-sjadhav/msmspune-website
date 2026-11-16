"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Megaphone, ArrowRight, X, FileText, Calendar, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NEWS_DATA } from "@/data/news";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface NewsModalItem {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  highlights: string[];
}

const NEWS_MODAL_DETAILS: Record<string, NewsModalItem> = {
  "aicte-disclosure": {
    id: "aicte-disclosure",
    title: "AICTE Mandatory Disclosure for Academic Year 2025–26",
    date: "Updated March 2026",
    category: "Regulatory & Compliance",
    description:
      "In accordance with the regulatory standards of the All India Council for Technical Education (AICTE), New Delhi, and Directorate of Technical Education (DTE), Government of Maharashtra, the comprehensive institutional disclosure report for Matrix School of Management Studies has been verified and published.",
    highlights: [
      "AICTE Approval & SPPU Permanent Affiliation status (Code: 6634)",
      "Faculty-to-student cadre ratios and qualification records",
      "Infrastructure audit reports including computer labs and knowledge library",
      "Anti-ragging committee and internal grievance redressal mechanisms",
    ],
  },
  "admissions-open": {
    id: "admissions-open",
    title: "Admissions for MBA Batch 2026–2028 Now Open",
    date: "AY 2026–2028",
    category: "Admissions Notification",
    description:
      "Matrix School of Management Studies announces the commencement of admissions for the upcoming MBA dual-specialization batch. Candidates with valid MAH-MBA-CET, CAT, CMAT, MAT, or XAT scores are invited to register through the Maharashtra State CET Cell CAP rounds under DTE Choice Code 6634.",
    highlights: [
      "Dual specializations in Marketing, Finance, HR, Operations & Business Analytics",
      "Approved intake: 180 seats under Centralized Admission Process (CAP)",
      "100% scholarship guidance for SC/ST/OBC/EBC categories via MahaDBT",
      "Fast-track assistance and document scrutiny facilitation center on campus",
    ],
  },
  "important-notice": {
    id: "important-notice",
    title: "Matrix School of Management Studies – Academic Circular",
    date: "Current Semester",
    category: "Academic Affairs",
    description:
      "Notice for all enrolled MBA and MCA scholars regarding summer internship project (SIP) orientation, pre-placement training modules, and upcoming executive seminar series by visiting industry corporate leaders.",
    highlights: [
      "Mandatory 10-week summer corporate internship orientation schedule",
      "Executive business seminar and resume-building workshops by corporate HR leaders",
      "SPPU semester examination form submission timeline",
      "Campus placement preparation bootcamps and Bloomberg terminal training",
    ],
  },
};

export const NewsSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<NewsModalItem | null>(null);

  // Animation References
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const leftLineRef = useRef<HTMLSpanElement | null>(null);
  const rightLineRef = useRef<HTMLSpanElement | null>(null);
  const titleTextRef = useRef<HTMLHeadingElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect reduced motion accessibility setting
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Header: Animated Expanding Gold Lines + Blur-to-Focus Title
      if (headerRef.current) {
        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Expand accent lines outward with golden sheen
        if (leftLineRef.current && rightLineRef.current) {
          headerTl.fromTo(
            [leftLineRef.current, rightLineRef.current],
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            }
          );
        }

        // Blur-to-focus on heading text
        if (titleTextRef.current) {
          headerTl.fromTo(
            titleTextRef.current,
            { filter: "blur(10px)", opacity: 0, y: -18 },
            {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
            },
            "-=0.6"
          );
        }
      }

      // 2. Left Column: Diploma Image Blur-to-Focus + Subtle Scale
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { filter: "blur(14px)", opacity: 0, scale: 0.94, x: -35 },
          {
            filter: "blur(0px)",
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Right Column: Staggered News Cards Blur-to-Focus
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.children;
        gsap.fromTo(
          cards,
          { filter: "blur(10px)", opacity: 0, y: 35, scale: 0.97 },
          {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.16,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            clearProps: "filter,opacity",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Soft 3D Tilt Effect on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Maximum 5-degree tilt on X and Y axes
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)";
  };

  const handleCardClick = (id: string) => {
    const detail = NEWS_MODAL_DETAILS[id] || {
      id,
      title: "Notice Details",
      date: "Current Academic Year",
      category: "Official Announcement",
      description: "Complete institutional notification details for Matrix School of Management Studies.",
      highlights: ["Official notification from Matrix School of Management Studies Pune"],
    };
    setActiveModalItem(detail);
  };

  return (
    <section
      ref={sectionRef}
      id="news"
      className="relative py-14 sm:py-20 bg-[#faf8f5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animated Gold Accent Lines */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4">
            <span
              ref={leftLineRef}
              className="w-10 sm:w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c89650] to-[#0c363b] origin-right rounded-full will-change-transform"
            />
            <h2
              ref={titleTextRef}
              className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#0c363b] uppercase font-sans will-change-transform"
            >
              {NEWS_DATA.title}
            </h2>
            <span
              ref={rightLineRef}
              className="w-10 sm:w-16 h-[2px] bg-gradient-to-l from-transparent via-[#c89650] to-[#0c363b] origin-left rounded-full will-change-transform"
            />
          </div>
        </div>

        {/* Content: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Column: Diploma Scroll Image with Blur-to-Focus and Elevation Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={imageContainerRef}
              className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-[#c89650]/40 bg-white aspect-[16/11] group transition-all duration-500 will-change-transform"
            >
              <Image
                src={NEWS_DATA.image}
                alt="Degree diploma scroll with red ribbon for academic updates"
                width={1024}
                height={567}
                priority
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Subtle Label */}
              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white/95 text-xs">
                <span className="font-serif tracking-wider font-semibold text-xs text-[#ebb14e] drop-shadow-md">
                  Official Academic Gazettes
                </span>
                <span className="text-[11px] font-mono text-white/80 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                  AY 2026–27
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating News Cards with Soft 3D Tilt */}
          <div ref={cardsContainerRef} className="lg:col-span-7 space-y-4">
            {NEWS_DATA.items.map((item) => (
              <div
                key={item.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCardClick(item.id)}
                style={{
                  transition: "transform 0.25s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
                  transformStyle: "preserve-3d",
                }}
                className="group relative block bg-white hover:bg-[#fffdf9] border border-[#eee6d8] hover:border-[#c89650]/70 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_-4px_rgba(12,54,59,0.06)] hover:shadow-[0_20px_35px_-10px_rgba(12,54,59,0.14)] cursor-pointer will-change-transform overflow-hidden"
              >
                {/* Animated Gold Bottom Accent Line on Hover */}
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#c89650]/0 via-[#ebb14e] to-[#c89650]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-x-50 group-hover:scale-x-100 transform origin-center transition-transform" />

                <div className="flex items-center justify-between gap-4 relative z-10">
                  {/* Icon & Headline */}
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-[#f8f3ea] flex items-center justify-center shrink-0 group-hover:bg-[#ebdcc8] group-hover:scale-105 transition-all shadow-sm">
                      <Megaphone className="w-4 h-4 text-[#b5883d] -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0c363b] transition-colors line-clamp-2">
                      {item.title}
                    </p>
                  </div>

                  {/* View Details CTA */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#b5883d] group-hover:text-[#8e631d] font-bold text-xs tracking-wide">
                    <span className="hidden sm:inline">View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Notice Details Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-[#0c363b] text-white px-6 py-4 flex items-center justify-between border-b border-[#c89650]/40">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#ebb14e]" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ebb14e] block">
                    {activeModalItem.category}
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                    {activeModalItem.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close notice details modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div className="flex items-center gap-2 text-xs text-slate-500 pb-2 border-b border-gray-100">
                <Calendar className="w-3.5 h-3.5 text-[#c89650]" />
                <span>Publication Date: {activeModalItem.date}</span>
                <span>•</span>
                <span>Official Institutional Record</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div className="bg-[#faf8f5] rounded-xl p-4 sm:p-5 border border-[#c89650]/30 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c363b]">
                  Key Information & Highlights
                </h4>
                <div className="space-y-2 pt-1">
                  {activeModalItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#c89650] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Matrix School of Management Studies, Pune
              </span>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-lg bg-[#0c363b] hover:bg-[#072628] text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
