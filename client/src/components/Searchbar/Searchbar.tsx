import "./Searchbar.scss";

import React from "react";

// Components
import Button from "@mui/material/Button";

function Searchbar() {
	return (
		<div className="searchbar">
			<div className="searchOptions">
				<label>Return</label>
				<input type="radio" name="flightType" />
				<label>One way</label>
				<input type="radio" name="flightType" />
				<label>Multi-city</label>
				<input type="radio" name="flightType" />
			</div>
			<div className="searchParameters">
				<div className="searchData">
					<input type="text" placeholder="Departure" className="city" />
					<input type="text" placeholder="Arrival" className="city" />
					<input type="text" placeholder="Depart" className="date" />
					<input type="text" placeholder="Return" className="date" />
				</div>
			</div>
			<div className="searchButton">
				<Button variant="contained" size="small">
					Search
				</Button>
			</div>
		</div>
	);
}

export default Searchbar;
