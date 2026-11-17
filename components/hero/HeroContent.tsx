import React from "react";
import { HeroActions } from "./HeroActions";
import { HERO_CONTENT } from "@/constants/navigation";

interface HeroContentProps {
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  onExploreVideo?: () => void;
}

export function HeroContent({
  titleLine1 = HERO_CONTENT.titleLine1,
  titleLine2 = HERO_CONTENT.titleLine2,
  description = HERO_CONTENT.description,
  onExploreVideo,
}: HeroContentProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto z-10 space-y-4 sm:space-y-6">
      {/* Editorial Main Title */}
      <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] font-bold text-white leading-[1.1] sm:leading-[1.08] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
        <span className="block text-white">{titleLine1}</span>
        <span className="block mt-1 bg-gradient-to-r from-[#FAF3E8] via-[#F3E5D0] to-[#E0BA85] bg-clip-text text-transparent">
          {titleLine2}
        </span>
      </h1>

      {/* Narrative Subtitle */}
      <p className="text-sm sm:text-base md:text-[18px] text-white/95 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
        {description}
      </p>

      {/* CTA Action Buttons */}
      <div className="pt-3 flex justify-center w-full">
        <HeroActions onExploreVideo={onExploreVideo} />
      </div>
    </div>
  );
}

export default HeroContent;
