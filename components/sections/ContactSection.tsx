"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT_DATA } from "@/data/contact";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "MBA Admissions Inquiry",
    message: "",
  });

  // Animation References
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const leftLineRef = useRef<HTMLSpanElement | null>(null);
  const rightLineRef = useRef<HTMLSpanElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect accessibility settings for reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Header Reveal (Expand Golden Wings + Fade In Text)
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      if (leftLineRef.current && rightLineRef.current) {
        headerTl.fromTo(
          [leftLineRef.current, rightLineRef.current],
          { scaleX: 0, transformOrigin: "center" },
          { scaleX: 1, duration: 0.8, ease: "power2.out" }
        );
      }

      if (headerRef.current) {
        const title = headerRef.current.querySelector("h2");
        const subtitle = headerRef.current.querySelector("p");
        if (title) {
          headerTl.fromTo(
            title,
            { opacity: 0, y: -15, filter: "blur(4px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" },
            "-=0.6"
          );
        }
        if (subtitle) {
          headerTl.fromTo(
            subtitle,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
            "-=0.5"
          );
        }
      }

      // 2. Main 2-Column Left & Right Entrance Trigger
      const columnsTrigger = {
        trigger: sectionRef.current,
        start: "top 78%",
        toggleActions: "play none none none",
      };

      // Left Column: All Contact Cards Cascade In Smoothly From The LEFT
      if (leftColRef.current) {
        const cards = leftColRef.current.querySelectorAll(".contact-left-card");
        if (cards && cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              x: -90,
              opacity: 0,
              filter: "blur(6px)",
            },
            {
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1.0,
              stagger: 0.14,
              ease: "power3.out",
              scrollTrigger: columnsTrigger,
            }
          );
        }
      }

      // Right Column: Message Form Card Glides In Powerfully From The RIGHT
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          {
            x: 90,
            opacity: 0,
            scale: 0.97,
            filter: "blur(6px)",
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: columnsTrigger,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "MBA Admissions Inquiry",
        message: "",
      });
    }, 3500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      suppressHydrationWarning
      className="relative py-16 sm:py-24 text-white overflow-hidden bg-cover bg-center bg-no-repeat border-t border-[#134246]"
      style={{ backgroundImage: "url('/images/contact-campus-bg.jpg')" }}
    >
      {/* Vignette Overlay: Deep Teal at the top for header readability, translucent in the center */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#062226]/90 via-[#062226]/40 to-[#062226]/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} suppressHydrationWarning className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          {/* Kicker with golden horizontal accent lines */}
          <div className="inline-flex items-center justify-center gap-3.5">
            <span ref={leftLineRef} className="w-12 sm:w-16 h-[1.5px] bg-[#c89650] will-change-transform" />
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#dfb271] uppercase will-change-transform">
              GET IN TOUCH
            </h2>
            <span ref={rightLineRef} className="w-12 sm:w-16 h-[1.5px] bg-[#c89650] will-change-transform" />
          </div>

          <p className="text-xs sm:text-sm md:text-[15px] text-gray-100 leading-relaxed font-normal max-w-2xl mx-auto pt-1 drop-shadow-sm will-change-transform">
            Have questions about MBA admissions, campus visits, or our academic curriculum? Our
            admissions team is ready to guide you.
          </p>
        </div>

        {/* 2 Columns: Contact Details Coming From Left & Form Coming From Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: 4 Cream Contact Cards (Animated From The Left) */}
          <div ref={leftColRef} suppressHydrationWarning className="lg:col-span-5 space-y-4">
            {/* 1. Campus Address Card (Full width of left column) */}
            <div className="contact-left-card bg-[#f8f5ee] text-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl border border-white/60 hover:border-[#c89650]/60 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-start gap-4 will-change-transform group">
              <div className="w-11 h-11 rounded-xl bg-[#caa04c] text-slate-950 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 mb-1">
                  Campus Address
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Survey No. 9/1/5 & 9/2/4, Next to Westerly Bypass Road,
                  <br />
                  Ambegaon (Bk.), Vadgaon, Pune – 411041
                  <br />
                  Maharashtra, India.
                </p>
                <a
                  href={CONTACT_DATA.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#b5883d] hover:text-[#8e631d] mt-2.5 group/link transition"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Row of 2 Cards: Call Us & Email Us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 2. Call Us Card */}
              <div className="contact-left-card bg-[#f8f5ee] text-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 hover:border-[#c89650]/60 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-start gap-3.5 will-change-transform group">
                <div className="w-10 h-10 rounded-xl bg-[#caa04c] text-slate-950 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 mb-1">
                    Call Us
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-snug">
                    <a href="tel:+919822012345" className="hover:text-[#0c363b] block">
                      +91 98220 12345
                    </a>
                    <a href="tel:+912024356005" className="hover:text-[#0c363b] block">
                      +91 20 2435 6005
                    </a>
                  </p>
                </div>
              </div>

              {/* 3. Email Us Card */}
              <div className="contact-left-card bg-[#f8f5ee] text-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 hover:border-[#c89650]/60 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-start gap-3.5 will-change-transform group">
                <div className="w-10 h-10 rounded-xl bg-[#caa04c] text-slate-950 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 mb-1">
                    Email Us
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-snug truncate">
                    <a href="mailto:info@msmspune.com" className="hover:text-[#0c363b] block truncate">
                      info@msmspune.com
                    </a>
                    <a href="mailto:admissions@msmspune.com" className="hover:text-[#0c363b] block truncate">
                      admissions@msmspune.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Office Hours Card (Full width of left column) */}
            <div className="contact-left-card bg-[#f8f5ee] text-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 hover:border-[#c89650]/60 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center gap-4 will-change-transform group">
              <div className="w-10 h-10 rounded-xl bg-[#caa04c] text-slate-950 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Clock className="w-4 h-4 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
                  Office Hours
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5 leading-snug">
                  Mon - Sat: 9:00 AM to 5:30 PM
                  <br />
                  <span className="text-slate-500">Closed on Sundays</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form Card (Animated From The Right) */}
          <div ref={rightColRef} suppressHydrationWarning className="lg:col-span-7 will-change-transform">
            <div className="bg-[#f8f5ee] text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/70 hover:border-[#c89650]/50 transition-all duration-300">
              <div className="mb-6">
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c363b]">
                  Send Us a Message
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out the form below and an admissions officer will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-gray-800 font-serif">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you for reaching out to Matrix School of Management Studies. We will connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0c363b] focus:border-[#0c363b] outline-none transition text-slate-900 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0c363b] focus:border-[#0c363b] outline-none transition text-slate-900 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0c363b] focus:border-[#0c363b] outline-none transition text-slate-900 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        INQUIRY SUBJECT
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0c363b] focus:border-[#0c363b] outline-none transition text-slate-900 shadow-xs"
                      >
                        <option value="MBA Admissions Inquiry">MBA Admissions Inquiry</option>
                        <option value="Campus Tour Request">Campus Tour Request</option>
                        <option value="Placement & Recruitment">Placement & Recruitment</option>
                        <option value="Fee Structure & Scholarships">Fee Structure & Scholarships</option>
                        <option value="General Academic Inquiry">General Academic Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your query or message in detail..."
                      className="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0c363b] focus:border-[#0c363b] outline-none transition resize-none text-slate-900 shadow-xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0c363b] hover:bg-[#072428] text-white font-bold text-xs uppercase tracking-wider rounded-xl px-5 py-3 flex items-center justify-between shadow-md hover:shadow-lg transition cursor-pointer active:scale-[0.99]"
                    >
                      <span>SUBMIT MESSAGE</span>
                      <div className="w-8 h-8 rounded-lg bg-[#caa04c] text-slate-950 flex items-center justify-center shrink-0">
                        <Send className="w-4 h-4 stroke-[2.2]" />
                      </div>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
