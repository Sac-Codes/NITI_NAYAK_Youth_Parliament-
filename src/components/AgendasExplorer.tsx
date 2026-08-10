import React, { useState } from "react";
import { agendasData } from "../data/agendas";
import { HelpCircle, FileCheck } from "lucide-react";

export const AgendasExplorer: React.FC = () => {
  const [selectedAgendaId, setSelectedAgendaId] = useState<string>(agendasData[0].id);

  const activeAgenda = agendasData.find((a) => a.id === selectedAgendaId) || agendasData[0];

  return (
    <section id="agendas" className="py-24 bg-[#10162B] text-[#F2EBDD] relative overflow-hidden border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2 block">
            DELEGATE RESEARCH MATRIX
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            THE AGENDAS
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2">
            Questions that demand more than answers.
          </p>
          <div className="w-20 h-[2px] bg-[#C8A45D] mx-auto mt-4" />
        </div>

        {/* Committee Selector Tabs */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-12 scrollbar-none justify-start lg:justify-center border-b border-[#C8A45D]/20">
          {agendasData.map((item) => {
            const isSelected = item.id === selectedAgendaId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedAgendaId(item.id)}
                className={`px-5 py-3 rounded-t text-xs font-sans-ui font-bold tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? "bg-[#080B16] text-[#C8A45D] border-t-2 border-[#C8A45D] border-x border-[#C8A45D]/30"
                    : "text-[#F2EBDD]/60 hover:text-[#F2EBDD] bg-[#10162B]/50"
                }`}
              >
                {item.committeeName}
              </button>
            );
          })}
        </div>

        {/* Selected Agenda Detail View */}
        <div className="bg-[#080B16] border border-[#C8A45D]/30 rounded-lg p-8 lg:p-12 shadow-2xl relative">
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C8A45D]/20 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans-ui font-bold px-3 py-1 rounded bg-[#C8A45D]/20 text-[#C8A45D] border border-[#C8A45D]/40 uppercase tracking-wider">
                {activeAgenda.committeeName}
              </span>
              <span className="text-xs font-sans-ui px-3 py-1 rounded bg-[#10162B] text-[#D8C8A8] border border-[#C8A45D]/20">
                {activeAgenda.theme}
              </span>
            </div>

            <span
              className={`text-xs font-sans-ui font-semibold px-3 py-1 rounded ${
                activeAgenda.eligibility === "School Delegates Only"
                  ? "bg-[#A9432B]/20 text-[#A9432B]"
                  : "bg-emerald-500/10 text-emerald-400"
              }`}
            >
              {activeAgenda.eligibility}
            </span>
          </div>

          {/* Agenda Title */}
          <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2EBDD] leading-tight mb-8">
            "{activeAgenda.title}"
          </h3>

          {/* Key Debate Questions Grid */}
          <div className="space-y-6 mb-10">
            <h4 className="text-xs font-sans-ui font-bold tracking-[0.25em] text-[#C8A45D] uppercase flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#C8A45D]" /> KEY POLICY QUESTIONS DELEGATES MUST ADDRESS
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeAgenda.keyQuestions.map((q, qIdx) => (
                <div
                  key={qIdx}
                  className="p-6 rounded bg-[#10162B] border border-[#C8A45D]/20 relative flex flex-col justify-between"
                >
                  <span className="font-serif-editorial text-3xl font-bold text-[#C8A45D]/30 mb-3">
                    Q0{qIdx + 1}
                  </span>
                  <p className="font-sans-ui text-xs sm:text-sm text-[#F2EBDD]/90 leading-relaxed">
                    {q}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Policy Outcome */}
          <div className="p-6 rounded bg-[#10162B]/80 border-l-4 border-[#A9432B] flex items-start gap-4">
            <FileCheck className="w-6 h-6 text-[#A9432B] shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-sans-ui font-bold tracking-widest text-[#A9432B] uppercase mb-1">
                EXPECTED POLICY OUTCOME
              </h5>
              <p className="font-sans-ui text-xs sm:text-sm text-[#F2EBDD]/90">
                {activeAgenda.policyImpact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
