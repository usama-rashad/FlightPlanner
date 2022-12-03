import "./Searchbar.scss";

import React, {useState} from "react";

// Packages
import dayjs, {Dayjs} from "dayjs";
import axios from "axios";

// Components
import Button from "@mui/material/Button";
import StarAlliance from "@mui/icons-material/StarPurple500";
import TextField from "@mui/material/TextField";

import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {MobileDatePicker} from "@mui/x-date-pickers/MobileDatePicker";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {Checkbox} from "@mui/material";
import red from "@mui/material/colors/red";

function Searchbar() {
	const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
	const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
	const [searchEnabled, setSearchEnabled] = useState<boolean>(false);

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

	const searchRequest = () => {
		const searchRequestOptions = {
			url: "http://localhost:3000/search/",
			method: "get",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json;charset=UTF-8",
			},
			data: {
				request: "search",
				dep: "Lahore",
				arr: "Islamabad",
			},
		};

		axios
			.get("http://localhost:3001/search")
			.then((res) => {
				console.log(
					"Got answer from server. Response is : " + JSON.stringify(res)
				);
			})
			.catch((err) => {
				console.log("Error");
			});
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className="searchbar">
				<div className="searchBarContainer">
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
					</div>
					<div className="searchSection">
						<div className="searchOptions">
							<label>
								Include Star <StarAlliance className="icon" /> Alliance airlines
							</label>
							<Checkbox color="primary" />
						</div>
						<Button
							variant="contained"
							size="small"
							className="searchButton"
							onClick={searchRequest}
						>
							Search
						</Button>
					</div>
				</div>
			</div>
		</LocalizationProvider>
	);
}

export default Searchbar;
