"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { GraduationCap, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutSectionProps {
  onOpenEnquiry?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Left Column References (Layered Composition)
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const decorFrameRef = useRef<HTMLDivElement | null>(null);
  const dottedGridRef = useRef<HTMLDivElement | null>(null);
  const topImageWrapRef = useRef<HTMLDivElement | null>(null);
  const bottomImageWrapRef = useRef<HTMLDivElement | null>(null);

  // Right Column References (Content & Typography)
  const rightColRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const paragraphsRef = useRef<HTMLDivElement | null>(null);
  const missionCardRef = useRef<HTMLDivElement | null>(null);
  const capIconRef = useRef<HTMLDivElement | null>(null);
  const ctaWrapRef = useRef<HTMLDivElement | null>(null);
  const watermarkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect user's reduced motion preferences
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // 1. Left Column: Cinematic Layered Image Reveals & Subtle Tilt
      // -------------------------------------------------------------
      const leftTl = gsap.timeline({
        scrollTrigger: {
          trigger: leftColRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // Background decorative frames & geometric accents
      if (decorFrameRef.current) {
        leftTl.fromTo(
          decorFrameRef.current,
          { opacity: 0, scale: 0.88, rotate: -3 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.1, ease: "power2.out" },
          0
        );
      }

      if (dottedGridRef.current) {
        leftTl.fromTo(
          dottedGridRef.current,
          { opacity: 0, y: -20 },
          { opacity: 0.4, y: 0, duration: 0.9, ease: "power2.out" },
          0.1
        );
      }

      // Top Image: Campus Building Photo Reveal with subtle negative rotation
      if (topImageWrapRef.current) {
        leftTl.fromTo(
          topImageWrapRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 1.08,
            rotate: -3.5,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: -1.2,
            filter: "blur(0px)",
            duration: 1.25,
            ease: "power3.out",
          },
          0.15
        );
      }

      // Bottom Image: Overlapping Students Photo Reveal with subtle positive counter-rotation
      if (bottomImageWrapRef.current) {
        leftTl.fromTo(
          bottomImageWrapRef.current,
          {
            opacity: 0,
            y: 80,
            scale: 0.92,
            rotate: 4,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 1.2,
            filter: "blur(0px)",
            duration: 1.35,
            ease: "power3.out",
          },
          0.35
        );
      }

      // Smooth scroll parallax for layered depth
      if (topImageWrapRef.current && bottomImageWrapRef.current && sectionRef.current) {
        gsap.to(topImageWrapRef.current, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.to(bottomImageWrapRef.current, {
          y: -48,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      }

      // -------------------------------------------------------------
      // 2. Right Column: Word-by-Word Heading & Staggered Content
      // -------------------------------------------------------------
      const rightTl = gsap.timeline({
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Pill Badge with Line Wings
      if (badgeRef.current) {
        rightTl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          0
        );
      }

      // Word-by-Word Heading Animation with 3D Roll-up & Blur clearing
      const words = headingRef.current?.querySelectorAll(".heading-word");
      if (words && words.length > 0) {
        rightTl.fromTo(
          words,
          {
            y: "115%",
            opacity: 0,
            rotateX: -35,
            filter: "blur(5px)",
          },
          {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.07,
            ease: "power3.out",
          },
          0.1
        );
      }

      // Golden Divider Line Expansion
      if (dividerRef.current) {
        rightTl.fromTo(
          dividerRef.current,
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.75, ease: "power2.out" },
          "-=0.4"
        );
      }

      // Staggered Paragraph Fade-ins
      const paragraphs = paragraphsRef.current?.querySelectorAll("p");
      if (paragraphs && paragraphs.length > 0) {
        rightTl.fromTo(
          paragraphs,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.18, ease: "power2.out" },
          "-=0.3"
        );
      }

      // Mission Highlight Card with Smooth Elevation & Icon Rotation
      if (missionCardRef.current) {
        rightTl.fromTo(
          missionCardRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
          "-=0.4"
        );
      }

      if (capIconRef.current) {
        rightTl.fromTo(
          capIconRef.current,
          { rotate: -25, scale: 0.8 },
          { rotate: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.5"
        );
      }

      // Discover Institution CTA Button Fade-in
      if (ctaWrapRef.current) {
        rightTl.fromTo(
          ctaWrapRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        );
      }

      // Architectural Watermark at Bottom
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 0.35,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: watermarkRef.current,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      suppressHydrationWarning
      className="relative py-16 sm:py-24 bg-white overflow-hidden"
    >
      {/* Decorative top-left background curve */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#0c363b]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Layered Campus & Students Composition */}
          <div ref={leftColRef} className="lg:col-span-6 relative">
            {/* Top decorative dotted grid */}
            <div
              ref={dottedGridRef}
              suppressHydrationWarning
              className="absolute -top-6 left-1/3 flex gap-1.5 opacity-40 pointer-events-none will-change-transform"
            >
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(15)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0c363b]" />
                ))}
              </div>
            </div>

            {/* Decorative Gold & Teal Outer Frame */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div ref={decorFrameRef} suppressHydrationWarning className="will-change-transform">
                {/* Golden accent outline frame behind top image */}
                <div className="absolute -top-3 -left-3 w-4/5 h-4/5 rounded-[36px] border-2 border-[#c89650]/40 pointer-events-none" />

                {/* Dark teal backdrop card */}
                <div className="absolute -top-2 -left-2 w-32 h-32 rounded-tl-[36px] bg-[#0c363b] -z-10" />

                {/* Decorative bottom gold corner accent */}
                <div className="absolute -bottom-3 left-6 w-1/3 h-12 rounded-bl-3xl border-b-2 border-l-2 border-[#c89650]/50 pointer-events-none" />
              </div>

              {/* Top Campus Building Photo with subtle negative rotation */}
              <div
                ref={topImageWrapRef}
                suppressHydrationWarning
                style={{
                  transform: "rotate(-1.2deg)",
                  transformOrigin: "center center",
                }}
                className="relative w-[85%] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-slate-100 will-change-transform transition-all duration-500 hover:rotate-0 hover:scale-[1.02] hover:shadow-2xl"
              >
                <Image
                  src="/images/about-campus.jpg"
                  alt="Matrix School of Management Studies campus building in Pune"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Bottom Overlapping Students Photo with subtle positive counter-rotation */}
              <div
                ref={bottomImageWrapRef}
                suppressHydrationWarning
                style={{
                  transform: "rotate(1.2deg)",
                  transformOrigin: "center center",
                }}
                className="relative -mt-24 sm:-mt-28 ml-auto w-[82%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-20 will-change-transform transition-all duration-500 hover:rotate-0 hover:scale-[1.02]"
              >
                <Image
                  src="/images/about-students.jpg"
                  alt="Management students collaborating with laptop at Matrix School of Management Studies"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div ref={rightColRef} className="lg:col-span-6 space-y-6 text-left">
            {/* Pill Badge with Line Wings */}
            <div ref={badgeRef} className="inline-flex items-center gap-3 will-change-transform">
              <span className="w-8 h-[1px] bg-[#c89650]" />
              <span className="px-5 py-1.5 rounded-full bg-[#fcf8f2] border border-[#e8d5be] text-xs font-bold tracking-widest text-[#0c363b] uppercase">
                ABOUT US
              </span>
              <span className="w-8 h-[1px] bg-[#c89650]" />
            </div>

            {/* Word-by-Word Cinematic Heading with Animated Gold Text */}
            <h2
              ref={headingRef}
              className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c363b] leading-[1.18] tracking-tight"
              style={{ perspective: "800px" }}
            >
              {/* Line 1: Shaping Future Leaders */}
              <div className="block">
                <span className="inline-block overflow-hidden mr-[0.28em] pb-1 align-bottom">
                  <span className="heading-word inline-block will-change-transform">Shaping</span>
                </span>
                <span className="inline-block overflow-hidden mr-[0.28em] pb-1 align-bottom">
                  <span className="heading-word inline-block will-change-transform">Future</span>
                </span>
                <span className="inline-block overflow-hidden pb-1 align-bottom">
                  <span className="heading-word inline-block will-change-transform">Leaders</span>
                </span>
              </div>

              {/* Line 2: Through Quality */}
              <div className="block">
                <span className="inline-block overflow-hidden mr-[0.28em] pb-1 align-bottom">
                  <span className="heading-word inline-block will-change-transform">Through</span>
                </span>
                <span className="inline-block overflow-hidden pb-1 align-bottom">
                  <span className="heading-word inline-block font-normal italic animate-gold-shimmer will-change-transform">
                    Quality
                  </span>
                </span>
              </div>

              {/* Line 3: Management Education */}
              <div className="block">
                <span className="inline-block overflow-hidden mr-[0.28em] pb-1 align-bottom">
                  <span className="heading-word inline-block animate-gold-shimmer will-change-transform">
                    Management
                  </span>
                </span>
                <span className="inline-block overflow-hidden pb-1 align-bottom">
                  <span className="heading-word inline-block animate-gold-shimmer will-change-transform">
                    Education
                  </span>
                </span>
              </div>
            </h2>

            {/* Golden Divider Line with Smooth Expansion */}
            <div
              ref={dividerRef}
              className="w-14 h-[2.5px] bg-[#c89650] will-change-transform origin-left"
            />

            {/* Staggered Paragraphs */}
            <div
              ref={paragraphsRef}
              className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal"
            >
              <p className="will-change-transform">
                Matrix School of Management Studies, Pune, is committed to delivering
                quality management education that combines academic learning with practical
                knowledge. We aim to create an engaging learning environment where
                students can develop the skills, confidence, and leadership qualities
                needed to succeed in a competitive business world.
              </p>
              <p className="will-change-transform">
                Our focus is on nurturing future professionals through a balanced
                approach to education, personal growth, and career development.
              </p>
            </div>

            {/* Mission Highlight Card with Soft Elevation & Icon Tilt */}
            <div
              ref={missionCardRef}
              className="bg-[#fdfbf7] border border-[#eedcc4] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 sm:gap-5 will-change-transform"
            >
              <div
                ref={capIconRef}
                className="shrink-0 w-12 h-12 rounded-xl bg-white border border-[#ebd8bf] flex items-center justify-center shadow-xs will-change-transform"
              >
                <GraduationCap className="w-7 h-7 text-[#0c363b] stroke-[1.6]" />
              </div>

              {/* Vertical Amber Divider */}
              <div className="h-11 w-[2px] bg-[#c89650] shrink-0" />

              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#0c363b]">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5 leading-relaxed">
                  To empower students with knowledge, skills, and values that prepare
                  them for future opportunities.
                </p>
              </div>
            </div>

            {/* Discover Our Institution CTA Button */}
            <div ref={ctaWrapRef} className="pt-2 will-change-transform">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2.5 bg-[#0c363b] hover:bg-[#072628] text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full border border-[#c89650]/40 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 group"
              >
                <span>Discover Our Institution</span>
                <ArrowRight className="w-4 h-4 text-[#e5be7d] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Architectural Watermark at Bottom with Fade-in */}
      <div
        ref={watermarkRef}
        className="relative w-full h-24 sm:h-32 mt-12 overflow-hidden opacity-35 pointer-events-none will-change-transform"
      >
        <Image
          src="/images/about-watermark.png"
          alt=""
          fill
          className="object-cover object-bottom"
        />
      </div>
    </section>
  );
};
