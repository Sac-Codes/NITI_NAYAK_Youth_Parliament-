export interface AgendaItem {
  id: string;
  committeeId: string;
  committeeName: string;
  title: string;
  theme: "Foreign Policy & Geopolitics" | "Constitutional Law & Governance" | "Human Rights & Society" | "Ethics & Philosophy";
  eligibility: "Open to All" | "School Delegates Only";
  keyQuestions: string[];
  policyImpact: string;
}

export const agendasData: AgendaItem[] = [
  {
    id: "agenda-ippm",
    committeeId: "ippm",
    committeeName: "IPPM",
    title: "Discussing the global impact of India's foreign policies in light of recent civilian protests ongoing in India",
    theme: "Foreign Policy & Geopolitics",
    eligibility: "Open to All",
    keyQuestions: [
      "How do ongoing domestic civilian protests influence India's bilateral alliances and international strategic credibility?",
      "What diplomatic strategies should India adopt to address foreign commentary on internal domestic affairs while preserving sovereign authority?",
      "How can cross-party political consensus balance national security imperatives with constitutional democratic expression on the global stage?",
    ],
    policyImpact: "National strategic consensus policy whitepaper addressing diplomatic positioning, public diplomacy, and civil discourse.",
  },
  {
    id: "agenda-lok-sabha",
    committeeId: "lok-sabha",
    committeeName: "Lok Sabha",
    title: "Deliberation upon constitutional provisions of Emergency (Article 356) and scope of misusing constitutional and statutory institutional machinery",
    theme: "Constitutional Law & Governance",
    eligibility: "Open to All",
    keyQuestions: [
      "Are existing constitutional and judicial safeguards sufficient to prevent the arbitrary invocation of Article 356?",
      "How can statutory investigatory agencies and institutional machinery remain insulated from executive overreach during federal disputes?",
      "What legislative reforms are required to strengthen cooperative federalism and preserve state government autonomy under constitutional scrutiny?",
    ],
    policyImpact: "Comprehensive parliamentary bill proposing statutory safeguards and institutional checks against arbitrary executive emergency powers.",
  },
  {
    id: "agenda-uncsw",
    committeeId: "uncsw",
    committeeName: "UNCSW",
    title: "Deliberation on the issue of Female Genital Mutilation",
    theme: "Human Rights & Society",
    eligibility: "Open to All",
    keyQuestions: [
      "What international legal enforcement frameworks can effectively eliminate Female Genital Mutilation across jurisdictions with entrenched cultural customs?",
      "How can multilateral organizations fund and coordinate comprehensive medical, psychological, and reconstructive healthcare for survivors?",
      "What educational and community-led initiatives have demonstrated the greatest efficacy in shifting societal attitudes and protecting young girls?",
    ],
    policyImpact: "Global United Nations Resolution establishing binding compliance benchmarks, survivor assistance funds, and cross-border protection protocols.",
  },
  {
    id: "agenda-unhrc",
    committeeId: "unhrc",
    committeeName: "UNHRC",
    title: "Deliberation on the protection of human rights in conflict zones",
    theme: "Human Rights & Society",
    eligibility: "Open to All",
    keyQuestions: [
      "How can the international community enforce compliance with Geneva Conventions when asymmetric warfare imperils civilian populations?",
      "What concrete mechanisms ensure unhindered humanitarian aid corridors and physical protection for medical personnel and non-combatants?",
      "How should international judicial tribunals address war crimes, state accountability, and post-conflict truth and reconciliation?",
    ],
    policyImpact: "UNHRC Resolution establishing humanitarian monitoring mechanisms, safe zones, and enhanced international accountability procedures.",
  },
  {
    id: "agenda-mahabharat",
    committeeId: "mahabharat",
    committeeName: "Mahabharat",
    title: "The Battle Between Truth and Falsehood: Duty, Rights, and Justice",
    theme: "Ethics & Philosophy",
    eligibility: "Open to All",
    keyQuestions: [
      "When personal duty (Swadharma) conflicts with universal moral order (Sanatana Dharma), how should a ruler or statesman navigate action?",
      "What constitutes righteous war and governance when adherence to truth is exploited by deceit and institutional breakdown?",
      "How do the ethical dilemmas of the epic illuminate modern questions of justice, individual conscience, constitutional morality, and the preservation of order?",
    ],
    policyImpact: "Philosophical and jurisprudential declaration synthesizing timeless ethical principles with contemporary challenges in statecraft and leadership.",
  },
];
