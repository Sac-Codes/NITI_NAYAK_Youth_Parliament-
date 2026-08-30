export interface EventConfig {
  name: string;
  edition: string;
  tagline: string;
  dates: string;
  startDateISO: string;
  venue: string;
  registrationUrl: string;
  socialHandle: string;
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
  dates: "1st–2nd November 2026",
  startDateISO: "2026-11-01T09:00:00+05:30",
  venue: "To Be Announced",
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd_gP1u_nNX0S9iRuEtxhGCPMCkrpraxoRKiUygJtpehSRHAw/viewform?pli=1",
  socialHandle: "@NITINAYAK_YS",
  collaboration: "Organised in collaboration with the Discussion and Debating Society, Faculty of Law",
  contactNumbers: [
    {
      name: "Arush Kumar Singh",
      role: "Founder President",
      phone: "+91 63879 70508",
      whatsapp: "916387970508",
    },
    {
      name: "Suryansh Singh",
      role: "Secretariat Member",
      phone: "+91 91408 63986",
      whatsapp: "919140863986",
    },
    {
      name: "Riya Singh",
      role: "Secretariat Member",
      phone: "+91 87566 13364",
      whatsapp: "918756613364",
    },
  ],
};
