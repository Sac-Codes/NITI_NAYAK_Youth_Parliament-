import React from "react";
import { delegationPolicyRules } from "../data/pricing";
import { Scale, FileText } from "lucide-react";

export const DelegationPolicy: React.FC = () => {
  return (
    <section id="delegation" className="py-24 bg-[#F2EBDD] text-[#242424] relative overflow-hidden theme-light-editorial">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#A9432B] uppercase mb-2">
            OFFICIAL CODE OF CONDUCT
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#242424]">
            DELEGATION POLICY
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#242424]/80 mt-2 max-w-2xl">
            Governing rules for institutional, school, and individual delegations.
          </p>
          <div className="w-24 h-[2px] bg-[#A9432B] mt-4" />
        </div>

        {/* Policy Document Box */}
        <div className="p-8 lg:p-12 bg-[#D8C8A8]/30 border border-[#242424]/20 rounded-xl shadow-xl relative editorial-border">
          <div className="flex items-center gap-3 border-b border-[#242424]/15 pb-4 mb-8">
            <FileText className="w-6 h-6 text-[#A9432B]" />
            <div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#242424]">
                CONFERENCE DELEGATION STATUTES
              </h3>
              <p className="font-sans-ui text-xs text-[#242424]/70">
                Authoritative terms issued by the Conference Secretariat, NITI NAYAK Youth Summit 2026
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {delegationPolicyRules.map((rule, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#F2EBDD] border border-[#242424]/15 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Scale className="w-4 h-4 text-[#A9432B]" />
                    <span className="text-xs font-sans-ui font-bold tracking-widest text-[#A9432B] uppercase">
                      RULE 0{idx + 1} • {rule.title}
                    </span>
                  </div>
                  <p className="font-sans-ui text-xs sm:text-sm text-[#242424]/85 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#242424]/15 text-center font-serif-editorial text-sm text-[#242424]/80 italic">
            "Strict compliance with conference regulations ensures an equitable, dignified, and intellectually rigorous summit."
          </div>
        </div>
      </div>
    </section>
  );
};
