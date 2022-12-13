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
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import FlightDetailsCard from "../FlightDetailsCard/FlightDetailsCard";

function SearchResultsCard(props: ITravelData) {
  return (
    <div className="searchResultsCard">
      <div className="container">
        <div className="outboundTravel">
          <OutboundCard
            flightData={props.outboundFlight.flightData}
            numberOfStops={props.outboundFlight.numberOfStops}
            unitFare={props.outboundFlight.unitFare}
            totalFare={props.outboundFlight.totalFare}
            totalTravelTime={props.outboundFlight.totalTravelTime}
            travelDate={props.outboundFlight.travelDate}
          />
        </div>
        <div className="inboundTravel">
          <InboundCard
            flightData={props.inboundFlight.flightData}
            numberOfStops={props.inboundFlight.numberOfStops}
            unitFare={props.inboundFlight.unitFare}
            totalFare={props.inboundFlight.totalFare}
            totalTravelTime={props.inboundFlight.totalTravelTime}
            travelDate={props.inboundFlight.travelDate}
          />
        </div>
      </div>
      <div className="divider" />
      <div className="right">
        <div className="priceGroup">
          <div className="unitPrice">
            <div className="group">
              <span className="label">Unit price</span>
              <div className="price">
                <EuroSymbolIcon className="currencyIcon" />
                <span className="priceTag">
                  {props.inboundFlight.unitFare + props.outboundFlight.unitFare}
                </span>
              </div>
            </div>
          </div>
          <div className="totalPrice">
            <div className="group">
              <span className="label">Total price</span>
              <div className="price">
                <EuroSymbolIcon className="currencyIcon" />
                <span className="priceTag">
                  {props.inboundFlight.totalFare +
                    props.outboundFlight.totalFare}
                </span>
              </div>
            </div>
          </div>
          <Button variant="contained" size="large">
            Select
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsCard;
