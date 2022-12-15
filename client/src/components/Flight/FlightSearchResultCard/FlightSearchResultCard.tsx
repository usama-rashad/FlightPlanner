// Styles
import "../FlightSearchResultCard/FlightSearchResultCard.scss";

// Types
import { ITravelData, IFlightData, ILegData } from "./Datatypes";

// Components
import React, { useEffect } from "react";
import OutboundCard from "./OutboundCard";
import InboundCard from "./InboundCard";

// MUI
import { Button } from "@mui/material";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";

interface ISearchResultCard {
  searchIndex: number;
  isPressed: (index: number) => void;
  isSelected: boolean;
  data: ITravelData;
}

function SearchResultsCard(props: ISearchResultCard) {
  let className = props.isSelected
    ? "searchResultsCard selected"
    : "searchResultsCard unselected";

  const flightSelectedAction = () => {
    props.isPressed(props.searchIndex);
  };

  return (
    <div className={className}>
      <div className="container">
        <div className="outboundTravel">
          <OutboundCard
            flightData={props.data.outboundFlight.flightData}
            numberOfStops={props.data.outboundFlight.numberOfStops}
            unitFare={props.data.outboundFlight.unitFare}
            totalFare={props.data.outboundFlight.totalFare}
            totalTravelTime={props.data.outboundFlight.totalTravelTime}
            travelDate={props.data.outboundFlight.travelDate}
          />
        </div>
        <div className="inboundTravel">
          <InboundCard
            flightData={props.data.inboundFlight.flightData}
            numberOfStops={props.data.inboundFlight.numberOfStops}
            unitFare={props.data.inboundFlight.unitFare}
            totalFare={props.data.inboundFlight.totalFare}
            totalTravelTime={props.data.inboundFlight.totalTravelTime}
            travelDate={props.data.inboundFlight.travelDate}
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
                  {props.data.inboundFlight.unitFare +
                    props.data.outboundFlight.unitFare}
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
                  {props.data.inboundFlight.totalFare +
                    props.data.outboundFlight.totalFare}
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            size="large"
            onClick={flightSelectedAction}
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsCard;
