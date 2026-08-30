import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { eventConfig } from "../data/config";
import logoImage from "../assets/Niti_Nayak_Logo.jpeg";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#080B16] px-4 pb-12 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20 mix-blend-screen" style={{ backgroundImage: `url('/assets/parliament_hero.png')` }} />
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A45D]/10 blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c8a45d08_1px,transparent_1px),linear-gradient(to_bottom,#c8a45d08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#10162B]/80 px-4 py-1.5 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#C8A45D]" />
          <span className="text-xs font-sans-ui font-semibold tracking-[0.25em] uppercase text-[#C8A45D]">NITI NAYAK PRESENTS</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="mb-5 flex items-center justify-center">
          <img src={logoImage} alt="NITI NAYAK official logo" className="h-28 w-28 rounded-full border border-[#C8A45D]/40 bg-[#10162B] object-cover shadow-2xl shadow-[#C8A45D]/10 sm:h-36 sm:w-36" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.45 }} className="mb-3 font-serif-editorial text-6xl font-bold leading-none tracking-tight text-[#F2EBDD] sm:text-7xl md:text-8xl lg:text-9xl">NITI NAYAK</motion.h1>

        <motion.div initial={{ width: 0 }} animate={{ width: "160px" }} transition={{ duration: 0.8, delay: 0.6 }} className="my-4 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />

        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="mb-6 font-serif-editorial text-2xl font-medium italic tracking-wide text-[#D8C8A8] sm:text-3xl md:text-4xl">YOUTH SUMMIT 2026</motion.h2>

        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mb-8 max-w-2xl text-sm font-sans-ui font-medium tracking-[0.2em] uppercase text-[#C8A45D] sm:text-base md:text-lg">
          {eventConfig.tagline}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="mb-10 flex w-full max-w-xl flex-col items-center justify-center gap-3 border-y border-[#C8A45D]/20 bg-[#10162B]/40 px-6 py-3 text-xs font-sans-ui text-[#F2EBDD]/80 sm:flex-row sm:text-sm">
          <span className="font-bold uppercase tracking-[0.2em] text-[#F2EBDD]">{eventConfig.dates}</span>
          <span className="hidden text-[#C8A45D] sm:inline">•</span>
          <span className="italic text-[#D8C8A8]">{eventConfig.backedBy}</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href={eventConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded px-8 py-4 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#080B16] bg-gradient-to-r from-[#C8A45D] via-[#D8C8A8] to-[#C8A45D] transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A45D]/25 sm:w-auto"
          >
            <span>Register now</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <Link to="/committees" className="w-full rounded border border-[#C8A45D]/40 bg-[#10162B]/60 px-8 py-4 text-center text-xs font-sans-ui font-semibold tracking-[0.2em] uppercase text-[#F2EBDD] transition-all duration-300 hover:border-[#C8A45D] hover:bg-[#10162B] sm:w-auto">Explore Committees</Link>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="relative z-10 mt-12 flex flex-col items-center gap-2 text-[#C8A45D]/70 transition-colors hover:text-[#C8A45D]">
        <a href="#countdown" className="flex flex-col items-center gap-1 focus:outline-none">
          <span className="text-[10px] font-sans-ui tracking-[0.3em] uppercase">Scroll to discover</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
