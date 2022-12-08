import "./FlightSummaryDropDown.scss";

import React, { useState, useEffect } from "react";

// Datatypes
import { ITravelData } from "../../components/FlightSearchResultCard/Datatypes";

// Components
import InboundCard from "../FlightSearchResultCard/InboundCard";
import OutboundCard from "../FlightSearchResultCard/OutboundCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Test data
import { sampleFlightResult } from "../../data";

export interface IFlightSummaryProps {
  isOutbound: boolean;
}

function FlightSummaryDropDown(props: IFlightSummaryProps) {
  const [expand, setExpand] = useState<Boolean>(false);
  const [animation, setAnimation] = useState<string>("icon pullUp");

  const clickAction = () => {
    setExpand(!expand);
    setAnimation(expand ? "icon pullUp" : "icon dropDown");
  };

  useEffect(() => {
    setAnimation(expand ? "icon pullUp" : "icon dropDown");
  }, []);

  return (
    <div className="flightSummaryDropDown">
      <div className="card">
        {props.isOutbound ? (
          <OutboundCard
            flightData={sampleFlightResult.outboundFlight.flightData}
            numberOfStops={sampleFlightResult.outboundFlight.numberOfStops}
            unitFare={sampleFlightResult.outboundFlight.unitFare}
            totalFare={sampleFlightResult.outboundFlight.totalFare}
          />
        ) : (
          <InboundCard
            flightData={sampleFlightResult.inboundFlight.flightData}
            numberOfStops={sampleFlightResult.inboundFlight.numberOfStops}
            unitFare={sampleFlightResult.inboundFlight.unitFare}
            totalFare={sampleFlightResult.inboundFlight.totalFare}
          />
        )}
      </div>
      <div className="navArrow" onClick={clickAction}>
        <ArrowForwardIosIcon className={animation} />
      </div>
    </div>
  );
}

export default FlightSummaryDropDown;
