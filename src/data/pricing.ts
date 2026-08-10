export interface PricingTier {
  category: string;
  amount: string;
  note?: string;
  isConfirmed: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    category: "UN & Indian Committees",
    amount: "₹1,099",
    note: "Early Bird Participation Fee for Delegate Portfolios",
    isConfirmed: true,
  },
  {
    category: "BHU Students",
    amount: "₹999 / ₹799",
    note: "UN & Indian Committees: ₹999 | International Press: ₹799",
    isConfirmed: true,
  },
  {
    category: "International Press",
    amount: "₹999",
    note: "Caricaturist, Reporter, Photographer Portfolios",
    isConfirmed: true,
  },
  {
    category: "Accommodation",
    amount: "₹3,000",
    note: "Optional 2-day accommodation details as provided",
    isConfirmed: true,
  },
];

export const scoringSystemData = {
  points: [
    { award: "Best Delegate", points: 10 },
    { award: "High Commendation", points: 8 },
    { award: "Special Mention", points: 5 },
    { award: "Best Reporter", points: 5 },
    { award: "Best Photographer", points: 5 },
    { award: "Best Caricaturist", points: 5 },
  ],
  requirement: "A delegation must have a minimum of 8 delegates to qualify for the Best Delegation Award. This rule applies to both Institutional delegations and School delegations.",
  tieBreakers: [
    "1. More High Commendations",
    "2. More Special Mentions",
    "3. More Verbal Mentions",
    "4. If still tied: Decision of the Conference Secretariat",
  ],
};

export const delegationPolicyRules = [
  {
    title: "HEAD DELEGATE PRESENCE",
    description: "The Head Delegate is expected to remain present throughout the entire two-day conference duration.",
  },
  {
    title: "PORTFOLIO ALTERATIONS",
    description: "No last-minute alterations to delegate details or portfolio allocations will be entertained post confirmation.",
  },
  {
    title: "FEE REFUND POLICY",
    description: "Once a portfolio is reserved, participation fees are strictly NON-REFUNDABLE and NON-TRANSFERABLE under any circumstances.",
  },
  {
    title: "BEST DELEGATION ELIGIBILITY",
    description: "Delegations must maintain a minimum threshold of 8 delegates across committees to qualify for the Best Delegation Trophy.",
  },
];
