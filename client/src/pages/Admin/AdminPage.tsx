import React, { useEffect, useState } from "react";
import "./AdminPage.scss";
import WorldMap from "../../assets/Backgrounds/WorldMap.jpg";

// Components
import AdminNavigation from "../../components/Admin/Navigation/AdminNavigation";

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

  useEffect(() => {
    console.log("Type changed to " + mode);
  }, [mode]);

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
        <span className="text">Let's get started</span>
        <span className="subtext">Click a button to start</span>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default AdminPage;
