import React from "react";
import { founderMessage, secretariatMessage } from "../data/leadership";
import { Quote, Feather, Award } from "lucide-react";

export const Messages: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2EBDD] text-[#242424] relative overflow-hidden theme-light-editorial border-t border-[#242424]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Founder's Desk Message */}
        <div className="p-8 lg:p-12 bg-[#D8C8A8]/40 border border-[#242424]/20 rounded-xl shadow-xl relative editorial-border">
          <div className="flex items-center gap-3 border-b border-[#242424]/15 pb-4 mb-8">
            <Feather className="w-6 h-6 text-[#A9432B]" />
            <div>
              <span className="text-[10px] font-sans-ui font-bold tracking-[0.25em] text-[#A9432B] uppercase">
                OFFICIAL ADDRESS
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#242424]">
                {founderMessage.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Quote Left */}
            <div className="lg:col-span-4 border-l-2 border-[#A9432B] pl-4 py-2">
              <Quote className="w-8 h-8 text-[#A9432B]/40 mb-2" />
              <p className="font-serif-editorial text-xl italic text-[#242424]">
                "{founderMessage.quote}"
              </p>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-8 space-y-4 font-sans-ui text-xs sm:text-sm text-[#242424]/90 leading-relaxed">
              {founderMessage.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="pt-6 border-t border-[#242424]/15 flex flex-col items-start">
                <span className="font-serif-editorial text-xl font-bold text-[#242424]">
                  {founderMessage.author}
                </span>
                <span className="text-xs text-[#A9432B] font-semibold">
                  {founderMessage.designation}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secretariat Message */}
        <div className="p-8 lg:p-12 bg-[#D8C8A8]/20 border border-[#242424]/15 rounded-xl shadow-lg relative">
          <div className="flex items-center gap-3 border-b border-[#242424]/15 pb-4 mb-8">
            <Award className="w-6 h-6 text-[#A9432B]" />
            <div>
              <span className="text-[10px] font-sans-ui font-bold tracking-[0.25em] text-[#A9432B] uppercase">
                ORGANISING SECRETARIAT ADDRESS
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#242424]">
                {secretariatMessage.title}
              </h2>
            </div>
          </div>

          <div className="space-y-4 font-sans-ui text-xs sm:text-sm text-[#242424]/90 leading-relaxed">
            <p className="font-serif-editorial text-lg italic text-[#242424] font-medium border-l-2 border-[#242424] pl-4 py-1">
              "{secretariatMessage.quote}"
            </p>
            {secretariatMessage.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
