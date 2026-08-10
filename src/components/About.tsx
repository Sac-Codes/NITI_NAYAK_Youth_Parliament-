import React from "react";
import { BookOpen, Scale, Award } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F2EBDD] text-[#242424] relative overflow-hidden theme-light-editorial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-b border-[#242424]/15 pb-6">
          <span className="text-xs font-sans-ui font-bold tracking-[0.25em] text-[#A9432B] uppercase mb-2">
            STATEMENT OF PURPOSE
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#242424]">
            WHERE IDEAS MEET IMPACT
          </h2>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bold Typography Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div className="border-l-2 border-[#A9432B] pl-6 py-2">
              <p className="font-serif-editorial text-2xl sm:text-3xl italic text-[#242424] leading-snug">
                "Democracy thrives not when opinions are echoed, but when perspectives are deliberated, questioned, and refined."
              </p>
            </div>

            <div className="p-6 bg-[#D8C8A8]/40 border border-[#242424]/10 rounded">
              <div className="flex items-center gap-3 mb-3 text-[#A9432B]">
                <Scale className="w-5 h-5" />
                <span className="text-xs font-sans-ui font-bold tracking-widest uppercase">
                  Institutional Mandate
                </span>
              </div>
              <p className="font-sans-ui text-xs text-[#242424]/80 leading-relaxed">
                NITI NAYAK Youth Summit 2026 is organised in academic collaboration with the <strong>Discussion and Debating Society, Faculty of Law</strong>, upholding authentic parliamentary standards and rigorous adjudication.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Paragraphs & Card Highlights */}
          <div className="lg:col-span-7 space-y-6 font-sans-ui text-sm md:text-base text-[#242424]/90 leading-relaxed">
            <p className="text-base sm:text-lg font-medium text-[#242424]">
              NITI NAYAK Youth Summit 2026 is a flagship platform dedicated to empowering the next generation of leaders, thinkers, policymakers, and changemakers across India.
            </p>

            <p>
              The summit brings together young minds to engage deeply with public policy, governance, diplomacy, parliamentary debate, critical thinking, legal reasoning, communication, negotiation, and collaborative problem-solving.
            </p>

            <p>
              The objective is not simply to debate ideas, but to encourage young people to understand complex systemic issues, defend their perspectives with evidence, listen carefully to opposing viewpoints, negotiate sustainable solutions, and develop the confidence to become responsible future leaders.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#242424]/15">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#A9432B]/10 text-[#A9432B]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-editorial text-lg font-bold text-[#242424]">Policy Rigor</h4>
                  <p className="text-xs text-[#242424]/75">Substantive agendas covering AI regulation, economy, human rights, and education.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#A9432B]/10 text-[#A9432B]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-editorial text-lg font-bold text-[#242424]">Leadership Growth</h4>
                  <p className="text-xs text-[#242424]/75">Certificates signed by eminent professors and political dignitaries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
