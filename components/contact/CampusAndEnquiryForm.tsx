"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function CampusAndEnquiryForm({ className = "pb-14 sm:pb-20" }: { className?: string } = {}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    queryType: "MBA Admissions 2026",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.mobile.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  return (
    <section id="enquiry-form-section" className={`bg-[#FAF3E8] text-[#3D0C16] ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: "Our Campus" Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[#C69A60]/30 shadow-[0_10px_30px_rgba(61,12,22,0.08)] relative"
          >
            {/* Campus Photo */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
              <Image
                src="/about/contact.webp"
                alt="Matrix School of Management Studies Pune Campus Building"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content & Action */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D0C16]">
                  Our Campus
                </h3>
                <p className="text-xs sm:text-sm text-[#5B1525]/85 mt-2 leading-relaxed">
                  A vibrant learning environment for future leaders equipped with modern air-conditioned amphitheater classrooms, high-tech computer laboratories, an expansive management library, and lush green student breakout zones.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <a
                  href="#our-location"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#DEB887] to-[#E0BA85] hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Explore Our Campus</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Bottom Swooping Gold Accent Ribbon (Mockup detail) */}
            <div className="h-2 w-full bg-gradient-to-r from-[#C69A60] via-[#DEB887] to-[#5B1525]" />
          </motion.div>

          {/* Right Column: "Send Us a Message" Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#C69A60]/40 shadow-[0_15px_35px_rgba(61,12,22,0.12)] bg-gradient-to-br from-[#450C17] via-[#5B1525] to-[#3D0C16] text-[#FAF3E8] relative flex flex-col justify-between"
          >
            {/* Header with Paper Airplane and Gold Swoop */}
            <div className="p-6 sm:p-8 border-b border-[#C69A60]/20 relative overflow-hidden">
              {/* Airplane Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 border border-[#C69A60]/30 flex items-center justify-center text-[#FAF3E8] shadow-inner">
                <svg className="w-6 h-6 transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-md">
                Fill out the form and our team will get back to you soon.
              </p>
            </div>

            {/* Form Body */}
            <div className="p-6 sm:p-8 flex-1">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 px-6 rounded-2xl bg-white/10 border border-[#C69A60]/50 text-center space-y-4"
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#87977F]/30 border border-[#87977F] flex items-center justify-center text-2xl text-[#FAF3E8]">
                      ✓
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#FAF3E8]">
                      Thank You, {formData.fullName.split(" ")[0]}!
                    </h3>
                    <p className="text-xs sm:text-sm text-white/85 max-w-md mx-auto leading-relaxed">
                      Your enquiry regarding <span className="text-[#C69A60] font-semibold">{formData.queryType}</span> has been received. Our counselor will connect with you at <span className="text-[#C69A60] font-semibold">{formData.mobile}</span> within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          mobile: "",
                          queryType: "MBA Admissions 2026",
                          message: "",
                        });
                      }}
                      className="px-6 py-2 rounded-full text-xs font-semibold bg-white/15 hover:bg-white/25 text-[#FAF3E8] transition-colors border border-white/20"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Error Notice */}
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-900/60 border border-red-500/50 text-red-200 text-xs">
                        {errorMsg}
                      </div>
                    )}

                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-white/90">
                          Full Name <span className="text-[#C69A60]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/90 focus:bg-white text-[#3D0C16] placeholder-[#3D0C16]/50 text-xs sm:text-sm border border-[#C69A60]/30 focus:border-[#C69A60] focus:outline-none focus:ring-2 focus:ring-[#C69A60]/30 transition-all shadow-inner"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-white/90">
                          Email Address <span className="text-[#C69A60]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/90 focus:bg-white text-[#3D0C16] placeholder-[#3D0C16]/50 text-xs sm:text-sm border border-[#C69A60]/30 focus:border-[#C69A60] focus:outline-none focus:ring-2 focus:ring-[#C69A60]/30 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Row 2: Mobile Number & Query Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-white/90">
                          Mobile Number <span className="text-[#C69A60]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          required
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/90 focus:bg-white text-[#3D0C16] placeholder-[#3D0C16]/50 text-xs sm:text-sm border border-[#C69A60]/30 focus:border-[#C69A60] focus:outline-none focus:ring-2 focus:ring-[#C69A60]/30 transition-all shadow-inner"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-white/90">
                          Select Query Type <span className="text-[#C69A60]">*</span>
                        </label>
                        <select
                          name="queryType"
                          value={formData.queryType}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/90 focus:bg-white text-[#3D0C16] text-xs sm:text-sm border border-[#C69A60]/30 focus:border-[#C69A60] focus:outline-none focus:ring-2 focus:ring-[#C69A60]/30 transition-all shadow-inner cursor-pointer"
                        >
                          <option value="MBA Admissions 2026">MBA Admissions 2026</option>
                          <option value="Eligibility & CET/CAT Cutoffs">Eligibility & CET/CAT Cutoffs</option>
                          <option value="Fee Structure & Installments">Fee Structure & Installments</option>
                          <option value="Scholarship Application">Scholarship Application</option>
                          <option value="Placement & Corporate Relations">Placement & Corporate Relations</option>
                          <option value="Campus Visit & Infrastructure Tour">Campus Visit & Infrastructure Tour</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Your Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-white/90">
                        Your Message <span className="text-[#C69A60]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your questions or specific requirements here..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/90 focus:bg-white text-[#3D0C16] placeholder-[#3D0C16]/50 text-xs sm:text-sm border border-[#C69A60]/30 focus:border-[#C69A60] focus:outline-none focus:ring-2 focus:ring-[#C69A60]/30 transition-all shadow-inner resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-full text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#DEB887] to-[#E0BA85] hover:brightness-110 shadow-[0_8px_20px_rgba(198,154,96,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#3D0C16] border-t-transparent rounded-full animate-spin" />
                            <span>Sending Your Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>✈</span>
                            <span>Submit Enquiry</span>
                            <span>→</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
