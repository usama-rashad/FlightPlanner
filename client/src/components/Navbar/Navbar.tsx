import React, {useState} from "react";
import "./Navbar.scss";

// Icons
import MenuClosedIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuCloseIcon from "@mui/icons-material/KeyboardArrowUp";

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
				<div className="openButton">
					<MenuOpenIcon className="menuOpenIcon" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
