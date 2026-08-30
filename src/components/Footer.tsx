import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { eventConfig } from "../data/config";
import { secretariatMembers } from "../data/leadership";
import logoImage from "../assets/Niti_Nayak_Logo.jpeg";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#C8A45D]/20 bg-[#05070E] pb-12 pt-16 text-[#F2EBDD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-[#C8A45D]/15 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="NITI NAYAK official logo" className="h-12 w-12 rounded-full border border-[#C8A45D]/40 bg-[#10162B] object-cover" />
              <div>
                <span className="font-serif-editorial text-2xl font-bold tracking-wider text-[#F2EBDD] block leading-none">NITI NAYAK</span>
                <span className="text-[10px] font-sans-ui tracking-[0.25em] text-[#C8A45D] uppercase">Youth Summit 2026</span>
              </div>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-[#D8C8A8]/80">
              NITI NAYAK Youth Summit 2026 is a premier national platform for policy deliberations, parliamentary debate, diplomatic simulations, and ethical leadership.
            </p>
            <p className="text-xs font-semibold text-[#C8A45D]">{eventConfig.tagline}</p>
            <div className="flex items-center gap-2 pt-2 text-xs font-sans-ui text-[#D8C8A8]">
              <InstagramIcon className="w-4 h-4 text-[#C8A45D]" />
              <span>Instagram: <strong>{eventConfig.socialHandle}</strong></span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-4 text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase">Quick navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans-ui text-[#F2EBDD]/70">
              <Link to="/" className="hover:text-[#C8A45D] transition-colors">Home</Link>
              <Link to="/about" className="hover:text-[#C8A45D] transition-colors">About</Link>
              <Link to="/committees" className="hover:text-[#C8A45D] transition-colors">Committees</Link>
              <Link to="/agendas" className="hover:text-[#C8A45D] transition-colors">Agendas</Link>
              <Link to="/experience" className="hover:text-[#C8A45D] transition-colors">Experience</Link>
              <Link to="/awards" className="hover:text-[#C8A45D] transition-colors">Awards</Link>
              <Link to="/registration" className="hover:text-[#C8A45D] transition-colors">Registration</Link>
              <Link to="/delegation" className="hover:text-[#C8A45D] transition-colors">Delegation Policy</Link>
              <Link to="/secretariat" className="hover:text-[#C8A45D] transition-colors">Secretariat</Link>
              <Link to="/faq" className="hover:text-[#C8A45D] transition-colors">FAQ</Link>
              <Link to="/contact" className="hover:text-[#C8A45D] transition-colors">Contact</Link>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-4">
            <h4 className="mb-4 text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase">Organising Secretariat</h4>
            <p className="text-xs font-sans-ui text-[#F2EBDD]/80"><strong>Dates:</strong> {eventConfig.dates}</p>
            <p className="text-xs font-sans-ui text-[#F2EBDD]/80"><strong>Venue:</strong> {eventConfig.venue}</p>

            <div className="space-y-2 pt-2 text-xs font-sans-ui text-[#F2EBDD]/70">
              {secretariatMembers.map((member) => (
                <div key={member.name} className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#C8A45D] shrink-0" />
                  <span><strong>{member.name}</strong> ({member.role}): {member.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs font-sans-ui text-[#F2EBDD]/50 sm:flex-row">
          <p>© 2026 NITI NAYAK Youth Summit. All Rights Reserved.</p>
          <p>{eventConfig.collaboration}</p>
        </div>
      </div>
    </footer>
  );
};
