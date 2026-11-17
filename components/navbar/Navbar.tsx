"use client";

import React, { useState } from "react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#4A0E1B] text-white shadow-md border-b border-[#3D0A14]/40 select-none">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[58px] sm:h-[64px]">
          {/* Left: Brand Logo & Insignia */}
          <div className="flex-shrink-0 flex items-center">
            <BrandLogo />
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <NavLinks />
          </div>

          {/* Right: Actions (Apply Now, Search, Bag, Hamburger) */}
          <div className="flex-shrink-0 flex items-center">
            <NavActions
              isMobileMenuOpen={isMobileMenuOpen}
              onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
export default Navbar;
