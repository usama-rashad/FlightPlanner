import React, { useRef, useState } from "react";
import "./AdminNavigation.scss";
import NavButton from "../NavButton/NavButton";

// MUI components
import Button from "@mui/material/Button";

// ICONs
import AirportIcon from "@mui/icons-material/FlightTakeoff";
import AirlinesIcon from "@mui/icons-material/Airlines";
import Aircraft from "@mui/icons-material/AirplanemodeActive";

// Interfaces
interface INavigationButtonAction {
  selectAirlines(): void;
  selectAircraft(): void;
  selectAirports(): void;
}

function AdminNavigation(props: INavigationButtonAction) {
  // Button actions
  const airlineClickAction = () => {
    props.selectAirlines();
  };
  const airportClickAction = () => {
    props.selectAirports();
  };
  const aircraftClickAction = () => {
    props.selectAircraft();
  };

  return (
    <div className="adminNavigation">
      <Button
        variant="contained"
        size="medium"
        endIcon={<AirlinesIcon />}
        onClick={airlineClickAction}
      >
        Airlines
      </Button>
      <Button
        variant="contained"
        size="medium"
        endIcon={<AirportIcon />}
        onClick={aircraftClickAction}
      >
        Aircraft
      </Button>
      <Button
        variant="contained"
        size="medium"
        endIcon={<Aircraft />}
        onClick={airportClickAction}
      >
        Airports
      </Button>
    </div>
  );
}

export default AdminNavigation;
