import "./FlightSummaryDropDown.scss";

import React from "react";

// Datatypes
import { ITravelData } from "../../components/FlightSearchResultCard/Datatypes";

// Components
import InboundCard from "../FlightSearchResultCard/InboundCard";

// Test data
import { sampleFlightResult } from "../../data";

function FlightSummaryDropDown() {
  return (
    <div className="flightSummaryDropDown">
      <span className="title">
        <InboundCard
          flightData={sampleFlightResult.inboundFlight.flightData}
          numberOfStops={sampleFlightResult.inboundFlight.numberOfStops}
          unitFare={sampleFlightResult.inboundFlight.unitFare}
          totalFare={sampleFlightResult.inboundFlight.totalFare}
        />
      </span>
    </div>
  );
}

export default FlightSummaryDropDown;
