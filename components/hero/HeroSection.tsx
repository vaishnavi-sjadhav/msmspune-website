"use client";

import React, { useState, useRef } from "react";
import { HeroContent } from "./HeroContent";
import { ConnectWidget } from "@/components/common/ConnectWidget";
import { VideoModal } from "@/components/common/VideoModal";

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-[#2D070F] text-[#FAF3E8]">
      {/* Background Video: public/about/gemini_generated_video_d35f0e79.mp4 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/about/gemini_generated_video_d35f0e79.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center select-none"
        />

        {/* High-Contrast Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20040A]/95 via-[#20040A]/75 to-[#20040A]/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#20040A] via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20 flex flex-col justify-between min-h-[calc(100vh-64px)]">
        
        {/* Top Floating Row: Live Badge & Audio/Play Controls */}
        <div className="flex items-center justify-between w-full pt-2">
          {/* Live Recording Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#C69A60]/40 text-[#FAF3E8] shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#E0BA85]">
              Campus Live Video Tour
            </span>
          </div>

          {/* Quick Sound, Play & Theater Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={toggleMute}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/20 text-[#FAF3E8] text-xs font-semibold transition-all shadow-md cursor-pointer hover:border-[#C69A60]"
              aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
              title={isMuted ? "Click to Unmute Sound" : "Click to Mute"}
            >
              {isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5 fill-current text-white/80" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                  <span className="hidden sm:inline">Unmute Sound</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 fill-current text-[#E0BA85]" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                  <span className="text-[#E0BA85]">Sound On</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={togglePlay}
              className="p-2 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/20 text-[#FAF3E8] transition-all shadow-md cursor-pointer hover:border-[#C69A60]"
              aria-label={isPlaying ? "Pause background video" : "Play background video"}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 fill-current text-[#E0BA85]" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="p-2 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/20 text-[#FAF3E8] transition-all shadow-md cursor-pointer hover:border-[#C69A60]"
              aria-label="Open fullscreen theater video modal"
              title="Fullscreen Theater Mode"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Center: Main Headline, Subtitle and CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6 sm:py-10">
          <div className="lg:col-span-8 xl:col-span-7">
            <HeroContent onExploreVideo={() => setIsVideoModalOpen(true)} />
          </div>
        </div>

        {/* Bottom Bar: Accreditation Strip */}
        <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
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
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#E0BA85] hover:text-white transition-colors cursor-pointer"
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
