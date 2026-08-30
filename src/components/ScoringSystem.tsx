import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Calculator, AlertTriangle, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { scoringSystemData } from "../data/pricing";

export const ScoringSystem: React.FC = () => {
  // Calculator state
  const [bdCount, setBdCount] = useState(0);
  const [hcCount, setHcCount] = useState(0);
  const [smCount, setSmCount] = useState(0);
  const [ipCount, setIpCount] = useState(0);
  const [delegateCount, setDelegateCount] = useState(8);

  const totalScore = bdCount * 10 + hcCount * 8 + smCount * 5 + ipCount * 5;
  const isEligible = delegateCount >= 8;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#C8A45D", "#D8C8A8", "#A9432B", "#F2EBDD"],
    });
  };

  return (
    <section className="py-24 bg-[#10162B] text-[#F2EBDD] relative overflow-hidden border-t border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
            AGGREGATE TALLY RULES
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            THE RACE FOR BEST DELEGATION
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2 max-w-2xl">
            Highest institutional honour recognising collective preparation, diplomacy, and leadership.
          </p>
          <div className="w-24 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* 2-Column Layout: Left Rules & Points, Right Interactive Score Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Points Breakdown & Rules */}
          <div className="lg:col-span-6 space-y-8">
            {/* Points Table */}
            <div className="p-6 rounded-lg bg-[#080B16] border border-[#C8A45D]/30 shadow-xl">
              <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD] mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#C8A45D]" /> OFFICIAL MARKING SCHEME
              </h3>

              <div className="divide-y divide-[#C8A45D]/15">
                {scoringSystemData.points.map((p, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between font-sans-ui text-sm">
                    <div>
                      <span className="text-[#F2EBDD]/90 font-medium block">{p.award}</span>
                      <span className="text-[10px] text-[#D8C8A8]/60">{p.note}</span>
                    </div>
                    <span className="font-serif-editorial font-bold text-lg text-[#C8A45D]">
                      {p.points} PTS
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimum Requirement Callout */}
            <div className="p-6 rounded-lg bg-[#A9432B]/10 border border-[#A9432B]/40">
              <div className="flex items-center gap-3 mb-2 text-[#A9432B]">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-xs font-sans-ui font-bold tracking-widest uppercase">
                  MANDATORY ELIGIBILITY THRESHOLD
                </span>
              </div>
              <p className="font-serif-editorial text-xl font-bold text-[#F2EBDD] mb-2">
                MINIMUM 8 REGISTERED DELEGATES
              </p>
              <p className="font-sans-ui text-xs text-[#F2EBDD]/80 leading-relaxed">
                {scoringSystemData.requirement}
              </p>
            </div>

            {/* Tie Breaker Rules */}
            <div className="p-6 rounded-lg bg-[#080B16] border border-[#C8A45D]/20">
              <h4 className="text-xs font-sans-ui font-bold tracking-widest text-[#C8A45D] uppercase mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> TIE-BREAKER PROTOCOL
              </h4>
              <div className="space-y-2 font-sans-ui text-xs text-[#F2EBDD]/80">
                {scoringSystemData.tieBreakers.map((tb, idx) => (
                  <p key={idx}>{tb}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Score Calculator */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-lg bg-[#080B16] border-2 border-[#C8A45D] shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-[#C8A45D]/20 pb-4 mb-6">
                <div className="flex items-center gap-2 text-[#C8A45D]">
                  <Calculator className="w-5 h-5" />
                  <span className="text-xs font-sans-ui font-bold tracking-widest uppercase">
                    DELEGATION SCORE CALCULATOR
                  </span>
                </div>
                <span className="text-[10px] font-sans-ui px-2 py-0.5 rounded bg-[#C8A45D]/20 text-[#C8A45D]">
                  INTERACTIVE
                </span>
              </div>

              {/* Calculator Inputs */}
              <div className="space-y-4 mb-8">
                {/* Total Delegates Count */}
                <div>
                  <div className="flex justify-between text-xs font-sans-ui mb-1">
                    <span className="text-[#F2EBDD]/80 font-medium">Total Registered Delegates:</span>
                    <span className={`font-bold ${isEligible ? "text-emerald-400" : "text-[#A9432B]"}`}>
                      {delegateCount} Delegates {isEligible ? "(QUALIFIED)" : "(NEEDS 8+)"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={delegateCount}
                    onChange={(e) => setDelegateCount(parseInt(e.target.value))}
                    className="w-full accent-[#C8A45D] bg-[#10162B] rounded h-2"
                  />
                </div>

                {/* Best Delegate Count */}
                <div className="flex items-center justify-between p-3 rounded bg-[#10162B] border border-[#C8A45D]/20">
                  <span className="text-xs font-sans-ui text-[#F2EBDD]">Best Delegates (10 pts):</span>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={bdCount}
                    onChange={(e) => setBdCount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-16 p-1.5 rounded bg-[#080B16] border border-[#C8A45D]/40 text-center font-bold text-[#C8A45D] text-sm focus:outline-none"
                  />
                </div>

                {/* High Commendations Count */}
                <div className="flex items-center justify-between p-3 rounded bg-[#10162B] border border-[#C8A45D]/20">
                  <span className="text-xs font-sans-ui text-[#F2EBDD]">High Commendations (8 pts):</span>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={hcCount}
                    onChange={(e) => setHcCount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-16 p-1.5 rounded bg-[#080B16] border border-[#C8A45D]/40 text-center font-bold text-[#C8A45D] text-sm focus:outline-none"
                  />
                </div>

                {/* Special Mentions Count */}
                <div className="flex items-center justify-between p-3 rounded bg-[#10162B] border border-[#C8A45D]/20">
                  <span className="text-xs font-sans-ui text-[#F2EBDD]">Special Mentions (5 pts):</span>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={smCount}
                    onChange={(e) => setSmCount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-16 p-1.5 rounded bg-[#080B16] border border-[#C8A45D]/40 text-center font-bold text-[#C8A45D] text-sm focus:outline-none"
                  />
                </div>

                {/* IP Awards Count */}
                <div className="flex items-center justify-between p-3 rounded bg-[#10162B] border border-[#C8A45D]/20">
                  <span className="text-xs font-sans-ui text-[#F2EBDD]">IP Awards (5 pts each):</span>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={ipCount}
                    onChange={(e) => setIpCount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-16 p-1.5 rounded bg-[#080B16] border border-[#C8A45D]/40 text-center font-bold text-[#C8A45D] text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Tally Output Box */}
              <div className="p-6 rounded-lg bg-[#10162B] border border-[#C8A45D]/40 text-center space-y-2">
                <span className="text-xs font-sans-ui font-semibold tracking-widest text-[#D8C8A8] uppercase">
                  ESTIMATED CUMULATIVE DELEGATION SCORE
                </span>

                <div className="font-serif-editorial text-5xl font-bold text-[#C8A45D]">
                  {totalScore} <span className="text-xl">POINTS</span>
                </div>

                {!isEligible && (
                  <p className="text-xs text-[#A9432B] font-semibold mt-2">
                    ⚠️ Minimum 8 delegates required to enter final tally.
                  </p>
                )}

                {isEligible && totalScore > 0 && (
                  <button
                    onClick={triggerConfetti}
                    className="mt-4 px-4 py-2 rounded text-xs font-sans-ui font-bold tracking-wider text-[#080B16] bg-[#C8A45D] hover:bg-[#D8C8A8] transition-colors inline-flex items-center gap-1.5 shadow"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> CELEBRATE TALLY
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
