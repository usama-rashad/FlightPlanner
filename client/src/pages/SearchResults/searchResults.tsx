import React, {useState} from "react";
import "../SearchResults/searchResults.scss";

// Components
import SearchResultsCard from "../../components/SearchResultCard/SearchResultsCard";
import VerticalSearchBar from "../../components/VerticalSearchBar/VerticalSearchBar";

function searchResults() {
	return (
		<div className="search">
			<div className="searchContainer">
				<div className="searchCriteria">
					<VerticalSearchBar />
				</div>
			</div>

			<div className="searchResults">
				<span className="title">Search results</span>
				<SearchResultsCard
					airlineImage={""}
					airlineName={""}
					departureAirportCode={""}
					departureTime={""}
					arrivalAirportCode={""}
					arrivalTime={""}
					timeOfFlight={""}
					numberOfStops={0}
					unitFare={0}
					totalFare={0}
				/>
			</div>
			<div className="flightSummary">FlightSummary</div>
		</div>
	);
}

export default searchResults;
