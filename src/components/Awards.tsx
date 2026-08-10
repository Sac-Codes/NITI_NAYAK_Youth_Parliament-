import React from "react";
import { Trophy, Award, Star, Camera, FileText, Palette, Users } from "lucide-react";

export const Awards: React.FC = () => {
  const awardsList = [
    {
      title: "BEST DELEGATE",
      points: "10 POINTS",
      description: "Highest commendation for parliamentary dominance, policy knowledge, and diplomatic leadership in committee.",
      icon: Trophy,
      category: "Committee Award",
    },
    {
      title: "HIGH COMMENDATION",
      points: "8 POINTS",
      description: "Awarded for exceptional debate performance, legal reasoning, and active caucus leadership.",
      icon: Award,
      category: "Committee Award",
    },
    {
      title: "SPECIAL MENTION",
      points: "5 POINTS",
      description: "Recognizing outstanding research, consistent participation, and constructive resolution drafting.",
      icon: Star,
      category: "Committee Award",
    },
    {
      title: "BEST DELEGATION",
      points: "TROPHY & TITLE",
      description: "Premier delegation trophy awarded to the school or university team with the highest aggregate points.",
      icon: Users,
      category: "Delegation Award",
    },
    {
      title: "BEST REPORTER",
      points: "5 POINTS",
      description: "Awarded to the International Press delegate producing the sharpest parliamentary news reports.",
      icon: FileText,
      category: "International Press",
    },
    {
      title: "BEST CARICATURIST",
      points: "5 POINTS",
      description: "Recognizing political satire, editorial illustration, and creative parliamentary commentary.",
      icon: Palette,
      category: "International Press",
    },
    {
      title: "BEST PHOTOGRAPHER",
      points: "5 POINTS",
      description: "Awarded for capturing compelling documentary photographs of committee deliberations.",
      icon: Camera,
      category: "International Press",
    },
  ];

  return (
    <section id="awards" className="py-24 bg-[#080B16] text-[#F2EBDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
            RECOGNITION & REWARDS
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            EXCELLENCE DESERVES RECOGNITION
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2">
            Honouring outstanding debate, diplomacy, research, and journalism.
          </p>
          <div className="w-24 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {awardsList.map((award, idx) => {
            const IconComp = award.icon;
            const isDelegationTrophy = award.title === "BEST DELEGATION";

            return (
              <div
                key={idx}
                className={`p-6 rounded-lg border transition-all duration-300 flex flex-col justify-between relative group ${
                  isDelegationTrophy
                    ? "bg-gradient-to-b from-[#10162B] to-[#080B16] border-[#C8A45D] md:col-span-2 xl:col-span-2 shadow-2xl shadow-[#C8A45D]/15"
                    : "bg-[#10162B] border-[#C8A45D]/20 hover:border-[#C8A45D]/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-[#080B16] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-sans-ui font-bold px-2.5 py-1 rounded bg-[#C8A45D]/20 text-[#C8A45D]">
                      {award.points}
                    </span>
                  </div>

                  <span className="text-[10px] font-sans-ui tracking-widest text-[#D8C8A8]/60 uppercase block mb-1">
                    {award.category}
                  </span>

                  <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD] mb-2 group-hover:text-[#C8A45D] transition-colors">
                    {award.title}
                  </h3>

                  <p className="font-sans-ui text-xs text-[#F2EBDD]/75 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#C8A45D]/15 text-[10px] font-sans-ui text-[#C8A45D]/60 tracking-widest uppercase">
                  HONOUR 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
