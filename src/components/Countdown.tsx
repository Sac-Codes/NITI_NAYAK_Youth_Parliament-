import React, { useState, useEffect } from "react";
import { eventConfig } from "../data/config";
import { Clock, Calendar } from "lucide-react";

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasBegun: false,
  });

  useEffect(() => {
    const target = new Date(eventConfig.startDateISO).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, hasBegun: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, hasBegun: false });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-16 bg-[#10162B] border-y border-[#C8A45D]/20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C8A45D_1px,transparent_1px)] [bg-size:16px_16px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Parliamentary Clock Header */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#C8A45D]/30 bg-[#080B16]">
          <Clock className="w-4 h-4 text-[#C8A45D]" />
          <span className="text-xs font-sans-ui font-semibold tracking-[0.25em] text-[#C8A45D] uppercase">
            PARLIAMENTARY TIMER
          </span>
        </div>

        <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F2EBDD] font-medium tracking-wide mb-10">
          THE SUMMIT BEGINS IN
        </h3>

        {timeLeft.hasBegun ? (
          <div className="py-8 text-[#C8A45D] font-serif-editorial text-4xl sm:text-5xl font-bold tracking-wider">
            THE SUMMIT HAS BEGUN
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {/* Days */}
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#080B16]/90 border border-[#C8A45D]/30 shadow-lg relative group">
              <span className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F2EBDD] group-hover:text-[#C8A45D] transition-colors">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-sans-ui font-semibold tracking-[0.2em] text-[#C8A45D] uppercase mt-2">
                DAYS
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#080B16]/90 border border-[#C8A45D]/30 shadow-lg relative group">
              <span className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F2EBDD] group-hover:text-[#C8A45D] transition-colors">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-sans-ui font-semibold tracking-[0.2em] text-[#C8A45D] uppercase mt-2">
                HOURS
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#080B16]/90 border border-[#C8A45D]/30 shadow-lg relative group">
              <span className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F2EBDD] group-hover:text-[#C8A45D] transition-colors">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-sans-ui font-semibold tracking-[0.2em] text-[#C8A45D] uppercase mt-2">
                MINUTES
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#080B16]/90 border border-[#C8A45D]/30 shadow-lg relative group">
              <span className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-bold text-[#C8A45D] transition-colors">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-sans-ui font-semibold tracking-[0.2em] text-[#D8C8A8] uppercase mt-2">
                SECONDS
              </span>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-sans-ui text-[#F2EBDD]/60">
          <Calendar className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span>Official Event Date: 29–30 August 2026</span>
        </div>
      </div>
    </section>
  );
};
