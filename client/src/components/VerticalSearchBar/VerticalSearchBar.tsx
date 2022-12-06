import "./VerticalSearchBar.scss";
import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";

// Packages
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DatePicker from "react-datepicker";

// Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function VerticalSearchBar() {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [departureCity, setDepartureCity] = useState<string>("");
  const [arrivalCity, setArrivalCity] = useState<string>("");

  const searchAction = () => {
    console.log("Search triggered.");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="verticalSearchBar">
        <div className="top">
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
              label="Return"
              value={arrivalCity}
              onChange={(e) => {
                setArrivalCity(e.target.value);
              }}
            />
            <div className="middle">
              <span className="departureDateTitle">Departure date</span>
              <DatePicker
                className="datepicker"
                selected={departureDate}
                onChange={(date: Date) => setDepartureDate(date)}
              />
              <span className="returnDateTitle">Return date</span>
              <DatePicker
                className="datepicker"
                selected={returnDate}
                onChange={(date: Date) => setReturnDate(date)}
              />
            </div>
          </div>
          <div className="bottom">
            <div className="searchButton">
              <Button onClick={searchAction} variant="contained">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default VerticalSearchBar;
