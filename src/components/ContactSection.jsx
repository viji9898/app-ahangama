import React from "react";

const ContactSection = () => (
  <section id="contact" className="ap-section ap-section-alt">
    <div className="ap-section-header">
      <h2>Contact & Expression of Interest</h2>
      <p>
        For architects, lenders, co-investors and operators who would like to
        review the project in more detail.
      </p>
    </div>

    <div className="ap-grid ap-grid-2">
      <div>
        <h3>Who should reach out</h3>
        <ul className="ap-list">
          <li>Architects and design collaborators.</li>
          <li>Potential equity partners and lenders.</li>
          <li>
            Operators or brands in coffee, wellness or boutique hospitality.
          </li>
        </ul>
        <p className="ap-note">
          Please share your background and how you see yourself fitting into the
          project (design, funding, operations, advisory, etc.).
        </p>
      </div>
      <div>
        <form
          className="ap-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submission handling to be implemented.");
          }}
        >
          <div className="ap-form-row">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
          </div>
          <div className="ap-form-row">
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </div>
          <div className="ap-form-row">
            <label>
              Role
              <select name="role" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option value="investor">Investor / Co-investor</option>
                <option value="lender">Lender / Bank</option>
                <option value="architect">Architect / Designer</option>
                <option value="operator">
                  Operator (Coffee / Wellness / Hospitality)
                </option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="ap-form-row">
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us a bit about yourself and your interest in this project."
              />
            </label>
          </div>
          <button type="submit" className="ap-btn ap-btn-primary">
            Submit Interest
          </button>
          <p className="ap-form-note">
            Or reach out directly via email / WhatsApp once you plug in your
            contact details here.
          </p>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
