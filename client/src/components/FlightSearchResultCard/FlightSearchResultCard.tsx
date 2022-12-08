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

function SearchResultsCard(props: ITravelData) {
  return (
    <div className="searchResultsCard">
      <div className="airlineSummary">
        <div className="airlineLogos">
          <div className="group1">
            {props.outboundFlight.numberOfStops > 0 ? (
              props.outboundFlight.flightData.map((legInfo) => (
                <span className="title">{legInfo.airlineName}</span>
              ))
            ) : (
              <div className="outboundAirline">
                <img
                  src={props.outboundFlight.flightData[0].airlineImage}
                  alt=""
                />
                <span className="title">
                  {props.outboundFlight.flightData[0].airlineName}
                </span>
              </div>
            )}
          </div>
          {/* Inbound airline display if there is only one airline */}
          <div className="group2">
            {props.inboundFlight.numberOfStops > 0 ? (
              props.inboundFlight.flightData.map((legInfo) => (
                <span className="title">{legInfo.airlineName}</span>
              ))
            ) : (
              <div className="inboundAirline">
                <img
                  src={props.inboundFlight.flightData[0].airlineImage}
                  alt=""
                />
                <span className="title">
                  {props.inboundFlight.flightData[0].airlineName}
                </span>
              </div>
            )}
          </div>
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
