import React from "react";

const SiteSection = () => (
  <section id="site" className="ap-section ap-section-alt">
    <div className="ap-section-header">
      <h2>Site & Masterplan</h2>
      <p>
        A rectangular buildable footprint shaped by main-road and by-road
        reservations, optimised for a simple G + 3 massing with two buildings
        and a central spine.
      </p>
    </div>

    <div className="ap-grid ap-grid-2">
      <div>
        <h3>Site facts</h3>
        <table className="ap-table">
          <tbody>
            <tr>
              <td>Land extent</td>
              <td>22.41 perches (gross)</td>
            </tr>
            <tr>
              <td>Buildable area</td>
              <td>~11.6 perches after road reservations</td>
            </tr>
            <tr>
              <td>Approx. footprint</td>
              <td>14 m × 20 m rectangular block</td>
            </tr>
            <tr>
              <td>Road reservations</td>
              <td>50 ft (main road) · 25 ft (by-road)</td>
            </tr>
            <tr>
              <td>Frontage</td>
              <td>3 road edges + 1 party boundary</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>Masterplan structure</h3>
        <ul className="ap-list">
          <li>
            <strong>Building 01</strong> – mixed-use: coffee + mini-mart +
            apartments.
          </li>
          <li>
            <strong>Building 02</strong> – wellness block: studios and
            rooftop-focused use.
          </li>
          <li>
            <strong>Pedestrian spine</strong> – 4 &ndash; 4.5 m wide,
            landscaped, becomes main circulation and social space.
          </li>
          <li>
            Services (MEP, STP, water tanks, genset) embedded under or above the
            spine where appropriate.
          </li>
        </ul>
        <div className="ap-callout">
          <strong>Note:</strong> Diagrammatic plans and detailed layouts will
          sit here as the architectural package develops.
        </div>
      </div>
    </div>
  </section>
);

export default SiteSection;
