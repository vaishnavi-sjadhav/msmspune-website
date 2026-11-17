"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VideoModal } from "@/components/common/VideoModal";

interface HeroActionsProps {
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  onExploreVideo?: () => void;
}

export function HeroActions({
  primaryText = "Apply Now",
  primaryLink = "/admissions/enquiry",
  secondaryText = "Explore Campus Video",
  onExploreVideo,
}: HeroActionsProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    if (onExploreVideo) {
      onExploreVideo();
    } else {
      setIsVideoOpen(true);
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
        {/* Primary CTA: Solid Gold Gradient Pill Button */}
        <Link
          href={primaryLink}
          className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-110 shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
        >
          {primaryText} →
        </Link>

        {/* Secondary CTA: Glassmorphic White Pill with Play Button */}
        <button
          type="button"
          onClick={handleVideoClick}
          className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-[#FAF3E8] bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
        >
          {/* Play Icon Inside Circle */}
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#C69A60] to-[#E0BA85] text-[#3D0C16] transition-transform duration-200 group-hover:scale-110 font-bold">
            <svg
              className="w-3 h-3 ml-0.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span>{secondaryText}</span>
        </button>
      </div>

      {/* Campus Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
}

export default HeroActions;
