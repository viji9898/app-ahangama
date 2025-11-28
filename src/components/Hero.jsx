import React from "react";

const Hero = ({ onPrimaryClick, onSecondaryClick }) => (
  <section className="ap-hero">
    <div className="ap-hero-inner">
      <div className="ap-hero-text">
        <p className="ap-hero-kicker">Project Overview</p>
        <h1 className="ap-hero-title">Ahangama Micro-Village</h1>
        <p className="ap-hero-subtitle">
          A walkable mixed-use courtyard development 20 metres from the beach in
          Ahangama, combining coffee, convenience, wellness and long-stay
          apartments.
        </p>

        <div className="ap-hero-stats">
          <div className="ap-stat">
            <span className="ap-stat-label">Plot</span>
            <span className="ap-stat-value">22.41 perches</span>
            <span className="ap-stat-note">~11.6 perches buildable</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat-label">Built Form</span>
            <span className="ap-stat-value">G + 3</span>
            <span className="ap-stat-note">Mixed-use, corner site</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat-label">Program</span>
            <span className="ap-stat-value">F&B · Wellness · 3 Apts</span>
            <span className="ap-stat-note">Retail + STR/long-stay</span>
          </div>
          <div className="ap-stat">
            <span className="ap-stat-label">Status</span>
            <span className="ap-stat-value">Concept & Feasibility</span>
            <span className="ap-stat-note">Pre-development</span>
          </div>
        </div>

        <div className="ap-hero-actions">
          <button className="ap-btn ap-btn-primary" onClick={onPrimaryClick}>
            View Full Concept
          </button>
          <button
            className="ap-btn ap-btn-secondary"
            onClick={onSecondaryClick}
          >
            Jump to Financials
          </button>
        </div>
      </div>

      <div className="ap-hero-card">
        <h3>At a glance</h3>
        <ul>
          <li>20 m from the beach, high footfall location</li>
          <li>Road frontage on 3 sides (main + by-road)</li>
          <li>Ground: coffee bar + mini-mart + wellness entry</li>
          <li>Upper floors: 3 x 2BR / 2BA apartments</li>
          <li>Pedestrian spine linking retail and wellness</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Hero;
