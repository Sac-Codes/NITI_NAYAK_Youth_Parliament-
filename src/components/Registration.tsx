import React, { useState } from "react";
import { pricingTiers } from "../data/pricing";
import { eventConfig } from "../data/config";
import { CheckCircle2, ArrowRight, ShieldAlert, AlertCircle, X, Phone } from "lucide-react";

export const Registration: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleRegisterAction = () => {
    if (eventConfig.registrationUrl && eventConfig.registrationUrl.trim() !== "") {
      window.open(eventConfig.registrationUrl, "_blank");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <section id="registration" className="py-24 bg-[#080B16] text-[#F2EBDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
            DELEGATE & DELEGATION PORTAL
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            REGISTRATION & PACKAGES
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2 max-w-2xl">
            Official Early Bird fee structures and accommodation package for NITI NAYAK Youth Summit 2026.
          </p>
          <div className="w-24 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#10162B] border border-[#C8A45D]/30 hover:border-[#C8A45D] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-sans-ui font-bold tracking-widest text-[#C8A45D] uppercase block">
                    TIER 0{idx + 1}
                  </span>
                  {tier.badge && (
                    <span className="text-[9px] font-sans-ui font-semibold px-2 py-0.5 rounded bg-[#C8A45D]/15 text-[#D8C8A8] border border-[#C8A45D]/30">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif-editorial text-xl font-bold text-[#F2EBDD] mb-4 min-h-[3rem]">
                  {tier.category}
                </h3>

                <div className="font-serif-editorial text-4xl font-bold text-[#C8A45D] mb-2">
                  {tier.amount}
                </div>

                {tier.note && (
                  <p className="font-sans-ui text-xs leading-relaxed text-[#F2EBDD]/70 mt-2">
                    {tier.note}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#C8A45D]/15 flex items-center gap-1.5 text-[11px] font-sans-ui text-[#D8C8A8]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Official Brochure Rate</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button & Policy Note */}
        <div className="flex flex-col items-center justify-center gap-6 p-8 sm:p-12 rounded-xl bg-[#10162B] border border-[#C8A45D]/40 text-center max-w-3xl mx-auto shadow-2xl">
          <p className="font-serif-editorial text-xl sm:text-2xl text-[#F2EBDD] max-w-xl leading-snug">
            Portfolio allocations are processed on a first-come, first-served basis upon receipt of verified delegation details.
          </p>

          <button
            onClick={handleRegisterAction}
            className="px-10 py-4 rounded text-xs font-sans-ui font-bold tracking-[0.25em] text-[#080B16] bg-gradient-to-r from-[#C8A45D] via-[#D8C8A8] to-[#C8A45D] hover:shadow-lg hover:shadow-[#C8A45D]/25 transition-all duration-300 flex items-center gap-2 group active:scale-95 cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-xs font-sans-ui text-[#F2EBDD]/70 flex items-center justify-center gap-2 max-w-md">
            <ShieldAlert className="w-4 h-4 text-[#C8A45D] shrink-0" />
            <span>Fees are non-refundable and non-transferable as per the official Delegation Policy.</span>
          </p>
        </div>
      </div>

      {/* Registration Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#10162B] border border-[#C8A45D] rounded-xl p-6 sm:p-8 max-w-md w-full text-center relative shadow-2xl space-y-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#F2EBDD]/60 hover:text-[#C8A45D] p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#C8A45D]/20 border border-[#C8A45D] flex items-center justify-center text-[#C8A45D] mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD]">
              Delegate Registration Notice
            </h3>

            <p className="font-sans-ui text-xs text-[#F2EBDD]/80 leading-relaxed">
              Official online registration forms and portfolio allotters are coordinated directly by the Conference Secretariat. Please connect directly with the Secretariat to reserve your committee allocations and delegate passes.
            </p>

            <div className="pt-3 border-t border-[#C8A45D]/20 text-xs font-sans-ui text-[#C8A45D] space-y-1.5">
              {eventConfig.contactNumbers.map((c) => (
                <div key={c.name} className="flex items-center justify-center gap-2">
                  <Phone className="w-3 h-3" />
                  <span><strong>{c.name}</strong>: {c.phone}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-2.5 rounded bg-[#C8A45D] text-[#080B16] font-bold text-xs tracking-wider cursor-pointer hover:bg-[#D8C8A8] transition-colors mt-2"
            >
              UNDERSTOOD
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
