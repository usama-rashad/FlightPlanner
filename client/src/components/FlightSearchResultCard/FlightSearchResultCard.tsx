import "../FlightSearchResultCard/FlightSearchResultCard.scss";

import React from "react";

export interface IFlightAirlineData {
  flightId: number;
  airlineImage: string;
  airlineName: string;
  departureAirportCode: string;
  departureTime: string;
  arrivalAirportCode: string;
  arrivalTime: string;
  timeOfFlight: string;
}

export interface ISearchResultCard {
  flightData: IFlightAirlineData[];
  numberOfStops: number;
  unitFare: number;
  totalFare: number;
}

function SearchResultsCard(props?: ISearchResultCard) {
  return (
    <div className="searchResultsCard">
      <div className="left">
        <span>Left</span>
      </div>
      {/* Check how many connections. This will be the same as the number of airlines/planes 
      used for the flight */}
      <div className="middle">
        {props?.flightData.map((airline) => {
          return (
            <div className="airlineInfo" key={airline.flightId}>
              <img className="airlineImage" src={airline.airlineImage} alt="" />
              <span className="airlineTitle">{airline.airlineName}</span>
            </div>
          );
        })}
      </div>
      <div className="right">
        <span>Right</span>
      </div>
    </div>
  );
}

export default SearchResultsCard;
