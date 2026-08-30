import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { FourPillars } from "./components/FourPillars";
import { WhyParticipate } from "./components/WhyParticipate";
import { DelegateJourney } from "./components/DelegateJourney";
import { Awards } from "./components/Awards";
import { ScoringSystem } from "./components/ScoringSystem";
import { Registration } from "./components/Registration";
import { DelegationPolicy } from "./components/DelegationPolicy";
import { Secretariat } from "./components/Secretariat";
import { Messages } from "./components/Messages";
import { VenueContact } from "./components/VenueContact";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { committeesData } from "./data/committees";
import { agendasData } from "./data/agendas";
import { faqsData } from "./data/faqs";
import { pricingTiers, delegationPolicyRules } from "./data/pricing";
import { secretariatMembers, secretariatMessage, founderMessage } from "./data/leadership";
import { eventConfig } from "./data/config";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const PageHero: React.FC<{ eyebrow: string; title: string; subtitle?: string; compact?: boolean }> = ({ eyebrow, title, subtitle, compact = false }) => (
  <section className={`relative overflow-hidden ${compact ? "pt-28 pb-12" : "pt-36 pb-16"} border-b border-[#C8A45D]/20 bg-[#080B16]`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,164,93,0.18),transparent_48%)]" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-[11px] font-sans-ui font-semibold tracking-[0.35em] text-[#C8A45D] uppercase mb-4">{eyebrow}</p>
      <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-7xl font-bold text-[#F2EBDD] leading-none">{title}</h1>
      {subtitle ? <p className="mt-4 font-serif-editorial text-xl italic text-[#D8C8A8]">{subtitle}</p> : null}
      <div className="my-6 h-px w-24 bg-[#C8A45D]" />
    </div>
  </section>
);

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Countdown />
    <section className="py-24 bg-[#F2EBDD] text-[#242424]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-[11px] font-sans-ui font-bold tracking-[0.35em] text-[#A9432B] uppercase mb-4">WHERE IDEAS MEET IMPACT</p>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold">NITI NAYAK is a national platform for policy deliberation, diplomacy, and youth leadership.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-[#242424]/80">
          <p>
            NITI NAYAK Youth Summit 2026 is a premier national platform designed to empower the next generation of leaders, policymakers, diplomats, innovators, and changemakers. Bringing together young minds from schools, colleges, and universities across India, the summit combines parliamentary deliberations, leadership simulations, expert conversations, and collaborative problem-solving.
          </p>
          <p>
            Rooted in evidence, parliamentary procedure, and ethical leadership, the summit challenges participants to question conventional perspectives, defend ideas with rigorous research, respect diverse viewpoints, and forge practical solutions for a stronger, more inclusive, and progressive India.
          </p>
        </div>
        <div className="mt-10">
          <Link to="/about" className="inline-flex items-center gap-2 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#A9432B] hover:text-[#8b3421]">
            Discover NITI NAYAK <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
    <FourPillars />
    <section className="py-24 bg-[#10162B] border-t border-[#C8A45D]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] font-sans-ui font-bold tracking-[0.35em] text-[#C8A45D] uppercase mb-3">FEATURED COMMITTEES</p>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#F2EBDD]">Five forums. One generation ready to lead.</h2>
          </div>
          <Link to="/committees" className="text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#C8A45D] hover:text-[#D8C8A8]">Explore all committees →</Link>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {committeesData.map((committee) => (
            <div key={committee.id} className="rounded-xl border border-[#C8A45D]/20 bg-[#080B16] p-6 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-sans-ui font-bold tracking-[0.25em] text-[#C8A45D] uppercase">{committee.category}</span>
                <h3 className="mt-3 font-serif-editorial text-3xl font-bold text-[#F2EBDD]">{committee.name}</h3>
                <p className="mt-1 font-sans-ui text-xs text-[#D8C8A8]/70">{committee.fullName}</p>
                <div className="mt-4 p-3 rounded bg-[#10162B] border-l-2 border-[#C8A45D]">
                  <p className="font-serif-editorial text-xs text-[#F2EBDD]/90 line-clamp-3 leading-relaxed">"{committee.agenda}"</p>
                </div>
              </div>
              <Link to={`/committees/${committee.id}`} className="mt-6 inline-flex text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#C8A45D] hover:text-[#D8C8A8]">View committee details →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    <DelegateJourney />
    <section className="py-24 bg-[#080B16] border-t border-[#C8A45D]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-[11px] font-sans-ui font-bold tracking-[0.35em] text-[#C8A45D] uppercase mb-3">EXPERIENCE PREVIEW</p>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#F2EBDD]">The summit is built for active ideas, confident voices, and practical policy thinking.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-[#F2EBDD]/80">
          {[
            "Policy & Parliamentary Deliberations",
            "Leadership & Diplomacy Simulations",
            "Expert Talks & Interactive Sessions",
            "Crisis & Strategic Simulations",
            "Research, Debate & Public Speaking",
            "Networking & Collaborative Learning",
            "Recognition, Awards & Certification",
            "Exposure to National & Global Issues",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-[#C8A45D]/20 bg-[#10162B] px-5 py-6 font-serif-editorial text-base text-[#F2EBDD] flex items-center justify-center text-center shadow-md">{item}</div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/experience" className="inline-flex items-center gap-2 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#C8A45D] hover:text-[#D8C8A8]">Discover the experience →</Link>
        </div>
      </div>
    </section>
    <Awards />
    <ScoringSystem />
    <Registration />
    <DelegationPolicy />
    <Secretariat />
    <Messages />
    <VenueContact />
    <FAQ />
    <FinalCTA onRegisterClick={() => {}} />
  </>
);

const AboutPage: React.FC = () => (
  <>
    <PageHero eyebrow="About the Summit" title="MORE THAN A CONFERENCE." subtitle="Ideas • Leadership • Debate • Impact" />
    <section className="py-20 bg-[#F2EBDD] text-[#242424]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <p className="font-sans-ui text-sm sm:text-base leading-relaxed text-[#242424]/90 max-w-4xl">
          NITI NAYAK Youth Summit 2026 is a premier national platform designed to empower the next generation of leaders, policymakers, diplomats, innovators, and changemakers. Organised in collaboration with the Discussion and Debating Society, Faculty of Law, the summit brings together young minds from schools, colleges, and universities across India.
        </p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-[#242424]/10 bg-[#fffaf1] p-8 shadow-sm">
            <p className="text-[11px] font-sans-ui font-bold tracking-[0.35em] text-[#A9432B] uppercase mb-4">The Official Vision</p>
            <blockquote className="font-serif-editorial text-3xl sm:text-4xl italic leading-snug text-[#242424] mb-4">
              Think critically.<br />
              Speak fearlessly.<br />
              Lead responsibly.<br />
              Act with purpose.
            </blockquote>
            <p className="font-sans-ui text-xs text-[#242424]/75">
              Encouraging young citizens to contribute meaningfully to a stronger, more inclusive, innovative, and progressive India.
            </p>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-[#242424]/80">
            <p>The summit is not positioned merely as a conventional youth conference. It combines policy deliberations, leadership simulations, diplomacy, interactive sessions, expert conversations, crisis simulations, and collaborative problem-solving.</p>
            <p>Subject areas span governance, public policy, international relations, economics, social justice, technology, sustainability, and constitutional values. Delegates develop 21st-century leadership skills including critical thinking, public speaking, research, negotiation, diplomacy, teamwork, conflict resolution, emotional intelligence, and ethical leadership.</p>
          </div>
        </div>
      </div>
    </section>
    <FourPillars />
    <WhyParticipate />
  </>
);

const CommitteesPage: React.FC = () => (
  <>
    <PageHero eyebrow="Committees" title="THE COMMITTEES" subtitle="Five forums. Multiple perspectives. One generation ready to lead." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {committeesData.map((committee) => (
            <article key={committee.id} className="group rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 hover:border-[#C8A45D] transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[10px] font-sans-ui font-bold tracking-[0.25em] text-[#C8A45D] uppercase">{committee.category}</span>
                    <h2 className="mt-2 font-serif-editorial text-3xl font-bold text-[#F2EBDD] group-hover:text-[#C8A45D] transition-colors">{committee.name}</h2>
                    <p className="text-xs text-[#D8C8A8]/70 mt-1">{committee.fullName}</p>
                  </div>
                  <span className="rounded bg-[#C8A45D]/10 px-2.5 py-1 text-[10px] font-sans-ui font-bold uppercase text-[#D8C8A8] border border-[#C8A45D]/20">{committee.eligibility}</span>
                </div>
                <p className="mt-4 font-sans-ui text-xs text-[#F2EBDD]/70 leading-relaxed">{committee.description}</p>
                <div className="mt-6 p-4 rounded bg-[#080B16] border-l-2 border-[#C8A45D]">
                  <span className="text-[10px] font-sans-ui tracking-widest text-[#C8A45D] uppercase block mb-1">AGENDA</span>
                  <p className="font-serif-editorial text-sm font-semibold text-[#F2EBDD]">"{committee.agenda}"</p>
                </div>
              </div>
              <Link to={`/committees/${committee.id}`} className="mt-8 inline-flex items-center gap-2 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#C8A45D] hover:text-[#F2EBDD]">
                View committee profile →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

const CommitteeDetailPage: React.FC = () => {
  const { id } = useParams();
  const committee = committeesData.find((item) => item.id === id) ?? committeesData[0];

  return (
    <>
      <PageHero eyebrow="Committee Profile" title={committee.name} subtitle={committee.fullName} />
      <section className="py-20 bg-[#080B16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 shadow-xl">
              <p className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase">Eligibility</p>
              <p className="mt-2 text-2xl font-serif-editorial text-[#F2EBDD] font-bold">{committee.eligibility}</p>
              <div className="mt-8 space-y-6">
                <div className="p-5 rounded-lg bg-[#080B16] border-l-4 border-[#C8A45D]">
                  <span className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase block mb-1">Official Agenda</span>
                  <p className="font-serif-editorial text-lg font-semibold text-[#F2EBDD] leading-snug">"{committee.agenda}"</p>
                </div>
                <div>
                  <p className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-3">Core Focus Areas</p>
                  <ul className="space-y-2 text-sm text-[#F2EBDD]/80 list-disc pl-5 font-sans-ui">
                    {committee.focusAreas.map((focus) => <li key={focus}>{focus}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 shadow-xl flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-3">Committee Description</p>
                <p className="text-xs sm:text-sm leading-relaxed text-[#F2EBDD]/80 font-sans-ui">{committee.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#C8A45D]/15">
                <span className="text-[10px] font-sans-ui font-bold text-[#C8A45D] uppercase tracking-widest block mb-1">Category</span>
                <span className="text-sm font-serif-editorial text-[#F2EBDD]">{committee.category}</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 shadow-xl">
            <p className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase">Why this agenda matters</p>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#F2EBDD]/90 font-serif-editorial italic">"{committee.whyItMatters}"</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-[#C8A45D]/20 pt-8 gap-4">
            <div className="text-xs font-sans-ui font-semibold tracking-[0.2em] uppercase text-[#C8A45D]">Awards: {committee.awards.join(" • ")}</div>
            <Link to="/registration" className="inline-flex items-center gap-2 rounded bg-[#C8A45D] px-6 py-3 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#080B16] hover:bg-[#D8C8A8] transition-colors">Register for this committee</Link>
          </div>
        </div>
      </section>
    </>
  );
};

const AgendaPage: React.FC = () => (
  <>
    <PageHero eyebrow="Agenda Explorer" title="THE AGENDAS" subtitle="Policy themes. Focus areas. Foundational questions for a new generation." />
    <section className="py-20 bg-[#10162B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {agendasData.map((agenda) => (
              <div key={agenda.id} className="rounded-xl border border-[#C8A45D]/20 bg-[#080B16] p-5 shadow-md">
                <span className="text-[10px] font-sans-ui font-bold tracking-[0.25em] text-[#C8A45D] uppercase block mb-1">{agenda.committeeName}</span>
                <h3 className="font-serif-editorial text-xl font-bold text-[#F2EBDD] leading-snug">{agenda.title}</h3>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 space-y-6">
            {agendasData.map((agenda) => (
              <div key={agenda.id} className="rounded-2xl border border-[#C8A45D]/20 bg-[#080B16] p-8 shadow-xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="rounded bg-[#C8A45D]/15 px-2.5 py-1 text-[10px] font-sans-ui font-bold tracking-[0.2em] uppercase text-[#C8A45D]">{agenda.committeeName}</span>
                  <span className="rounded bg-[#10162B] border border-[#C8A45D]/20 px-2.5 py-1 text-[10px] font-sans-ui uppercase text-[#D8C8A8]">{agenda.theme}</span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#F2EBDD] leading-snug">"{agenda.title}"</h3>
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  {agenda.keyQuestions.map((question, index) => (
                    <div key={index} className="rounded-lg border border-[#C8A45D]/20 bg-[#10162B] p-4 text-xs font-sans-ui text-[#F2EBDD]/80 leading-relaxed flex flex-col justify-between">
                      <span className="font-serif-editorial text-lg font-bold text-[#C8A45D] mb-2">Q0{index + 1}</span>
                      <p>{question}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded bg-[#10162B]/80 border-l-4 border-[#A9432B]">
                  <span className="text-[10px] font-sans-ui font-bold tracking-widest text-[#A9432B] uppercase block mb-1">Expected Policy Outcome</span>
                  <p className="text-xs text-[#F2EBDD]/85 font-sans-ui">{agenda.policyImpact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

const ExperiencePage: React.FC = () => (
  <>
    <PageHero eyebrow="Experience" title="THE NITI NAYAK EXPERIENCE" subtitle="A journey from inquiry to influence." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["ARRIVE", "A deliberate entry into a structured environment for parliamentary debate, diplomacy, and active learning."],
            ["RESEARCH", "Delegates study dossiers, map policy positions, examine statutes, and sharpen arguments with verified evidence."],
            ["DEBATE", "The chamber transforms into a forum of challenge, rebuttal, persuasion, and procedural clarity."],
            ["NEGOTIATE", "Coalitions, concessions, and strategic diplomacy reshape outcomes in real-time unmoderated caucuses."],
            ["DELIBERATE", "Members move from arguments to consensus, drafting comprehensive resolutions and bills."],
            ["LEAD", "Participants leave with stronger public voice, official certification, lifetime networks, and proven leadership confidence."],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-6 shadow-lg">
              <p className="text-[10px] font-sans-ui font-bold tracking-[0.25em] text-[#C8A45D] uppercase">STAGE 0{index + 1}</p>
              <h3 className="mt-3 font-serif-editorial text-3xl font-bold text-[#F2EBDD]">{title}</h3>
              <p className="mt-4 text-xs leading-relaxed text-[#F2EBDD]/75 font-sans-ui">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 shadow-xl">
          <p className="text-[10px] font-sans-ui font-bold tracking-[0.35em] text-[#C8A45D] uppercase mb-6">Eight Key Experiences</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans-ui text-[#F2EBDD]/90">
            {[
              "Policy & Parliamentary Deliberations",
              "Leadership & Diplomacy Simulations",
              "Expert Talks & Interactive Sessions",
              "Crisis & Strategic Simulations",
              "Research, Debate & Public Speaking",
              "Networking & Collaborative Learning",
              "Recognition, Awards & Certification",
              "Exposure to National & Global Issues",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-[#C8A45D]/20 bg-[#080B16] p-4 text-center font-medium shadow-md">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

const AwardsPage: React.FC = () => (
  <>
    <PageHero eyebrow="Awards & Marking Scheme" title="EXCELLENCE DESERVES RECOGNITION" subtitle="Official scoring matrix and institutional honours for 2026." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            ["Best Delegate", "10 points", "All Committees"],
            ["High Commendation", "8 points", "All Committees"],
            ["Special Mention", "5 points", "All Committees"],
            ["Best Reporter", "5 points", "International Press"],
            ["Best Photographer", "5 points", "International Press"],
            ["Best Caricaturist", "5 points", "International Press"],
            ["Best Delegation", "Trophy & Honour", "Minimum 8 Delegates"],
          ].map(([title, value, scope]) => (
            <div key={title} className={`rounded-2xl border bg-[#10162B] p-6 shadow-xl ${title === "Best Delegation" ? "border-[#C8A45D] md:col-span-2 xl:col-span-2" : "border-[#C8A45D]/20"}`}>
              <p className="text-[10px] font-sans-ui font-bold tracking-[0.25em] text-[#C8A45D] uppercase">{scope}</p>
              <h3 className="mt-3 font-serif-editorial text-3xl font-bold text-[#F2EBDD]">{title}</h3>
              <p className="mt-3 font-sans-ui text-sm text-[#D8C8A8] uppercase tracking-[0.2em] font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ScoringSystem />
  </>
);

const RegistrationPage: React.FC = () => (
  <>
    <PageHero eyebrow="Registration Portal" title="TAKE YOUR SEAT AT THE TABLE" subtitle="Delegate and delegation fee structure for the 2026 summit." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <div key={tier.category} className="rounded-2xl border border-[#C8A45D]/25 bg-[#10162B] p-6 flex flex-col justify-between shadow-xl">
              <div>
                <p className="text-[10px] font-sans-ui font-bold tracking-[0.25em] text-[#C8A45D] uppercase">{tier.category}</p>
                <div className="mt-4 font-serif-editorial text-4xl font-bold text-[#C8A45D]">{tier.amount}</div>
                {tier.note ? <p className="mt-3 text-xs leading-relaxed text-[#F2EBDD]/75 font-sans-ui">{tier.note}</p> : null}
              </div>
              <div className="mt-6 pt-3 border-t border-[#C8A45D]/15 text-[10px] font-sans-ui text-[#D8C8A8]">
                {tier.badge || "Confirmed Brochure Rate"}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-[#C8A45D]/30 bg-[#10162B] p-8 text-center max-w-2xl mx-auto shadow-2xl space-y-4">
          <p className="font-sans-ui text-xs tracking-[0.25em] uppercase text-[#C8A45D] font-bold">Registration Coordination</p>
          <p className="font-serif-editorial text-2xl text-[#F2EBDD]">Reserve your delegation portfolios directly with the Secretariat.</p>
          <div className="pt-2 text-xs font-sans-ui text-[#D8C8A8] space-y-1">
            {eventConfig.contactNumbers.map((c) => (
              <p key={c.name}><strong>{c.name}</strong> ({c.role}): {c.phone}</p>
            ))}
          </div>
          <Link to="/contact" className="mt-4 inline-flex rounded bg-[#C8A45D] px-6 py-3 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#080B16] hover:bg-[#D8C8A8] transition-colors">Contact Secretariat</Link>
        </div>
      </div>
    </section>
  </>
);

const DelegationPage: React.FC = () => (
  <>
    <PageHero eyebrow="Delegation Policy" title="DELEGATION POLICY" subtitle="Clear standards for participation, integrity, and institutional recognition." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {delegationPolicyRules.map((rule, idx) => (
          <div key={rule.title} className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 shadow-xl">
            <span className="text-[10px] font-sans-ui font-bold tracking-[0.25em] text-[#C8A45D] uppercase">RULE 0{idx + 1}</span>
            <h3 className="mt-2 font-serif-editorial text-2xl font-bold text-[#F2EBDD]">{rule.title}</h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#F2EBDD]/80 font-sans-ui">{rule.description}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

const SecretariatPage: React.FC = () => (
  <>
    <PageHero eyebrow="Secretariat" title="THE PEOPLE BEHIND THE SUMMIT" subtitle="Leadership of NITI NAYAK Youth Summit 2026." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 shadow-xl">
          <p className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase">Founder President</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#C8A45D]/15 font-serif-editorial text-3xl font-bold text-[#C8A45D] border-2 border-[#C8A45D]">{secretariatMembers[0].initials}</div>
            <div className="text-center sm:text-left">
              <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#F2EBDD]">{secretariatMembers[0].name}</h3>
              <p className="text-sm font-semibold text-[#D8C8A8] mt-1">{secretariatMembers[0].role}</p>
              <p className="text-sm text-[#F2EBDD]/80 mt-3">Hotline: {secretariatMembers[0].phone}</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {secretariatMembers.slice(1).map((member) => (
            <div key={member.name} className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A45D]/15 font-serif-editorial text-2xl font-bold text-[#C8A45D] border border-[#C8A45D]/40">{member.initials}</div>
                <div>
                  <h3 className="font-serif-editorial text-2xl font-bold text-[#F2EBDD]">{member.name}</h3>
                  <p className="text-xs text-[#D8C8A8]">{member.role}</p>
                </div>
              </div>
              <p className="text-xs font-sans-ui text-[#F2EBDD]/80 pt-2 border-t border-[#C8A45D]/15">Contact: {member.phone}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#F2EBDD] p-8 text-[#242424] shadow-xl">
          <p className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#A9432B] uppercase">Founder Address</p>
          <p className="mt-4 font-serif-editorial text-2xl sm:text-3xl italic leading-relaxed">“{founderMessage.quote}”</p>
          <p className="mt-4 font-sans-ui text-xs uppercase tracking-[0.2em] text-[#A9432B] font-bold">{founderMessage.author} — {founderMessage.designation}</p>
        </div>
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 shadow-xl">
          <p className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase">Secretariat Message</p>
          <p className="mt-4 font-serif-editorial text-2xl italic text-[#F2EBDD]">“{secretariatMessage.quote}”</p>
          <p className="mt-4 text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed font-sans-ui">{secretariatMessage.content[0]}</p>
        </div>
      </div>
    </section>
  </>
);

const FAQPage: React.FC = () => (
  <>
    <PageHero eyebrow="FAQ" title="FREQUENTLY ASKED QUESTIONS" subtitle="Authoritative answers derived directly from the official 2026 summit brochure." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {faqsData.map((faq) => (
          <details key={faq.question} className="group rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-6 shadow-lg">
            <summary className="cursor-pointer list-none font-sans-ui text-sm font-semibold tracking-[0.08em] uppercase text-[#F2EBDD] flex items-center justify-between">
              <span>{faq.question}</span>
              <span className="text-[#C8A45D] group-open:rotate-90 transition-transform">▸</span>
            </summary>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#F2EBDD]/80 border-t border-[#C8A45D]/15 pt-4 font-sans-ui">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  </>
);

const ContactPage: React.FC = () => (
  <>
    <PageHero eyebrow="Contact" title="LET'S CONNECT" subtitle="Reach out to the Secretariat for delegation registrations and inquiries." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#C8A45D]/20 pb-4 mb-6">
            <p className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase">Secretariat Hotlines</p>
            <span className="text-xs font-sans-ui text-[#D8C8A8] flex items-center gap-1.5">
              <InstagramIcon className="w-3.5 h-3.5 text-[#C8A45D]" /> {eventConfig.socialHandle}
            </span>
          </div>
          <div className="space-y-4 text-sm text-[#F2EBDD]/80">
            {secretariatMembers.map((member) => (
              <div key={member.name} className="rounded-xl border border-[#C8A45D]/20 bg-[#080B16] p-5 shadow-md">
                <p className="font-serif-editorial text-2xl font-bold text-[#F2EBDD]">{member.name}</p>
                <p className="text-xs text-[#D8C8A8] mt-0.5">{member.role}</p>
                <p className="mt-3 text-xs font-sans-ui text-[#F2EBDD]/90">Call: {member.phone}</p>
                <p className="text-xs font-sans-ui text-emerald-400">WhatsApp: {member.whatsapp || member.phone}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 shadow-xl">
          <p className="text-[10px] font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase">Official Venue</p>
          <h3 className="mt-4 font-serif-editorial text-4xl font-bold text-[#F2EBDD]">{eventConfig.venue}</h3>
          <p className="mt-3 text-xs leading-relaxed text-[#F2EBDD]/75">Dates: <strong>{eventConfig.dates}</strong>. Auditorium directions and campus access passes will be dispatched to registered delegations.</p>
          <form className="mt-8 space-y-4">
            <input aria-label="Name" placeholder="Full Name" className="w-full rounded-lg border border-[#C8A45D]/20 bg-[#080B16] px-4 py-3 text-xs text-[#F2EBDD] focus:border-[#C8A45D] focus:outline-none" />
            <input aria-label="Email" placeholder="Email Address" className="w-full rounded-lg border border-[#C8A45D]/20 bg-[#080B16] px-4 py-3 text-xs text-[#F2EBDD] focus:border-[#C8A45D] focus:outline-none" />
            <textarea aria-label="Message" placeholder="Message or Portfolio Inquiry" className="min-h-32 w-full rounded-lg border border-[#C8A45D]/20 bg-[#080B16] px-4 py-3 text-xs text-[#F2EBDD] focus:border-[#C8A45D] focus:outline-none" />
            <button type="button" className="rounded-lg bg-[#C8A45D] px-6 py-3 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#080B16] hover:bg-[#D8C8A8] transition-colors cursor-pointer">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  </>
);

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#080B16] text-[#F2EBDD] selection:bg-[#C8A45D] selection:text-[#080B16]">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/committees" element={<CommitteesPage />} />
            <Route path="/committees/:id" element={<CommitteeDetailPage />} />
            <Route path="/agendas" element={<AgendaPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/delegation" element={<DelegationPage />} />
            <Route path="/secretariat" element={<SecretariatPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
