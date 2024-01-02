import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#0ef" : "white",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <div className="nav">
      <div className="title">
        <img
          src="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="portfolio"
          height="80px"
          width="350px"
        />
      </div>
      <div className="menu">
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/about" style={navLinkStyles}>
          About
        </NavLink>
        <NavLink to="/skills" style={navLinkStyles}>
          Skills
        </NavLink>
        <NavLink to="/projects" style={navLinkStyles}>
          Projects
        </NavLink>
        <NavLink to="/contact" style={navLinkStyles}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
