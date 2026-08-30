import React from "react";
import { secretariatMembers } from "../data/leadership";
import { Phone, Shield, MessageSquare } from "lucide-react";

export const Secretariat: React.FC = () => {
  return (
    <section className="py-24 bg-[#080B16] text-[#F2EBDD] relative overflow-hidden border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
            CONFERENCE LEADERSHIP
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            THE SECRETARIAT
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2 max-w-2xl">
            Meet the leadership coordinating NITI NAYAK Youth Summit 2026.
          </p>
          <div className="w-24 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {secretariatMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-[#10162B] border border-[#C8A45D]/30 hover:border-[#C8A45D] transition-all duration-300 flex flex-col items-center text-center group shadow-xl"
            >
              {/* Typographic Emblem */}
              <div className="w-24 h-24 rounded-full bg-[#080B16] border-2 border-[#C8A45D] flex items-center justify-center text-[#C8A45D] font-serif-editorial text-3xl font-bold mb-6 shadow-md group-hover:scale-105 transition-transform">
                {member.initials}
              </div>

              <span className="text-[10px] font-sans-ui font-bold tracking-widest text-[#C8A45D] uppercase mb-1 flex items-center gap-1">
                <Shield className="w-3 h-3" /> ORGANISING SECRETARIAT
              </span>

              <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD] mb-1">
                {member.name}
              </h3>

              <p className="font-sans-ui text-xs font-semibold text-[#D8C8A8] mb-6">
                {member.role}
              </p>

              <div className="flex flex-col sm:flex-row gap-2 w-full pt-4 border-t border-[#C8A45D]/15">
                <a
                  href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#080B16] border border-[#C8A45D]/30 text-xs font-sans-ui text-[#F2EBDD]/90 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#C8A45D]" />
                  <span>{member.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-xs font-sans-ui text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  aria-label={`WhatsApp ${member.name}`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
