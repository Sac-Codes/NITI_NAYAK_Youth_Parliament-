export interface EventConfig {
  name: string;
  edition: string;
  tagline: string;
  dates: string;
  startDateISO: string; // ISO date string for countdown timer
  venue: string;
  registrationUrl: string; // Empty string triggers "Coming Soon / Contact Organisers" state
  contactNumbers: {
    name: string;
    role: string;
    phone: string;
    whatsapp: string;
  }[];
  collaboration: string;
}

export const eventConfig: EventConfig = {
  name: "NITI NAYAK",
  edition: "Youth Summit 2026",
  tagline: "Ideas • Leadership • Debate • Impact",
  dates: "29–30 August 2026",
  startDateISO: "2026-08-29T00:00:00+05:30",
  venue: "Venue — To Be Announced",
  registrationUrl: "", // Organisers to update with official form link
  collaboration: "Organised in collaboration with the Discussion and Debating Society, Faculty of Law",
  contactNumbers: [
    {
      name: "Arush Kumar Singh",
      role: "Founder President",
      phone: "+91 63879 70508",
      whatsapp: "916387970508",
    },
    {
      name: "Suyash Pandey",
      role: "Core Member",
      phone: "+91 92771 17310",
      whatsapp: "919277117310",
    },
    {
      name: "Ishan Agrawal",
      role: "Core Member",
      phone: "+91 70815 69808",
      whatsapp: "917081569808",
    },
  ],
};
