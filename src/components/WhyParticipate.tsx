import React from "react";
import { Brain, Mic, Globe, FileText, Award, Users } from "lucide-react";

export const WhyParticipate: React.FC = () => {
  const benefits = [
    {
      title: "CRITICAL THINKING",
      description: "Analyse complex real-world issues, evaluate opposing arguments, and synthesize balanced solutions under pressure.",
      icon: Brain,
    },
    {
      title: "PUBLIC SPEAKING",
      description: "Build poise, articulate ideas persuasively, and command parliamentary rostrums with poise and confidence.",
      icon: Mic,
    },
    {
      title: "DIPLOMACY",
      description: "Learn to negotiate, build cross-party coalitions, mediate disputes, and discover common ground in divided assemblies.",
      icon: Globe,
    },
    {
      title: "POLICY ANALYSIS",
      description: "Engage directly with real-world legislative drafting, constitutional law, economic models, and tech regulation.",
      icon: FileText,
    },
    {
      title: "LEADERSHIP",
      description: "Develop decisive problem-solving, strategic foresight, and organizational leadership capabilities.",
      icon: Award,
    },
    {
      title: "NETWORKING",
      description: "Connect with law students, debaters, MUN veterans, academicians, policy experts, and emerging youth leaders nationwide.",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-[#10162B] text-[#F2EBDD] relative overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c8a45d05_1px,transparent_1px),linear-gradient(to_bottom,#c8a45d05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
            BENEFITS & OUTCOMES
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            WHY NITI NAYAK?
          </h2>
          <div className="w-20 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* 6-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded bg-[#080B16] border border-[#C8A45D]/20 hover:border-[#C8A45D]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-[#10162B] border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] mb-6 group-hover:scale-110 group-hover:border-[#C8A45D] transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD] mb-3 group-hover:text-[#C8A45D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans-ui text-xs sm:text-sm text-[#F2EBDD]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C8A45D]/10 flex items-center justify-between text-[11px] font-sans-ui text-[#C8A45D]">
                  <span className="tracking-widest uppercase">DIMENSION 0{idx + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
