import React, { useState, useEffect } from "react";
import { Menu, X, Landmark, ChevronRight } from "lucide-react";
import { eventConfig } from "../data/config";

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#hero" },
    { name: "ABOUT", href: "#about" },
    { name: "COMMITTEES", href: "#committees" },
    { name: "AGENDAS", href: "#agendas" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "AWARDS", href: "#awards" },
    { name: "DELEGATION", href: "#delegation" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080B16]/90 backdrop-blur-md border-b border-[#C8A45D]/20 py-3 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Crest */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-[#C8A45D]/40 bg-[#10162B] flex items-center justify-center text-[#C8A45D] group-hover:border-[#C8A45D] transition-colors">
              <Landmark className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-editorial text-lg tracking-wider text-[#F2EBDD] font-semibold leading-none group-hover:text-[#C8A45D] transition-colors">
                NITI NAYAK
              </span>
              <span className="text-[10px] font-sans-ui tracking-widest text-[#C8A45D] uppercase mt-0.5">
                Youth Summit 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sans-ui font-medium tracking-widest text-[#F2EBDD]/80 hover:text-[#C8A45D] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A45D] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onRegisterClick}
              className="px-5 py-2.5 rounded text-xs font-sans-ui font-semibold tracking-widest text-[#080B16] bg-gradient-to-r from-[#C8A45D] to-[#D8C8A8] hover:from-[#D8C8A8] hover:to-[#C8A45D] transition-all duration-300 shadow-md shadow-[#C8A45D]/10 hover:shadow-[#C8A45D]/20 active:scale-95"
            >
              REGISTER NOW
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F2EBDD] hover:text-[#C8A45D] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080B16] flex flex-col justify-between px-6 py-20 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-6 mt-6">
            <span className="text-xs font-sans-ui tracking-widest text-[#C8A45D] uppercase border-b border-[#C8A45D]/20 pb-2">
              Navigation Menu
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-editorial text-2xl text-[#F2EBDD] hover:text-[#C8A45D] transition-colors flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-5 h-5 text-[#C8A45D]/40 group-hover:text-[#C8A45D] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-[#C8A45D]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full py-3 text-center text-xs font-sans-ui font-semibold tracking-widest text-[#080B16] bg-[#C8A45D] hover:bg-[#D8C8A8] transition-colors rounded"
            >
              REGISTER NOW
            </button>
            <p className="text-[11px] text-center text-[#F2EBDD]/50 font-sans-ui">
              {eventConfig.dates} • {eventConfig.venue}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
