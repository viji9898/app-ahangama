import React from "react";

const Footer = () => (
  <footer className="ap-footer">
    <div className="ap-footer-inner">
      <span>© {new Date().getFullYear()} Ahangama Micro-Village</span>
      <button
        className="ap-footer-link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </button>
    </div>
  </footer>
);

export default Footer;
