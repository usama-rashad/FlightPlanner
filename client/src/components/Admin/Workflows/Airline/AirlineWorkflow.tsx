import "./AirlineWorkflow.scss";

import React from "react";
import CreateNewAirline from "./CreateNewAirline/CreateNewAirline";
import ViewExistingAirlines from "./ViewExistingAirlines/ViewExistingAirlines";

function AirlineWorkflow() {
  return (
    <div className="airlineWorkflow">
      <CreateNewAirline />
      <ViewExistingAirlines />
    </div>
  );
}

export default AirlineWorkflow;
