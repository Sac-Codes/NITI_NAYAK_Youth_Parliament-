import React, { useState } from "react";
import { pricingTiers } from "../data/pricing";
import { eventConfig } from "../data/config";
import { CheckCircle2, ArrowRight, ShieldAlert, AlertCircle, X } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2">
            DELEGATE & DELEGATION PORTAL
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            TAKE YOUR SEAT AT THE TABLE
          </h2>
          <p className="font-serif-editorial text-lg italic text-[#D8C8A8] mt-2">
            Your voice belongs in the conversation.
          </p>
          <div className="w-24 h-[2px] bg-[#C8A45D] mt-4" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg bg-[#10162B] border transition-all duration-300 flex flex-col justify-between ${
                !tier.isConfirmed
                  ? "border-[#A9432B]/50 bg-[#A9432B]/5"
                  : "border-[#C8A45D]/30 hover:border-[#C8A45D]"
              }`}
            >
              <div>
                <span className="text-[10px] font-sans-ui font-bold tracking-widest text-[#C8A45D] uppercase block mb-1">
                  CATEGORY 0{idx + 1}
                </span>

                <h3 className="font-serif-editorial text-xl font-bold text-[#F2EBDD] mb-4">
                  {tier.category}
                </h3>

                <div className="font-serif-editorial text-3xl font-bold text-[#C8A45D] mb-2">
                  {tier.amount}
                </div>

                {tier.note && (
                  <p
                    className={`font-sans-ui text-xs leading-relaxed ${
                      !tier.isConfirmed ? "text-[#A9432B] font-medium" : "text-[#F2EBDD]/70"
                    }`}
                  >
                    {tier.note}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#C8A45D]/15 flex items-center gap-1.5 text-[11px] font-sans-ui text-[#D8C8A8]">
                {tier.isConfirmed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Confirmed Rate</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3.5 h-3.5 text-[#A9432B]" />
                    <span>Pending Clarification</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button & Note */}
        <div className="flex flex-col items-center justify-center gap-6 p-8 rounded-lg bg-[#10162B] border border-[#C8A45D]/40 text-center max-w-3xl mx-auto shadow-2xl">
          <p className="font-serif-editorial text-xl text-[#F2EBDD] max-w-xl">
            Portfolio allocations are processed on a first-come, first-served basis upon receipt of delegation details.
          </p>

          <button
            onClick={handleRegisterAction}
            className="px-10 py-4 rounded text-xs font-sans-ui font-bold tracking-[0.25em] text-[#080B16] bg-gradient-to-r from-[#C8A45D] via-[#D8C8A8] to-[#C8A45D] hover:shadow-lg hover:shadow-[#C8A45D]/25 transition-all duration-300 flex items-center gap-2 group active:scale-95"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-xs font-sans-ui text-[#F2EBDD]/60 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#C8A45D]" /> Non-Refundable & Non-Transferable as per Delegation Policy
          </p>
        </div>
      </div>

      {/* Registration Info Modal if registrationUrl is empty */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#10162B] border border-[#C8A45D] rounded-lg p-6 max-w-md w-full text-center relative shadow-2xl space-y-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#F2EBDD]/60 hover:text-[#C8A45D]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#C8A45D]/20 border border-[#C8A45D] flex items-center justify-center text-[#C8A45D] mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD]">
              Registration Link Notice
            </h3>

            <p className="font-sans-ui text-xs text-[#F2EBDD]/80 leading-relaxed">
              Official online registration links will be released shortly by the Organising Secretariat. In the interim, you can directly reserve your delegation portfolios by reaching out to the Secretariat contacts below.
            </p>

            <div className="pt-2 border-t border-[#C8A45D]/20 text-xs font-sans-ui text-[#C8A45D] font-bold">
              Arush Kumar Singh: +91 63879 70508
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-2.5 rounded bg-[#C8A45D] text-[#080B16] font-bold text-xs tracking-wider"
            >
              UNDERSTOOD
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
