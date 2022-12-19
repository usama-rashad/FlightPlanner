import React from "react";
import "./AdminPage.scss";
import WorldMap from "../../assets/Backgrounds/WorldMap.jpg";

// Components
import AdminNavigation from "../../components/Admin/Navigation/AdminNavigation";

function AdminPage() {
  return (
    <div className="adminPage">
      <div className="top">
        <div className="adminNav">
          <AdminNavigation />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom"></div>
    </div>
  );
}

export default AdminPage;

// 1) Add icons  to the buttons
// 2) Chagne the colours to blues and greys
