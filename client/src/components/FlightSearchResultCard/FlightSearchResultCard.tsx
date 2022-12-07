// Styles
import "../FlightSearchResultCard/FlightSearchResultCard.scss";

// Types
import {IFlightData, ILegData} from "./Datatypes";

// Components
import React from "react";
import OutboundCard from "./OutboundCard";
import InboundCard from "./InboundCard";

function SearchResultsCard(props?: IFlightData) {
	return (
		<div className="searchResultsCard">
			<OutboundCard />
			<InboundCard />
		</div>
	);
}

export default SearchResultsCard;
