import React from "react";

const PlanSection = () => (
  <section id="plan" className="ap-section ap-section-alt">
    <div className="ap-section-header">
      <h2>Development Plan & Approvals</h2>
      <p>
        A straightforward G + 3 mixed-use build following UDA and local
        authority guidelines, structured into clear phases from design to
        opening.
      </p>
    </div>

    <div className="ap-grid ap-grid-2">
      <div>
        <h3>Phasing</h3>
        <ol className="ap-list ap-list-ol">
          <li>
            <strong>Phase 1 – Design & approvals</strong>
            <br />
            Concept development, architectural design, planning and building
            approvals.
          </li>
          <li>
            <strong>Phase 2 – Structure</strong>
            <br />
            Substructure, superstructure, core and shell.
          </li>
          <li>
            <strong>Phase 3 – MEP & fit-out</strong>
            <br />
            Services, interior fit-out, equipment and façade.
          </li>
          <li>
            <strong>Phase 4 – Commissioning & opening</strong>
            <br />
            Testing, soft opening, ramp-up of operations.
          </li>
        </ol>
      </div>
      <div>
        <h3>Regulatory notes</h3>
        <ul className="ap-list">
          <li>UDA planning approval and local authority building permit.</li>
          <li>
            Compliance with road reservations on main and by-roads as per
            development regulations.
          </li>
          <li>
            Apartments brought under the Apartment Ownership / Condominium
            framework if units are to be stratified and sold.
          </li>
          <li>
            Condominium plan and management corporation post-completion (if sold
            to multiple owners).
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default PlanSection;
