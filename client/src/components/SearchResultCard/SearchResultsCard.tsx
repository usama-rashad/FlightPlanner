import "../SearchResultCard/SearchResultCard.scss";

import React from "react";

interface ISearchResultCard {
	airlineImage: string;
	airlineName: string;
	departureAirportCode: string;
	departureTime: string;
	arrivalAirportCode: string;
	arrivalTime: string;
	timeOfFlight: string;
	numberOfStops: number;
	unitFare: number;
	totalFare: number;
}

function SearchResultsCard(props?: ISearchResultCard) {
	return (
		<div className="searchResultsCard">
			<div className="airlineImage">
				<img src={props?.airlineImage} alt="" />
			</div>
			<div className="flightInfo"></div>
			<div className="fareInfo"></div>
		</div>
	);
}

export default SearchResultsCard;
