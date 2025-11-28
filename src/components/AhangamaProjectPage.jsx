import React from "react";
import "../styles/AhangamaProjectPage.css";
import Header from "./Header";
import Hero from "./Hero";
import ConceptSection from "./ConceptSection";
import SiteSection from "./SiteSection";
import DesignSection from "./DesignSection";
import PlanSection from "./PlanSection";
import FeasibilitySection from "./FeasibilitySection";
import CostsSection from "./CostsSection";
import DownloadsSection from "./DownloadsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const SECTIONS = [
  { id: "concept", label: "Concept & Vision" },
  { id: "site", label: "Site & Masterplan" },
  { id: "design", label: "Design & Architecture" },
  { id: "plan", label: "Development Plan" },
  { id: "feasibility", label: "Feasibility & Financials" },
  { id: "costs", label: "Costs & Funding" },
  { id: "downloads", label: "Downloads" },
  { id: "contact", label: "Contact" },
];

const AhangamaProjectPage = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ap-page">
      <Header sections={SECTIONS} onNavClick={scrollToSection} />
      <Hero
        onPrimaryClick={() => scrollToSection("concept")}
        onSecondaryClick={() => scrollToSection("feasibility")}
      />
      <ConceptSection />
      <SiteSection />
      <DesignSection />
      <PlanSection />
      <FeasibilitySection />
      <CostsSection />
      <DownloadsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AhangamaProjectPage;
