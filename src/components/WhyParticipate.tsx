import React from "react";
import { Landmark, Compass, Mic, AlertOctagon, BookOpen, Users, Award, Globe } from "lucide-react";

export const WhyParticipate: React.FC = () => {
  const experiences = [
    {
      title: "Policy & Parliamentary Deliberations",
      description: "Engage in authentic legislative and parliamentary simulations addressing real-world governance, constitutional law, and public policy challenges.",
      icon: Landmark,
    },
    {
      title: "Leadership & Diplomacy Simulations",
      description: "Develop 21st-century negotiation, strategic diplomacy, multilateral consensus building, and ethical statecraft under pressure.",
      icon: Compass,
    },
    {
      title: "Expert Talks & Interactive Sessions",
      description: "Gain direct insights from seasoned policymakers, eminent legal scholars, professors, and distinguished political dignitaries.",
      icon: Mic,
    },
    {
      title: "Crisis & Strategic Simulations",
      description: "Navigate dynamic, unpredictable crisis scenarios requiring instant analysis, rapid collaboration, and decisive problem-solving.",
      icon: AlertOctagon,
    },
    {
      title: "Research, Debate & Public Speaking",
      description: "Sharpen evidence-backed research, hone persuasive rhetoric, and master evidentiary cross-examination before discerning committees.",
      icon: BookOpen,
    },
    {
      title: "Networking & Collaborative Learning",
      description: "Connect with proactive student leaders, debaters, and future changemakers from leading schools, colleges, and universities across India.",
      icon: Users,
    },
    {
      title: "Recognition, Awards & Certification",
      description: "Earn prestigious merit awards, aggregate delegation honors, and official certificates signed by eminent academicians and dignitaries.",
      icon: Award,
    },
    {
      title: "Exposure to National & Global Issues",
      description: "Deep-dive into crucial subject matters spanning international relations, constitutional emergency provisions, human rights, and social justice.",
      icon: Globe,
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
            THE SUMMIT EXPERIENCE
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            WHY NITI NAYAK?
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2 max-w-2xl">
            Eight transformative dimensions of the 2026 youth conference experience.
          </p>
          <div className="w-20 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* 8-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#080B16] border border-[#C8A45D]/20 hover:border-[#C8A45D] transition-all duration-300 group hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-[#10162B] border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] mb-5 group-hover:scale-105 group-hover:border-[#C8A45D] group-hover:bg-[#C8A45D] group-hover:text-[#080B16] transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-sans-ui font-bold tracking-widest text-[#C8A45D]/70 uppercase block mb-1">
                    EXPERIENCE 0{idx + 1}
                  </span>

                  <h3 className="font-serif-editorial text-xl font-bold text-[#F2EBDD] mb-3 group-hover:text-[#C8A45D] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-sans-ui text-xs text-[#F2EBDD]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#C8A45D]/10 flex items-center justify-between text-[10px] font-sans-ui text-[#C8A45D]">
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
