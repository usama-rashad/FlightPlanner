import "./CreateNewAirline.scss";

import React, {useRef, useState} from "react";

// Components
import {Button, FormLabel, Input} from "@mui/material";

function CreateNewAirline() {
	// Input fields
	const [airlineName, setAirlineName] = useState("");
	const [airlineHub, setAirlineHub] = useState("");
	const [airlineIcon, setAirlineIcon] = useState("");

	// Hidden file reference
	const fileRef = useRef<HTMLInputElement>(null);
	// Button actions
	const iconSelectAction = () => {
		// Open a file select dialog and select a file
		fileRef.current?.click();
	};
	const fileChangeAction = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (fileRef !== null) {
			console.log(airlineIcon);
		}
	};
	const createNewAirlineAction = (e: any) => {
		e.preventDefault();
		console.log("New airline creation in progress");
	};

	return (
		<div className="createNewAirline">
			<div className="container">
				<div className="newAirlineForm">
					<form id="createAirlineForm">
						<span className="title">Create a new Airline</span>
						<div className="dataFields">
							<div className="field">
								<FormLabel className="label">Airline name</FormLabel>
								<Input
									className="input"
									type="text"
									placeholder="e.g. King Air"
									onChange={(e) => {
										setAirlineName(e.currentTarget.value);
									}}
									value={airlineName}
								/>
							</div>
							<div className="field">
								<FormLabel className="label">Airline hub</FormLabel>
								<Input
									className="input"
									type="text"
									placeholder="e.g. Islamabad"
									onChange={(e) => {
										setAirlineHub(e.currentTarget.value);
									}}
									value={airlineHub}
								/>
							</div>
							<div className="field">
								<FormLabel className="label">Airline Icon</FormLabel>
								<Input
									disabled={true}
									className="input"
									type="text"
									placeholder=""
									onChange={(e) => {
										setAirlineName(e.currentTarget.value);
									}}
									value={airlineIcon}
								/>
								<Button
									className="button"
									variant="contained"
									onClick={iconSelectAction}
								>
									Select
								</Button>
							</div>
						</div>

						<input
							ref={fileRef}
							type="file"
							onChange={fileChangeAction}
							className="hiddenFileInput"
						/>
						<Button
							type="submit"
							className="createButton"
							variant="contained"
							onClick={createNewAirlineAction}
						>
							Create
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CreateNewAirline;
