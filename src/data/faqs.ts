export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Committees" | "Delegation" | "Registration";
}

export const faqsData: FAQItem[] = [
  {
    category: "General",
    question: "What is NITI NAYAK Youth Summit 2026?",
    answer:
      "NITI NAYAK Youth Summit 2026 is a national-level youth parliament and policy summit dedicated to empowering young leaders, debaters, and thinkers. Organised in collaboration with the Discussion and Debating Society, Faculty of Law, it brings together young minds to debate public policy, governance, artificial intelligence, human rights, and diplomacy.",
  },
  {
    category: "General",
    question: "When and where is the summit being held?",
    answer:
      "The summit will take place on 9–10 October 2026. The venue details are currently To Be Announced by the organisers.",
  },
  {
    category: "General",
    question: "Who can participate in the summit?",
    answer:
      "Participation is open to school students, university undergraduates, law students, debaters, and MUN enthusiasts across India. Note that certain committees (UNCSW and Jan Manch) are reserved strictly for School Delegates Only.",
  },
  {
    category: "Committees",
    question: "What committees are featured at NITI NAYAK 2026?",
    answer:
      "The summit features seven distinct forums: Lok Sabha, AIPPM, UPLA, UPLA — AI, UNHRC, UNCSW (School Only), and Jan Manch (School Only).",
  },
  {
    category: "Committees",
    question: "Who can participate in UNCSW and Jan Manch?",
    answer:
      "UNCSW (Advancing Gender Equality in the Digital Age) and Jan Manch (Is India's Education System Preparing Youth for the Next Decade?) are exclusively reserved for School Delegates Only.",
  },
  {
    category: "Delegation",
    question: "What is the requirement for Best Delegation?",
    answer:
      "A delegation must have a minimum of 8 delegates to qualify for the Best Delegation Award. This rule applies equally to both Institutional delegations and School delegations.",
  },
  {
    category: "Delegation",
    question: "How is the Best Delegation score calculated?",
    answer:
      "Points are aggregated based on individual committee awards: Best Delegate (10 pts), High Commendation (8 pts), Special Mention (5 pts), and International Press awards for Best Caricaturist, Reporter, and Photographer (5 pts each). Tie-breakers are resolved first by number of Honourable Mentions, then by Verbal awards.",
  },
  {
    category: "Registration",
    question: "Are portfolio fees refundable?",
    answer:
      "No. As per the official Delegation Policy, once a portfolio is reserved, the fee is strictly NON-REFUNDABLE and NON-TRANSFERABLE under any circumstances.",
  },
  {
    category: "Registration",
    question: "What are the student fees?",
    answer:
      "School / College delegates in UN & Indian Committees pay ₹1,099 per delegate, while International Press delegates pay ₹999. BHU students pay ₹999 in UN & Indian Committees and ₹799 in International Press. Accommodation is ₹3,000 per participant.",
  },
  {
    category: "Registration",
    question: "How can I contact the Secretariat for inquiries?",
    answer:
      "You can contact Arush Kumar Singh (Founder President, +91 63879 70508), Suyash Pandey (Core Member, +91 92771 17310), or Ishan Agrawal (Core Member, +91 70815 69808).",
  },
];
