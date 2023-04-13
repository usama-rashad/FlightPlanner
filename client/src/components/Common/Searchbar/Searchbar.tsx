import "./Searchbar.scss";

import React, { useState } from "react";

// Packages
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";

// Components
import Button from "@mui/material/Button";
import StarAlliance from "@mui/icons-material/StarPurple500";
import TextField from "@mui/material/TextField";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Checkbox } from "@mui/material";
import red from "@mui/material/colors/red";

function Searchbar() {
  const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [departureCity, setDepartureCity] = useState<string>("");
  const [arrivalCity, setArrivalCity] = useState<string>("");

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
    axios
      .get("http://localhost:3001/search")
      .then((res) => {
        console.log("Got answer from server. Response is : " + JSON.stringify(res));
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
            <input type="radio" name="flightType" checked />
            <label>One way</label>
            <input type="radio" name="flightType" />
            <label>Multi-city</label>
            <input type="radio" name="flightType" />
          </div>
          <div className="searchParameters">
            <div className="searchData">
              <TextField
                className="departureCityInput"
                size="small"
                type="outlined"
                label="Departure"
                value={departureCity}
                onChange={(e) => {
                  setDepartureCity(e.target.value);
                }}
              />
              <TextField
                className="arrivalCityInput"
                size="small"
                type="outlined"
                label="Arrival"
                value={arrivalCity}
                onChange={(e) => {
                  setArrivalCity(e.target.value);
                }}
              />{" "}
              <DesktopDatePicker
                className="date"
                label="Departure"
                inputFormat="MM/DD/YYYY"
                onChange={(newDate) => setDepartureDateAction(newDate)}
                value={departureDate}
                renderInput={(params: any) => <TextField size="small" variant="outlined" {...params} />}
              />
              <DesktopDatePicker
                className="date"
                label="Return"
                inputFormat="MM/DD/YYYY"
                onChange={(newDate) => setReturnDateAction(newDate)}
                value={returnDate}
                renderInput={(params: any) => <TextField size="small" variant="outlined" {...params} />}
              />
            </div>
          </div>
          <div className="searchSection">
            <div className="searchOptions">
              <label>
                Include Star Alliance <StarAlliance className="icon" /> airlines
              </label>
              <Checkbox color="primary" />
            </div>
            <Button variant="contained" size="small" className="searchButton" onClick={searchRequest}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default Searchbar;
