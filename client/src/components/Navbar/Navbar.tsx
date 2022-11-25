import React from "react";
import "./Navbar.scss";

// Icons
import MenuClosedIcon from "@mui/icons-material/Menu";

// Buttons
import Button from "@mui/material/Button";

function Navbar() {
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
