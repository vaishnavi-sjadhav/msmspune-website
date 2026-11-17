"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { HeroContent } from "./HeroContent";
import { ConnectWidget } from "@/components/common/ConnectWidget";
import { VideoModal } from "@/components/common/VideoModal";

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile Autoplay Enforcement:
    // iOS Safari & Android Chrome strictly require muted property + inline attributes
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true);
          })
          .catch(() => {
            // Autoplay blocked by mobile browser (e.g. iOS Low Power Mode).
            // Start video on the first user touch/tap anywhere on mobile screen.
            const handleFirstInteraction = () => {
              video.play().then(() => setIsVideoPlaying(true)).catch(() => {});
              window.removeEventListener("touchstart", handleFirstInteraction);
              window.removeEventListener("click", handleFirstInteraction);
            };
            window.addEventListener("touchstart", handleFirstInteraction, { once: true, passive: true });
            window.addEventListener("click", handleFirstInteraction, { once: true });
          });
      }
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener("loadeddata", attemptPlay, { once: true });
      video.addEventListener("canplay", attemptPlay, { once: true });
    }

    const onPlay = () => setIsVideoPlaying(true);
    const onPause = () => setIsVideoPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-70px)] min-h-[calc(100dvh-64px)] flex items-center overflow-hidden bg-black text-[#FAF3E8]">
      
      {/* Background Campus Image & Video (Properly Visible without Dark Shadow Overlays) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Crisp Campus Image Base (Always visible immediately) */}
        <Image
          src="/about/legacy-campus-building.jpg"
          alt="Matrix School of Management Studies Campus"
          fill
          priority
          className="object-cover object-center select-none brightness-100"
        />

        {/* Background Video (Seamlessly layers over base image when active) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/about/legacy-campus-building.jpg"
          preload="auto"
          className="w-full h-full object-cover object-center select-none will-change-transform"
        >
          <source src="/about/gemini_generated_video_d35f0e79.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content Container (Properly balanced mobile vertical spacing) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-14 lg:py-20 flex flex-col justify-between min-h-[calc(100vh-64px)] min-h-[calc(100dvh-64px)]">
        
        {/* Top Spacer / Quick Mobile Status Pill */}
        <div className="w-full pt-1 sm:pt-2 flex items-center justify-between">
          {/* Subtle Live Video indicator on mobile */}
          <div className="inline-flex sm:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-[#E0BA85]">
            <span className={`w-2 h-2 rounded-full ${isVideoPlaying ? "bg-emerald-400 animate-pulse" : "bg-[#C69A60]"}`} />
            <span>Campus Tour</span>
          </div>

          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="inline-flex sm:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C69A60]/20 backdrop-blur-md border border-[#C69A60]/40 text-[10px] font-bold text-[#FAF3E8] cursor-pointer"
          >
            <span>Full HD ↗</span>
          </button>
        </div>

        {/* Center: Main Headline, Subtitle and CTAs Centered */}
        <div className="w-full flex items-center justify-center my-auto py-6 sm:py-12">
          <div className="w-full max-w-4xl mx-auto text-center">
            <HeroContent onExploreVideo={() => setIsVideoModalOpen(true)} />
          </div>
        </div>

        {/* Bottom Bar: Accreditation Strip (Mobile Responsive Grid) */}
        <div className="pt-3 sm:pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs text-white/90 drop-shadow-sm">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-6 w-full sm:w-auto text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C69A60] shrink-0" />
              <span>Est. 1917</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C69A60] shrink-0" />
              <span>NAAC A++ Grade</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C69A60] shrink-0" />
              <span>AICTE &amp; DTE Approved</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C69A60] shrink-0" />
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
