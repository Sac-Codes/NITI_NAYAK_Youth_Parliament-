import React from "react";
import { X, ShieldCheck, Tag, Award, ArrowRight } from "lucide-react";
import type { Committee } from "../data/committees";

interface CommitteeModalProps {
  committee: Committee | null;
  onClose: () => void;
  onRegisterClick: () => void;
}

export const CommitteeModal: React.FC<CommitteeModalProps> = ({
  committee,
  onClose,
  onRegisterClick,
}) => {
  if (!committee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#10162B] border border-[#C8A45D]/40 rounded-lg shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="p-6 bg-[#080B16] border-b border-[#C8A45D]/20 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span
                className={`text-[10px] font-sans-ui font-bold px-2.5 py-1 rounded tracking-widest uppercase ${
                  committee.eligibility === "School Delegates Only"
                    ? "bg-[#A9432B]/20 text-[#A9432B] border border-[#A9432B]/40"
                    : "bg-[#C8A45D]/20 text-[#C8A45D] border border-[#C8A45D]/40"
                }`}
              >
                {committee.eligibility}
              </span>
              <span className="text-[10px] font-sans-ui tracking-widest text-[#D8C8A8]/70 uppercase">
                {committee.category}
              </span>
            </div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#F2EBDD]">
              {committee.name}
            </h3>
            <p className="font-sans-ui text-xs text-[#C8A45D] mt-1">{committee.fullName}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#F2EBDD]/60 hover:text-[#C8A45D] bg-[#10162B] border border-[#C8A45D]/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto font-sans-ui text-sm text-[#F2EBDD]/85">
          {/* Agenda Document Box */}
          <div className="p-5 rounded bg-[#080B16] border-l-4 border-[#C8A45D] shadow-inner">
            <span className="text-[11px] font-semibold tracking-widest text-[#C8A45D] uppercase block mb-1">
              OFFICIAL AGENDA
            </span>
            <h4 className="font-serif-editorial text-xl font-bold text-[#F2EBDD] leading-snug">
              "{committee.agenda}"
            </h4>
          </div>

          {/* Description */}
          <div>
            <h5 className="text-xs font-bold tracking-widest text-[#C8A45D] uppercase mb-2">
              BACKGROUND & OVERVIEW
            </h5>
            <p className="leading-relaxed text-xs sm:text-sm">{committee.description}</p>
          </div>

          {/* Why It Matters */}
          <div className="p-4 rounded bg-[#080B16]/60 border border-[#C8A45D]/20">
            <h5 className="text-xs font-bold tracking-widest text-[#D8C8A8] uppercase mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D]" /> WHY THIS AGENDA MATTERS
            </h5>
            <p className="text-xs text-[#F2EBDD]/80 leading-relaxed">{committee.whyItMatters}</p>
          </div>

          {/* Focus Areas */}
          <div>
            <h5 className="text-xs font-bold tracking-widest text-[#C8A45D] uppercase mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4" /> CORE FOCUS AREAS
            </h5>
            <div className="flex flex-wrap gap-2">
              {committee.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded bg-[#080B16] border border-[#C8A45D]/30 text-[#F2EBDD]"
                >
                  • {area}
                </span>
              ))}
            </div>
          </div>

          {/* Award Categories */}
          <div>
            <h5 className="text-xs font-bold tracking-widest text-[#C8A45D] uppercase mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C8A45D]" /> AWARD CATEGORIES
            </h5>
            <p className="text-xs text-[#F2EBDD]/70">
              {committee.awards.join(" • ")}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#080B16] border-t border-[#C8A45D]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#D8C8A8]/70">
            Detailed briefing documents to be provided by the Secretariat.
          </p>
          <button
            onClick={() => {
              onClose();
              onRegisterClick();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded text-xs font-bold tracking-widest text-[#080B16] bg-[#C8A45D] hover:bg-[#D8C8A8] transition-colors flex items-center justify-center gap-2"
          >
            <span>REGISTER FOR THIS COMMITTEE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
