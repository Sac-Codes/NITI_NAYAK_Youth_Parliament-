export interface PricingTier {
  category: string;
  amount: string;
  note?: string;
  badge?: string;
  isConfirmed: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    category: "School & College Delegates",
    amount: "₹999",
    note: "UN Committees & Indian Committees (Early Bird Participation Fee)",
    badge: "General Category",
    isConfirmed: true,
  },
  {
    category: "International Press (IP)",
    amount: "₹799",
    note: "Caricaturist, Reporter & Photographer Portfolios (School & College)",
    badge: "Journalism & Media",
    isConfirmed: true,
  },
  {
    category: "BHU Students — Special Category",
    amount: "₹899",
    note: "UN & Indian Committees: ₹899 | International Press (IP): ₹749",
    badge: "BHU Student Discount",
    isConfirmed: true,
  },
  {
    category: "Accommodation Package",
    amount: "₹3,000",
    note: "Inclusive of conference registration, accommodation, and associated hospitality benefits",
    badge: "All-Inclusive Package",
    isConfirmed: true,
  },
];

export const scoringSystemData = {
  points: [
    { award: "Best Delegate (Committees)", points: 10, note: "Awarded at the discretion of the Executive Board" },
    { award: "High Commendation (Committees)", points: 8, note: "Awarded at the discretion of the Executive Board" },
    { award: "Special Mention (Committees)", points: 5, note: "Awarded at the discretion of the Executive Board" },
    { award: "Best Reporter (International Press)", points: 5, note: "Awarded for exceptional journalism & reporting" },
    { award: "Best Photographer (International Press)", points: 5, note: "Awarded for outstanding photojournalism" },
    { award: "Best Caricaturist (International Press)", points: 5, note: "Awarded for editorial satire & illustration" },
  ],
  requirement:
    "A delegation must comprise a minimum of 8 registered delegates to qualify for consideration for the Best Delegation Award. This criterion applies uniformly to Institutional delegations and School delegations.",
  tieBreakers: [
    "1. Greater number of High Commendations secured",
    "2. Greater number of Special Mentions secured",
    "3. Greater number of Verbal Mentions awarded by Executive Boards",
    "4. If the tie persists after all prescribed criteria: The decision of the Conference Secretariat is final and binding",
  ],
};

export const delegationPolicyRules = [
  {
    title: "HEAD DELEGATE RESPONSIBILITY",
    description:
      "Each delegation shall nominate a Head Delegate who is expected to remain present throughout the entire conference. The Head Delegate serves as the primary liaison between the Delegation and the Conference Secretariat for all official communication, coordination, and administrative matters.",
  },
  {
    title: "PORTFOLIO & REGISTRATION FINALITY",
    description:
      "Delegations are required to thoroughly verify registration details before submission. Requests for alterations to delegate names, committee allocations, or portfolios after confirmation shall ordinarily not be entertained.",
  },
  {
    title: "NON-REFUNDABLE & NON-TRANSFERABLE FEES",
    description:
      "Once a portfolio has been allotted and the registration fee has been paid, registration is deemed final. Registration fees are strictly non-refundable and non-transferable, except where otherwise determined by the Conference Secretariat.",
  },
  {
    title: "BEST DELEGATION ELIGIBILITY (MIN. 8 DELEGATES)",
    description:
      "A delegation must comprise a minimum of 8 registered delegates across the summit to qualify for consideration for the Best Delegation Award. This criterion applies uniformly to both institutional delegations and school delegations.",
  },
  {
    title: "SECRETARIAT AUTHORITY & DISCRETION",
    description:
      "The Conference Secretariat reserves the exclusive right to interpret, amend, and enforce the Delegation Policy whenever necessary in the interest of the conference. Decisions regarding registrations, portfolios, eligibility, awards, and conference procedures are final and binding.",
  },
];
