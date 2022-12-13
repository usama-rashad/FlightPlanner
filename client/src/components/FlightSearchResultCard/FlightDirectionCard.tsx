import "./FlightDirectionCard.scss";

import React, { useEffect, useState } from "react";
import { IFlightData, ITravelData } from "./Datatypes";
import { StopOverIcon } from "./StopOverIcon";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface IFlightDirectionCard {
  travelData: ITravelData;
  isOutbound: boolean;
}

function FlightDirectionCard(props: IFlightDirectionCard) {
  // Get outbound or inbound flight data
  let singleDirectionData: IFlightData = {
    flightData: [],
    travelDate: "",
    totalTravelTime: "",
    numberOfStops: 0,
    totalFare: 0,
    unitFare: 0,
  };

  singleDirectionData = props.isOutbound
    ? props.travelData.outboundFlight
    : props.travelData.inboundFlight;

  // Get list of airport codes for layover airports
  let listOfStopoverAirportCodes: string[] = [];
  listOfStopoverAirportCodes = singleDirectionData.flightData.map((airport) => {
    if (!airport.legData.isFinalLeg) {
      return airport.arrivalAirportCode;
    } else {
      return "";
    }
  });

  return (
    <div className="flightDirectionCard">
      <div className="flightDirection">
        <div className="airlineSummary">
          <div className="airlineLogos">
            <div className="airlineList">
              {/* Code for outbound travel  */}
              {singleDirectionData.numberOfStops > 0 ? (
                singleDirectionData.flightData.map((legInfo) => (
                  <span className="title" key={legInfo.flightId}>
                    {legInfo.airlineName}
                  </span>
                ))
              ) : (
                <div className="singleAirline">
                  <img
                    src={singleDirectionData.flightData[0].airlineImage}
                    alt=""
                  />
                  <span className="title">
                    {singleDirectionData.flightData[0].airlineName}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flightArrow">
          {!props.isOutbound ? (
            <ArrowBackIcon className="arrow" />
          ) : (
            <ArrowForwardIcon className="arrow" />
          )}
        </div>
        <div className="container">
          <div className="departureDetails">
            <span className="time">
              {singleDirectionData?.flightData[0].departureTime}
            </span>
            <span className="cityTitle">
              {singleDirectionData?.flightData[0].departureAirportCode}
            </span>
          </div>

          <div className="transitDetails">
            <span className="flightDuration">
              {singleDirectionData?.totalTravelTime}
            </span>

            <div className="travel">
              <div className="travelLine"></div>
              <div className="stopPointGroup">
                {[...Array(singleDirectionData?.numberOfStops)].map(
                  (e, index) => (
                    <StopOverIcon key={index} />
                  )
                )}
              </div>
            </div>
            <div className="stopOvers">
              <div className="stopOverInfo">
                {singleDirectionData?.numberOfStops === 1 ? (
                  <span className="stopCount">
                    {singleDirectionData?.numberOfStops} stop
                  </span>
                ) : (
                  <span className="stopCount">
                    {singleDirectionData?.numberOfStops} stops
                  </span>
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
              {
                singleDirectionData?.flightData[
                  singleDirectionData?.flightData.length - 1
                ].arrivalTime
              }
            </span>
            {/* Arrival city name. This will be last flight in the array */}
            <span className="cityTitle">
              {
                singleDirectionData?.flightData[
                  singleDirectionData?.flightData.length - 1
                ].arrivalAirportCode
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDirectionCard;
