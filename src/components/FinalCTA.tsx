import React from "react";
import { eventConfig } from "../data/config";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onRegisterClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-32 bg-[#080B16] text-[#F2EBDD] relative overflow-hidden text-center border-t border-[#C8A45D]/30">
      {/* Background Architectural Layer */}
      <div
        className="absolute inset-0 opacity-15 bg-center bg-cover bg-no-repeat pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url('/assets/parliament_hero.png')` }}
      />

      {/* Gold Glow Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8A45D]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase">
          {eventConfig.name} {eventConfig.edition}
        </span>

        <h2 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#F2EBDD] leading-none">
          YOUR VOICE. <br />
          <span className="text-[#C8A45D]">YOUR IDEAS.</span> <br />
          YOUR IMPACT.
        </h2>

        <p className="font-sans-ui text-sm sm:text-base font-semibold tracking-widest text-[#D8C8A8] uppercase">
          📅 {eventConfig.dates}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-10 py-4 rounded text-xs font-sans-ui font-bold tracking-[0.2em] text-[#080B16] bg-gradient-to-r from-[#C8A45D] via-[#D8C8A8] to-[#C8A45D] hover:shadow-xl hover:shadow-[#C8A45D]/25 transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="/committees"
            className="w-full sm:w-auto px-8 py-4 rounded text-xs font-sans-ui font-semibold tracking-[0.2em] text-[#F2EBDD] border border-[#C8A45D]/40 bg-[#10162B]/80 hover:bg-[#10162B] hover:border-[#C8A45D] transition-colors"
          >
            EXPLORE COMMITTEES
          </a>
        </div>
      </div>
    </section>
  );
};
