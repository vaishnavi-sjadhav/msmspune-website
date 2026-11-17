"use client";

import React from "react";
import { motion } from "framer-motion";

export function FloatingAcademicObjects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Floating 3D Mortarboard Cap (Top Right) */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [-4, 5, -4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-16 right-4 sm:right-12 lg:right-24 w-24 h-24 sm:w-32 sm:h-32 opacity-30 lg:opacity-45 hidden md:block"
      >
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
          {/* Cap Diamond */}
          <path
            d="M60 20L108 42L60 64L12 42L60 20Z"
            fill="url(#capGrad)"
            stroke="#C69A60"
            strokeWidth="2"
          />
          {/* Cap Skull/Crown */}
          <path
            d="M30 52V76C30 88 44 98 60 98C76 98 90 88 90 76V52"
            fill="#3D0C16"
            stroke="#C69A60"
            strokeWidth="1.5"
            opacity="0.85"
          />
          {/* Golden Tassel Button & String */}
          <circle cx="60" cy="42" r="3.5" fill="#E0BA85" stroke="#C69A60" />
          <path
            d="M60 42C72 46 84 54 88 68"
            stroke="#E0BA85"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="85" y="68" width="6" height="14" rx="2" fill="#E0BA85" />
          
          <defs>
            <linearGradient id="capGrad" x1="12" y1="20" x2="108" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A0E1B" />
              <stop offset="0.5" stopColor="#3D0C16" />
              <stop offset="1" stopColor="#25050C" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* 2. Floating Diploma Scroll with Golden Ribbon (Left Middle) */}
      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [6, -4, 6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 left-4 sm:left-10 lg:left-16 w-20 h-20 sm:w-28 sm:h-28 opacity-25 lg:opacity-40 hidden md:block"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_12px_22px_rgba(0,0,0,0.55)]">
          {/* Parchment Cylinder */}
          <rect x="22" y="28" width="56" height="44" rx="6" fill="#FAF3E8" stroke="#C69A60" strokeWidth="2" transform="rotate(-20 50 50)" />
          {/* Rolled Edges */}
          <ellipse cx="32" cy="38" rx="8" ry="18" fill="#E8DEC8" stroke="#C69A60" strokeWidth="1.5" transform="rotate(-20 32 38)" />
          <ellipse cx="68" cy="52" rx="8" ry="18" fill="#FAF3E8" stroke="#C69A60" strokeWidth="1.5" transform="rotate(-20 68 52)" />
          {/* Red/Gold Wax Ribbon */}
          <rect x="46" y="25" width="8" height="50" rx="3" fill="#A31D24" stroke="#E0BA85" strokeWidth="1.2" transform="rotate(-20 50 50)" />
          <circle cx="50" cy="50" r="7" fill="#C69A60" stroke="#FAF3E8" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* 3. Floating 3D Geometric Analytics Prism (Bottom Right) */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-28 right-8 lg:right-20 w-24 h-24 opacity-25 lg:opacity-35 hidden lg:block"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
          {/* Isometric Cube / Prism representing Data Analytics */}
          <path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" stroke="#C69A60" strokeWidth="1.5" fill="none" />
          <path d="M50 15V85M50 50L85 65M50 50L15 65" stroke="#C69A60" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="4" fill="#E0BA85" />
          <circle cx="85" cy="35" r="3" fill="#E0BA85" />
          <circle cx="15" cy="35" r="3" fill="#E0BA85" />
          <circle cx="50" cy="85" r="3" fill="#E0BA85" />
        </svg>
      </motion.div>

      {/* 4. Ambient Sparkles & Golden Stars */}
      <motion.div
        animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-1/4 w-2 h-2 rounded-full bg-[#E0BA85] shadow-[0_0_12px_#E0BA85]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.85, 0.3], scale: [0.9, 1.3, 0.9] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-40 left-1/5 w-2 h-2 rounded-full bg-[#FAF3E8] shadow-[0_0_10px_#FAF3E8]"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.75, 0.25] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-1/2 right-1/6 w-1.5 h-1.5 rounded-full bg-[#C69A60] shadow-[0_0_8px_#C69A60]"
      />

      {/* Background Radial Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C69A60]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[400px] bg-[#5B1525]/30 rounded-full blur-[120px]" />
      <div className="absolute top-2/3 left-10 w-[450px] h-[350px] bg-[#3D0C16]/40 rounded-full blur-[110px]" />
    </div>
  );
}

export default FloatingAcademicObjects;
