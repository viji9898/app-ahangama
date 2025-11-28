import React from "react";

const CostsSection = () => (
  <section id="costs" className="ap-section ap-section-alt">
    <div className="ap-section-header">
      <h2>Costs & Funding Structure</h2>
      <p>
        Indicative development budget and funding plan. Exact costs will be
        validated via QS and contractor pricing.
      </p>
    </div>

    <div className="ap-grid ap-grid-2">
      <div>
        <h3>Development cost summary</h3>
        <table className="ap-table">
          <tbody>
            <tr>
              <td>Land</td>
              <td>Already owned / To be confirmed</td>
            </tr>
            <tr>
              <td>Construction</td>
              <td>Structure, finishes, external works</td>
            </tr>
            <tr>
              <td>Professional fees</td>
              <td>Architect, MEP, QS, legal, approvals</td>
            </tr>
            <tr>
              <td>FF&amp;E</td>
              <td>Furniture, fixtures, equipment</td>
            </tr>
            <tr>
              <td>Contingency</td>
              <td>Typically 8–12 % of total</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>Funding plan (illustrative)</h3>
        <ul className="ap-list">
          <li>
            <strong>Sponsor equity</strong> – project initiation and a
            significant equity stake.
          </li>
          <li>
            <strong>Senior debt</strong> – local bank financing for a portion of
            construction cost.
          </li>
          <li>
            <strong>Co-investor equity</strong> – potential minority partners
            aligned with the long-term hold strategy.
          </li>
        </ul>
        <p className="ap-note">
          Investor return structure (preferred return and/or profit share) can
          be tailored depending on ticket size and horizon.
        </p>
      </div>
    </div>
  </section>
);

export default CostsSection;
