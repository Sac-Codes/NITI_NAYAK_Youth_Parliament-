import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { About } from "./components/About";
import { FourPillars } from "./components/FourPillars";
import { WhyParticipate } from "./components/WhyParticipate";
import { Committees } from "./components/Committees";
import { AgendasExplorer } from "./components/AgendasExplorer";
import { DelegateJourney } from "./components/DelegateJourney";
import { Perks } from "./components/Perks";
import { Awards } from "./components/Awards";
import { ScoringSystem } from "./components/ScoringSystem";
import { Registration } from "./components/Registration";
import { DelegationPolicy } from "./components/DelegationPolicy";
import { Secretariat } from "./components/Secretariat";
import { Messages } from "./components/Messages";
import { VenueContact } from "./components/VenueContact";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const handleRegisterClick = () => {
    const registrationSection = document.getElementById("registration");
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B16] text-[#F2EBDD] selection:bg-[#C8A45D] selection:text-[#080B16]">
      <Navbar onRegisterClick={handleRegisterClick} />
      <main>
        <Hero onRegisterClick={handleRegisterClick} />
        <Countdown />
        <About />
        <FourPillars />
        <WhyParticipate />
        <Committees onRegisterClick={handleRegisterClick} />
        <AgendasExplorer />
        <DelegateJourney />
        <Perks />
        <Awards />
        <ScoringSystem />
        <Registration />
        <DelegationPolicy />
        <Secretariat />
        <Messages />
        <VenueContact />
        <FAQ />
        <FinalCTA onRegisterClick={handleRegisterClick} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
