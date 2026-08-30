export interface Committee {
  id: string;
  name: string;
  fullName: string;
  eligibility: "Open to All" | "School Delegates Only";
  category: "Indian Parliamentary / Executive" | "International Forum" | "Special Simulation";
  agenda: string;
  focusAreas: string[];
  description: string;
  whyItMatters: string;
  awards: string[];
}

export const committeesData: Committee[] = [
  {
    id: "ippm",
    name: "IPPM",
    fullName: "All India Political Parties Meet",
    eligibility: "Open to All",
    category: "Indian Parliamentary / Executive",
    agenda: "Discussing the global impact of India's foreign policies in light of recent civilian protests ongoing in India.",
    focusAreas: [
      "Foreign Policy & International Diplomatic Repercussions",
      "Civilian Protests & Constitutional Freedom of Expression",
      "National Security & Global Perception Management",
      "Cross-Party Strategic Consensus on Geopolitics",
      "Democratic Governance & Diplomatic Immunity",
    ],
    description:
      "A premier political forum gathering representatives across India's political spectrum. Delegates analyze the international ramifications of domestic civil movements, evaluating how foreign bilateral relationships and international diplomacy intersect with domestic public dissent.",
    whyItMatters:
      "In an interconnected world, domestic political developments and civilian movements directly influence foreign relations, strategic alliances, and national stature on the global stage.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "lok-sabha",
    name: "LOK SABHA",
    fullName: "House of the People — Lok Sabha",
    eligibility: "Open to All",
    category: "Indian Parliamentary / Executive",
    agenda: "Deliberation upon constitutional provisions of Emergency (Article 356) and scope of misusing constitutional and statutory institutional machinery.",
    focusAreas: [
      "Constitutional Framework of Article 356 & State Emergency",
      "Federalism, Centre-State Balance & State Autonomy",
      "Judicial Review & Supreme Court Jurisprudence (S.R. Bommai Precedent)",
      "Misuse of Statutory & Central Institutional Machinery",
      "Legislative Safeguards for Democratic Decentralization",
    ],
    description:
      "The primary legislative chamber of the Republic of India. Delegates deliberate on high-stakes constitutional law, examining the scope, historical precedents, and contemporary safeguards regarding President's Rule and the integrity of democratic state machinery.",
    whyItMatters:
      "Preserving federal equilibrium and preventing partisan overreach through constitutional machinery is foundational to upholding India's democratic fabric and constitutional morality.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "uncsw",
    name: "UNCSW",
    fullName: "United Nations Commission on the Status of Women",
    eligibility: "Open to All",
    category: "International Forum",
    agenda: "Deliberation on the issue of Female Genital Mutilation",
    focusAreas: [
      "Universal Eradication of Female Genital Mutilation (FGM)",
      "Bodily Autonomy & Fundamental Human Rights of Girls & Women",
      "Cultural & Traditional Practices vs International Legal Standards",
      "Healthcare Intervention, Psychological Support & Medical Trauma",
      "Grassroots Community Engagement & Statutory Enforcement",
    ],
    description:
      "The principal global intergovernmental body dedicated exclusively to the promotion of gender equality and the empowerment of women. Delegates formulate actionable resolutions to eradicate harmful traditional practices and protect bodily integrity worldwide.",
    whyItMatters:
      "Female Genital Mutilation violates basic human rights, bodily autonomy, and health, demanding coordinated global legal action, grassroots education, and medical rehabilitation frameworks.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "unhrc",
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    eligibility: "Open to All",
    category: "International Forum",
    agenda: "Deliberation on the protection of human rights in conflict zones",
    focusAreas: [
      "Geneva Conventions & International Humanitarian Law (IHL)",
      "Protection of Civilians, Healthcare Workers & Vulnerable Groups",
      "Accountability & War Crimes Investigation Mechanisms",
      "Humanitarian Corridors & Unimpeded Aid Delivery",
      "Post-Conflict Rehabilitation, Reparations & Transitional Justice",
    ],
    description:
      "The United Nations' lead council for upholding human dignity and international conventions. Delegates confront active crises in conflict territories to enforce humanitarian law, investigate atrocities, and safeguard civilian populations.",
    whyItMatters:
      "Contemporary conflicts increasingly endanger civilian lives and infrastructure, requiring urgent multilateral enforcement of human rights protections and humanitarian assistance.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "mahabharat",
    name: "MAHABHARAT",
    fullName: "Mahabharat — Historical & Mythological Simulation",
    eligibility: "Open to All",
    category: "Special Simulation",
    agenda: "The Battle Between Truth and Falsehood: Duty, Rights, and Justice",
    focusAreas: [
      "Dharma vs Adharma: Navigating Moral Ambiguity & Ethics in Governance",
      "The Concept of Rajdharma & Duty of the State toward Citizens",
      "Individual Moral Rights vs Societal Order & Constitutional Obligations",
      "Conflict Resolution, Diplomacy & Ethical Compromise in Times of Crisis",
      "Philosophical Deliberation on Truth, Justice & Righteous Action",
    ],
    description:
      "A unique, immersive simulation based on the timeless philosophical epic. Delegates step into the roles of epic characters and statesmen to deliberate on timeless questions of duty (Dharma), individual rights, justice, statecraft, and the eternal struggle between truth and falsehood.",
    whyItMatters:
      "The Mahabharat provides profound civilizational wisdom and ethical dilemmas that mirror modern statecraft, demanding nuanced critical reasoning, moral clarity, and strategic eloquence.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
];
