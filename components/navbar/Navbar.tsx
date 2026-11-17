"use client";

import React, { useState, useCallback } from "react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#3D0C16] text-[#FAF3E8] shadow-lg border-b border-[#C69A60]/25 select-none transition-all">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px] sm:h-[70px] gap-2">
            {/* Left: Brand Logo & Insignia */}
            <div className="flex-shrink-0 flex items-center">
              <BrandLogo />
            </div>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-4 xl:px-6">
              <NavLinks />
            </div>

            {/* Right: Actions (Helpline, Apply Now, Search, Hamburger) */}
            <div className="flex-shrink-0 flex items-center">
              <NavActions
                isMobileMenuOpen={isMobileMenuOpen}
                onToggleMobileMenu={handleToggleMobileMenu}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu rendered outside header to avoid stacking/clipping issues */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </>
  );
}

export default Navbar;
