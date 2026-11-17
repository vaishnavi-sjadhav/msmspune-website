"use client";

import React, { useState, useRef, useEffect } from "react";
import { HeroContent } from "./HeroContent";
import { ConnectWidget } from "@/components/common/ConnectWidget";
import { VideoModal } from "@/components/common/VideoModal";

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-black text-[#FAF3E8]">
      {/* Background Video (Shadow / dark gradient overlays removed so video is fully visible) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center select-none"
        >
          <source src="/about/gemini_generated_video_d35f0e79.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20 flex flex-col justify-between min-h-[calc(100vh-64px)]">
        
        {/* Top Spacer */}
        <div className="w-full pt-2" />

        {/* Center: Main Headline, Subtitle and CTAs Centered */}
        <div className="w-full flex items-center justify-center my-auto py-8 sm:py-14">
          <div className="w-full max-w-4xl mx-auto text-center">
            <HeroContent onExploreVideo={() => setIsVideoModalOpen(true)} />
          </div>
        </div>

        {/* Bottom Bar: Accreditation Strip */}
        <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs text-white/90 drop-shadow-sm">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C69A60]" />
              <span>Established 1917</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C69A60]" />
              <span>NAAC A++ Grade Accredited</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C69A60]" />
              <span>AICTE Approved &amp; DTE Recognized</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C69A60]" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#E0BA85] hover:text-white transition-colors cursor-pointer drop-shadow-sm"
          >
            <span>Watch Full HD Video Tour</span>
            <span>↗</span>
          </button>
        </div>
      </div>

      {/* Fullscreen Video Tour Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/about/gemini_generated_video_d35f0e79.mp4"
      />

      {/* Floating Interactive Connect Chatbot Widget */}
      <ConnectWidget />
    </section>
  );
}

export default HeroSection;
