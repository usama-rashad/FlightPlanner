import "./TravelSummary.scss";

import React from "react";
import Marker from "../../Common/UI/Marker/Marker";
import { IFlightData } from "../FlightSearchResultCard/Datatypes";
import { Button } from "@mui/material";

interface ITravelSummary {
  title: string;
  data: IFlightData;
}

function TravelSummary(props: ITravelSummary) {
  return (
    <div className="travelSummary">
      <div className="departureTitle">
        <span className="title">{props.title}</span>
        <div className="departureSection">
          <div className="left">
            {props.data.flightData.map((leg, index) => {
              return (
                <React.Fragment>
                  <Marker
                    text={leg.departureTime}
                    variant="clear darktext boldtext"
                  />
                  <div className="line" />
                </React.Fragment>
              );
            })}
            <Marker
              text={
                props.data.flightData[props.data.flightData.length - 1]
                  .arrivalTime
              }
              variant="clear darktext boldtext"
            />
          </div>
          <div className="right">
            <div className="main">
              {props.data.flightData.map((leg, index) => {
                return (
                  <React.Fragment>
                    <Marker
                      text={leg.departureAirportCode}
                      variant={`filled lighttext boldtext ${
                        index === 0 ? "start" : ""
                      }`}
                    />
                    <div className="sub">
                      <div className="gap" />
                      <div className="line" />
                      <Marker
                        text={leg.timeOfFlight}
                        variant="clear darktext boldtext center"
                      />
                    </div>
                  </React.Fragment>
                );
              })}

              <Marker
                text={
                  props.data.flightData[props.data.flightData.length - 1]
                    .arrivalAirportCode
                }
                variant="filled lighttext end"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelSummary;
