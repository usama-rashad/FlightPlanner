import "./Searchbar.scss";

import React, { useState } from "react";

// Pacjages
import dayjs, { Dayjs } from "dayjs";

// Components
import Button from "@mui/material/Button";
import StarAlliance from "@mui/icons-material/StarPurple500";
import TextField from "@mui/material/TextField";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function Searchbar() {
  const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  //codesandbox.io/s/custom-color-date-input-mui-using-sx-prop-forked-incoy6?file=/demo.tsx
  https: return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            <DesktopDatePicker
              className="date"
              label="Departure"
              inputFormat="MM/DD/YYYY"
              onChange={(newDate) => setDepartureDate(newDate)}
              value={departureDate}
              renderInput={(params: any) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="Return"
              className="date"
              inputFormat="MM/DD/YYYY"
              onChange={(newDate) => setReturnDate(newDate)}
              value={returnDate}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </div>
        </div>
        <div className="searchSection">
          <div className="searchOptions">
            <label>
              Include Star <StarAlliance className="icon" /> Alliance airlines
            </label>
            <input type="checkbox" />
          </div>
          <Button variant="contained" size="small" className="searchButton">
            Search
          </Button>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default Searchbar;
