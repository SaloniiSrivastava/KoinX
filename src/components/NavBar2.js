import React, { useState } from "react";
import "./css/NavBar2.css";

const NavBar2 = () => {
  
  
  return (
    <nav className="navbar2">
     

      <ul className="navbar-menu">
        <li className="active">
          <a href="#home">Overview</a>
        </li>
        <li>
          <a href="#trending">Fundamentals</a>
        </li>
        <li>
          <a href="#about">News Insights</a>
        </li>
        <li>
        <a href="#about">Team</a>
        </li>
        <li>
        <a href="#about">Technicals</a>
        </li>
        <li>
        <a href="#about">Tokenomics</a>
        </li>
      </ul>

      
    </nav>
  );
};

export default NavBar2;
