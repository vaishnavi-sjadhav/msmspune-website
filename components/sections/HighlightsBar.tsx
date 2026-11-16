import React from "react";
import { GraduationCap, Users, Trophy, Handshake } from "lucide-react";
import { HIGHLIGHTS_DATA } from "@/data/highlights";

export const HighlightsBar: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#b5883d] stroke-[1.5]" />;
      case "development":
        return <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#b5883d] stroke-[1.5]" />;
      case "industry":
        return <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-[#b5883d] stroke-[1.5]" />;
      case "career":
        return <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-[#b5883d] stroke-[1.5]" />;
      default:
        return <GraduationCap className="w-6 h-6 text-[#b5883d] stroke-[1.5]" />;
    }
  };

  return (
    <section className="bg-[#f7f3ec] border-y border-[#e5dccb] py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#dfd5c2]">
          {HIGHLIGHTS_DATA.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-center gap-3 px-3 py-3 md:py-1 text-center sm:text-left transition-colors duration-200 hover:bg-[#efe8dc]/40 rounded-lg ${
                index % 2 === 0 ? "border-r md:border-r-0 border-[#dfd5c2]" : ""
              }`}
            >
              <div className="shrink-0">{getIcon(item.icon)}</div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
