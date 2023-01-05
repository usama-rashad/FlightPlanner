import "./CreateNewAirline.scss";
import UploadAnimation from "./../../../../../assets/Animations/UploadAnimation.json";
import React, {useReducer, useRef, useState} from "react";
import Lottie from "lottie-react";

// Reducers
import {
	createNewAirlineReducer,
	createAirlineReducerInitialState,
	I_CreateNewAirlineReducerActions,
	E_CreateNewAirlineReducerActionTypes,
} from "./../../../../../reducers/airline/createNewAirlineReducer";

// Icons
import CircularProgress from "@mui/material/CircularProgress";

// Components
import {Box, Button, FormLabel, Input} from "@mui/material";

function CreateNewAirline() {
	// Create airline reducer
	const [state, dispatch] = useReducer(
		createNewAirlineReducer,
		createAirlineReducerInitialState
	);
	//File ref
	const iconSelectorRef =
		useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
	const iconFileRef =
		useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
	// Input fields
	const [airlineName, setAirlineName] = useState("");
	const [airlineHub, setAirlineHub] = useState("");
	const [airlineIcon, setAirlineIcon] = useState("");
	// Status
	const [uploadFlag, setUploadFlag] = useState(false);

	// Button actions
	const iconSelectAction = () => {
		// Open a file select dialog and select a file.
		iconSelectorRef.current.click();
	};

	// When the file is selected, update the name in the text field.
	const iconFileSelectedAction = () => {
		if (iconSelectorRef.current.files)
			setAirlineIcon(iconSelectorRef.current.files[0].name);
	};

	const createNewAirlineAction = (e: any) => {
		e.preventDefault();
		// Create the new airline by inserting the data into the table
		if (iconSelectorRef.current.files) {
			console.log("New airline creation in progress");
			setUploadFlag(true);
			let formData = new FormData();
			formData.append("airlineName", airlineName);
			formData.append("airlineHub", airlineHub);
			formData.append("airlineIcon", iconSelectorRef.current.files[0]);
			dispatch({
				action: E_CreateNewAirlineReducerActionTypes.AddAirline,
				payload: formData,
			});
		}
	};

	return (
		<div className="createNewAirline">
			<div className="container">
				<div className="newAirlineForm">
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
								ref={iconFileRef}
								disabled={true}
								className="input"
								type="text"
								placeholder=""
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
						type="file"
						className="hiddenFileInput"
						ref={iconSelectorRef}
						onChange={iconFileSelectedAction}
						accept=".ico,.jpg,.png"
					/>
					<Box sx={{m: 1, position: "relative"}}>
						<Button
							variant="contained"
							disabled={uploadFlag}
							onClick={createNewAirlineAction}
						>
							Create
						</Button>
						{uploadFlag && (
							<CircularProgress
								size={24}
								sx={{
									position: "absolute",
									top: "50%",
									left: "50%",
									marginTop: "-12px",
									marginLeft: "-12px",
								}}
							/>
						)}
					</Box>
					<Lottie
						className="uploadAnimation"
						animationData={UploadAnimation}
						loop={true}
					/>
					<span>{`Current state : ${JSON.stringify(
						state.successResponse
					)}`}</span>
				</div>
			</div>
		</div>
	);
}

export default CreateNewAirline;
