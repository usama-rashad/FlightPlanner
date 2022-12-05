import "./VerticalSearchBar.scss";

import React, {useState} from "react";

// Packages
import dayjs, {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

// Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";

function VerticalSearchBar() {
	const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
	const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
	const [departureCity, setDepartureCity] = useState<string>("");
	const [arrivalCity, setArrivalCity] = useState<string>("");

	const setDepartureDateAction = (value: Dayjs | null) => {
		if (value) setDepartureDate(value);
		else {
		}
		console.log(value);
	};

	const setReturnDateAction = (value: Dayjs | null) => {
		if (value) setReturnDate(value);
		else {
		}
		console.log(value);
	};

	const searchAction = () => {
		console.log("Search triggered.");
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className="verticalSearchBar">
				<span className="title">Search</span>
				<div className="searchParameters">
					<TextField
						className="departureCity"
						size="small"
						type="outlined"
						label="Departure"
						value={departureCity}
						onChange={(e) => {
							setDepartureCity(e.target.value);
						}}
					/>
					<TextField
						className="arrivalCity"
						size="small"
						type="outlined"
						label="Arrival"
						value={arrivalCity}
						onChange={(e) => {
							setArrivalCity(e.target.value);
						}}
					/>
					<DesktopDatePicker
						className="date"
						label="Departure"
						inputFormat="MM/DD/YYYY"
						onChange={(newDate) => setDepartureDateAction(newDate)}
						value={departureDate}
						renderInput={(params: any) => (
							<TextField size="small" variant="outlined" {...params} />
						)}
					/>
					<DesktopDatePicker
						className="date"
						label="Return"
						inputFormat="MM/DD/YYYY"
						onChange={(newDate) => setReturnDateAction(newDate)}
						value={returnDate}
						renderInput={(params: any) => (
							<TextField size="small" variant="outlined" {...params} />
						)}
					/>
				</div>
				<div className="searchButton">
					<Button onClick={searchAction} variant="contained">
						Search
					</Button>
				</div>
			</div>
		</LocalizationProvider>
	);
}

export default VerticalSearchBar;
