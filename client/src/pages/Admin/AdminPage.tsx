import React, { useEffect, useState } from "react";
import "./AdminPage.scss";

// Images
import WorldMap from "../../assets/Backgrounds/WorldMap.jpg";
import NotepadAnimation from "../../assets/Animations/notepad_animation.gif";
import HourGlassAnimation from "../../assets/Animations/hourglass_animation.gif";

// Components
import AdminNavigation from "../../components/Admin/Navigation/AdminNavigation";
import AirlineWorkflow from "../../components/Admin/Workflows/Airline/AirlineWorkflow";

// Interfaces

// Types
enum EMode {
  "AIRLINE",
  "AIRCRAFT",
  "AIRPORT",
  "NONE",
}

function AdminPage() {
  const [mode, setMode] = useState<EMode>(EMode.NONE);

  return (
    <div className="adminPage">
      <div className="top">
        <div className="adminNav">
          <AdminNavigation
            selectAircraft={() => {
              setMode(EMode.AIRCRAFT);
            }}
            selectAirlines={() => {
              setMode(EMode.AIRLINE);
            }}
            selectAirports={() => {
              setMode(EMode.AIRPORT);
            }}
          />
        </div>
      </div>
      <div className="center">
        {mode === EMode.NONE && (
          <>
            <div className="centerLeft">
              <span className="text">Let's get started</span>
              <span className="subtext">Click a button to start</span>
            </div>
            <div className="centerRight">
              <img src={NotepadAnimation} alt="" />
            </div>
          </>
        )}
        {mode !== EMode.NONE && (
          <>
            <div className="centerBox">
              <AirlineWorkflow />
            </div>
          </>
        )}
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export default AdminPage;
