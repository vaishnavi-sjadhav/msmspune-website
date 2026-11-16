"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Car,
  Train,
  Plane,
  Building,
  ChevronDown,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CONTACT_DATA } from "@/data/contact";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "MBA in Marketing Management",
    subject: "Admissions Inquiry",
    message: "",
  });

  const mainSectionRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const trigger = {
        trigger: mainSectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { x: -80, opacity: 0, filter: "blur(6px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.0,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: trigger,
          }
        );
      }

      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 80, opacity: 0, scale: 0.98, filter: "blur(6px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: trigger,
          }
        );
      }
    }, mainSectionRef);

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
        program: "MBA in Marketing Management",
        subject: "Admissions Inquiry",
        message: "",
      });
    }, 4000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const DEPARTMENT_DIRECTORY = [
    {
      dept: "Admissions & Student Counselling",
      person: "Admissions Directorate",
      phone: "+91 98220 12345",
      email: "admissions@msmspune.com",
      hours: "Mon – Sat: 9:00 AM – 5:30 PM",
    },
    {
      dept: "Training & Placement Cell (CRC)",
      person: "Corporate Relations Office",
      phone: "+91 20 2435 6005",
      email: "placements@msmspune.com",
      hours: "Mon – Fri: 9:30 AM – 5:00 PM",
    },
    {
      dept: "Examination & University Affairs",
      person: "SPPU Academic Section",
      phone: "+91 20 2435 6006",
      email: "exam@msmspune.com",
      hours: "Mon – Sat: 10:00 AM – 4:00 PM",
    },
    {
      dept: "Director's Secretariat",
      person: "Executive Office",
      phone: "+91 20 2435 6000",
      email: "director@msmspune.com",
      hours: "By Prior Appointment",
    },
  ];

  const FAQS = [
    {
      q: "Can I walk in for an on-campus admissions counseling session?",
      a: "Yes. Our admissions office is open Monday through Saturday from 9:00 AM to 5:30 PM. Walk-in aspirants and parents are welcome to visit our Ambegaon campus for personalized counseling and infrastructure tours.",
    },
    {
      q: "What documents should I carry for in-person admission verification?",
      a: "Please carry 10th and 12th mark sheets, graduation scorecards/degree certificate, valid CET/CAT/CMAT scorecard, DTE CAP registration letter, domicile certificate, and recent passport-size photographs.",
    },
    {
      q: "Is visitor parking available on campus?",
      a: "Yes. We offer secure, dedicated on-campus parking for all visitors, students, and guests visiting Matrix School of Management Studies.",
    },
    {
      q: "How do I reach the campus from Pune Junction Railway Station?",
      a: "Pune Junction is approximately 14 km away. You can reach the campus via an auto-rickshaw, app-based cab (Ola/Uber), or PMPML city bus heading towards Katraj/Ambegaon along the Mumbai-Bangalore Westerly Bypass in about 30 to 35 minutes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-slate-800 selection:bg-[#c89650] selection:text-white">
      {/* 1. Main Navigation Header */}
      <Navbar />

      {/* 2. Hero Header with Cinematic Campus Panorama */}
      <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center overflow-hidden bg-[#041618]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact.avif"
            alt="Matrix School of Management Studies Pune Campus Contact Desk"
            fill
            priority
            className="object-cover object-center scale-105"
          />
        </div>

        {/* Multi-layer Dark Teal Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031518]/95 via-[#062024]/85 to-[#031518]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-[#031518]/60 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center space-y-4">
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md border border-[#ebb14e]/40 px-4 py-1.5 rounded-full">
            <span className="w-6 h-[2px] bg-[#ebb14e]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ebb14e] uppercase font-sans">
              CONNECT & INQUIRE • PUNE CAMPUS
            </span>
            <span className="w-6 h-[2px] bg-[#ebb14e]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Connect with Matrix <br />
            We&apos;re Here to <span className="text-[#ebb14e] italic font-serif">Guide Your Future</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Have questions about MBA dual-specializations, scheduling a campus tour, or placement
            partnerships? Our admissions and academic advisors are ready to help.
          </p>

          {/* Quick Contact Chips */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
            <a
              href="tel:+919822012345"
              className="inline-flex items-center gap-2 bg-black/45 backdrop-blur-md border border-white/20 text-white hover:border-[#ebb14e] text-xs font-semibold px-4 py-2 rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#ebb14e]" />
              <span>+91 98220 12345</span>
            </a>
            <a
              href="mailto:admissions@msmspune.com"
              className="inline-flex items-center gap-2 bg-black/45 backdrop-blur-md border border-white/20 text-white hover:border-[#ebb14e] text-xs font-semibold px-4 py-2 rounded-full transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#ebb14e]" />
              <span>admissions@msmspune.com</span>
            </a>
            <div className="inline-flex items-center gap-2 bg-black/45 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[#ebb14e]" />
              <span>Mon – Sat: 9:00 AM – 5:30 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main 2-Column Contact Section */}
      <section
        ref={mainSectionRef}
        suppressHydrationWarning
        className="relative z-30 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Channels & Campus Details */}
          <div ref={leftColRef} suppressHydrationWarning className="lg:col-span-5 space-y-6 will-change-transform">
            {/* Campus Address Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#c89650]/30 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c89650]">
                  CAMPUS LOCATION
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c363b]">
                  Matrix School of Management Studies
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                  Survey No. 9/1/5 & 9/2/4, Next to Westerly Bypass Road,
                  <br />
                  Ambegaon (Bk.), Vadgaon, Pune – 411041,
                  <br />
                  Maharashtra, India.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={CONTACT_DATA.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#b5883d] hover:text-[#0c363b] uppercase tracking-wider group"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Direct Calling & Phone Channels */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#c89650]/30 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c89650]">
                  ADMISSION HELPLINES
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c363b]">
                  Call Our Counselors
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Connect directly with our admissions and administrative officers:
                </p>
              </div>

              <div className="space-y-2 pt-1 text-sm font-semibold text-slate-800">
                <a
                  href="tel:+919822012345"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#faf8f5] hover:bg-[#faf4e6] border border-gray-200/80 transition-colors"
                >
                  <span>Admissions Cell (Direct)</span>
                  <span className="text-[#0c363b] font-bold">+91 98220 12345</span>
                </a>
                <a
                  href="tel:+912024356005"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#faf8f5] hover:bg-[#faf4e6] border border-gray-200/80 transition-colors"
                >
                  <span>Campus Office Landline</span>
                  <span className="text-[#0c363b] font-bold">+91 20 2435 6005</span>
                </a>
              </div>
            </div>

            {/* Email Channels Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#c89650]/30 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c89650]">
                  OFFICIAL CORRESPONDENCE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c363b]">
                  Email Helpdesks
                </h3>
              </div>

              <div className="space-y-2 pt-1 text-xs sm:text-sm font-medium">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf8f5] border border-gray-200/80">
                  <span className="text-slate-600">General Inquiries:</span>
                  <a
                    href="mailto:info@msmspune.com"
                    className="font-bold text-[#0c363b] hover:text-[#c89650] transition-colors"
                  >
                    info@msmspune.com
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf8f5] border border-gray-200/80">
                  <span className="text-slate-600">Admissions Desk:</span>
                  <a
                    href="mailto:admissions@msmspune.com"
                    className="font-bold text-[#0c363b] hover:text-[#c89650] transition-colors"
                  >
                    admissions@msmspune.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Contact Form */}
          <div ref={rightColRef} suppressHydrationWarning className="lg:col-span-7 will-change-transform">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-[#c89650]/40 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c89650]">
                  SEND AN INQUIRY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c363b]">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Fill out the form below and an admissions officer will respond with complete program
                  details within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#f0f9f1] border border-emerald-300 rounded-2xl p-8 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-emerald-900">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you, <strong>{formData.name || "Student"}</strong>. Your query has been
                    registered with the Matrix School of Management Studies admissions team. An advisor
                    will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0c363b] focus:ring-1 focus:ring-[#0c363b] text-sm text-slate-900 placeholder:text-gray-400 outline-none transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0c363b] focus:ring-1 focus:ring-[#0c363b] text-sm text-slate-900 placeholder:text-gray-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0c363b] focus:ring-1 focus:ring-[#0c363b] text-sm text-slate-900 placeholder:text-gray-400 outline-none transition-all"
                      />
                    </div>

                    {/* Program of Interest */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Program of Interest *
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0c363b] focus:ring-1 focus:ring-[#0c363b] text-sm text-slate-900 outline-none bg-white transition-all"
                      >
                        <option value="MBA in Marketing Management">MBA in Marketing Management</option>
                        <option value="MBA in Financial Management">MBA in Financial Management</option>
                        <option value="MBA in Business Analytics & Systems">MBA in Business Analytics & Systems</option>
                        <option value="MBA in Human Resource Management">MBA in Human Resource Management</option>
                        <option value="MBA in Operations & Supply Chain">MBA in Operations & Supply Chain</option>
                        <option value="MCA - Master of Computer Applications">MCA - Master of Computer Applications</option>
                        <option value="Ph.D. in Management Studies">Ph.D. in Management Studies</option>
                        <option value="General Admission Inquiry">General Admission Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Inquiry Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0c363b] focus:ring-1 focus:ring-[#0c363b] text-sm text-slate-900 outline-none bg-white transition-all"
                    >
                      <option value="Admissions Inquiry">Admissions Inquiry & Eligibility</option>
                      <option value="Campus Tour Booking">Schedule In-Person Campus Tour</option>
                      <option value="Placement & Corporate Tie-ups">Placement & Corporate Tie-ups</option>
                      <option value="Fee Structure & Scholarships">Fee Structure & Scholarships</option>
                      <option value="Verification of Documents">Verification of Documents (CAP 6634)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Message or Questions *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your questions or specific requirements here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0c363b] focus:ring-1 focus:ring-[#0c363b] text-sm text-slate-900 placeholder:text-gray-400 outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#0c363b] hover:bg-[#072628] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 text-[#ebb14e]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specialized Departmental Directory */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89650]">
              DEPARTMENTAL DIRECTORY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c363b]">
              Reach the Right Office Directly
            </h3>
            <p className="text-slate-600 text-sm">
              Connect with specialized administrative desks for accelerated guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPARTMENT_DIRECTORY.map((d, i) => (
              <div
                key={i}
                className="bg-[#faf8f5] p-6 rounded-2xl border border-[#c89650]/30 space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0c363b]">
                    {d.dept}
                  </h4>
                  <span className="text-xs text-[#c89650] font-semibold">{d.person}</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-gray-200/80">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#c89650] shrink-0" />
                    <a href={`tel:${d.phone}`} className="hover:text-[#0c363b] font-medium">
                      {d.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#c89650] shrink-0" />
                    <a href={`mailto:${d.email}`} className="hover:text-[#0c363b] font-medium truncate">
                      {d.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 pt-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{d.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Transit & Directions Guide */}
      <section className="py-16 sm:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89650]">
              GETTING HERE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c363b]">
              Location & Transit Connectivity
            </h3>
            <p className="text-slate-600 text-sm">
              Centrally situated in Pune’s education corridor with direct highway and airport connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0c363b]">By Road & Highway</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Directly adjacent to the Mumbai-Bangalore Westerly Bypass (NH 48). Easily accessible
                from Katraj, Kothrud, Hinjawadi, and Baner.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center">
                <Train className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0c363b]">By Rail</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pune Junction Railway Station is approximately 14 km away (30-35 mins). Regular bus and
                app cabs connect directly to Ambegaon.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center">
                <Plane className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0c363b]">By Air</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pune International Airport (PNQ) is approx. 22 km away. Direct highway bypass connectivity
                avoids central city traffic congestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89650]">
              VISITOR INQUIRIES
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#0c363b]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#faf8f5] rounded-xl border border-gray-200 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50"
                  >
                    <span className="font-serif font-bold text-base text-[#0c363b]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#c89650] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-gray-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
