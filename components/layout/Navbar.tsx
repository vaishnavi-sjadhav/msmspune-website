"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { MAIN_NAVIGATION } from "@/data/navigation";

interface NavbarProps {
  onOpenEnquiry?: () => void;
  variant?: "default" | "hero-glass";
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Check scroll on homepage for floating transparent -> frosted dark teal transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Determine if a navigation link is currently active
  const isItemActive = (href: string) => {
    if (href === "/") {
      return isHomePage;
    }
    if (href.startsWith("/#")) {
      return false;
    }
    const basePath = href.split("#")[0];
    return pathname.startsWith(basePath);
  };

  // Header classes: floating transparent on top of homepage hero, solid frosted dark teal everywhere else
  const headerClasses = isHomePage
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#062024]/95 backdrop-blur-md shadow-2xl border-b border-[#ebb14e]/30 py-3"
          : "bg-transparent py-4 sm:py-6"
      }`
    : "sticky top-0 z-50 bg-[#062024]/95 backdrop-blur-md shadow-2xl border-b border-[#ebb14e]/30 py-3 transition-all duration-200";

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo with Gold Crest */}
          <div className="flex items-center">
            <Link href="/" className="inline-flex items-center gap-3 group">
              {/* Gold Crest Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#ebb14e] via-[#c89650] to-[#996c2e] p-[1.5px] shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-[#062024] flex items-center justify-center border border-[#ebb14e]/60">
                  <span className="font-serif font-black text-xs sm:text-sm text-[#ebb14e] tracking-tighter">
                    MS
                  </span>
                </div>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide leading-none group-hover:text-[#ebb14e] transition-colors">
                  MATRIX
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-white/80 tracking-[0.22em] uppercase pt-0.5">
                  School of Management Studies
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links in Frosted Glass Container */}
          <div className="hidden lg:flex items-center">
            <div className="bg-black/35 hover:bg-black/45 backdrop-blur-md border border-white/20 rounded-full pl-6 pr-2 py-1.5 flex items-center space-x-6 xl:space-x-8 text-[13.5px] font-medium text-white shadow-xl transition-all">
              <nav className="flex items-center space-x-6 xl:space-x-7">
                {MAIN_NAVIGATION.map((item) => {
                  const active = isItemActive(item.href);
                  return (
                    <div
                      key={item.label}
                      className="relative group py-1"
                      onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                      onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className={`relative inline-flex items-center gap-1 transition-colors duration-150 py-1 ${
                          active
                            ? "text-[#ebb14e] font-bold"
                            : "text-white/85 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              active
                                ? "text-[#ebb14e]"
                                : "text-white/70 group-hover:text-white"
                            } group-hover:rotate-180`}
                          />
                        )}
                        {/* Active gold underline indicator pill */}
                        {active && (
                          <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#ebb14e] rounded-full shadow-[0_0_8px_#ebb14e]" />
                        )}
                      </Link>

                      {/* Dropdown Menu */}
                      {item.hasDropdown && item.children && (
                        <div
                          className={`absolute top-full left-0 w-64 bg-[#062024]/98 backdrop-blur-md rounded-xl shadow-2xl border border-[#ebb14e]/30 py-2.5 transition-all duration-200 transform z-50 ${
                            activeDropdown === item.label
                              ? "opacity-100 visible translate-y-2"
                              : "opacity-0 invisible -translate-y-2 pointer-events-none"
                          }`}
                        >
                          {item.children.map((sub) => {
                            const isSubActive =
                              pathname === sub.href.split("#")[0];
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className={`block px-4 py-2 text-xs font-medium transition-all ${
                                  isSubActive
                                    ? "text-[#ebb14e] font-semibold bg-[#ebb14e]/10 pl-5"
                                    : "text-slate-200 hover:bg-[#ebb14e]/10 hover:text-[#ebb14e] hover:pl-5"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Apply Online Pill Button */}
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="bg-[#ebb14e] hover:bg-[#dfa037] text-slate-950 font-bold text-xs uppercase px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="bg-[#ebb14e] hover:bg-[#dfa037] text-slate-950 text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-2 rounded-full flex items-center gap-1 shadow-md uppercase tracking-wider whitespace-nowrap active:scale-95 transition-transform"
            >
              <span>Apply Online</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none text-white hover:bg-white/10 active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto border-b bg-[#062024]/98 backdrop-blur-md border-[#ebb14e]/30 text-white shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {MAIN_NAVIGATION.map((item) => {
            const active = isItemActive(item.href);
            return (
              <div key={item.label} className="border-b border-white/10 pb-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                    className={`text-sm font-medium py-2 block ${
                      active ? "text-[#ebb14e] font-bold pl-2 border-l-2 border-[#ebb14e]" : "text-white/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className="p-1 text-gray-400"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.hasDropdown && activeDropdown === item.label && item.children && (
                  <div className="pl-4 py-1 space-y-1 rounded-md bg-white/5">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-xs text-slate-300 hover:text-[#ebb14e]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry?.();
              }}
              className="w-full bg-[#ebb14e] text-slate-950 text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-1.5 shadow-md uppercase tracking-wider"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
