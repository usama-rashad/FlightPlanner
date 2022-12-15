import "./FlightDetailsCard.scss";

import HotelIcon from "@mui/icons-material/Hotel";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import React from "react";
import {
  EmiratesAirlineIcon,
  TurkishAirlineIcon,
} from "../../../assets/AirlineIcons/AirlineIcons";
import { IFlightSummaryProps } from "../FlightSummaryDropDown/FlightSummaryDropDown";
import { IFlightData } from "../FlightSearchResultCard/Datatypes";
import { Tooltip } from "@mui/material";

interface IFlightCardDetails {
  expand: boolean;
  isOutbound: boolean;
  flightData: IFlightSummaryProps;
}

function FlightDetailsCard(props: IFlightCardDetails) {
  // Get the flight data depending on whther the flight is an outbound or inbound flight
  let flight: IFlightData = props.isOutbound
    ? props.flightData.travelData.outboundFlight
    : props.flightData.travelData.inboundFlight;

  let mainClassName: string = props.expand
    ? "completeJourney expanded"
    : "completeJourney collapsed";

  return (
    <div className={mainClassName}>
      {flight.flightData.map((leg) => (
        <div key={leg.flightId}>
          <div className="flightDetailsCard">
            <div className="legSegment">
              <div className="airlineAndFlight">
                <img src={leg.airlineImage} alt="" />
                <span className="airlineAndFlightTitle">
                  {leg.airlineName} {leg.flightCode}
                </span>
              </div>
              <div className="legDisplay">
                <div className="left">
                  <div className="duration">
                    <span className="durationTitle">
                      Duration {leg.timeOfFlight}
                    </span>
                  </div>
                </div>
                <div className="right">
                  <div className="legDeparture">
                    <div className="circle" />
                    <div className="departureTime">
                      <span className="time">{leg.departureTime}</span>
                    </div>
                    <div className="departureAirportCode">
                      <span className="airportCode">
                        {leg.departureAirportCode}
                      </span>
                    </div>
                    <div className="departureAirport">
                      <span className="airportName">
                        {leg.departureAirportName}
                      </span>
                    </div>
                  </div>
                  <div className="legArrival">
                    <div className="circle" />
                    <div className="departureTime">
                      <span className="time">{leg.arrivalTime}</span>
                    </div>
                    <div className="departureAirportCode">
                      <span className="airportCode">
                        {leg.arrivalAirportCode}
                      </span>
                    </div>
                    <div className="departureAirport">
                      <span className="airportName">
                        {leg.arrivalAirportName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {leg.legData.isFinalLeg ? (
              <></>
            ) : (
              <div className="flightConnections">
                <div className="left">
                  <span className="time">{leg.legData.legLayoverDuration}</span>
                </div>
                <div className="middle">
                  <span className="message">
                    {leg.legData.legChangeMessage}
                  </span>
                </div>
                <div className="right">
                  {/* Duty free available */}
                  {leg.legData.airportFeatures?.isDutyFree ? (
                    <Tooltip title="Duty Free">
                      <ShoppingCartIcon className="icon" />
                    </Tooltip>
                  ) : (
                    <></>
                  )}
                  {/* Duty free available */}
                  {leg.legData.airportFeatures?.isHotel ? (
                    <Tooltip title="Hotels">
                      <HotelIcon className="icon" />
                    </Tooltip>
                  ) : (
                    <></>
                  )}
                  {/* Duty free available */}
                  {leg.legData.airportFeatures?.isRestaurant ? (
                    <Tooltip title="Restaurants">
                      <LocalDiningIcon className="icon" />
                    </Tooltip>
                  ) : (
                    <></>
                  )}
                  {leg.legData.airportFeatures?.isVisaOnArrival ? (
                    <Tooltip title="Visa on Arrival">
                      <ExitToAppIcon className="icon" />
                    </Tooltip>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightDetailsCard;
