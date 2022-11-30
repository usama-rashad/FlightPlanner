import React, { useState } from "react";
import "./Navbar.scss";

// Icons
import MenuOpenIcon from "@mui/icons-material/KeyboardArrowDown";

// Buttons
import Button from "@mui/material/Button";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <span className="title">Trip Planner</span>
      <div className="navbarButtons">
        <Button variant="contained">Login</Button>
        <Button variant="contained">Help</Button>
      </div>
    </div>
  );
}

export default Navbar;
