import React, { useRef, useState } from "react";
import "./AdminNavigation.scss";
import NavButton from "../NavButton/NavButton";

// MUI components
import Button from "@mui/material/Button";

// ICONs
import AirportIcon from "@mui/icons-material/FlightTakeoff";
import AirlinesIcon from "@mui/icons-material/Airlines";
import Aircraft from "@mui/icons-material/AirplanemodeActive";

function AdminNavigation() {
  // Button actions
  const handleClick = () => {};

  return (
    <div className="adminNavigation">
      <Button variant="contained" size="medium" endIcon={<AirlinesIcon />}>
        Airlines
      </Button>
      <Button variant="contained" size="medium" endIcon={<AirportIcon />}>
        Aircraft
      </Button>
      <Button variant="contained" size="medium" endIcon={<Aircraft />}>
        Airports
      </Button>
    </div>
  );
}

export default AdminNavigation;
