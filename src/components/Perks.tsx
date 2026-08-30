import React from "react";
import { Landmark, Building2, Users, FileBadge, Award, Network, TrendingUp } from "lucide-react";
import { eventConfig } from "../data/config";

export const Perks: React.FC = () => {
  const perksList = [
    {
      title: "PRESTIGIOUS VENUE",
      detail: eventConfig.venue,
      description: "A formal parliamentary setup designed to foster high-level debate, decorum, and intellectual engagement.",
      icon: Building2,
      isTba: true,
    },
    {
      title: "ACADEMIC COLLABORATION",
      detail: "Faculty of Law Collaboration",
      description: eventConfig.collaboration + ", ensuring rigorous procedure, academic depth, and legal standards.",
      icon: Landmark,
      isTba: false,
    },
    {
      title: "EMINENT DIGNITARIES",
      detail: "Policymakers & Scholars",
      description: "Interactions with prominent leaders, university professors, academicians, and public policy practitioners.",
      icon: Users,
      isTba: false,
    },
    {
      title: "OFFICIAL CERTIFICATION",
      detail: "Signed Official Certificates",
      description: "Prestigious certificates of merit and participation signed by eminent professors and distinguished dignitaries.",
      icon: FileBadge,
      isTba: false,
    },
    {
      title: "BEST DELEGATION HONOURS",
      detail: "Trophies & Commendations",
      description: "Highest institutional honours and formal committee awards celebrating debate, research, and diplomatic leadership.",
      icon: Award,
      isTba: false,
    },
    {
      title: "NATIONAL NETWORKING",
      detail: "Schools & Universities Nationwide",
      description: "Forge lasting connections with law students, MUN debaters, student leaders, and aspiring policy analysts.",
      icon: Network,
      isTba: false,
    },
    {
      title: "21ST-CENTURY SKILLS",
      detail: "Policy & Rhetoric Mastery",
      description: "Master evidence-based reasoning, public speaking, negotiation, diplomacy, and crisis management.",
      icon: TrendingUp,
      isTba: false,
    },
  ];

  return (
    <section className="py-24 bg-[#10162B] text-[#F2EBDD] relative overflow-hidden border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
            SUMMIT HIGHLIGHTS
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            MORE THAN A CONFERENCE
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2 max-w-2xl">
            {eventConfig.dates} • {eventConfig.tagline}
          </p>
          <div className="w-24 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perksList.map((perk, idx) => {
            const IconComp = perk.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#080B16] border border-[#C8A45D]/20 hover:border-[#C8A45D] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-[#10162B] border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] group-hover:bg-[#C8A45D] group-hover:text-[#080B16] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    {perk.isTba && (
                      <span className="text-[10px] font-sans-ui font-bold px-2.5 py-1 rounded bg-[#A9432B]/20 text-[#A9432B] border border-[#A9432B]/40 uppercase tracking-wider">
                        STATUS: TBA
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD] mb-1 group-hover:text-[#C8A45D] transition-colors">
                    {perk.title}
                  </h3>

                  <p className="text-xs font-sans-ui font-semibold text-[#D8C8A8] mb-3">
                    {perk.detail}
                  </p>

                  <p className="font-sans-ui text-xs sm:text-sm text-[#F2EBDD]/75 leading-relaxed">
                    {perk.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C8A45D]/10 text-[11px] font-sans-ui text-[#C8A45D]/60 uppercase tracking-widest">
                  BENEFIT ITEM 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
