import React from "react";

const FeasibilitySection = () => (
  <section id="feasibility" className="ap-section">
    <div className="ap-section-header">
      <h2>Feasibility & Financials</h2>
      <p>
        High-level feasibility based on conservative revenue assumptions across
        coffee, mini-mart, wellness and apartments. Detailed Excel model
        available on request.
      </p>
    </div>

    <div className="ap-grid ap-grid-2">
      <div>
        <h3>Headline metrics (illustrative)</h3>
        <table className="ap-table">
          <tbody>
            <tr>
              <td>Total project cost</td>
              <td>LKR XX.X m</td>
            </tr>
            <tr>
              <td>Stabilised annual NOI</td>
              <td>LKR XX.X m</td>
            </tr>
            <tr>
              <td>Target yield on cost</td>
              <td>~XX–XX %</td>
            </tr>
            <tr>
              <td>Payback period</td>
              <td>~X–Y years</td>
            </tr>
          </tbody>
        </table>
        <p className="ap-note">
          Exact numbers will be refined as final BoQ, rental rates and operating
          assumptions are locked with the design team.
        </p>
      </div>
      <div>
        <h3>Revenue streams</h3>
        <ul className="ap-list">
          <li>
            <strong>Coffee bar</strong> – daily ticket, takeaway and seated
            trade.
          </li>
          <li>
            <strong>Mini-mart</strong> – essential groceries, surf / beach
            items.
          </li>
          <li>
            <strong>Wellness</strong> – memberships, drop-ins, class packs and
            events.
          </li>
          <li>
            <strong>Apartments</strong> – short- and long-stay rentals,
            potentially hybrid STR + seasonal long let.
          </li>
        </ul>

        <h3>Scenarios</h3>
        <ul className="ap-list">
          <li>
            <strong>Base case</strong> – conservative ADR and occupancy,
            moderate F&B / wellness volumes.
          </li>
          <li>
            <strong>Downside</strong> – lower occupancy and ticket size,
            stress-tested for resilience.
          </li>
          <li>
            <strong>Upside</strong> – higher yields driven by strong brand,
            repeat long-stay guests and wellness demand.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default FeasibilitySection;
