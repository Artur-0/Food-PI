import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/cooking.png";
import { Landing } from "./styledLanding";

function LandingPage() {
  return (
    <Landing>
      <nav>
        <Link to="/food">
          <img src={Logo} alt="logo" />
        </Link>
      </nav>
      <h1>Welcome!</h1>
      <p>Find the best recipes here...</p>
      <Link to="/food">
        <h4>Start</h4>
      </Link>
    </Landing>
  );
}

export default LandingPage;
