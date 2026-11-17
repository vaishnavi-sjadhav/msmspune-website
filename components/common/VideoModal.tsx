"use client";

import React, { useEffect, useRef } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoSrc = "/about/gemini_generated_video_d35f0e79.mp4",
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      // Autoplay with sound when user explicitly opened modal
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
      return () => window.removeEventListener("keydown", handleKeyDown);
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl bg-neutral-950 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#C69A60]/40 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-gradient-to-r from-[#2A060E] to-[#180308] border-b border-[#C69A60]/30 text-white">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <div>
              <h3 className="font-serif text-sm sm:text-base font-semibold tracking-wide text-[#FAF3E8]">
                MSMS Pune Campus Experience Tour
              </h3>
              <p className="text-[10px] sm:text-xs text-[#E0BA85]/80 font-sans">
                Matrix School of Management Studies
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close video tour"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Player Frame with HTML5 Video */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            src={videoSrc}
            controls
            autoPlay
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Footer */}
        <div className="px-5 sm:px-6 py-3 bg-[#150307] text-xs text-neutral-400 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[#FAF3E8]/80 text-[11px] sm:text-xs">
            Explore world-class academic infrastructure, smart amphitheaters, modern labs, and vibrant campus life.
          </span>
          <span className="text-[#E0BA85] font-semibold text-[11px] sm:text-xs tracking-wider">
            Campus Tour 2026
          </span>
        </div>
      </div>
    </div>
  );
}
