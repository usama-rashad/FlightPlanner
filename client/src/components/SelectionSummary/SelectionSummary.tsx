import React from "react";
import "./SelectionSummary.scss";

// Components
import Button from "@mui/material/Button";

function FlightSummary() {
  const checkoutAction = () => {
    console.log("Check out action pressed");
  };

  return (
    <div className="flightSummaryBar">
      <div className="flightSummaryContainer">
        <div className="top">
          <span className="title">Travel summary</span>
        </div>
        <div className="departureDetails">
          <span>Departure details</span>
        </div>
        <div className="returnDetails">
          <span>Return Details</span>
        </div>
        <div className="bottom">
          <div className="checkOutButton">
            <Button variant="contained" onClick={checkoutAction}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSummary;
