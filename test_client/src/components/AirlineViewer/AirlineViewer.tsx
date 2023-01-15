import React, {useState} from "react";
import "./AirlineViewer.scss";

// Interfaces
export interface IAirlineInfo {
	id: number;
	airlineName: string;
	airlineHub: string;
	airlineIcon: string;
}

// Imports
import axios from "axios";
import DataRowViewer from "../DataRowViewer/DataRowViewer";

function AirlineViewer() {
	const [airlineData, setAirlineData] = useState<IAirlineInfo[]>();
	const [selectedRow, setSelectedRow] = useState<number>(0);
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

	// Action for row select
	const dataRowSelected = (id: number) => {
		console.log(`Row number ${id} is selected.`);
		setSelectedRow(id);
	};

	return (
		<div className="airlineViewer">
			<h3>Browse Airlines</h3>
			<button onClick={readAirline}>Read airlines</button>
			<div className="data">
				<div className="dataTitle">
					<div className="id">
						<h4>ID</h4>
					</div>
					<div className="airlineName">
						<h4>Airline Name</h4>
					</div>
					<div className="airlineHub">
						<h4>Airline Hub</h4>
					</div>
					<div className="airlineIcon">
						<h4>Airline Icon</h4>
					</div>
				</div>

				{airlineData?.map((airline) => {
					return (
						<DataRowViewer
							key={airline.id}
							id={airline.id}
							airlineName={airline.airlineName}
							airlineHub={airline.airlineHub}
							airlineIcon={airline.airlineIcon}
							isTitle={false}
							isClicked={dataRowSelected}
							isSelected={airline.id === selectedRow}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default AirlineViewer;
