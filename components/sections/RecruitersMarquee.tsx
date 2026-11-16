"use client";

import React from "react";

interface Recruiter {
  name: string;
  category?: string;
  logo: React.ReactNode;
}

const ROW_1_RECRUITERS: Recruiter[] = [
  {
    name: "TATA",
    category: "Conglomerate & Consulting",
    logo: (
      <div className="flex items-center gap-1.5 text-[#005a9c] font-black text-lg tracking-wider">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 .78-.3 1.49-.78 2.02L12 17.5l-2.22-7.48C9.3 9.49 9 8.78 9 8c0-1.66 1.34-3 3-3z" />
        </svg>
        <span>TATA</span>
      </div>
    ),
  },
  {
    name: "Deloitte",
    category: "Big 4 Consulting & Advisory",
    logo: (
      <div className="font-extrabold text-base tracking-tight text-slate-900 flex items-center">
        <span>Deloitte</span>
        <span className="text-[#86bc25] font-black text-xl leading-none">.</span>
      </div>
    ),
  },
  {
    name: "Infosys",
    category: "Global Technology & Consulting",
    logo: (
      <div className="font-bold text-base text-[#007cc3] tracking-wide">
        <span>Infosys</span>
      </div>
    ),
  },
  {
    name: "KPMG",
    category: "Big 4 Audit & Risk Advisory",
    logo: (
      <div className="flex items-center gap-1">
        <span className="font-black text-base text-[#00338d] tracking-wider">
          KPMG
        </span>
        <div className="flex gap-0.5 h-3.5">
          <span className="w-0.5 h-full bg-[#00338d]" />
          <span className="w-0.5 h-full bg-[#005eb8]" />
          <span className="w-0.5 h-full bg-[#0091da]" />
        </div>
      </div>
    ),
  },
  {
    name: "ICICI Bank",
    category: "Premier Private Banking",
    logo: (
      <div className="flex items-center gap-1.5 text-[#b02a30] font-bold text-sm tracking-tight">
        <div className="w-4 h-4 rounded-full bg-[#f37021] text-white flex items-center justify-center text-[10px] font-black italic">
          i
        </div>
        <span className="text-[#982429] font-bold">ICICI Bank</span>
      </div>
    ),
  },
  {
    name: "Capgemini",
    category: "IT Consulting & Digital",
    logo: (
      <div className="flex items-center gap-1 text-[#0070ad] font-bold text-sm">
        <span className="text-base font-black">Capgemini</span>
        <span className="text-xs">♠</span>
      </div>
    ),
  },
  {
    name: "Amazon",
    category: "Global E-Commerce & Cloud",
    logo: (
      <div className="flex items-center text-[#232f3e] font-extrabold text-base tracking-tight">
        <span>amazon</span>
        <span className="text-[#ff9900] text-xs font-black ml-0.5">⌣</span>
      </div>
    ),
  },
  {
    name: "Barclays",
    category: "Multinational Investment Bank",
    logo: (
      <div className="flex items-center gap-1 text-[#00aeef] font-bold text-base">
        <span>BARCLAYS</span>
      </div>
    ),
  },
];

const ROW_2_RECRUITERS: Recruiter[] = [
  {
    name: "HDFC Bank",
    category: "India's Leading Bank",
    logo: (
      <div className="flex items-center gap-1.5 text-[#004c8f] font-bold text-sm tracking-tight">
        <div className="w-3.5 h-3.5 bg-[#ed232a] flex items-center justify-center rounded-xs">
          <div className="w-1.5 h-1.5 bg-[#004c8f]" />
        </div>
        <span className="font-extrabold">HDFC Bank</span>
      </div>
    ),
  },
  {
    name: "Tech Mahindra",
    category: "Digital Transformation & Telecom",
    logo: (
      <div className="flex items-center gap-1 text-[#e31837] font-bold text-sm">
        <span className="text-slate-900 font-bold">Tech</span>
        <span className="text-[#e31837] font-extrabold">Mahindra</span>
      </div>
    ),
  },
  {
    name: "Wipro",
    category: "Global IT Services",
    logo: (
      <div className="flex items-center gap-1 text-[#425563] font-bold text-base">
        <span>wipro</span>
        <div className="flex gap-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f48024]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#a3c639]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#009fda]" />
        </div>
      </div>
    ),
  },
  {
    name: "Cognizant",
    category: "Digital Business Technology",
    logo: (
      <div className="font-extrabold text-base text-[#0033a0] tracking-tight">
        <span>Cognizant</span>
      </div>
    ),
  },
  {
    name: "Accenture",
    category: "Strategy & Technology Consulting",
    logo: (
      <div className="flex items-center text-slate-900 font-bold text-base tracking-tight">
        <span>accenture</span>
        <span className="text-[#a100ff] font-black text-lg ml-0.5 leading-none">&gt;</span>
      </div>
    ),
  },
  {
    name: "PwC",
    category: "Big 4 Global Advisory",
    logo: (
      <div className="flex items-center gap-1 font-bold text-base text-slate-900">
        <span className="font-extrabold">pwc</span>
        <span className="w-2 h-2 bg-[#dc143c] rounded-xs" />
      </div>
    ),
  },
  {
    name: "Morgan Stanley",
    category: "Global Wealth Management",
    logo: (
      <div className="font-serif font-bold text-sm text-[#002f6c] tracking-tight">
        <span>Morgan Stanley</span>
      </div>
    ),
  },
  {
    name: "Reliance",
    category: "Energy & Retail Conglomerate",
    logo: (
      <div className="font-extrabold text-base text-[#c4161c] tracking-wider">
        <span>Reliance</span>
      </div>
    ),
  },
];

interface RecruitersMarqueeProps {
  className?: string;
  showHeading?: boolean;
}

export const RecruitersMarquee: React.FC<RecruitersMarqueeProps> = ({
  className = "",
  showHeading = true,
}) => {
  // Seamless loop requires duplicating the set of items
  const row1Repeated = [...ROW_1_RECRUITERS, ...ROW_1_RECRUITERS];
  const row2Repeated = [...ROW_2_RECRUITERS, ...ROW_2_RECRUITERS];

  return (
    <section
      className={`relative py-16 sm:py-20 bg-[#faf8f5] border-t border-b border-[#eee6d8] overflow-hidden ${className}`}
    >
      {showHeading && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
          {/* Subtle Golden Wing Badge */}
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#c89650]/60" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#0c363b] uppercase font-sans">
              CORPORATE PARTNERSHIPS
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#c89650]/60" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c363b] mb-3">
            Our Esteemed Recruiting Partners
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Leading global enterprises, multinational consultancies, and financial giants recruit from Matrix School of Management Studies year after year.
          </p>
        </div>
      )}

      {/* Marquee Container with Left & Right Gradient Vignette Overlays */}
      <div className="relative w-full space-y-4 sm:space-y-5 overflow-hidden py-2">
        {/* Left Gradient Fade Vignette */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-28 lg:w-44 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/90 to-transparent z-20" />

        {/* Right Gradient Fade Vignette */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-28 lg:w-44 bg-gradient-to-l from-[#faf8f5] via-[#faf8f5]/90 to-transparent z-20" />

        {/* Row 1: Marquee moving Left */}
        <div className="relative w-full overflow-hidden group">
          <div className="animate-marquee-left flex items-center gap-3.5 sm:gap-6 will-change-transform">
            {row1Repeated.map((item, index) => (
              <div
                key={`row1-${item.name}-${index}`}
                className="shrink-0 w-[150px] sm:w-[190px] h-[64px] sm:h-[74px] bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-[#c89650] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center px-4 sm:px-5 cursor-pointer group/card"
                title={`${item.name} - ${item.category}`}
              >
                <div className="transform group-hover/card:scale-105 transition-transform duration-200">
                  {item.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Marquee moving Right (Opposite Direction) */}
        <div className="relative w-full overflow-hidden group">
          <div className="animate-marquee-right flex items-center gap-3.5 sm:gap-6 will-change-transform">
            {row2Repeated.map((item, index) => (
              <div
                key={`row2-${item.name}-${index}`}
                className="shrink-0 w-[150px] sm:w-[190px] h-[64px] sm:h-[74px] bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-[#c89650] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center px-4 sm:px-5 cursor-pointer group/card"
                title={`${item.name} - ${item.category}`}
              >
                <div className="transform group-hover/card:scale-105 transition-transform duration-200">
                  {item.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Placement Highlights Pill */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white/90 border border-[#e8d5be] px-5 sm:px-7 py-2.5 rounded-full text-xs font-semibold text-[#0c363b] shadow-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c89650]" />
            150+ Corporate Partners
          </span>
          <span className="text-[#c89650] hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c89650]" />
            Highest Package ₹24 LPA
          </span>
          <span className="text-[#c89650] hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c89650]" />
            98% Placement Record
          </span>
        </div>
      </div>
    </section>
  );
};
