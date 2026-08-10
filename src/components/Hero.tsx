import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { eventConfig } from "../data/config";

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden bg-[#080B16] pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Architectural Layer */}
      <div
        className="absolute inset-0 opacity-20 bg-center bg-cover bg-no-repeat pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url('/assets/parliament_hero.png')` }}
      />

      {/* Radial Gold Lighting Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A45D]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Gold Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c8a45d08_1px,transparent_1px),linear-gradient(to_bottom,#c8a45d08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Empty Top Spacer for flex vertical balance */}
      <div className="w-full h-8" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A45D]/30 bg-[#10162B]/80 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span className="text-xs font-sans-ui font-semibold tracking-[0.25em] text-[#C8A45D] uppercase">
            NITI NAYAK PRESENTS
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif-editorial text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#F2EBDD] leading-none mb-3"
        >
          NITI NAYAK
        </motion.h1>

        {/* Animated Gold Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent my-4"
        />

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl italic text-[#D8C8A8] font-medium tracking-wide mb-6"
        >
          YOUTH SUMMIT 2026
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-sans-ui text-sm sm:text-base md:text-lg font-medium tracking-[0.2em] text-[#C8A45D] uppercase mb-8 max-w-2xl"
        >
          {eventConfig.tagline}
        </motion.p>

        {/* Date & Collaboration Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm font-sans-ui text-[#F2EBDD]/80 mb-10 border-t border-b border-[#C8A45D]/20 py-3 px-6 w-full max-w-xl bg-[#10162B]/40"
        >
          <span className="font-bold text-[#F2EBDD] tracking-widest uppercase">
            📅 {eventConfig.dates}
          </span>
          <span className="hidden sm:inline text-[#C8A45D]">•</span>
          <span className="text-[#D8C8A8] italic">
            Faculty of Law Collaboration
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-8 py-4 rounded text-xs font-sans-ui font-bold tracking-[0.2em] text-[#080B16] bg-gradient-to-r from-[#C8A45D] via-[#D8C8A8] to-[#C8A45D] hover:shadow-lg hover:shadow-[#C8A45D]/25 transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#committees"
            className="w-full sm:w-auto px-8 py-4 rounded text-xs font-sans-ui font-semibold tracking-[0.2em] text-[#F2EBDD] border border-[#C8A45D]/40 bg-[#10162B]/60 hover:bg-[#10162B] hover:border-[#C8A45D] transition-all duration-300 text-center"
          >
            EXPLORE COMMITTEES
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative z-10 flex flex-col items-center gap-2 mt-12 text-[#C8A45D]/70 hover:text-[#C8A45D] transition-colors"
      >
        <a href="#countdown" className="flex flex-col items-center gap-1 focus:outline-none">
          <span className="text-[10px] font-sans-ui tracking-[0.3em] uppercase">
            SCROLL TO DISCOVER
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
