import React from "react";
import "./InboundCard.scss";

import { IFlightData } from "./Datatypes";
import { StopOverIcon } from "./StopOverIcon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function InboundCard(props: IFlightData) {
  // Get list of airport codes for layover airports
  let listOfStopoverAirportCodes: string[] = [];
  listOfStopoverAirportCodes = props.flightData.map((airport) => {
    if (!airport.legData.isFinalLeg) {
      return airport.arrivalAirportCode;
    } else {
      return "";
    }
  });

  return (
    <div className="inboundCard">
      <div className="airlineSummary">
        <div className="airlineLogos">
          {/* Inbound airline display if there is only one airline */}
          <div className="group2">
            {props.numberOfStops > 0 ? (
              props.flightData.map((legInfo) => (
                <span className="title">{legInfo.airlineName}</span>
              ))
            ) : (
              <div className="inboundAirline">
                <img src={props.flightData[0].airlineImage} alt="" />
                <span className="title">{props.flightData[0].airlineName}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flightArrow">
        <ArrowBackIcon className="arrow" />
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
          <span className="flightDuration">{props?.totalTravelTime}</span>

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
              <span className="airportCodes">
                {listOfStopoverAirportCodes.map((airportCode, index) => {
                  return (
                    airportCode +
                    (index + 2 < listOfStopoverAirportCodes.length ? "," : "") // !! NEEDS IMPROVEMENT
                  );
                })}
              </span>
            </div>
          </div>
        </div>
        <div className="arrivalDetails">
          {/* Arrival time */}
          <span className="time">
            {props?.flightData[props?.flightData.length - 1].arrivalTime}
          </span>
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
