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
    initials: "AKS",
  },
  {
    name: "Suyash Pandey",
    role: "Core Member",
    phone: "+91 92771 17310",
    initials: "SP",
  },
  {
    name: "Ishan Agrawal",
    role: "Core Member",
    phone: "+91 70815 69808",
    initials: "IA",
  },
];

export const founderMessage = {
  title: "FROM THE DESK OF THE FOUNDER",
  author: "Arush Kumar Singh",
  designation: "Founder President, NITI NAYAK Youth Summit",
  quote:
    "Democracy is not a spectator sport. It demands active inquiry, rigorous debate, and the courage to challenge established assumptions.",
  content: [
    "It is with immense privilege that I welcome you to NITI NAYAK Youth Summit 2026. This conference was conceived out of a fundamental conviction: that the future of governance and policy cannot be left solely to the generations of yesterday. Young people must take their rightful seat at the table of intellectual deliberation.",
    "In an era defined by rapid technological disruption, shifting geopolitical dynamics, and profound economic questions, NITI NAYAK serves as an incubator for future leadership. Here, debate is not merely an exercise in rhetoric, but a serious endeavor to analyze public policy, understand opposing views, and forge meaningful consensus.",
    "I invite each of you to enter these parliamentary chambers with rigor, passion, and an open mind. Question deeply, defend fearlessly, and lead with purpose.",
  ],
};

export const secretariatMessage = {
  title: "A MESSAGE FROM THE SECRETARIAT",
  subtitle: "Organizing Committee, NITI NAYAK Youth Summit 2026",
  quote:
    "We have designed this summit to uphold the highest standards of parliamentary procedure, intellectual rigour, and delegate experience.",
  content: [
    "On behalf of the entire Secretariat, we welcome you to the 2026 edition of NITI NAYAK Youth Summit. Our team has worked tirelessly to curate timely, thought-provoking agendas that challenge delegates to think like seasoned legislators, diplomats, and policy architects.",
    "Organised in collaboration with the Discussion and Debating Society, Faculty of Law, this summit ensures an academic environment backed by formal procedure, dignified debate, and authoritative adjudication.",
    "Whether you are competing for Best Delegate or stepping into a parliamentary simulation for the first time, our commitment is to provide a platform where every voice is heard and every perspective contributes to a richer debate.",
  ],
};
