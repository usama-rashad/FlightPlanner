import React from "react";
import "./InboundCard.scss";

import { IFlightData } from "./Datatypes";

function InboundCard(props?: IFlightData) {
  return (
    <div className="inboundCard">
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
              <div className="stopPoint" />
              <div className="stopPoint" />
              <div className="stopPoint" />
              <div className="stopPoint" />
            </div>
          </div>
          <div className="stopOvers">
            <div className="stopOverInfo">
              <span className="stopCount">1 stop</span>
              <span className="slash">/</span>
              <span className="airportCodes">LCV</span>
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

export default InboundCard;
