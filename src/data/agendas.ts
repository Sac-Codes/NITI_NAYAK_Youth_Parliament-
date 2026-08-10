export interface AgendaItem {
  id: string;
  committeeId: string;
  committeeName: string;
  title: string;
  theme: "Artificial Intelligence" | "Economy & Growth" | "Human Rights & Society" | "Education & Youth";
  eligibility: "Open to All" | "School Delegates Only";
  keyQuestions: string[];
  policyImpact: string;
}

export const agendasData: AgendaItem[] = [
  {
    id: "agenda-lok-sabha",
    committeeId: "lok-sabha",
    committeeName: "Lok Sabha",
    title: "Regulation of Artificial Intelligence in India",
    theme: "Artificial Intelligence",
    eligibility: "Open to All",
    keyQuestions: [
      "Should India enact comprehensive AI statutory regulations or adopt light-touch sandbox frameworks?",
      "How to protect national security against deepfakes and autonomous cyber threats?",
      "What constitutional safeguards guarantee protection against algorithmic bias in governance?",
    ],
    policyImpact: "National legislative blueprint for AI regulation and fundamental rights protection.",
  },
  {
    id: "agenda-aippm",
    committeeId: "aippm",
    committeeName: "AIPPM",
    title: "India's Strategic Response to the Age of Artificial Intelligence",
    theme: "Artificial Intelligence",
    eligibility: "Open to All",
    keyQuestions: [
      "How can political consensus foster sovereign AI infrastructure and domestic chip development?",
      "What cross-party strategies will mitigate AI-driven job displacement across India's workforce?",
      "How should India position itself in global AI governance standards?",
    ],
    policyImpact: "Cross-party strategic consensus on tech sovereignty and economic resilience.",
  },
  {
    id: "agenda-upla",
    committeeId: "upla",
    committeeName: "UPLA",
    title: "Transforming Uttar Pradesh into a One Trillion Dollar Economy",
    theme: "Economy & Growth",
    eligibility: "Open to All",
    keyQuestions: [
      "What tax, infrastructure, and land incentives will catalyze industrial corridor development in UP?",
      "How can agricultural supply chains be modernized to boost state GDP contribution?",
      "What fiscal policies ensure inclusive development across eastern and western UP sub-regions?",
    ],
    policyImpact: "State economic reform strategy targeting UP's $1 Trillion GDP milestone.",
  },
  {
    id: "agenda-upla-ai",
    committeeId: "upla-ai",
    committeeName: "UPLA — AI",
    title: "Adoption of Artificial Intelligence in Uttar Pradesh",
    theme: "Artificial Intelligence",
    eligibility: "Open to All",
    keyQuestions: [
      "How can AI be leveraged for agritech, crop prediction, and rural disaster management in UP?",
      "What e-governance AI models can eliminate administrative corruption and delay in public service?",
      "How can UP build digital literacy and AI infrastructure in tier-2 and tier-3 cities?",
    ],
    policyImpact: "State-level action plan for grassroots AI implementation across key public sectors.",
  },
  {
    id: "agenda-unhrc",
    committeeId: "unhrc",
    committeeName: "UNHRC",
    title: "Safeguarding Human Rights in the Age of Artificial Intelligence",
    theme: "Human Rights & Society",
    eligibility: "Open to All",
    keyQuestions: [
      "How do global privacy treaties apply to mass biometric surveillance and AI data mining?",
      "What international legal mechanisms address AI deepfakes used for political disinformation?",
      "How to prevent tech monopolies from creating global digital inequities?",
    ],
    policyImpact: "International Resolution establishing global human rights boundaries for AI systems.",
  },
  {
    id: "agenda-uncsw",
    committeeId: "uncsw",
    committeeName: "UNCSW",
    title: "Advancing Gender Equality in the Digital Age",
    theme: "Human Rights & Society",
    eligibility: "School Delegates Only",
    keyQuestions: [
      "How does algorithmic recruitment bias disadvantage women in STEM careers?",
      "What international safeguards effectively combat tech-facilitated gender violence and online abuse?",
      "How to expand digital literacy and internet access for girls in developing economies?",
    ],
    policyImpact: "Global strategy framework for gender-inclusive technological empowerment.",
  },
  {
    id: "agenda-jan-manch",
    committeeId: "jan-manch",
    committeeName: "Jan Manch",
    title: "Is India's Education System Preparing Youth for the Next Decade?",
    theme: "Education & Youth",
    eligibility: "School Delegates Only",
    keyQuestions: [
      "Does the current curriculum place excessive emphasis on rote examination vs critical thinking?",
      "How can practical coding, AI literacy, and vocational skills be integrated early into schools?",
      "What policy measures reduce academic stress and support youth mental health?",
    ],
    policyImpact: "Youth-led whitepaper outlining systemic educational and curriculum reforms.",
  },
];
