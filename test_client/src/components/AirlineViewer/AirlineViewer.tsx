import React, {useState} from "react";
import "./AirlineViewer.scss";

// Interfaces
interface IAirlineInfo {
	id: number;
	airlineName: string;
	airlineHub: string;
	airlineIcon: string;
}

// Imports
import axios from "axios";

function AirlineViewer() {
	const [airlineData, setAirlineData] = useState<IAirlineInfo[]>();
	// Airline data store
	const readAirline = async () => {
		let dataRead: IAirlineInfo[];
		const options = {
			url: "http://localhost:5000/api/v1/viewAirlines",
			method: "get",
		};
		await axios(options)
			.then((data) => {
				dataRead = data.data as IAirlineInfo[];
				setAirlineData(dataRead);
				console.log("Read some data ");
			})
			.catch((error) => {
				setAirlineData([]);
				console.log("Failed to read some data. Error code :  " + error);
			});
	};
	return (
		<div className="airlineViewer">
			<h3>Browse Airlines</h3>
			<button onClick={readAirline}>Read airlines</button>
			<div className="data">
				{airlineData?.map((airline) => {
					return (
						<div className="dataRow">
							<h4>{airline.id}</h4>
							<h4>{airline.airlineName}</h4>
							<h4>{airline.airlineHub}</h4>
							<h4>{airline.airlineIcon}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default AirlineViewer;
