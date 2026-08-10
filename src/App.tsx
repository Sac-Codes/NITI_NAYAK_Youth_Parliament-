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

const PageHero: React.FC<{ eyebrow: string; title: string; subtitle?: string; compact?: boolean }> = ({ eyebrow, title, subtitle, compact = false }) => (
  <section className={`relative overflow-hidden ${compact ? "pt-28 pb-12" : "pt-36 pb-16"} border-b border-[#C8A45D]/20 bg-[#080B16]`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,164,93,0.18),transparent_48%)]" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-[11px] font-sans-ui tracking-[0.35em] text-[#C8A45D] uppercase mb-4">{eyebrow}</p>
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
          <p className="text-[11px] font-sans-ui tracking-[0.35em] text-[#A9432B] uppercase mb-4">WHERE IDEAS MEET IMPACT</p>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold">NITI NAYAK is a national platform for leadership, policy, and youth-driven discourse.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-[#242424]/80">
          <p>
            The summit brings together young delegates to engage in parliamentary deliberations, diplomatic simulation, policy discussion, and constructive debate. It is designed to sharpen critical thinking, articulate public arguments, and inspire responsible leadership across emerging communities.
          </p>
          <p>
            Rooted in evidence, procedure, and public purpose, NITI NAYAK challenges students to move beyond rhetoric and work toward practical, informed solutions for the issues shaping India and the world.
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
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] font-sans-ui tracking-[0.35em] text-[#C8A45D] uppercase mb-3">FEATURED COMMITTEES</p>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#F2EBDD]">Seven forums. One generation ready to lead.</h2>
          </div>
          <Link to="/committees" className="text-xs font-sans-ui tracking-[0.2em] uppercase text-[#C8A45D] hover:text-[#D8C8A8]">Explore all committees →</Link>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {committeesData.slice(0,4).map((committee) => (
            <div key={committee.id} className="rounded-xl border border-[#C8A45D]/20 bg-[#080B16] p-5">
              <p className="text-[10px] font-sans-ui tracking-[0.25em] text-[#C8A45D] uppercase">{committee.category}</p>
              <h3 className="mt-3 font-serif-editorial text-3xl text-[#F2EBDD]">{committee.name}</h3>
              <p className="mt-3 font-sans-ui text-xs text-[#F2EBDD]/70">{committee.agenda}</p>
              <Link to={`/committees/${committee.id}`} className="mt-6 inline-flex text-xs font-sans-ui tracking-[0.2em] uppercase text-[#D8C8A8]">View committee →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    <DelegateJourney />
    <section className="py-24 bg-[#080B16] border-t border-[#C8A45D]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-[11px] font-sans-ui tracking-[0.35em] text-[#C8A45D] uppercase mb-3">EXPERIENCE PREVIEW</p>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#F2EBDD]">The summit is built for active ideas, confident voices, and practical policy thinking.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-[#F2EBDD]/80">
          {[
            "Parliamentary deliberation",
            "Diplomatic simulations",
            "Policy discussions",
            "Negotiations",
            "Crisis simulations",
            "Expert conversations",
            "Collaborative problem-solving",
            "Leadership under pressure",
          ].map((item) => (
            <div key={item} className="rounded border border-[#C8A45D]/20 bg-[#10162B] px-4 py-5">{item}</div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/experience" className="inline-flex items-center gap-2 text-xs font-sans-ui tracking-[0.2em] uppercase text-[#C8A45D] hover:text-[#D8C8A8]">Discover the experience →</Link>
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
        <p className="font-sans-ui text-sm leading-relaxed text-[#242424]/80 max-w-3xl">
          NITI NAYAK is a platform designed for young people to think critically, deliberate responsibly, and engage with real public policy questions. The summit is built around parliamentary deliberations, diplomatic simulations, policy discussions, negotiations, meaningful conversations, constructive debate, evidence-based reasoning, and practical problem-solving.
        </p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded border border-[#242424]/10 bg-[#fffaf1] p-8">
            <p className="text-[11px] font-sans-ui tracking-[0.35em] text-[#A9432B] uppercase mb-5">The Vision</p>
            <blockquote className="font-serif-editorial text-4xl italic leading-tight">
              Question with curiosity.<br />
              Speak with conviction.<br />
              Listen with empathy.<br />
              Lead with responsibility.
            </blockquote>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-[#242424]/80">
            <p>NITI NAYAK brings together the energy of youth, the discipline of parliamentary process, and the seriousness of governance-focused discussion. It is a space where strong arguments are sharpened through reason, counter-argument, and collaboration.</p>
            <p>From policy drafting to legislative strategy and diplomacy, participants are encouraged to think as future leaders, not passive observers. The summit makes room for both contestation and consensus-building in a format that believes debate is a path to better decisions.</p>
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
    <PageHero eyebrow="Committees" title="THE COMMITTEES" subtitle="Seven forums. Multiple perspectives. One generation ready to lead." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {committeesData.map((committee) => (
            <article key={committee.id} className="group rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-6 hover:border-[#C8A45D] transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-sans-ui tracking-[0.25em] text-[#C8A45D] uppercase">{committee.category}</p>
                  <h2 className="mt-3 font-serif-editorial text-3xl text-[#F2EBDD]">{committee.name}</h2>
                </div>
                <span className="rounded bg-[#C8A45D]/10 px-2 py-1 text-[10px] font-sans-ui uppercase text-[#D8C8A8]">{committee.eligibility}</span>
              </div>
              <p className="mt-4 font-sans-ui text-xs text-[#F2EBDD]/70 leading-relaxed">{committee.description}</p>
              <div className="mt-5 space-y-2 text-[11px] uppercase tracking-[0.15em] text-[#D8C8A8]">
                <p><span className="text-[#C8A45D]">Agenda:</span> {committee.agenda}</p>
              </div>
              <Link to={`/committees/${committee.id}`} className="mt-6 inline-flex items-center gap-2 text-xs font-sans-ui tracking-[0.2em] uppercase text-[#C8A45D]">View committee →</Link>
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
            <div className="lg:col-span-2 rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8">
              <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Eligibility</p>
              <p className="mt-3 text-2xl font-serif-editorial text-[#F2EBDD]">{committee.eligibility}</p>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Agenda</p>
                  <p className="mt-3 font-sans-ui text-sm text-[#F2EBDD]/80">{committee.agenda}</p>
                </div>
                <div>
                  <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Focus Areas</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#F2EBDD]/80 list-disc pl-5">
                    {committee.focusAreas.map((focus) => <li key={focus}>{focus}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8">
              <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Committee Description</p>
              <p className="mt-3 text-sm leading-relaxed text-[#F2EBDD]/80">{committee.description}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8">
            <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Why this agenda matters</p>
            <p className="mt-3 text-lg leading-relaxed text-[#F2EBDD]/80">{committee.whyItMatters}</p>
          </div>
          <div className="flex justify-between items-center border-t border-[#C8A45D]/20 pt-8">
            <div className="text-xs font-sans-ui tracking-[0.2em] uppercase text-[#C8A45D]">Portfolio awards: {committee.awards.join(" • ")}</div>
            <Link to="/registration" className="inline-flex items-center gap-2 rounded bg-[#C8A45D] px-6 py-3 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#080B16]">Register for this committee</Link>
          </div>
        </div>
      </section>
    </>
  );
};

const AgendaPage: React.FC = () => (
  <>
    <PageHero eyebrow="Agenda Explorer" title="THE AGENDAS" subtitle="Policy themes. Focus areas. Fresh questions for a new generation." />
    <section className="py-20 bg-[#10162B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {agendasData.map((agenda) => (
              <div key={agenda.id} className="rounded border border-[#C8A45D]/20 bg-[#080B16] p-4">
                <p className="text-[10px] font-sans-ui tracking-[0.25em] text-[#C8A45D] uppercase">{agenda.committeeName}</p>
                <h3 className="mt-2 font-serif-editorial text-2xl text-[#F2EBDD]">{agenda.title}</h3>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 space-y-4">
            {agendasData.map((agenda) => (
              <div key={agenda.id} className="rounded-2xl border border-[#C8A45D]/20 bg-[#080B16] p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="rounded bg-[#C8A45D]/15 px-2 py-1 text-[10px] font-sans-ui tracking-[0.2em] uppercase text-[#C8A45D]">{agenda.committeeName}</span>
                  <span className="rounded bg-[#10162B] border border-[#C8A45D]/20 px-2 py-1 text-[10px] font-sans-ui uppercase text-[#D8C8A8]">{agenda.theme}</span>
                </div>
                <h3 className="font-serif-editorial text-4xl text-[#F2EBDD]">{agenda.title}</h3>
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  {agenda.keyQuestions.map((question, index) => (
                    <div key={index} className="rounded border border-[#C8A45D]/20 bg-[#10162B] p-4 text-sm text-[#F2EBDD]/75">{question}</div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-[#F2EBDD]/80">{agenda.policyImpact}</p>
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
            ["ARRIVE", "A deliberate entry into a structured environment for debate, diplomacy, and learning."],
            ["RESEARCH", "Delegates study dossiers, map policy positions, and sharpen arguments with evidence."],
            ["DEBATE", "The room transforms into a forum of challenge, rebuttal, persuasion, and procedural clarity."],
            ["NEGOTIATE", "Coalitions, concessions, and strategic diplomacy reshape outcomes in real time."],
            ["DELIBERATE", "Members move from arguments to consensus, balancing principle with practicality."],
            ["LEAD", "Participants leave with stronger public voice, policy insight, and leadership confidence."],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-6">
              <p className="text-[10px] font-sans-ui tracking-[0.25em] text-[#C8A45D] uppercase">0{index + 1}</p>
              <h3 className="mt-3 font-serif-editorial text-3xl text-[#F2EBDD]">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#F2EBDD]/75">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8">
          <p className="text-[10px] font-sans-ui tracking-[0.35em] text-[#C8A45D] uppercase">Key activities</p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-[#F2EBDD]/80">
            {[
              "Parliamentary deliberations",
              "Diplomatic simulations",
              "Policy discussions",
              "Negotiations",
              "Crisis simulations",
              "Expert conversations",
              "Collaborative problem-solving",
            ].map((item) => <div key={item} className="rounded border border-[#C8A45D]/20 bg-[#080B16] px-4 py-5">{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  </>
);

const AwardsPage: React.FC = () => (
  <>
    <PageHero eyebrow="Awards" title="EXCELLENCE DESERVES RECOGNITION" />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            ["Best Delegate", "10 points"],
            ["High Commendation", "8 points"],
            ["Special Mention", "5 points"],
            ["Best Reporter", "5 points"],
            ["Best Photographer", "5 points"],
            ["Best Caricaturist", "5 points"],
            ["Best Delegation", "minimum 8 delegates"],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-6">
              <p className="text-[10px] font-sans-ui tracking-[0.25em] text-[#C8A45D] uppercase">Recognition</p>
              <h3 className="mt-3 font-serif-editorial text-3xl text-[#F2EBDD]">{title}</h3>
              <p className="mt-3 font-sans-ui text-sm text-[#D8C8A8] uppercase tracking-[0.2em]">{value}</p>
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
    <PageHero eyebrow="Registration" title="TAKE YOUR SEAT AT THE TABLE" subtitle="Delegate and delegation fees for the 2026 summit." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div key={tier.category} className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-6">
              <p className="text-[10px] font-sans-ui tracking-[0.25em] text-[#C8A45D] uppercase">{tier.category}</p>
              <div className="mt-4 font-serif-editorial text-4xl text-[#C8A45D]">{tier.amount}</div>
              {tier.note ? <p className="mt-3 text-sm text-[#F2EBDD]/75">{tier.note}</p> : null}
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8 text-center">
          <p className="font-sans-ui text-xs tracking-[0.25em] uppercase text-[#C8A45D]">Registration</p>
          <p className="mt-4 font-serif-editorial text-2xl text-[#F2EBDD]">Registration link — TO BE ANNOUNCED</p>
          <Link to="/contact" className="mt-6 inline-flex rounded bg-[#C8A45D] px-6 py-3 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#080B16]">Contact secretariat</Link>
        </div>
      </div>
    </section>
  </>
);

const DelegationPage: React.FC = () => (
  <>
    <PageHero eyebrow="Delegation Policy" title="DELEGATION POLICY" subtitle="Clear standards for participation and recognition." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {delegationPolicyRules.map((rule) => (
          <div key={rule.title} className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-6">
            <p className="text-[10px] font-sans-ui tracking-[0.25em] text-[#C8A45D] uppercase">{rule.title}</p>
            <p className="mt-3 text-lg text-[#F2EBDD]/80">{rule.description}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

const SecretariatPage: React.FC = () => (
  <>
    <PageHero eyebrow="Secretariat" title="THE PEOPLE BEHIND THE SUMMIT" />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8">
          <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Founder President</p>
          <div className="mt-6 flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C8A45D]/15 font-serif-editorial text-2xl text-[#C8A45D]">{secretariatMembers[0].initials}</div>
            <div>
              <h3 className="font-serif-editorial text-4xl text-[#F2EBDD]">{secretariatMembers[0].name}</h3>
              <p className="text-sm text-[#D8C8A8]">{secretariatMembers[0].role}</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {secretariatMembers.slice(1).map((member) => (
            <div key={member.name} className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A45D]/15 font-serif-editorial text-2xl text-[#C8A45D]">{member.initials}</div>
              <h3 className="mt-4 font-serif-editorial text-3xl text-[#F2EBDD]">{member.name}</h3>
              <p className="mt-2 text-sm text-[#D8C8A8]">{member.role}</p>
              <p className="mt-4 text-sm text-[#F2EBDD]/80">{member.phone}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#F2EBDD] p-8 text-[#242424]">
          <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#A9432B] uppercase">Message</p>
          <p className="mt-6 font-serif-editorial text-3xl italic leading-relaxed">“{founderMessage.quote}”</p>
          <p className="mt-6 font-sans-ui text-sm uppercase tracking-[0.2em] text-[#A9432B]">{founderMessage.author}</p>
        </div>
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8">
          <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Secretariat Message</p>
          <p className="mt-4 font-serif-editorial text-3xl italic text-[#F2EBDD]">“{secretariatMessage.quote}”</p>
          <p className="mt-6 text-sm text-[#F2EBDD]/70">{secretariatMessage.content[0]}</p>
        </div>
      </div>
    </section>
  </>
);

const FAQPage: React.FC = () => (
  <>
    <PageHero eyebrow="FAQ" title="FREQUENTLY ASKED QUESTIONS" subtitle="Answers shaped around the official summit information." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {faqsData.map((faq) => (
          <details key={faq.question} className="group rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-5">
            <summary className="cursor-pointer list-none font-sans-ui text-sm font-semibold tracking-[0.08em] uppercase text-[#F2EBDD]">{faq.question}</summary>
            <p className="mt-4 text-sm leading-relaxed text-[#F2EBDD]/75">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  </>
);

const ContactPage: React.FC = () => (
  <>
    <PageHero eyebrow="Contact" title="LET'S CONNECT" subtitle="Reach out to the Secretariat for delegation and participation queries." />
    <section className="py-20 bg-[#080B16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8">
          <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Contact the Secretariat</p>
          <div className="mt-8 space-y-4 text-sm text-[#F2EBDD]/80">
            {secretariatMembers.map((member) => (
              <div key={member.name} className="rounded border border-[#C8A45D]/20 bg-[#080B16] p-4">
                <p className="font-serif-editorial text-2xl text-[#F2EBDD]">{member.name}</p>
                <p className="mt-1 text-[#D8C8A8]">{member.role}</p>
                <p className="mt-3">Call: {member.phone}</p>
                <p>WhatsApp: {member.whatsapp || member.phone}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#C8A45D]/20 bg-[#10162B] p-8">
          <p className="text-[10px] font-sans-ui tracking-[0.3em] text-[#C8A45D] uppercase">Venue</p>
          <h3 className="mt-6 font-serif-editorial text-5xl text-[#F2EBDD]">TO BE ANNOUNCED</h3>
          <p className="mt-4 text-sm text-[#F2EBDD]/75">Venue details will be shared by the organising team once confirmed. The website will be updated accordingly.</p>
          <form className="mt-8 space-y-4">
            <input aria-label="Name" placeholder="Name" className="w-full rounded border border-[#C8A45D]/20 bg-[#080B16] px-4 py-3 text-sm text-[#F2EBDD]" />
            <input aria-label="Email" placeholder="Email" className="w-full rounded border border-[#C8A45D]/20 bg-[#080B16] px-4 py-3 text-sm text-[#F2EBDD]" />
            <textarea aria-label="Message" placeholder="Message" className="min-h-36 w-full rounded border border-[#C8A45D]/20 bg-[#080B16] px-4 py-3 text-sm text-[#F2EBDD]" />
            <button type="button" className="rounded bg-[#C8A45D] px-5 py-3 text-xs font-sans-ui font-bold tracking-[0.2em] uppercase text-[#080B16]">Send inquiry</button>
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
