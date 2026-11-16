"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, MapPin, Compass, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CampusFacility {
  id: string;
  badge: string;
  title: string;
  image: string;
  cardImage: string;
  description: string;
  highlights: string[];
}

const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: "academic-block",
    badge: "01",
    title: "Main Academic Block",
    image: "/images/campus-2.webp",
    cardImage: "/images/campus-2.webp",
    description:
      "A 5-story landmark academic and administrative facility designed with open-air architectural grandeur, executive Dean suites, advanced computer labs, and fully Wi-Fi enabled seminar halls.",
    highlights: [
      "Modern 5-storey collegiate infrastructure with natural ventilation",
      "Centralized administrative headquarters & executive Dean suites",
      "Advanced management computer laboratories with high-speed fiber",
      "Spacious marble foyer and student guidance reception desk",
    ],
  },
  {
    id: "smart-classrooms",
    badge: "02",
    title: "Smart Classrooms & Library",
    image: "/images/campus-3.webp",
    cardImage: "/images/campus-3.webp",
    description:
      "Acoustically treated tiered amphitheaters equipped with high-definition digital smart boards, surround audio, paired with a tranquil knowledge repository housing over 15,000 management volumes and digital databases.",
    highlights: [
      "Tiered executive amphitheater seating for 60+ candidates per lecture hall",
      "Interactive smart boards, dual multimedia projectors, and podium audio",
      "15,000+ volumes, international journals, and Harvard Business cases",
      "Dedicated digital e-library with Bloomberg, EBSCO, and J-Gate terminals",
    ],
  },
  {
    id: "student-hub",
    badge: "03",
    title: "Executive Student Hub",
    image: "/images/campus-4.webp",
    cardImage: "/images/campus-4.webp",
    description:
      "Lush landscaped open-air promenades, breakout discussion lounges, cafeteria, and collaborative incubator zones where future industry leaders brainstorm, network, and unwind.",
    highlights: [
      "Collaborative breakout pods for case competitions and group strategy",
      "Lush landscaped green lawns fostering creative thinking and wellness",
      "Modern student cafeteria serving hygienic meals and artisan coffee",
      "Student council headquarters, startup incubation & club rooms",
    ],
  },
];

export const WelcomeSection: React.FC = () => {
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState<number | null>(null);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  // GSAP Animation Element References
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const kickerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const img1Ref = useRef<HTMLDivElement | null>(null);
  const img2Ref = useRef<HTMLDivElement | null>(null);
  const img3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Fade-Down Header Animation
      if (headerRef.current) {
        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        if (kickerRef.current) {
          headerTl.from(kickerRef.current, {
            y: -25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        }

        if (headingRef.current) {
          headerTl.from(
            headingRef.current,
            {
              y: -30,
              opacity: 0,
              duration: 0.85,
              ease: "power3.out",
            },
            "-=0.45"
          );
        }

        if (descRef.current) {
          headerTl.from(
            descRef.current,
            {
              y: -20,
              opacity: 0,
              duration: 0.75,
              ease: "power3.out",
            },
            "-=0.5"
          );
        }
      }

      // 2. Staggered Cards Entrance Reveal
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);
      if (gridRef.current && cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          y: 65,
          opacity: 0,
          scale: 0.96,
          stagger: 0.18,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "transform,opacity,scale",
        });
      }

      // 3. Subtle Parallax Scrubbing on Card Images
      const parallaxItems = [
        { target: img1Ref.current, trigger: card1Ref.current, shift: 24 },
        { target: img2Ref.current, trigger: card2Ref.current, shift: 18 },
        { target: img3Ref.current, trigger: card3Ref.current, shift: 18 },
      ];

      parallaxItems.forEach(({ target, trigger, shift }) => {
        if (!target || !trigger) return;
        gsap.fromTo(
          target,
          { y: -shift },
          {
            y: shift,
            ease: "none",
            scrollTrigger: {
              trigger: trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openFacilityModal = (index: number) => {
    setSelectedFacilityIndex(index);
    setIsTourModalOpen(true);
  };

  const closeTourModal = () => {
    setIsTourModalOpen(false);
    setSelectedFacilityIndex(null);
  };

  const activeFacility =
    selectedFacilityIndex !== null ? CAMPUS_FACILITIES[selectedFacilityIndex] : CAMPUS_FACILITIES[0];

  return (
    <section
      ref={sectionRef}
      id="campus"
      className="relative py-14 sm:py-20 lg:py-24 bg-[#f8f5ee] overflow-hidden"
    >
      {/* Anchor for backwards compatibility */}
      <div id="excellence" className="-mt-24 pt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: 2-Column Editorial Layout matching design */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 sm:mb-14"
        >
          {/* Left Column: Kicker and Serif Heading */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-3">
            <div ref={kickerRef} className="flex items-center gap-3">
              <span className="w-8 sm:w-10 h-[2px] bg-[#c89650]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#c89650] uppercase font-sans">
                OUR CAMPUS
              </span>
            </div>
            <h2
              ref={headingRef}
              className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c363b] leading-[1.14] tracking-tight"
            >
              MATRIX SCHOOL OF
              <br />
              MANAGEMENT STUDIES
            </h2>
          </div>

          {/* Right Column: Narrative paragraph and Virtual Campus Tour CTA */}
          <div
            ref={descRef}
            className="lg:col-span-5 flex flex-col items-start lg:items-start justify-end space-y-4"
          >
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              An inspiring academic sanctuary in Pune blending modern architecture, collaborative
              spaces, and executive excellence.
            </p>
            <button
              type="button"
              onClick={() => openFacilityModal(0)}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-lg bg-[#0c363b] hover:bg-[#072628] text-[#f2deb8] border border-[#c89650]/70 hover:border-[#c89650] text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md group cursor-pointer"
            >
              <span>Virtual Campus Tour</span>
              <ArrowRight className="w-4 h-4 text-[#c89650] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Bento Grid: 2-Column Asymmetric Layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 items-stretch"
        >
          {/* Left Column: Full-Height Card 01 (Main Academic Block) */}
          <div
            ref={card1Ref}
            onClick={() => openFacilityModal(0)}
            className="group cursor-pointer block relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 will-change-transform"
          >
            <div ref={img1Ref} className="w-full h-full scale-[1.08] will-change-transform">
              <Image
                src="/images/campus-2.webp"
                alt="01 — Main Academic Block - Matrix School of Management Studies Pune"
                width={1024}
                height={872}
                priority
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="sr-only">
              <h3>01 — Main Academic Block</h3>
              <p>5-story administrative and lecture complex with modern architectural design</p>
            </div>
          </div>

          {/* Right Column: Stacked Cards 02 & 03 */}
          <div className="flex flex-col gap-6 sm:gap-7 justify-between">
            {/* Card 02: Smart Classrooms & Library */}
            <div
              ref={card2Ref}
              onClick={() => openFacilityModal(1)}
              className="group cursor-pointer block relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 will-change-transform"
            >
              <div ref={img2Ref} className="w-full h-full scale-[1.08] will-change-transform">
                <Image
                  src="/images/campus-3.webp"
                  alt="02 — Smart Classrooms & Library - Matrix School of Management Studies"
                  width={1024}
                  height={415}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="sr-only">
                <h3>02 — Smart Classrooms & Library</h3>
                <p>
                  Tiered smart amphitheaters, digital projection and comprehensive management
                  library
                </p>
              </div>
            </div>

            {/* Card 03: Executive Student Hub */}
            <div
              ref={card3Ref}
              onClick={() => openFacilityModal(2)}
              className="group cursor-pointer block relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 will-change-transform"
            >
              <div ref={img3Ref} className="w-full h-full scale-[1.08] will-change-transform">
                <Image
                  src="/images/campus-4.webp"
                  alt="03 — Executive Student Hub - Matrix School of Management Studies"
                  width={1024}
                  height={415}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="sr-only">
                <h3>03 — Executive Student Hub</h3>
                <p>
                  Collaborative executive student spaces, green campus walkways and student
                  interaction zones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Virtual Campus Tour & Facility Detail Modal */}
      {isTourModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
            {/* Modal Top Bar */}
            <div className="bg-[#0c363b] text-white px-6 py-4 flex items-center justify-between border-b border-[#c89650]/40">
              <div className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#c89650]" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">
                    Virtual Campus Showcase
                  </h3>
                  <p className="text-xs text-[#e5be7d]">
                    Matrix School of Management Studies • Ambegaon (Bk.), Vadgaon, Pune
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeTourModal}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close campus tour modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Facility Navigation Tabs */}
            <div className="flex border-b border-gray-200 bg-[#faf8f5] px-4 pt-2 overflow-x-auto no-scrollbar">
              {CAMPUS_FACILITIES.map((facility, idx) => {
                const isActive = (selectedFacilityIndex ?? 0) === idx;
                return (
                  <button
                    key={facility.id}
                    type="button"
                    onClick={() => setSelectedFacilityIndex(idx)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wide border-b-2 whitespace-nowrap transition-all ${
                      isActive
                        ? "border-[#c89650] text-[#0c363b] bg-white rounded-t-lg shadow-sm"
                        : "border-transparent text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-bold ${
                        isActive
                          ? "bg-[#c89650] text-white"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {facility.badge}
                    </span>
                    <span>{facility.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c89650]/50 shadow-md aspect-[16/9] w-full bg-slate-100">
                <Image
                  src={activeFacility.cardImage}
                  alt={activeFacility.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Facility Details */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-[#c89650] tracking-widest uppercase mb-1">
                    Facility {activeFacility.badge}
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#0c363b]">
                    {activeFacility.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                    {activeFacility.description}
                  </p>
                </div>

                {/* Key Features Checklist */}
                <div className="bg-[#f8f5ee] rounded-xl p-4 sm:p-5 border border-[#c89650]/30 space-y-2.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#0c363b]">
                    Key Infrastructure Highlights
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {activeFacility.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#c89650] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-[#c89650]" />
                <span>Next to Westerly Bypass Road, Ambegaon (Bk.), Vadgaon, Pune</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="tel:+919822012345"
                  className="flex-1 sm:flex-none text-center px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white transition-colors"
                >
                  Schedule Visit
                </a>
                <Link
                  href="/admissions"
                  onClick={closeTourModal}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#0c363b] hover:bg-[#072628] text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <span>Admissions 2026</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c89650]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
