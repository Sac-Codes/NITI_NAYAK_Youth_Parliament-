import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { eventConfig } from "../data/config";
import logoImage from "../assets/Niti_Nayak_Logo.jpeg";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "COMMITTEES", href: "/committees" },
    { name: "AGENDAS", href: "/agendas" },
    { name: "EXPERIENCE", href: "/experience" },
    { name: "AWARDS", href: "/awards" },
  ];

  const moreLinks = [
    { name: "Delegation Policy", href: "/delegation" },
    { name: "Secretariat", href: "/secretariat" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#080B16]/90 backdrop-blur-md border-b border-[#C8A45D]/20 py-3 shadow-xl" : "bg-transparent py-5"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="NITI NAYAK home page">
            <img src={logoImage} alt="NITI NAYAK official logo" className="h-12 w-12 rounded-full border border-[#C8A45D]/40 bg-[#10162B] object-cover shadow-lg shadow-[#C8A45D]/10" />
            <div className="flex flex-col">
              <span className="font-serif-editorial text-lg tracking-wider text-[#F2EBDD] font-semibold leading-none group-hover:text-[#C8A45D] transition-colors">NITI NAYAK</span>
              <span className="mt-0.5 text-[10px] font-sans-ui tracking-[0.25em] text-[#C8A45D] uppercase">Youth Summit 2026</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => `relative py-1 text-xs font-sans-ui font-medium tracking-[0.2em] uppercase transition-colors ${isActive ? "text-[#C8A45D]" : "text-[#F2EBDD]/80 hover:text-[#C8A45D]"}`}
              >
                {({ isActive }) => (
                  <span className="relative flex items-center gap-2">
                    {link.name}
                    {isActive ? <span className="absolute -bottom-2 left-0 h-px w-full bg-[#C8A45D]" /> : null}
                  </span>
                )}
              </NavLink>
            ))}
            <div className="group relative">
              <button className="flex items-center gap-2 text-xs font-sans-ui font-medium tracking-[0.2em] uppercase text-[#F2EBDD]/80 hover:text-[#C8A45D]">
                MORE <ChevronRight className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute right-0 top-full mt-3 min-w-48 rounded-xl border border-[#C8A45D]/20 bg-[#080B16]/95 p-3 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
                {moreLinks.map((item) => (
                  <NavLink key={item.name} to={item.href} className="block rounded px-3 py-2 text-xs font-sans-ui tracking-[0.18em] uppercase text-[#F2EBDD]/80 hover:bg-[#10162B] hover:text-[#C8A45D]">
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={eventConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-[#C8A45D] px-5 py-2.5 text-xs font-sans-ui font-semibold tracking-[0.2em] uppercase text-[#080B16] shadow-md shadow-[#C8A45D]/10 transition-all hover:bg-[#D8C8A8]"
            >
              Register
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-[#F2EBDD] hover:text-[#C8A45D] focus:outline-none" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-[#080B16] px-6 py-20 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-6 mt-6">
            <span className="border-b border-[#C8A45D]/20 pb-2 text-xs font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Navigation Menu</span>
            {[...navLinks, ...moreLinks].map((link) => (
              <NavLink key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `font-serif-editorial text-2xl ${isActive ? "text-[#C8A45D]" : "text-[#F2EBDD] hover:text-[#C8A45D]"} transition-colors flex items-center justify-between`}>
                <span>{link.name}</span>
                <ChevronRight className="h-5 w-5 text-[#C8A45D]/40" />
              </NavLink>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[#C8A45D]/20 pt-6">
            <a
              href={eventConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded bg-[#C8A45D] py-3 text-center text-xs font-sans-ui font-semibold tracking-[0.2em] uppercase text-[#080B16]"
            >
              Register Now
            </a>
            <p className="text-center text-[11px] font-sans-ui text-[#F2EBDD]/60">{eventConfig.dates} • {eventConfig.venue}</p>
          </div>
        </div>
      )}
    </>
  );
};
