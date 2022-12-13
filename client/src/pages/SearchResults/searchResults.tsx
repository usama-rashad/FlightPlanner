import React, { useState } from "react";
import "../SearchResults/searchResults.scss";

// Components
import FlightSearchResultCard from "../../components/FlightSearchResultCard/FlightSearchResultCard";
import VerticalSearchBar from "../../components/Common/VerticalSearchBar/VerticalSearchBar";
import SelectionSummary from "../../components/SelectionSummary/SelectionSummary";

// Import sample flight result
import { sampleFlightResult } from "../../data";

function searchResults() {
  return (
    <div className="search">
      <div className="searchCriteria">
        <VerticalSearchBar />
      </div>

      <div className="searchResults">
        <span className="title">Search results</span>
        <FlightSearchResultCard {...sampleFlightResult} />
        <FlightSearchResultCard {...sampleFlightResult} />
        <FlightSearchResultCard {...sampleFlightResult} />
        <FlightSearchResultCard {...sampleFlightResult} />
        <FlightSearchResultCard {...sampleFlightResult} />
      </div>
      <div className="flightSummary">
        <SelectionSummary />
      </div>
    </div>
  );
}

export default searchResults;
