import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/devkraft-logo.png";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const handleToggle = () => setNavToggle(!navToggle);
  return (
    <nav>
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <img src={logo} alt="Team Devkraft" className="logo" />
        </NavLink>
        <ul className={"nav-menu" + (navToggle ? " active" : "")}>
          <li className="nav-item">
            <NavLink
              onClick={handleToggle}
              exact
              to="/about"
              className="nav-link"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              onClick={handleToggle}
              exact
              to="/team"
              className="nav-link"
            >
              Team
            </NavLink>
          </li>
          <li className="nav-item last-item">
            <NavLink
              onClick={handleToggle}
              exact
              to="/contact"
              className="nav-link"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleToggle}>
          {navToggle ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
