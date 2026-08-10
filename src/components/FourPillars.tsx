import React from "react";
import { Lightbulb, Compass, MessagesSquare, Target } from "lucide-react";

export const FourPillars: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "IDEAS",
      subtitle: "Challenge assumptions. Explore possibilities.",
      description: "Intellectual courage to question status-quo policies and conceptualize groundbreaking solutions for society.",
      icon: Lightbulb,
    },
    {
      num: "02",
      title: "LEADERSHIP",
      subtitle: "Lead with responsibility and purpose.",
      description: "Cultivating legal acumen, ethical decision-making, and consensus building in times of technological shift.",
      icon: Compass,
    },
    {
      num: "03",
      title: "DEBATE",
      subtitle: "Question. Defend. Deliberate.",
      description: "Mastering parliamentary procedure, diplomatic rhetoric, and evidentiary rebuttal under intense scrutiny.",
      icon: MessagesSquare,
    },
    {
      num: "04",
      title: "IMPACT",
      subtitle: "Turn dialogue into meaningful action.",
      description: "Transforming resolutions and policy papers into actionable initiatives that influence youth governance.",
      icon: Target,
    },
  ];

  return (
    <section id="pillars" className="py-24 bg-[#080B16] border-t border-[#C8A45D]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2 block">
            CORE FOUNDATIONAL VALUES
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            THE FOUR PILLARS
          </h2>
          <div className="w-24 h-[2px] bg-[#C8A45D] mx-auto mt-4" />
        </div>

        {/* Pillars 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative p-8 rounded bg-[#10162B] border border-[#C8A45D]/20 hover:border-[#C8A45D] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Large Subtle Background Number */}
                <span className="absolute top-2 right-4 font-serif-editorial text-7xl font-bold text-[#C8A45D]/10 group-hover:text-[#C8A45D]/20 transition-colors pointer-events-none select-none">
                  {pillar.num}
                </span>

                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded bg-[#080B16] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] mb-6 group-hover:bg-[#C8A45D] group-hover:text-[#080B16] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-sans-ui font-semibold tracking-widest text-[#C8A45D] uppercase">
                    PILLAR {pillar.num}
                  </span>

                  <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD] mt-1 mb-2 group-hover:text-[#C8A45D] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-sans-ui text-xs font-semibold text-[#D8C8A8] mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="font-sans-ui text-xs text-[#F2EBDD]/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Animated Gold Bottom Border */}
                <div className="w-full h-[2px] bg-[#C8A45D]/20 group-hover:bg-[#C8A45D] transition-colors mt-8" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
