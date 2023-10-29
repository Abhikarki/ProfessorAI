import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/navbar.css"; // Import the CSS file for styling

function Navbar(props) {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <button className="home-button" onClick={() => handleNavigation("/")}>
          Home
        </button>
        <div className="profile-icon">
          {/* You can place your profile icon or avatar here */}
          <img src="/img/profile.jpg" alt="Profile" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
