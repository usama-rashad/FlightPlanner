import React from "react";
import "./OutboundCard.scss";

import { IFlightData } from "./Datatypes";
import { StopOverIcon } from "./StopOverIcon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function OutboundCard(props?: IFlightData) {
  return (
    <div className="outboundCard">
      <div className="flightArrow">
        <ArrowForwardIcon className="arrow" />
      </div>
      <div className="container">
        {/* Departure details */}
        <div className="departureDetails">
          {/* Departure time */}
          <span className="time">{props?.flightData[0].departureTime}</span>
          {/* Departure city name */}
          <span className="cityTitle">
            {props?.flightData[0].departureAirportCode}
          </span>
        </div>
        <div className="transitDetails">
          <span className="flightDuration">
            {props?.flightData[0].timeOfFlight}
          </span>

          <div className="travel">
            <div className="travelLine"></div>
            <div className="stopPointGroup">
              {[...Array(props?.numberOfStops)].map((e) => (
                <StopOverIcon />
              ))}
            </div>
          </div>
          <div className="stopOvers">
            <div className="stopOverInfo">
              {props?.numberOfStops === 1 ? (
                <span className="stopCount">{props?.numberOfStops} stop</span>
              ) : (
                <span className="stopCount">{props?.numberOfStops} stops</span>
              )}
              <span className="slash">/</span>
              <span className="airportCodes">DUH</span>
            </div>
          </div>
        </div>
        <div className="arrivalDetails">
          {/* Arrival time */}
          <span className="time">{props?.flightData[0].arrivalTime}</span>
          {/* Arrival city name. This will be last flight in the array */}
          <span className="cityTitle">
            {props?.flightData[props?.flightData.length - 1].arrivalAirportCode}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OutboundCard;
