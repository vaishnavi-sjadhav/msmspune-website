import React from "react";
import { MapPin, Mail } from "lucide-react";
import { TOP_BAR_DATA } from "@/data/navigation";
import { SocialIcons } from "@/components/ui/SocialIcons";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#0c363b] text-white py-1.5 border-b border-[#124d54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
        {/* Left: Location & Email */}
        <div className="flex items-center space-x-2.5 sm:space-x-4 min-w-0">
          <div className="flex items-center space-x-1.5 text-gray-200 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#c89650]" />
            <span className="font-medium tracking-wide text-[11px] sm:text-xs">
              {TOP_BAR_DATA.location}
            </span>
          </div>

          <span className="hidden sm:inline text-gray-400 select-none">|</span>

          <a
            href={`mailto:${TOP_BAR_DATA.email}`}
            className="hidden sm:flex items-center space-x-1.5 text-gray-200 hover:text-[#e2b774] transition truncate text-[11px] sm:text-xs"
          >
            <Mail className="w-3.5 h-3.5 text-[#c89650] shrink-0" />
            <span className="font-medium tracking-wide truncate">{TOP_BAR_DATA.email}</span>
          </a>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
          <SocialIcons variant="topbar" />
        </div>
      </div>
    </div>
  );
};
