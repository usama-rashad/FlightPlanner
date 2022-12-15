import React, { useState } from "react";
import "../SearchResults/searchResults.scss";

// Components
import FlightSearchResultCard from "../../components/Flight/FlightSearchResultCard/FlightSearchResultCard";
import VerticalSearchBar from "../../components/Common/VerticalSearchBar/VerticalSearchBar";
import SelectionSummary from "../../components/SelectionSummary/SelectionSummary";

// Import sample flight result
import { sampleFlightResult } from "../../data";

function searchResults() {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const searchItemSelected = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div className="search">
      <div className="searchCriteria">
        <VerticalSearchBar />
      </div>

      <div className="searchResults">
        <span className="title">Search results</span>
        <FlightSearchResultCard
          searchIndex={1}
          data={sampleFlightResult}
          isSelected={selectedItem === 1}
          isPressed={searchItemSelected}
        />
        <FlightSearchResultCard
          searchIndex={2}
          data={sampleFlightResult}
          isSelected={selectedItem === 2}
          isPressed={searchItemSelected}
        />
      </div>
      <div className="flightSummary">
        <SelectionSummary
          checkOutEnable={selectedItem !== 0}
          data={sampleFlightResult}
        />
      </div>
    </div>
  );
}

export default searchResults;
