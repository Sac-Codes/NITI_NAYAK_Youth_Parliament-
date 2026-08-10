import React, { useState } from "react";
import { committeesData } from "../data/committees";
import type { Committee } from "../data/committees";
import { CommitteeModal } from "./CommitteeModal";
import { Landmark, ArrowUpRight, Filter } from "lucide-react";

interface CommitteesProps {
  onRegisterClick: () => void;
}

export const Committees: React.FC<CommitteesProps> = ({ onRegisterClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeCommittee, setActiveCommittee] = useState<Committee | null>(null);

  const categories = [
    "ALL",
    "Indian Parliamentary / Executive",
    "State Forum",
    "International Forum",
    "Youth Forum",
  ];

  const filteredCommittees =
    selectedCategory === "ALL"
      ? committeesData
      : committeesData.filter((c) => c.category === selectedCategory);

  return (
    <section id="committees" className="py-24 bg-[#080B16] text-[#F2EBDD] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C8A45D]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2 flex items-center gap-2">
            <Landmark className="w-4 h-4" /> PARLIAMENTARY & DIPLOMATIC FORUMS
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            ENTER THE COMMITTEES
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2 max-w-2xl">
            Seven forums. Multiple perspectives. One generation ready to lead.
          </p>
          <div className="w-24 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <span className="text-xs font-sans-ui text-[#C8A45D]/70 mr-2 hidden sm:inline-flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-sans-ui tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#C8A45D] text-[#080B16] font-bold shadow-md shadow-[#C8A45D]/20"
                  : "bg-[#10162B] text-[#F2EBDD]/70 border border-[#C8A45D]/20 hover:border-[#C8A45D]/60 hover:text-[#F2EBDD]"
              }`}
            >
              {cat === "ALL" ? "ALL COMMITTEES (7)" : cat}
            </button>
          ))}
        </div>

        {/* Committee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCommittees.map((committee, idx) => (
            <div
              key={committee.id}
              onClick={() => setActiveCommittee(committee)}
              className="group cursor-pointer p-8 rounded-lg bg-[#10162B] border border-[#C8A45D]/25 hover:border-[#C8A45D] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Background Subtle Watermark */}
              <div className="absolute -bottom-6 -right-6 font-serif-editorial text-8xl font-bold text-[#C8A45D]/5 pointer-events-none select-none group-hover:text-[#C8A45D]/10 transition-colors">
                0{idx + 1}
              </div>

              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[10px] font-sans-ui font-bold px-2.5 py-1 rounded tracking-wider uppercase ${
                      committee.eligibility === "School Delegates Only"
                        ? "bg-[#A9432B]/20 text-[#A9432B] border border-[#A9432B]/30"
                        : "bg-[#C8A45D]/20 text-[#C8A45D] border border-[#C8A45D]/30"
                    }`}
                  >
                    {committee.eligibility}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#C8A45D]/40 group-hover:text-[#C8A45D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Committee Name */}
                <h3 className="font-serif-editorial text-3xl font-bold text-[#F2EBDD] group-hover:text-[#C8A45D] transition-colors mb-1">
                  {committee.name}
                </h3>
                <p className="text-xs font-sans-ui text-[#D8C8A8]/70 mb-4 truncate">
                  {committee.fullName}
                </p>

                {/* Agenda Box */}
                <div className="p-4 rounded bg-[#080B16] border-l-2 border-[#C8A45D] mb-4">
                  <span className="text-[10px] font-sans-ui tracking-widest text-[#C8A45D] uppercase block mb-1">
                    AGENDA
                  </span>
                  <p className="font-serif-editorial text-base font-semibold text-[#F2EBDD] line-clamp-2">
                    "{committee.agenda}"
                  </p>
                </div>

                {/* Focus Areas Preview */}
                <div className="space-y-1">
                  <span className="text-[10px] font-sans-ui tracking-widest text-[#F2EBDD]/50 uppercase block mb-1">
                    KEY FOCUS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {committee.focusAreas.slice(0, 3).map((area, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[11px] font-sans-ui px-2 py-0.5 rounded bg-[#10162B] border border-[#C8A45D]/15 text-[#F2EBDD]/80"
                      >
                        {area}
                      </span>
                    ))}
                    {committee.focusAreas.length > 3 && (
                      <span className="text-[11px] font-sans-ui text-[#C8A45D]">
                        +{committee.focusAreas.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Callout */}
              <div className="mt-8 pt-4 border-t border-[#C8A45D]/15 flex items-center justify-between text-xs font-sans-ui font-semibold text-[#C8A45D] group-hover:text-[#F2EBDD] transition-colors">
                <span>VIEW COMMITTEE DETAILS</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Render */}
      <CommitteeModal
        committee={activeCommittee}
        onClose={() => setActiveCommittee(null)}
        onRegisterClick={onRegisterClick}
      />
    </section>
  );
};
