import React, { useState } from "react";
import "./Navbar.scss";

// Packages
import { Link } from "react-router-dom";

// Icons
import MenuOpenIcon from "@mui/icons-material/KeyboardArrowDown";

// Buttons
import Button from "@mui/material/Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  const loginAction = () => {
    console.log("Login action triggered.");
  };

  return (
    <div className="navbar">
      <Link to="/" className="link">
        <span className="title">Trip Planner</span>
      </Link>

      <div className="navbarButtons">
        <Link to="/login" className="link">
          <Button variant="contained" onClick={loginAction}>
            Login
          </Button>
        </Link>
        <Button variant="contained">Help</Button>
      </div>
    </div>
  );
}

export default Navbar;
