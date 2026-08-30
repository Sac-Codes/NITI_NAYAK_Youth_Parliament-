import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface RouteMeta {
  title: string;
  description: string;
}

const routeMetadata: Record<string, RouteMeta> = {
  "/": {
    title: "NITI NAYAK Youth Summit 2026 | National Youth Parliament & Policy Summit",
    description:
      "Official website of NITI NAYAK Youth Summit 2026 (1st–2nd November 2026). India's premier national youth parliament, policy deliberations, and MUN simulations.",
  },
  "/about": {
    title: "About the Summit | NITI NAYAK Youth Summit 2026",
    description:
      "Learn about the mission, vision, and core pillars of NITI NAYAK Youth Summit 2026. Empowering the next generation of Indian policymakers and diplomatic leaders.",
  },
  "/committees": {
    title: "Committees & Agendas | NITI NAYAK Youth Summit 2026",
    description:
      "Explore the 5 official committees of NITI NAYAK 2026: AIPPM, Lok Sabha, UNCSW, UNHRC, and Mahabharat. Review background guides and agendas.",
  },
  "/agendas": {
    title: "Official Agendas | NITI NAYAK Youth Summit 2026",
    description:
      "Detailed policy and deliberation agendas across all 5 committees at NITI NAYAK Youth Summit 2026.",
  },
  "/experience": {
    title: "The Delegate Experience | NITI NAYAK Youth Summit 2026",
    description:
      "Discover the unique journey of a NITI NAYAK 2026 delegate: parliamentary procedure, diplomacy, crisis simulations, and keynote sessions.",
  },
  "/awards": {
    title: "Awards & Scoring Criteria | NITI NAYAK Youth Summit 2026",
    description:
      "Review the comprehensive evaluation rubric, points breakdown, and Best Delegation awards for NITI NAYAK Youth Summit 2026.",
  },
  "/registration": {
    title: "Registration & Delegate Fees | NITI NAYAK Youth Summit 2026",
    description:
      "Register now for NITI NAYAK Youth Summit 2026 (1st–2nd November 2026). View early bird delegate fees, institutional discounts, and accommodation details.",
  },
  "/delegation": {
    title: "Delegation Policy | NITI NAYAK Youth Summit 2026",
    description:
      "Guidelines for institutional, school, and independent delegations at NITI NAYAK Youth Summit 2026.",
  },
  "/secretariat": {
    title: "Secretariat & Leadership | NITI NAYAK Youth Summit 2026",
    description:
      "Meet the Organizing Secretariat, Founder President Arush Kumar Singh, and Executive Board of NITI NAYAK Youth Summit 2026.",
  },
  "/faq": {
    title: "Frequently Asked Questions (FAQ) | NITI NAYAK Youth Summit 2026",
    description:
      "Get answers to common queries regarding registration, committee allotments, accommodation, scoring, and eligibility for NITI NAYAK 2026.",
  },
  "/contact": {
    title: "Contact & Venue | NITI NAYAK Youth Summit 2026",
    description:
      "Contact the NITI NAYAK Secretariat for assistance, institutional partnerships, and venue queries for the 2026 Summit.",
  },
};

export const SEO: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Dynamic matching for committee detail pages: /committees/:id
    let meta = routeMetadata[pathname];
    if (!meta && pathname.startsWith("/committees/")) {
      const committeeKey = pathname.replace("/committees/", "").toUpperCase();
      meta = {
        title: `${committeeKey} Committee Details | NITI NAYAK Youth Summit 2026`,
        description: `Official background guide, agenda, and delegate expectations for ${committeeKey} at NITI NAYAK Youth Summit 2026.`,
      };
    }

    if (meta) {
      document.title = meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", meta.description);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", meta.title);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", meta.description);
      }
    }
  }, [pathname]);

  return null;
};
