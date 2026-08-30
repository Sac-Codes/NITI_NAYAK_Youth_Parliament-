import React from "react";
import { Lightbulb, Compass, MessagesSquare, Target } from "lucide-react";

export const FourPillars: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "IDEAS",
      subtitle: "Ideas that challenge the ordinary.",
      description: "Intellectual courage to question conventional assumptions, explore bold possibilities, and conceptualize transformative solutions for society.",
      icon: Lightbulb,
    },
    {
      num: "02",
      title: "LEADERSHIP",
      subtitle: "Leadership that inspires responsibility.",
      description: "Cultivating ethical decision-making, empathy, integrity, and the conviction to guide communities with purpose and accountability.",
      icon: Compass,
    },
    {
      num: "03",
      title: "DEBATE",
      subtitle: "Debate that creates understanding.",
      description: "Mastering parliamentary procedure, evidentiary reasoning, and constructive contestation to synthesize divergent perspectives into common ground.",
      icon: MessagesSquare,
    },
    {
      num: "04",
      title: "IMPACT",
      subtitle: "Impact that transforms ideas into action.",
      description: "Bridging the gap between rhetoric and tangible change, transforming resolutions and policy papers into actionable initiatives for national progress.",
      icon: Target,
    },
  ];

  return (
    <section id="pillars" className="py-24 bg-[#080B16] border-t border-[#C8A45D]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2 block">
            CORE PHILOSOPHY & VALUES
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            THE FOUR PILLARS
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2 max-w-2xl mx-auto">
            Ideas • Leadership • Debate • Impact
          </p>
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

                  <p className="font-serif-editorial text-sm italic text-[#D8C8A8] mb-4">
                    "{pillar.subtitle}"
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
