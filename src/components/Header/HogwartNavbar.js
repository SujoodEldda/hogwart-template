import React from "react";
import "./HogwartNavbar.css";
import { Link } from "react-router-dom";

const HogwartNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </nav>
  );
};

export default HogwartNavbar;
