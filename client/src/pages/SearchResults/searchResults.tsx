import React, { useState } from "react";
import "../SearchResults/searchResults.scss";

// Components
import SearchResultsCard from "../../components/SearchResultCard/SearchResultsCard";

function searchResults() {
  return (
    <div className="search">
      <div className="searchCriteria">SearchBar</div>
      <div className="searchResults">
        <span className="title">Search results</span>
        <SearchResultsCard />
        <SearchResultsCard />
        <SearchResultsCard />
        <SearchResultsCard />
        <SearchResultsCard />
        <SearchResultsCard />
        <SearchResultsCard />
        <SearchResultsCard />
      </div>
      <div className="flightSummary">FlightSummary</div>
    </div>
  );
}

export default searchResults;
