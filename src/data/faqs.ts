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
      "NITI NAYAK Youth Summit 2026 is a premier national platform designed to empower the next generation of leaders, policymakers, diplomats, innovators, and changemakers. Organised in collaboration with the Discussion and Debating Society, Faculty of Law, it brings together students from schools, colleges, and universities across India to engage in high-level policy deliberations, leadership simulations, and diplomatic debate.",
  },
  {
    category: "General",
    question: "When and where is the summit being held?",
    answer:
      "The summit will take place on 1st–2nd November 2026. The venue details will be officially notified by the Organising Secretariat once campus arrangements are finalized.",
  },
  {
    category: "General",
    question: "Who can participate in NITI NAYAK 2026?",
    answer:
      "Participation is open to school students, college and university undergraduates, postgraduates, debaters, and MUN enthusiasts across the country. All five featured committees are open to registered delegates.",
  },
  {
    category: "Committees",
    question: "What committees are featured at NITI NAYAK 2026?",
    answer:
      "The 2026 edition features five specialized simulation forums: 1) All India Political Parties Meet (AIPPM), 2) Lok Sabha, 3) United Nations Commission on the Status of Women (UNCSW), 4) United Nations Human Rights Council (UNHRC), and 5) Mahabharat.",
  },
  {
    category: "Committees",
    question: "What are the official agendas for the committees?",
    answer:
      "The agendas are: AIPPM — Global impact of India's foreign policies in light of recent civilian protests ongoing in India; Lok Sabha — Constitutional provisions of Emergency (Article 356) and scope of misusing constitutional and statutory institutional machinery; UNCSW — Deliberation on the issue of Female Genital Mutilation; UNHRC — Deliberation on the protection of human rights in conflict zones; and Mahabharat — The Battle Between Truth and Falsehood: Duty, Rights, and Justice.",
  },
  {
    category: "Delegation",
    question: "What are the eligibility requirements for the Best Delegation Award?",
    answer:
      "To qualify for consideration for the Best Delegation Award, a delegation must comprise a minimum of 8 registered delegates participating across the summit. This requirement applies uniformly to both institutional delegations and school delegations.",
  },
  {
    category: "Delegation",
    question: "How is the Best Delegation score calculated and ties broken?",
    answer:
      "The Best Delegation score is calculated by the cumulative points secured by all eligible delegates representing that delegation. Points: Best Delegate (10 pts), High Commendation (8 pts), Special Mention (5 pts), and International Press awards for Best Reporter, Best Photographer, and Best Caricaturist (5 pts each). In case of a tie, the tie-breaking sequence is: 1) More High Commendations, 2) More Special Mentions, 3) More Verbal Mentions awarded by Executive Boards. If the tie persists, the decision of the Conference Secretariat is final and binding.",
  },
  {
    category: "Delegation",
    question: "What is the Head Delegate's responsibility?",
    answer:
      "Each delegation must nominate a Head Delegate who is expected to remain present throughout the entire two-day conference. The Head Delegate serves as the primary liaison between the delegation and the Secretariat for all official communication, coordination, and administrative matters.",
  },
  {
    category: "Registration",
    question: "What are the registration fees for delegates?",
    answer:
      "Early Bird rates for School & College delegates are ₹999 per delegate for UN & Indian Committees, and ₹799 per delegate for International Press (IP). For BHU Students (Special Category), the fee is ₹899 for UN & Indian Committees, and ₹749 for International Press (IP).",
  },
  {
    category: "Registration",
    question: "Is accommodation available and what does the package include?",
    answer:
      "Yes, an accommodation package is available at ₹3,000 per participant. This package is inclusive of conference registration, accommodation for the conference duration, and associated hospitality benefits.",
  },
  {
    category: "Registration",
    question: "What is the refund and portfolio alteration policy?",
    answer:
      "Once a portfolio has been allotted and the registration fee has been paid, registration is deemed final. Registration fees are strictly non-refundable and non-transferable under any circumstances, except where otherwise determined by the Conference Secretariat. Requests for changes to delegate names, committees, or portfolios after confirmation shall ordinarily not be entertained.",
  },
  {
    category: "Registration",
    question: "How can I contact the Secretariat for inquiries?",
    answer:
      "You can contact Arush Kumar Singh (Founder President, +91 6387970508), Suryansh Singh (+91 91408 63986), or Riya Singh (+91 87566 13364). You can also follow our official Instagram handle @NITINAYAK_YS.",
  },
];
