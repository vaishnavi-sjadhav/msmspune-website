"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#2D060E] text-[#FAF3E8] border-t border-[#C69A60]/40 overflow-hidden select-none">
      {/* Background Image: public/about/fotter.png with calibrated overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/about/fotter.png"
          alt="Matrix Footer Background Graphic"
          fill
          className="object-cover object-center opacity-90"
          sizes="100vw"
          priority={false}
        />
        {/* Subtle radial dark overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20040A]/85 via-[#20040A]/70 to-[#20040A]/35 pointer-events-none" />
      </div>

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-14 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
          
          {/* Col 1: Brand Logo, Motto, Description & Social Icons */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 lg:pr-8 lg:border-r lg:border-white/15 space-y-4">
            {/* Brand Logo & Typography */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 select-none"
              aria-label="Matrix School of Management Studies Home"
            >
              {/* Stylized M Emblem with Leaf & Gold Ribbons */}
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 shrink-0">
                <svg
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                >
                  <path
                    d="M6 36V12L18 28L30 12V36M4 36H10M26 36H34M3 12H11M27 12H35"
                    stroke="#FAF3E8"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 26C18 20 20 14 24 10C24 16 22 22 18 26Z"
                    fill="#87977F"
                  />
                  <path
                    d="M18 26C15 22 16 16 20 13"
                    stroke="#C69A60"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Title & Sub-Title */}
              <div className="flex flex-col leading-tight whitespace-nowrap">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.16em] text-white">
                  MATRIX
                </span>
                <span className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.14em] font-medium uppercase text-white/80">
                  School of Management Studies
                </span>
              </div>
            </Link>

            {/* Motto / Tagline: Learn • Lead • Grow */}
            <div className="pt-1 flex items-center gap-2 text-sm sm:text-base font-serif italic text-[#E0BA85] tracking-wider whitespace-nowrap">
              <span>Learn</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C69A60]" />
              <span>Lead</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C69A60]" />
              <span>Grow</span>
            </div>

            {/* Mission Statement */}
            <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed max-w-sm">
              Building future-ready leaders through quality management education.
            </p>

            {/* Social Media Outlined Buttons */}
            <div className="pt-2 flex items-center gap-3">
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-white/30 text-white/90 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/30 text-white/90 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/30 text-white/90 hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/30 text-white/90 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.833C10.667 0 9 1.667 9 4.667V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:px-8 lg:border-r lg:border-white/15 space-y-3.5">
            <h4 className="font-serif text-base font-bold text-[#FAF3E8] flex items-center gap-2 whitespace-nowrap">
              <span className="text-[#E0BA85]">🎓</span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-white/80">
              <li>
                <Link href="/" className="hover:text-[#E0BA85] transition-colors flex items-center gap-2 group">
                  <span className="text-[#C69A60] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#E0BA85] transition-colors flex items-center gap-2 group">
                  <span className="text-[#C69A60] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#E0BA85] transition-colors flex items-center gap-2 group">
                  <span className="text-[#C69A60] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Admissions</span>
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-[#E0BA85] transition-colors flex items-center gap-2 group">
                  <span className="text-[#C69A60] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Placements</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Campus Life */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:px-8 lg:border-r lg:border-white/15 space-y-3.5">
            <h4 className="font-serif text-base font-bold text-[#FAF3E8] flex items-center gap-2 whitespace-nowrap">
              <span className="text-[#E0BA85]">★</span>
              <span>Campus Life</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-white/80">
              <li>
                <Link href="/events" className="hover:text-[#E0BA85] transition-colors flex items-center gap-2 group">
                  <span className="text-[#C69A60] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Events</span>
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-[#E0BA85] transition-colors flex items-center gap-2 group">
                  <span className="text-[#C69A60] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Campus Life</span>
                </Link>
              </li>
              <li>
                <Link href="/events#past-events-section" className="hover:text-[#E0BA85] transition-colors flex items-center gap-2 group">
                  <span className="text-[#C69A60] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E0BA85] transition-colors flex items-center gap-2 group">
                  <span className="text-[#C69A60] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions/enquiry" className="hover:text-[#E0BA85] transition-colors flex items-center gap-2 group text-[#E0BA85] font-semibold">
                  <span className="text-[#C69A60] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Apply Now</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 lg:pl-8 space-y-3.5">
            <h4 className="font-serif text-base font-bold text-[#FAF3E8] flex items-center gap-2 whitespace-nowrap">
              <span className="text-[#E0BA85]">📞</span>
              <span>Contact Us</span>
            </h4>
            <div className="space-y-3 text-xs sm:text-[13px] text-white/85">
              <a
                href="tel:+912024356000"
                className="flex items-center gap-3 hover:text-[#E0BA85] transition-colors group"
              >
                <span className="text-[#E0BA85] text-sm shrink-0">📞</span>
                <span>+91-20-xxxx xxxx</span>
              </a>

              <a
                href="mailto:admissions@matrix.edu.in"
                className="flex items-center gap-3 hover:text-[#E0BA85] transition-colors group"
              >
                <span className="text-[#E0BA85] text-sm shrink-0">✉️</span>
                <span className="truncate">admissions@matrix.edu.in</span>
              </a>

              <div className="flex items-start gap-3 pt-0.5">
                <span className="text-[#E0BA85] text-sm mt-0.5 shrink-0">📍</span>
                <span className="leading-snug text-white/80 max-w-xs">
                  Matrix School of Management Studies, Pune, Maharashtra – 411001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Horizontal Golden Divider, Copyright, Legal Links & Scroll-to-Top Button */}
        <div className="mt-12 pt-5 border-t border-[#C69A60]/40 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-4 text-center sm:text-left">
          <div className="leading-relaxed">
            © 2026 Matrix School of Management Studies. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs">
              <Link href="/privacy-policy" className="hover:text-[#E0BA85] transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/terms-and-conditions" className="hover:text-[#E0BA85] transition-colors whitespace-nowrap">
                Terms &amp; Conditions
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/sitemap" className="hover:text-[#E0BA85] transition-colors whitespace-nowrap">
                Sitemap
              </Link>
            </div>

            {/* Circular Golden Scroll-to-Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C69A60] via-[#E0BA85] to-[#F5D8A8] text-[#3D0C16] hover:brightness-110 shadow-md flex items-center justify-center font-bold text-sm transition-transform active:scale-90 cursor-pointer shrink-0"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
