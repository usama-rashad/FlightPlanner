import "./CheckoutTravelSummary.scss";

import React from "react";
import FlightSummaryDropDown from "../FlightSummaryDropDown/FlightSummaryDropDown";
import { ITravelData } from "../FlightSearchResultCard/Datatypes";

function CheckoutTravelSummary(props: ITravelData) {
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
          <div className="outbound">
            <div className="details">
              <span className="intro">{props.outboundFlight.travelDate}</span>
            </div>
            <FlightSummaryDropDown isOutbound={true} travelData={props} />
          </div>
          <div className="inbound">
            <div className="details">
              <span className="intro">{props.inboundFlight.travelDate}</span>
            </div>
            <FlightSummaryDropDown isOutbound={false} travelData={props} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutTravelSummary;
