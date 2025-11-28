import React from "react";

const Header = ({ sections, onNavClick }) => (
  <header className="ap-header">
    <div className="ap-header-inner">
      <div className="ap-logo">
        <span className="ap-logo-title">ahangama.viji.com</span>
        <span className="ap-logo-sub">Ahangama Micro-Village</span>
      </div>
      <nav className="ap-nav">
        {sections.map((s) => (
          <button
            key={s.id}
            className="ap-nav-item"
            onClick={() => onNavClick(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
