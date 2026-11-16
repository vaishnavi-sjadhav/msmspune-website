"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ChevronRight,
} from "lucide-react";
import { FOOTER_DATA } from "@/data/navigation";
import { SocialIcons } from "@/components/ui/SocialIcons";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#051a1d] via-[#072428] to-[#041416] text-white pt-14 sm:pt-16 pb-8 border-t border-[#0e3b40] overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#0c363b]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative 4-point Star Accent at bottom right */}
      <div className="absolute bottom-16 right-10 pointer-events-none opacity-40">
        <svg
          className="w-8 h-8 text-[#d4af37]"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand, Motto, Mission & Social Icons (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Crest Logo */}
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-64">
                <Image
                  src="/images/footer-crest-logo.png"
                  alt="Matrix School of Management Studies Crest"
                  width={300}
                  height={80}
                  className="object-contain object-left h-full w-auto"
                />
              </div>
            </Link>

            {/* Tagline / Motto */}
            <p className="font-serif italic text-[#f4efe1] text-base sm:text-lg font-normal tracking-wide pt-1">
              {FOOTER_DATA.motto}
            </p>

            {/* Mission Statement */}
            <p className="text-xs sm:text-[13px] text-gray-300/80 leading-relaxed max-w-sm">
              {FOOTER_DATA.description}
            </p>

            {/* Follow Us */}
            <div className="pt-2">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide mb-3">
                Follow Us
              </h4>
              <SocialIcons variant="footer" />
            </div>
          </div>

          {/* Column 2: EXPLORE (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#dfb271] uppercase">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {FOOTER_DATA.exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-0.5"
                  >
                    <span className="group-hover:text-[#ebb14e] transition-colors">
                      {item.label}
                    </span>
                    {item.hasArrow && (
                      <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#ebb14e] group-hover:translate-x-0.5 transition-transform" />
                    )}
                    {item.hasBadge && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: ACADEMICS (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#dfb271] uppercase">
              ACADEMICS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {FOOTER_DATA.academicsLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-gray-300 hover:text-[#ebb14e] transition-colors py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH & Accreditations (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#dfb271] uppercase">
              GET IN TOUCH
            </h4>

            <div className="space-y-3 text-xs sm:text-[13px] text-gray-300">
              {/* Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#dfb271] shrink-0 mt-0.5" />
                <span className="leading-snug">{FOOTER_DATA.contact.location}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#dfb271] shrink-0" />
                <a
                  href={`tel:${FOOTER_DATA.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition"
                >
                  {FOOTER_DATA.contact.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#dfb271] shrink-0" />
                <a
                  href={`mailto:${FOOTER_DATA.contact.email}`}
                  className="hover:text-white transition"
                >
                  {FOOTER_DATA.contact.email}
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#dfb271] shrink-0" />
                <Link
                  href="/"
                  className="hover:text-white transition font-medium"
                >
                  {FOOTER_DATA.contact.website}
                </Link>
              </div>
            </div>

            {/* Accreditation Badges (AICTE & NAAC) */}
            <div className="pt-2">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/footer-accreditations.png"
                  alt="AICTE Approved and NAAC Accredited Institution"
                  width={200}
                  height={50}
                  className="object-contain object-left h-full w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-[#0e3b40] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; 2026 Matrix School of Management Studies. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-gray-400">
            {FOOTER_DATA.legalLinks.map((item, idx) => (
              <React.Fragment key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-gray-200 transition-colors"
                >
                  {item.label}
                </Link>
                {idx < FOOTER_DATA.legalLinks.length - 1 && (
                  <span className="text-gray-600 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
