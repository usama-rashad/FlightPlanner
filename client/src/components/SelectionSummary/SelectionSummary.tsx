import React, { useEffect, useState } from "react";
import "./SelectionSummary.scss";

// Components
import Button from "@mui/material/Button";
import { ITravelData } from "../Flight/FlightSearchResultCard/Datatypes";
import TravelSummary from "../Flight/TravelSummary/TravelSummary";

interface IFlightSummary {
  checkOutEnable: boolean;
  data: ITravelData;
}

function FlightSummary(props: IFlightSummary) {
  const [flightData, setFlightData] = useState<ITravelData>();
  const [checkOutDisabled, setCheckoutDisabled] = useState<boolean>(false);

  const checkoutAction = () => {};

  // Update the flight data
  useEffect(() => {
    setFlightData(props.data);
  }, [props.data]);

  // Enable the "Checkout" button
  useEffect(() => {
    setCheckoutDisabled(!props.checkOutEnable);
  }, [props.checkOutEnable]);

  return (
    <div className="FlightSummary">
      <div className="flightSummaryContainer">
        <span className="title">Travel Summary</span>
        <div className="departureSummary">
          <TravelSummary data={props.data.outboundFlight} title={"Departure"} />
        </div>
        <div className="returnSummary">
          <TravelSummary data={props.data.inboundFlight} title={"Return"} />
        </div>
        <Button
          variant="contained"
          size="small"
          className="checkoutButton"
          disabled={checkOutDisabled}
          onClick={checkoutAction}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default FlightSummary;
