import React, { useState } from "react";
import "./Navbar.scss";

// Packages
import { Link } from "react-router-dom";

// Icons
import MenuOpenIcon from "@mui/icons-material/KeyboardArrowDown";

// Buttons
import Button from "@mui/material/Button";

interface INavbar {
  isAdmin?: boolean;
}

function Navbar(props: INavbar) {
  const [open, setOpen] = useState(false);

  const loginAction = () => {
    console.log("Login action triggered.");
  };

  return (
    <div className={`navbar ${props.isAdmin ? "admin" : ""}`}>
      {/* LEFT SIDE */}
      <div className="left">
        <Link to="/" className="link">
          <span className={`title ${props.isAdmin ? "admin" : ""}`}>
            {`Trip Planner`}
          </span>
        </Link>
      </div>

      {/* MIDDLE */}

      <div className="middle">
        {props.isAdmin && <span className="subTitle">Administrator mode</span>}
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="navbarButtons">
          <Link to="/login" className="link">
            <Button variant="contained" size="large" onClick={loginAction}>
              Login
            </Button>
          </Link>
          <Button variant="contained" size="large">
            Help
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
