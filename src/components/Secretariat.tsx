import React from "react";
import { secretariatMembers } from "../data/leadership";
import { Phone, Shield } from "lucide-react";

export const Secretariat: React.FC = () => {
  return (
    <section className="py-24 bg-[#080B16] text-[#F2EBDD] relative overflow-hidden border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
            SUMMIT LEADERSHIP
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            THE SECRETARIAT
          </h2>
          <div className="w-24 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secretariatMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-[#10162B] border border-[#C8A45D]/30 hover:border-[#C8A45D] transition-all duration-300 flex flex-col items-center text-center group shadow-xl"
            >
              {/* Typographic Emblem Placeholder */}
              <div className="w-24 h-24 rounded-full bg-[#080B16] border-2 border-[#C8A45D] flex items-center justify-center text-[#C8A45D] font-serif-editorial text-3xl font-bold mb-6 shadow-md group-hover:scale-105 transition-transform">
                {member.initials}
              </div>

              <span className="text-[10px] font-sans-ui font-bold tracking-widest text-[#C8A45D] uppercase mb-1 flex items-center gap-1">
                <Shield className="w-3 h-3" /> ORGANISING COMMITTEE
              </span>

              <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD] mb-1">
                {member.name}
              </h3>

              <p className="font-sans-ui text-xs font-semibold text-[#D8C8A8] mb-6">
                {member.role}
              </p>

              <a
                href={`tel:${member.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#080B16] border border-[#C8A45D]/30 text-xs font-sans-ui text-[#F2EBDD]/90 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>{member.phone}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
