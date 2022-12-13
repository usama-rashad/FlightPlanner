import "./FlightSummaryDropDown.scss";

import React, { useState, useEffect } from "react";

// Datatypes
import { ITravelData } from "../../components/FlightSearchResultCard/Datatypes";

// Components
import InboundCard from "../FlightSearchResultCard/InboundCard";
import OutboundCard from "../FlightSearchResultCard/OutboundCard";
import FlightDirectionCard from "../FlightSearchResultCard/FlightDirectionCard";
import FlightDetailsCard from "../FlightDetailsCard/FlightDetailsCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Test data

export interface IFlightSummaryProps {
  isOutbound: boolean;
  travelData: ITravelData;
}

function FlightSummaryDropDown(props: IFlightSummaryProps) {
  const [expand, setExpand] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>("");

  const clickAction = () => {
    setExpand(!expand);
    setAnimation(expand ? "icon pullUp" : "icon dropDown");
  };

  useEffect(() => {
    setAnimation(expand ? "icon dropDown" : "icon pullUp");
  }, []);

  return (
    <div className="flightSummaryDropDown">
      <div className="summary">
        <div className="card">
          <FlightDirectionCard
            travelData={props.travelData}
            isOutbound={props.isOutbound}
          />
        </div>
        <div className="navArrow" onClick={clickAction}>
          <ArrowForwardIosIcon className={animation} />
        </div>
      </div>
      <div className="details">
        <FlightDetailsCard
          expand={expand}
          flightData={props}
          isOutbound={props.isOutbound}
        />
      </div>
    </div>
  );
}

export default FlightSummaryDropDown;
