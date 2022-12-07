// Styles
import "../FlightSearchResultCard/FlightSearchResultCard.scss";

// Types
import {ITravelData, IFlightData, ILegData} from "./Datatypes";

// Components
import React from "react";
import OutboundCard from "./OutboundCard";
import InboundCard from "./InboundCard";
import {Button} from "@mui/material";
import {
	EmiratesAirlineIcon,
	TurkishAirlineIcon,
} from "./../../assets/AirlineIcons/AirlineIcons";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";

function SearchResultsCard(props: ITravelData) {
	return (
		<div className="searchResultsCard">
			<div className="airlineSummary">
				<div className="airlineLogos">
					{props.outboundFlight.numberOfStops > 0 ? (
						props.outboundFlight.flightData.map((legInfo) => (
							<span className="title">{legInfo.airlineName}</span>
						))
					) : (
						<div className="outboundAirline">
							<img
								src={props.outboundFlight.flightData[0].airlineImage}
								alt=""
							/>
							<span className="title">
								{props.outboundFlight.flightData[0].airlineName}
							</span>
						</div>
					)}

					{/* Inbound airline display if there is only one airline */}
					<div className="inboundAirline">
						<img src={props.inboundFlight.flightData[0].airlineImage} alt="" />
						<span className="title">
							{props.inboundFlight.flightData[0].airlineName}
						</span>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="outboundTravel">
					<OutboundCard
						flightData={props.outboundFlight.flightData}
						numberOfStops={props.outboundFlight.numberOfStops}
						unitFare={props.outboundFlight.unitFare}
						totalFare={props.outboundFlight.totalFare}
					/>
				</div>
				<div className="inboundTravel">
					<InboundCard
						flightData={props.inboundFlight.flightData}
						numberOfStops={props.inboundFlight.numberOfStops}
						unitFare={props.inboundFlight.unitFare}
						totalFare={props.inboundFlight.totalFare}
					/>
				</div>
			</div>
			<div className="divider" />
			<div className="price">
				<div className="priceGroup">
					<span className="unitPrice">
						<EuroSymbolIcon className="currencyIcon" />
						{props.inboundFlight.unitFare + props.outboundFlight.unitFare}
					</span>
					<span className="totalPrice">
						<EuroSymbolIcon className="currencyIcon" />
						{props.inboundFlight.totalFare + props.outboundFlight.totalFare}
					</span>
				</div>

				<Button variant="contained" size="large">
					Select
				</Button>
			</div>
		</div>
	);
}

export default SearchResultsCard;
