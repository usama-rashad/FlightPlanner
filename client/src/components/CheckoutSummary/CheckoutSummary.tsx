import "./CheckoutSummary.scss";

import React from "react";
import FlightSummaryDropDown from "../FlightSummaryDropDown/FlightSummaryDropDown";

function CheckoutSummary() {
  return (
    <div className="checkoutSummary">
      <div className="top">
        <span className="title">Your travel itinerary: </span>
      </div>
      <div className="bottom">
        <span className="title">
          Click the outbound or inbound flight to see more details
        </span>
        <div className="summaryDropDowns">
          <FlightSummaryDropDown />
          <FlightSummaryDropDown />
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
