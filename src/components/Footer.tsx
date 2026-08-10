import React from "react";
import { Landmark, Phone } from "lucide-react";
import { eventConfig } from "../data/config";
import { secretariatMembers } from "../data/leadership";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070E] text-[#F2EBDD] border-t border-[#C8A45D]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#C8A45D]/15">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A45D]/40 bg-[#10162B] flex items-center justify-center text-[#C8A45D]">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="font-serif-editorial text-2xl font-bold tracking-wider text-[#F2EBDD]">
                NITI NAYAK
              </span>
            </div>

            <p className="font-sans-ui text-xs text-[#D8C8A8]/80 leading-relaxed max-w-sm">
              NITI NAYAK Youth Summit 2026 is a flagship youth parliament platform for parliamentary debate, public policy analysis, diplomacy, governance, and ethical leadership.
            </p>

            <p className="font-sans-ui text-xs font-semibold text-[#C8A45D]">
              {eventConfig.tagline}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-sans-ui font-bold tracking-widest text-[#C8A45D] uppercase mb-4">
              QUICK NAVIGATION
            </h4>

            <div className="grid grid-cols-2 gap-2 text-xs font-sans-ui text-[#F2EBDD]/70">
              <a href="#hero" className="hover:text-[#C8A45D] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#C8A45D] transition-colors">About Summit</a>
              <a href="#committees" className="hover:text-[#C8A45D] transition-colors">Committees</a>
              <a href="#agendas" className="hover:text-[#C8A45D] transition-colors">Policy Agendas</a>
              <a href="#experience" className="hover:text-[#C8A45D] transition-colors">Experience</a>
              <a href="#awards" className="hover:text-[#C8A45D] transition-colors">Awards & Scoring</a>
              <a href="#delegation" className="hover:text-[#C8A45D] transition-colors">Delegation Policy</a>
              <a href="#contact" className="hover:text-[#C8A45D] transition-colors">Contact</a>
            </div>
          </div>

          {/* Secretariat Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-sans-ui font-bold tracking-widest text-[#C8A45D] uppercase mb-4">
              ORGANISING SECRETARIAT
            </h4>

            <p className="text-xs font-sans-ui text-[#F2EBDD]/80">
              📅 <strong>Date:</strong> {eventConfig.dates}
            </p>
            <p className="text-xs font-sans-ui text-[#F2EBDD]/80">
              📍 <strong>Venue:</strong> {eventConfig.venue}
            </p>

            <div className="pt-2 space-y-1.5 text-xs font-sans-ui text-[#F2EBDD]/70">
              {secretariatMembers.map((m, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-[#C8A45D]" />
                  <span>
                    <strong>{m.name}</strong> ({m.role}): {m.phone}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-ui text-[#F2EBDD]/50">
          <p>© 2026 NITI NAYAK Youth Summit. All Rights Reserved.</p>
          <p>{eventConfig.collaboration}</p>
        </div>
      </div>
    </footer>
  );
};
