"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";

export default function AdmissionEnquiryPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    course: "MBA Marketing",
    exam: "MAH-CET",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.mobile) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#3D0C16] text-[#FAF3E8]">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Hero & Main Content Section */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-[#3D0C16] via-[#4D111E] to-[#3D0C16]">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C69A60]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#5B1525]/30 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Page Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/20 border border-[#C69A60]/50 text-[#C69A60] text-xs font-bold uppercase tracking-wider mb-6">
              <span>Step 7</span>
              <span>•</span>
              <span>Admission Enquiry</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Heading, Subtitle & Campus Architecture Photo */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3E8] leading-[1.12]">
                    Let&apos;s Start <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF3E8] via-[#E0BA85] to-[#C69A60]">
                      Your Journey
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-[#FAF3E8]/85 max-w-xl font-normal leading-relaxed mt-4">
                    Have any questions regarding MBA specializations, eligibility cutoffs, scholarship applications, or campus tours? Get in touch with our admissions counselor team.
                  </p>
                </div>

                {/* Campus Image Frame (Matches Panel 7) */}
                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-[#C69A60]/40 shadow-2xl group">
                  <Image
                    src="/hero1.webp"
                    alt="Matrix School of Management Studies Campus Grounds"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C16] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#3D0C16]/85 backdrop-blur-md border border-[#C69A60]/30 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-[#C69A60] font-bold block">Matrix Campus, Pune</span>
                      <span className="text-white/80">Campus visits open Mon–Sat: 9:30 AM to 5:30 PM</span>
                    </div>
                    <span className="text-xl">🏛️</span>
                  </div>
                </div>

                {/* Contact Information Badges Strip (Matches Panel 7) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-[#C69A60]/30 flex flex-col justify-center">
                    <span className="text-lg mb-1">📞</span>
                    <span className="text-[11px] text-white/60">Direct Hotline</span>
                    <span className="text-xs font-bold text-[#C69A60] mt-0.5">+91 20 2569 0000</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-[#C69A60]/30 flex flex-col justify-center">
                    <span className="text-lg mb-1">✉️</span>
                    <span className="text-[11px] text-white/60">Email Desk</span>
                    <span className="text-xs font-bold text-[#C69A60] mt-0.5 truncate">admissions@msmspune.com</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-[#C69A60]/30 flex flex-col justify-center">
                    <span className="text-lg mb-1">📍</span>
                    <span className="text-[11px] text-white/60">Location</span>
                    <span className="text-xs font-bold text-[#C69A60] mt-0.5">Ambegaon (Bk), Pune</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Glassmorphism Admission Enquiry Form (Matches Panel 7) */}
              <div className="lg:col-span-6">
                <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#4D111E]/90 to-[#2A060E]/95 border border-[#C69A60]/50 shadow-2xl backdrop-blur-xl">
                  
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                      Admission Enquiry Form
                    </h2>
                    <p className="text-xs sm:text-sm text-white/70 mt-1">
                      Fill out the form below and an academic advisor will connect with you within 15 minutes.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-12 px-6 text-center space-y-4 bg-white/5 rounded-2xl border border-[#C69A60]/40">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#C69A60] to-[#E0BA85] text-[#3D0C16] text-3xl font-bold flex items-center justify-center mx-auto shadow-lg">
                        ✓
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#FAF3E8]">
                        Enquiry Submitted Successfully!
                      </h3>
                      <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="text-[#C69A60] font-bold">{formData.fullName}</span>. Our senior admissions officer has received your details for <span className="text-[#C69A60] font-bold">{formData.course}</span> and will call you on <span className="text-[#C69A60] font-bold">{formData.mobile}</span> shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-full text-xs font-bold text-[#3D0C16] bg-[#C69A60] hover:bg-[#E0BA85] transition-all"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-[#FAF3E8]/90 mb-1.5">
                          Full Name <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-[#FAF3E8] placeholder-white/40 text-sm focus:outline-none focus:border-[#C69A60] focus:ring-1 focus:ring-[#C69A60] transition-all"
                        />
                      </div>

                      {/* Email & Mobile Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#FAF3E8]/90 mb-1.5">
                            Email Address <span className="text-amber-400">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-[#FAF3E8] placeholder-white/40 text-sm focus:outline-none focus:border-[#C69A60] focus:ring-1 focus:ring-[#C69A60] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#FAF3E8]/90 mb-1.5">
                            Mobile Number <span className="text-amber-400">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-[#FAF3E8] placeholder-white/40 text-sm focus:outline-none focus:border-[#C69A60] focus:ring-1 focus:ring-[#C69A60] transition-all"
                          />
                        </div>
                      </div>

                      {/* Course Selection & Entrance Exam Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#FAF3E8]/90 mb-1.5">
                            Select Specialization
                          </label>
                          <select
                            value={formData.course}
                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#3D0C16] border border-white/20 text-[#FAF3E8] text-sm focus:outline-none focus:border-[#C69A60] focus:ring-1 focus:ring-[#C69A60] transition-all"
                          >
                            <option value="MBA Marketing">MBA in Marketing</option>
                            <option value="MBA Finance">MBA in Finance</option>
                            <option value="MBA Human Resources">MBA in Human Resources</option>
                            <option value="MBA Operations">MBA in Operations & Supply Chain</option>
                            <option value="MBA Business Analytics">MBA in Business Analytics</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#FAF3E8]/90 mb-1.5">
                            Entrance Exam
                          </label>
                          <select
                            value={formData.exam}
                            onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#3D0C16] border border-white/20 text-[#FAF3E8] text-sm focus:outline-none focus:border-[#C69A60] focus:ring-1 focus:ring-[#C69A60] transition-all"
                          >
                            <option value="MAH-CET">MAH-MBA CET</option>
                            <option value="CAT">CAT (IIM)</option>
                            <option value="CMAT">CMAT (NTA)</option>
                            <option value="MAT / ATMA">MAT / ATMA</option>
                            <option value="Awaiting Result">Awaiting CET Result</option>
                          </select>
                        </div>
                      </div>

                      {/* Message / Query */}
                      <div>
                        <label className="block text-xs font-semibold text-[#FAF3E8]/90 mb-1.5">
                          Your Question / Message
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Ask about fee installment, hostel availability, cutoff percentiles..."
                          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-[#FAF3E8] placeholder-white/40 text-sm focus:outline-none focus:border-[#C69A60] focus:ring-1 focus:ring-[#C69A60] transition-all"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-110 shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Submit Enquiry →
                      </button>

                      <p className="text-[11px] text-center text-white/50 pt-1">
                        Your privacy is guaranteed. We never spam or share your contact information.
                      </p>
                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href="https://wa.me/919822000000?text=Hi,%20I%20am%20interested%20in%20Matrix%20School%20of%20Management%20Studies%20MBA%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-2.5 rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-105 transition-all duration-300 font-semibold text-xs sm:text-sm"
        aria-label="Chat on WhatsApp with Admissions Desk"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
        </svg>
        <span>WhatsApp Us</span>
      </a>

      <Footer />
    </div>
  );
}
