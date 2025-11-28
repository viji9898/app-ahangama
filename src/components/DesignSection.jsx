import React from "react";

const DesignSection = () => (
  <section id="design" className="ap-section">
    <div className="ap-section-header">
      <h2>Design & Architecture</h2>
      <p>
        A tropical-modernist language with strong edges to the street, shaded
        balconies, planted terraces and a warm courtyard atmosphere along the
        pedestrian spine.
      </p>
    </div>

    <div className="ap-grid ap-grid-3">
      <div>
        <h3>Design language</h3>
        <ul className="ap-list">
          <li>Textured lime plaster and concrete surfaces.</li>
          <li>Timber pergolas and deep overhangs for shade.</li>
          <li>Arched openings and recessed balconies.</li>
          <li>Climbing vines, potted tropical plants, courtyard trees.</li>
        </ul>
      </div>
      <div>
        <h3>Building 01 – Mixed-use block</h3>
        <ul className="ap-list">
          <li>
            <strong>Ground</strong>: corner coffee bar + mini-mart with dual
            street frontage.
          </li>
          <li>
            <strong>Levels 1–3</strong>: three 2BR / 2BA apartments (~770 sqft
            each).
          </li>
          <li>
            Shared vertical circulation via lift + stair in a compact core.
          </li>
        </ul>
      </div>
      <div>
        <h3>Building 02 – Wellness block</h3>
        <ul className="ap-list">
          <li>Dedicated entry from the pedestrian spine.</li>
          <li>Stacked studios (yoga, pilates, spin / movement).</li>
          <li>Potential rooftop deck for open-air classes.</li>
          <li>Ground-floor health café or smoothie bar.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default DesignSection;
