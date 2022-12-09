import "./FlightDetailsCard.scss";

import React from "react";
import {
  EmiratesAirlineIcon,
  TurkishAirlineIcon,
} from "../../assets/AirlineIcons/AirlineIcons";

interface IFlightCardDetails {
  expand: boolean;
}

function FlightDetailsCard(props: IFlightCardDetails) {
  return (
    <div className="flightDetailsCard">
      <div className="legSegment">
        <div className="airlineAndFlight">
          <img src={TurkishAirlineIcon} alt="" />
          <span className="airlineAndFlightTitle">Emirates Airlines EK615</span>
        </div>
        <div className="legDisplay">
          <div className="left">
            <div className="duration">
              <span className="durationTitle">5h 00m</span>
            </div>
          </div>
          <div className="right">
            <div className="legDeparture">
              <div className="circle" />
              <div className="departureTime">
                <span className="time">13:00</span>
              </div>
              <div className="departureAirportCode">
                <span className="airportCode">DUS</span>
              </div>
              <div className="departureAirport">
                <span className="airportName">Dusseldorf</span>
              </div>
            </div>
            <div className="legArrival">
              <div className="circle" />
              <div className="departureTime">
                <span className="time">13:00</span>
              </div>
              <div className="departureAirportCode">
                <span className="airportCode">DUS</span>
              </div>
              <div className="departureAirport">
                <span className="airportName">Dusseldorf</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flightConnections">
        <div className="left">
          <span className="time">2h 00m</span>
        </div>
        <div className="right">
          <span className="message">Long wait at airport.</span>
        </div>
      </div>
    </div>
  );
}

export default FlightDetailsCard;
