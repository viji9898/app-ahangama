import React from "react";

const DownloadsSection = () => (
  <section id="downloads" className="ap-section">
    <div className="ap-section-header">
      <h2>Downloads</h2>
      <p>
        Supporting documents for deeper review. Access to detailed financial
        models and CAD drawings can be shared privately.
      </p>
    </div>

    <div className="ap-downloads">
      <div className="ap-download-card">
        <h3>Architect Brief</h3>
        <p>
          High-level design intent, program and site description used for the
          architectural concept.
        </p>
        <button className="ap-btn ap-btn-secondary">Download PDF</button>
      </div>
      <div className="ap-download-card">
        <h3>Concept &amp; Feasibility Deck</h3>
        <p>
          Slides summarising the opportunity, location, concept, financials and
          development plan.
        </p>
        <button className="ap-btn ap-btn-secondary">Download PDF</button>
      </div>
      <div className="ap-download-card">
        <h3>Financial Model (Redacted)</h3>
        <p>
          Excel model with key assumptions and sensitivity scenarios. Shared on
          request.
        </p>
        <button className="ap-btn ap-btn-secondary">Request Access</button>
      </div>
    </div>
  </section>
);

export default DownloadsSection;
