export interface Committee {
  id: string;
  name: string;
  fullName: string;
  eligibility: "Open to All" | "School Delegates Only";
  category: "Indian Parliamentary / Executive" | "International Forum" | "State Forum" | "Youth Forum";
  agenda: string;
  focusAreas: string[];
  description: string;
  whyItMatters: string;
  awards: string[];
}

export const committeesData: Committee[] = [
  {
    id: "lok-sabha",
    name: "LOK SABHA",
    fullName: "House of the People — Lok Sabha",
    eligibility: "Open to All",
    category: "Indian Parliamentary / Executive",
    agenda: "Regulation of Artificial Intelligence in India",
    focusAreas: [
      "Governance & Regulatory Frameworks",
      "Employment & Workforce Displacement",
      "National Security & Defense Systems",
      "Innovation & Technology Ecosystems",
      "Fundamental Rights & Citizen Protection",
    ],
    description:
      "The Lok Sabha serves as the premier legislative chamber of the Republic of India. Delegates will debate legislative mechanisms to regulate emerging artificial intelligence technologies while balancing innovation, economic growth, national security, and constitutional freedoms.",
    whyItMatters:
      "As AI transforms Indian governance and economy, legislative clarity is urgent to prevent algorithmic bias, protect digital sovereignty, and safeguard fundamental rights under the Constitution.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "aippm",
    name: "AIPPM",
    fullName: "All India Parties Political Meet",
    eligibility: "Open to All",
    category: "Indian Parliamentary / Executive",
    agenda: "India's Strategic Response to the Age of Artificial Intelligence",
    focusAreas: [
      "Cross-Party Policy Consensus",
      "National Security & Cyber Resilience",
      "Economic Competitiveness & AI Innovation",
      "Employment Strategy & Reskilling",
      "Digital Rights & Ethics",
    ],
    description:
      "A political forum gathering representatives across India's political spectrum to deliberate on high-stakes strategic responses to artificial intelligence, geopolitical tech competition, and national economic security.",
    whyItMatters:
      "AIPPM offers a platform for raw political negotiation and strategy, demanding delegates synthesize ideological perspectives into national action plans.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "upla",
    name: "UPLA",
    fullName: "Uttar Pradesh Legislative Assembly",
    eligibility: "Open to All",
    category: "State Forum",
    agenda: "Transforming Uttar Pradesh into a One Trillion Dollar Economy",
    focusAreas: [
      "Industrial Growth & Investment Corridors",
      "Employment Generation & Youth Upskilling",
      "Infrastructure & Smart Logistics",
      "Inclusive Rural & Urban Development",
    ],
    description:
      "Focusing on the economic powerhouse of northern India, delegates in UPLA address fiscal policy, industrialization, agrarian modernization, and infrastructure reform to propel Uttar Pradesh toward its $1 Trillion GDP milestone.",
    whyItMatters:
      "Uttar Pradesh's economic transformation is central to India's national growth narrative, requiring bold state-level policy interventions.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "upla-ai",
    name: "UPLA — AI",
    fullName: "Uttar Pradesh Legislative Assembly — Special AI Forum",
    eligibility: "Open to All",
    category: "State Forum",
    agenda: "Adoption of Artificial Intelligence in Uttar Pradesh",
    focusAreas: [
      "Smart Governance & E-Service Delivery",
      "Agritech & Rural Development",
      "Healthcare Modernization & Telemedicine",
      "Education & Digital Skill Infrastructure",
      "Public Safety & Law Enforcement Tech",
      "Employment Impact & Mitigation",
    ],
    description:
      "A specialized forum dedicated strictly to state-level AI policy deployment across Uttar Pradesh. Preserving the exact terminology of the official brochure, this committee debates real-world governance, agriculture, healthcare, and educational AI integration.",
    whyItMatters:
      "State-level adoption of AI requires nuanced policy tailoring to address grassroots administrative challenges, digital literacy, and public service delivery.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "unhrc",
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    eligibility: "Open to All",
    category: "International Forum",
    agenda: "Safeguarding Human Rights in the Age of Artificial Intelligence",
    focusAreas: [
      "Algorithmic Bias & Discriminatory Systems",
      "Mass Surveillance & Privacy Violations",
      "Deepfakes, Misinformation & Freedom of Expression",
      "Data Sovereignty & Digital Rights",
      "Equitable Global Access to AI",
    ],
    description:
      "The UN's principal body for human rights. Delegates analyze global digital governance through the international human rights charter, addressing state surveillance, algorithmic discrimination, and deepfake threats.",
    whyItMatters:
      "Unregulated AI poses existential challenges to human dignity, privacy, and democratic freedoms across global jurisdictions.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "uncsw",
    name: "UNCSW",
    fullName: "United Nations Commission on the Status of Women",
    eligibility: "School Delegates Only",
    category: "International Forum",
    agenda: "Advancing Gender Equality in the Digital Age",
    focusAreas: [
      "Gender Bias in Artificial Intelligence",
      "Bridging the Digital Gender Divide",
      "Online Safety & Prevention of Digital Harassment",
      "Promoting Women's Leadership in STEM & Technology",
    ],
    description:
      "Exclusively for school delegates, UNCSW provides a specialized international arena to examine gender disparities in technology access, algorithmic bias, online safety, and female tech leadership.",
    whyItMatters:
      "Empowering young school debaters to tackle gender equity in tech fosters the next generation of inclusive global policymakers.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
  {
    id: "jan-manch",
    name: "JAN MANCH",
    fullName: "Jan Manch — People's Youth Forum",
    eligibility: "School Delegates Only",
    category: "Youth Forum",
    agenda: "Is India's Education System Preparing Youth for the Next Decade?",
    focusAreas: [
      "Rote Learning vs. Practical Problem-Solving",
      "Future-Ready Vocational & Digital Skills",
      "Employability, Apprenticeships & Industry Readiness",
      "Mental Health & Holistic Educational Reform",
    ],
    description:
      "An open, high-energy youth debate platform reserved exclusively for school delegates to critique, re-imagine, and advocate for radical improvements in India's school and higher education ecosystem.",
    whyItMatters:
      "School students are the primary stakeholders of education reform. Jan Manch gives them a direct voice to evaluate whether current curricula meet 21st-century demands.",
    awards: ["Best Delegate", "High Commendation", "Special Mention"],
  },
];
