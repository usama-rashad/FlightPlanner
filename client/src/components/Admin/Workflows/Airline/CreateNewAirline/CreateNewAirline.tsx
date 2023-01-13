import "./CreateNewAirline.scss";
import UploadAnimation from "./../../../../../assets/Animations/UploadAnimation.json";
import React, {useReducer, useRef, useState} from "react";
import axios from "axios";
import Lottie, {useLottie} from "lottie-react";

// Types
type T_Data = {
	airlineName: string;
	airlineHub: string;
};
// Icons
import CircularProgress from "@mui/material/CircularProgress";

// Components
import {Box, Button, FormLabel, Input} from "@mui/material";

function CreateNewAirline() {
	//File ref
	const iconSelectorRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
	const iconFileRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
	// Use Lottie for animation
	const options = {
		animationData: UploadAnimation,
		loop: false,
		autoplay: false,
	};
	const {play, stop, goToAndStop, playSegments} = useLottie(options);
	// Input fields
	const [airlineName, setAirlineName] = useState("");
	const [airlineHub, setAirlineHub] = useState("");
	const [airlineIcon, setAirlineIcon] = useState("");
	// Status
	const [uploadingFlag, setUploadingFlag] = useState(false);
	const [uploadErrorFlag, setUploadErrorFlag] = useState(false);
	const [uploadedFlag, setUploadedFlag] = useState(false);

	// Button actions
	const iconSelectAction = () => {
		// Open a file select dialog and select a file.
		iconSelectorRef.current.click();
	};

	// When the file is selected, update the name in the text field.
	const iconFileSelectedAction = () => {
		if (iconSelectorRef.current.files) setAirlineIcon(iconSelectorRef.current.files[0].name);
	};

	// Action to send the form data
	const sendFormTextData = async (data: T_Data) => {
		await axios({
			method: "POST",
			data: data,
			headers: {"content-type": "x-www-form-urlencoded"},
			url: "http://localhost:5000/api/v1/createAirline/data",
		})
			.catch((err) => {
				setUploadErrorFlag(true);
				setUploadingFlag(false);
				// Stop the animation
				goToAndStop(0, true);
			})
			.then((response) => {
				setUploadingFlag(false);
				setUploadErrorFlag(false);
				setUploadedFlag(true);
				playSegments([250, 360], true);
			});
	};

	// Action to send the multipart file data
	const sendFormMultiPartData = async (data: FormData) => {
		await axios({
			method: "POST",
			data: data,
			headers: {"content-type": "multipart/form-data"},
			url: "http://localhost:5000/api/v1/createAirline/file",
		})
			.catch((err) => {
				setUploadErrorFlag(true);
				setUploadingFlag(false);
				// Stop the animation
				goToAndStop(0, true);
			})
			.then((response) => {
				setUploadingFlag(false);
				setUploadErrorFlag(false);
				setUploadedFlag(true);
				playSegments([250, 360], true);
			});
	};
	const createNewAirlineAction = async (e: any) => {
		e.preventDefault();
		// Create the new airline by inserting the data into the table
		if (iconSelectorRef.current.files) {
			setUploadingFlag(true);
			setUploadedFlag(false);
			playSegments([0, 180]);
			console.log("Uploading");

			let formData = new FormData();
			formData.append("airlineName", airlineName);
			formData.append("airlineHub", airlineHub);
			sendFormTextData({airlineHub: airlineHub, airlineName: airlineName});
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
							<Input ref={iconFileRef} disabled={true} className="input" type="text" placeholder="" value={airlineIcon} />
							<Button className="button" variant="contained" onClick={iconSelectAction}>
								Select
							</Button>
						</div>
					</div>

					<input type="file" className="hiddenFileInput" ref={iconSelectorRef} onChange={iconFileSelectedAction} accept=".ico,.jpg,.png" />
					<Box sx={{m: 1, position: "relative"}}>
						<Button variant="contained" disabled={uploadingFlag} onClick={createNewAirlineAction}>
							Create
						</Button>
						{uploadingFlag && (
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
					{uploadingFlag && <Lottie className="uploadAnimation" animationData={UploadAnimation} loop={false} />}
				</div>
			</div>
		</div>
	);
}

export default CreateNewAirline;
