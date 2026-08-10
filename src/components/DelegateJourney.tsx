import React from "react";
import { UserCheck, BookOpen, Mic, Handshake, ShieldCheck, Flag } from "lucide-react";

export const DelegateJourney: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "ARRIVE",
      description: "Meet young minds, debaters, and future policymakers arriving from institutions across the nation.",
      icon: UserCheck,
    },
    {
      num: "02",
      title: "RESEARCH",
      description: "Master your assigned committee agenda, statutory precedents, foreign policy, or economic models.",
      icon: BookOpen,
    },
    {
      num: "03",
      title: "DEBATE",
      description: "Step up to the microphone. Deliver speeches, introduce motions, and defend your positions under cross-examination.",
      icon: Mic,
    },
    {
      num: "04",
      title: "NEGOTIATE",
      description: "Engage in unmoderated caucuses, negotiate compromise clauses, and rally unaligned delegates.",
      icon: Handshake,
    },
    {
      num: "05",
      title: "DELIBERATE",
      description: "Draft comprehensive resolutions, bills, and working papers to solve complex national & global challenges.",
      icon: ShieldCheck,
    },
    {
      num: "06",
      title: "LEAD",
      description: "Leave the summit equipped with official certification, national recognition, lifetime networks, and proven leadership confidence.",
      icon: Flag,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#080B16] text-[#F2EBDD] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2 block">
            THE DELEGATE EXPERIENCE
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EBDD]">
            YOUR JOURNEY BEGINS HERE
          </h2>
          <div className="w-24 h-[2px] bg-[#C8A45D] mx-auto mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#C8A45D]/20 via-[#C8A45D] to-[#C8A45D]/20" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Text Content Box */}
                  <div className="w-full md:w-1/2">
                    <div
                      className={`p-8 rounded-lg bg-[#10162B] border border-[#C8A45D]/30 shadow-xl hover:border-[#C8A45D] transition-colors relative ${
                        isEven ? "md:mr-4" : "md:ml-4"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-sans-ui font-bold px-2.5 py-1 rounded bg-[#C8A45D]/20 text-[#C8A45D]">
                          STAGE {step.num}
                        </span>
                        <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-sans-ui text-xs sm:text-sm text-[#F2EBDD]/75 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#080B16] border-2 border-[#C8A45D] flex items-center justify-center text-[#C8A45D] shadow-lg shadow-[#C8A45D]/20">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
