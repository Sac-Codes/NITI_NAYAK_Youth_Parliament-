export interface SecretariatMember {
  name: string;
  role: string;
  phone: string;
  whatsapp?: string;
  initials: string;
}

export const secretariatMembers: SecretariatMember[] = [
  {
    name: "Arush Kumar Singh",
    role: "Founder President",
    phone: "+91 63879 70508",
    whatsapp: "+91 63879 70508",
    initials: "AKS",
  },
  {
    name: "Suryansh Singh",
    role: "Secretariat Member",
    phone: "+91 91408 63986",
    whatsapp: "+91 91408 63986",
    initials: "SS",
  },
  {
    name: "Riya Singh",
    role: "Secretariat Member",
    phone: "+91 87566 13364",
    whatsapp: "+91 87566 13364",
    initials: "RS",
  },
];

export const founderMessage = {
  title: "FROM THE DESK OF THE FOUNDER",
  author: "Arush Kumar Singh",
  designation: "Founder President, NITI NAYAK Youth Summit",
  quote:
    "Democracy is not a spectator sport. It demands active inquiry, rigorous debate, and the courage to transform bold ideas into decisive action.",
  content: [
    "It is with immense privilege that I welcome you to NITI NAYAK Youth Summit 2026. This summit was founded on a fundamental conviction: that the future of governance, policy, and national progress cannot be left solely to the generations of yesterday. Young citizens must step forward and claim their rightful seat at the table of policy deliberation.",
    "NITI NAYAK 2026 is designed as a premier national platform to empower the next generation of leaders, policymakers, diplomats, innovators, and changemakers. Here, debate is not merely an exercise in rhetoric, but an authentic endeavor to question conventional perspectives, analyze public policy with evidence, respect diverse viewpoints, and forge practical solutions.",
    "As we gather on 1st–2nd November 2026, I invite every delegate to engage with curiosity, speak with conviction, listen with empathy, and lead with purpose. Let us together contribute to a stronger, more inclusive, innovative, and progressive India.",
  ],
};

export const secretariatMessage = {
  title: "A MESSAGE FROM THE SECRETARIAT",
  subtitle: "Organising Secretariat, NITI NAYAK Youth Summit 2026",
  quote:
    "The true measure of our summit's success is not merely the awards won, but the knowledge gained, confidence built, friendships formed, and values carried forward.",
  content: [
    "On behalf of the Conference Secretariat, we extend our warmest welcome to all Delegates, Faculty Advisors, Distinguished Guests, and Participants to NITI NAYAK Youth Summit 2026.",
    "Founded on the pillars of IDEAS • LEADERSHIP • DEBATE • IMPACT, this edition features five carefully curated committees spanning Indian Parliamentary politics, constitutional emergency provisions, global women's rights, international humanitarian law in conflict zones, and the eternal ethical statecraft of the Mahabharat.",
    "We urge every participant to embrace critical thinking, constructive debate, evidence-based reasoning, and ethical leadership. Enter the committee rooms with courage, collaborate with integrity, and let your deliberations spark positive change.",
  ],
};
