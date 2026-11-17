"use client";

import React from "react";

// --- Vector Brand Logos (Pixel-perfect matching reference image) ---

function BajajAllianzLogo() {
  return (
    <div className="flex items-center justify-center bg-[#004B8D] text-white px-2.5 py-1.5 rounded-lg gap-2 shadow-sm select-none">
      <div className="flex items-center gap-1 font-bold text-[12px] tracking-wide">
        <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span>BAJAJ</span>
      </div>
      <span className="w-px h-3.5 bg-white/40" />
      <div className="flex items-center gap-1 font-semibold text-[12px]">
        <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M9 8v8M12 7v10M15 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>Allianz</span>
      </div>
    </div>
  );
}

function HdfcBankLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-6 h-6 relative shrink-0">
        <div className="w-full h-full bg-[#ED1C24] p-0.5 flex items-center justify-center rounded-[2px]">
          <div className="w-full h-full bg-white flex items-center justify-center p-0.5">
            <div className="w-2.5 h-2.5 bg-[#004C8F]" />
          </div>
        </div>
      </div>
      <span className="text-[14px] font-black tracking-tight text-[#004C8F]">
        HDFC BANK
      </span>
    </div>
  );
}

function AdeccoLogo() {
  return (
    <span className="text-[17px] font-bold tracking-tight text-[#DA291C] font-sans select-none">
      Adecco
    </span>
  );
}

function CosmosBankLogo() {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="13" fill="#1A3B8B" />
        <path d="M6 16c4-6 16-6 20 0-4 6-16 6-20 0z" fill="#FF9900" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[12px] font-extrabold tracking-tight text-[#1A3B8B]">
          COSMOS
        </span>
        <span className="text-[8px] font-bold tracking-widest text-[#1A3B8B]">
          BANK
        </span>
      </div>
    </div>
  );
}

function JohnDeereLogo() {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <div className="w-5 h-5 bg-[#367C2B] rounded flex items-center justify-center p-0.5 shadow-sm">
        <svg className="w-4 h-4 text-[#FFDE00] fill-current" viewBox="0 0 24 24">
          <path d="M19 8c-1.5-2-4-3-6-3-3 0-5 2-6 4l2 1c.5-1.5 2-2.5 4-2.5 1.5 0 3 .8 4 2l2-1.5zM8 12c-1 0-2 .8-2 2 0 1.5 1.5 3 4 3 2 0 4-1 5-2.5l-1.5-1c-.7 1-2 1.5-3.5 1.5-1.5 0-2.5-.8-2.5-1.5 0-.5.5-.8 1-.8h3l.5-1.7H8z" />
          <polygon points="12,5 15,9 13,9 14,12 11,8 13,8" />
        </svg>
      </div>
      <span className="text-[11px] font-black tracking-tight text-[#367C2B] uppercase">
        JOHN DEERE
      </span>
    </div>
  );
}

function BrintonsLogo() {
  return (
    <span className="font-serif text-[17px] font-bold text-neutral-900 tracking-tight select-none">
      Brintons
    </span>
  );
}

function InfosysLogo() {
  return (
    <span className="font-sans text-[17px] font-bold text-[#007CC3] tracking-tight select-none">
      Infosys
    </span>
  );
}

function TcsLogo() {
  return (
    <span className="font-sans text-[19px] font-extrabold tracking-tight bg-gradient-to-r from-[#E21E26] via-[#F37023] to-[#8C2D84] bg-clip-text text-transparent select-none">
      tcs
    </span>
  );
}

function AmazonLogo() {
  return (
    <div className="flex flex-col items-center leading-none select-none">
      <span className="font-sans text-[16px] font-black text-[#232F3E] tracking-tight -mb-1">
        amazon
      </span>
      <svg className="w-12 h-2.5 text-[#FF9900]" viewBox="0 0 60 14" fill="none">
        <path d="M4 4c15 8 38 8 52-1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M52 2l5 2-3 4" fill="currentColor" />
      </svg>
    </div>
  );
}

export function RecruitersMarquee() {
  const recruiters = [
    { name: "Bajaj Allianz", logo: <BajajAllianzLogo /> },
    { name: "HDFC Bank", logo: <HdfcBankLogo /> },
    { name: "Adecco", logo: <AdeccoLogo /> },
    { name: "Cosmos Bank", logo: <CosmosBankLogo /> },
    { name: "John Deere", logo: <JohnDeereLogo /> },
    { name: "Brintons", logo: <BrintonsLogo /> },
    { name: "Infosys", logo: <InfosysLogo /> },
    { name: "TCS", logo: <TcsLogo /> },
    { name: "Amazon", logo: <AmazonLogo /> },
  ];

  const textTicker = [
    "BAJAJ ALLIANZ",
    "HDFC BANK",
    "ADECCO",
    "COSMOS BANK",
    "JOHN DEERE",
    "BRINTONS",
    "INFOSYS",
    "TCS",
    "AMAZON",
  ];

  return (
    <section
      id="recruiters"
      className="relative py-12 sm:py-16 bg-[#FDFBF7] text-[#2D070F] border-b border-[#E8DEC9] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#3D0C16] tracking-tight">
            Our Esteemed Recruiters
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 font-normal">
            Leading organizations trust Matrix for their talent needs
          </p>
          <div className="w-16 h-1 bg-[#C69A60] mx-auto mt-2.5 rounded-full" />
        </div>
      </div>

      {/* 1. Main Continuous Logo Cards Marquee Track */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent" />

        {/* Seamless Infinite Marquee Track (Repeated 4x to ensure uninterrupted loop across ultra-wide monitors) */}
        <div className="flex gap-3 sm:gap-4 animate-marquee pause-on-hover py-1">
          {[...recruiters, ...recruiters, ...recruiters, ...recruiters].map((rec, idx) => (
            <div
              key={idx}
              className="h-14 sm:h-16 px-5 sm:px-6 rounded-2xl bg-[#ECEEF2] border border-[#D5D9DF] shadow-[0_2px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#C69A60] hover:bg-white flex items-center justify-center shrink-0 min-w-[125px] sm:min-w-[145px] transition-all duration-300 cursor-pointer group hover:-translate-y-0.5"
            >
              {rec.logo}
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Divider Line (Matches Reference Screenshot) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 my-4 sm:my-6">
        <hr className="border-t border-[#E8DEC9]" />
      </div>

      {/* 2. Secondary Marquee Text Ticker (Matches Reference Screenshot) */}
      <div className="relative w-full overflow-hidden py-1">
        {/* Left & Right Fade Masks for Text */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[#FDFBF7] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[#FDFBF7] to-transparent" />

        <div className="flex gap-6 sm:gap-8 items-center animate-marquee-slow pause-on-hover text-xs sm:text-[13px] font-semibold text-neutral-500 uppercase tracking-widest">
          {[...textTicker, ...textTicker, ...textTicker, ...textTicker].map((item, idx) => (
            <span
              key={idx}
              className="flex items-center gap-6 sm:gap-8 shrink-0 hover:text-[#3D0C16] transition-colors cursor-default select-none"
            >
              <span>{item}</span>
              <span className="text-[#C69A60] font-bold text-sm">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
