// Styles
import "../FlightSearchResultCard/FlightSearchResultCard.scss";

// Types
import { ITravelData, IFlightData, ILegData } from "./Datatypes";

// Components
import React from "react";
import OutboundCard from "./OutboundCard";
import InboundCard from "./InboundCard";
import { Button } from "@mui/material";
import {
  EmiratesAirlineIcon,
  TurkishAirlineIcon,
} from "./../../assets/AirlineIcons/AirlineIcons";

function SearchResultsCard(props: ITravelData) {
  return (
    <div className="searchResultsCard">
      <div className="airlineSummary">
        <div className="airlineLogos">
          <img src={props.inboundFlight.flightData[0].airlineImage} alt="" />
          <img src={props.outboundFlight.flightData[0].airlineImage} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="outboundTravel">
          <OutboundCard
            flightData={props.outboundFlight.flightData}
            numberOfStops={props.outboundFlight.numberOfStops}
            unitFare={props.outboundFlight.unitFare}
            totalFare={props.outboundFlight.totalFare}
          />
        </div>
        <div className="inboundTravel">
          <InboundCard
            flightData={props.inboundFlight.flightData}
            numberOfStops={props.inboundFlight.numberOfStops}
            unitFare={props.inboundFlight.unitFare}
            totalFare={props.inboundFlight.totalFare}
          />
        </div>
      </div>
      <div className="divider" />
      <div className="price">
        <div className="priceGroup">
          <span className="unitPrice">
            {props.inboundFlight.unitFare + props.outboundFlight.unitFare}
          </span>
          <span className="totalPrice">
            {props.inboundFlight.totalFare + props.outboundFlight.totalFare}
          </span>
        </div>

        <Button variant="contained" size="large">
          Select
        </Button>
      </div>
    </div>
  );
}

export default SearchResultsCard;
