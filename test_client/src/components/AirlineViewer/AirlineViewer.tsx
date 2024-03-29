import React, {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
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
import EditableLabel, {E_DataType} from "../EditableLabel/EditableLabel";

const deleteIconStyles = {
	color: "red",
	cursor: "pointer",
	opacity: 0.2,
	"&:hover": {opacity: 1.0},
};

const editIconStyles = {
	color: "darkslateblue",
	cursor: "pointer",
	opacity: 0.2,
	"&:hover": {opacity: 1.0},
};

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
			.then(data => {
				dataRead = data.data as IAirlineInfo[];
				setAirlineData(dataRead);
			})
			.catch(error => {
				setAirlineData([]);
			});
	};

	// Action for row select
	const dataRowSelected = (id: number) => {
		setSelectedRow(id);
	};

	// Action to write data
	const handleWriteData = (index: number) => {};

	return (
		<div className="airlineViewer">
			<h3>Browse Airlines</h3>
			<Button onClick={readAirline} variant="contained">
				Read airlines
			</Button>
			<TableContainer component={Paper} sx={{maxwidth: 650}}>
				<Table>
					<TableHead className="tableHead">
						<TableRow className="tableTitle">
							<TableCell className="cell1">
								<span>ID</span>
							</TableCell>
							<TableCell className="cell2">
								<span>Airline name</span>
							</TableCell>
							<TableCell className="cell3">
								<span>Airline hub</span>
							</TableCell>
							<TableCell className="cell4">
								<span>Airline Icon</span>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className="tableBody">
						{airlineData?.map((airline, index) => {
							return (
								<TableRow className="tableRow">
									<TableCell className="cell1">
										<span>{index + 1}</span>
									</TableCell>
									<TableCell className="cell2">
										<EditableLabel
											rowID={index + 1}
											template={{
												datapointName: "airlineName",
												dataType: E_DataType.E_STRING,
											}}
											setterEndpoint={"http://localhost:5000/api/v1/set"}
											getterEndpoint={"http://localhost:5000/api/v1/get"}
										/>
									</TableCell>
									<TableCell className="cell3">
										<EditableLabel
											rowID={index + 1}
											template={{
												datapointName: "airlineHub",
												dataType: E_DataType.E_STRING,
											}}
											setterEndpoint={"http://localhost:5000/api/v1/set"}
											getterEndpoint={"http://localhost:5000/api/v1/get"}
										/>
									</TableCell>
									<TableCell className="cell4">
										<span>{airline.airlineIcon}</span>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default AirlineViewer;
