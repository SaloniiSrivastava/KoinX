import React, { useState } from "react";
import "./css/NavBar.css";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
     
      <div className="navbar-logo">
      <img src="https://www.koinx.com/_next/static/media/Logo.99e6a1dc.svg" alt="logo"/>
      </div>

      {/* Menu Items */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#home">CryptoTaxes</a>
        </li>
        <li>
          <a href="#trending">Free Tools</a>
        </li>
        <li>
          <a href="#about">Resource Center</a>
        </li>
        <li>
          <button className="btn">Get Started</button>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="navbar-toggle" onClick={handleToggle}>
        <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;
