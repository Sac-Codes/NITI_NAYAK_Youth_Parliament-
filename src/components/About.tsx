import React from "react";
import { BookOpen, Scale, Compass, Users } from "lucide-react";
import { eventConfig } from "../data/config";

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
          {/* Left Column: Bold Typography Statement & Mandate */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div className="border-l-2 border-[#A9432B] pl-6 py-2">
              <p className="font-serif-editorial text-2xl sm:text-3xl italic text-[#242424] leading-snug">
                "Democracy thrives not when opinions are echoed, but when perspectives are deliberated, questioned, and refined into action."
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
                NITI NAYAK Youth Summit 2026 is {eventConfig.collaboration.toLowerCase()}, upholding authentic parliamentary procedure, academic depth, and authoritative adjudication.
              </p>
            </div>

            <div className="p-6 bg-[#fffaf1] border border-[#242424]/10 rounded">
              <div className="flex items-center gap-3 mb-3 text-[#A9432B]">
                <Compass className="w-5 h-5" />
                <span className="text-xs font-sans-ui font-bold tracking-widest uppercase">
                  The Stated Vision
                </span>
              </div>
              <p className="font-serif-editorial text-xl italic text-[#242424] leading-snug mb-2">
                Think critically. Speak fearlessly. Lead responsibly. Act with purpose.
              </p>
              <p className="font-sans-ui text-xs text-[#242424]/75">
                Empowering young citizens to contribute meaningfully toward a stronger, more inclusive, innovative, and progressive India.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Paragraphs & Subject Areas */}
          <div className="lg:col-span-7 space-y-6 font-sans-ui text-sm md:text-base text-[#242424]/90 leading-relaxed">
            <p className="text-base sm:text-lg font-medium text-[#242424]">
              NITI NAYAK Youth Summit 2026 is a premier national platform designed to empower the next generation of leaders, policymakers, diplomats, innovators, and changemakers.
            </p>

            <p>
              The summit brings together young minds from schools, colleges, and universities across the country. It is not positioned merely as a conventional youth conference, but as an immersive incubator combining policy deliberations, leadership simulations, diplomatic caucusing, interactive sessions, expert conversations, crisis simulations, and collaborative problem-solving.
            </p>

            <p>
              Every committee is structured to encourage participants to question conventional perspectives, defend ideas with rigorous evidence, understand diverse viewpoints, and work toward actionable, practical solutions across critical domains:
            </p>

            {/* Subject Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Governance",
                "Public Policy",
                "International Relations",
                "Economics & Growth",
                "Social Justice",
                "Technology & AI",
                "Sustainability",
                "Constitutional Values",
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 text-xs rounded bg-[#242424]/5 border border-[#242424]/15 font-sans-ui font-medium text-[#242424]"
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#242424]/15">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#A9432B]/10 text-[#A9432B]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-editorial text-lg font-bold text-[#242424]">Policy Rigour</h4>
                  <p className="text-xs text-[#242424]/75">Substantive agendas covering foreign policy, Article 356, FGM, conflict zones, and Mahabharat statecraft.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#A9432B]/10 text-[#A9432B]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-editorial text-lg font-bold text-[#242424]">21st-Century Skills</h4>
                  <p className="text-xs text-[#242424]/75">Master negotiation, diplomacy, teamwork, conflict resolution, and ethical leadership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
