import React from "react";
import "./Navbar.scss";

// Icons
import MenuClosedIcon from "@mui/icons-material/Menu";

// Buttons
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarButtons">
        <MenuClosedIcon className="navbarIcons" />
        <Button variant="contained">Help</Button>
      </div>

      <span className="title">Trip Planner</span>
    </div>
  );
}

export default Navbar;
