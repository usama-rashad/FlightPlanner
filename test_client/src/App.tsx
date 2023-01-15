import React, {useRef, useState} from "react";
import axios from "axios";
import "./App.scss";
import AirlineViewer from "./components/AirlineViewer/AirlineViewer";

function App() {
	const [airlineName, setAirlineName] = useState("123");
	const [airlineHub, setAirlineHub] = useState("123");
	const [airlineIcon, setAirlineIcon] = useState("");
	const [statusMessage, setStatusMessage] = useState("");
	const [progressPct, setProgressPct] = useState<string>("0");
	const [uploadProgressFlag, setUploadProgressFlag] = useState(false);

	const iconFileRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>;

	// Actions
	const sendData = async () => {
		let airlineIconSplit = airlineIcon.split("\\");
		let airlineIconFileName = airlineIconSplit.at(airlineIconSplit.length - 1);
		const data = {airlineName: airlineName, airlineHub: airlineHub, airlineIcon: airlineIconFileName};
		const options = {method: "POST", url: "http://localhost:5000/api/v1/createAirline/data", data: data, headers: {"Content-Type": "application/json"}};
		await axios(options)
			.then((response) => {
				setStatusMessage(response.data.message);
			})
			.catch((err) => {
				setStatusMessage("Server error. Error details : " + JSON.stringify(err.response.data));
			});
	};
	const sendFile = async () => {
		let airlineIconSplit = airlineIcon.split("\\");
		let airlineIconFileName = airlineIconSplit.at(airlineIconSplit.length - 1);

		// Form
		if (iconFileRef.current.files) {
			setUploadProgressFlag(true);
			let formData = new FormData();
			formData.append("airlineIcon", iconFileRef?.current.files[0]);
			formData.append("airlineName", airlineName);
			const options = {
				method: "POST",
				url: "http://localhost:5000/api/v1/createAirline/file",
				data: formData,
				headers: {"Content-Type": "multipart/form-data"},
				onUploadProgress(progressEvent: any) {
					if (progressEvent) {
						// Calculate the upload progress
						if (progressEvent.progress) {
							let progress: number = progressEvent.progress * 100.0;
							setProgressPct(progress.toFixed(1));
							if (progress >= 100.0) {
								setTimeout(() => {
									setUploadProgressFlag(false);
								}, 2000);
							}
						}
					}
				},
			};
			await axios(options)
				.then((response) => {
					setStatusMessage(response.data.message);
					setUploadProgressFlag(false);
				})
				.catch((err) => {
					setStatusMessage("Server error. Error details : " + JSON.stringify(err.response.data));
					setUploadProgressFlag(false);
				});
		}
	};
	const testServer = async () => {
		const options = {method: "get", url: "http://localhost:5000/"};
		await axios(options)
			.then((response) => {
				let message: string = "Server response:" + JSON.stringify(response.data.message) + "," + "counter:" + response.data.counter;
				setStatusMessage(message);
			})
			.catch((err) => {
				setStatusMessage("Error while testing server. Error details : " + err);
			});
	};

	return (
		<div className="App">
			<h2>Test client for Axios</h2>
			<div className="controlPanel">
				<button onClick={sendData}>Send data</button>
				<button onClick={sendFile}>Send file</button>
				<button onClick={testServer}>Test Server</button>
			</div>
			<div className="inputs">
				<div className="row">
					<h4>Airline name :</h4>
					<input
						type="text"
						value={airlineName}
						onChange={(e) => {
							setAirlineName(e.target.value);
						}}
					/>
				</div>
				<div className="row">
					<h4>Airline hub :</h4>
					<input
						type="text"
						value={airlineHub}
						onChange={(e) => {
							setAirlineHub(e.target.value);
						}}
					/>
				</div>
				<div className="row">
					<h4>Airline icon :</h4>
					<input
						type="file"
						ref={iconFileRef}
						value={airlineIcon}
						onChange={(e) => {
							setAirlineIcon(e.target.value);
						}}
					/>
				</div>
			</div>
			<div className="statusMessage">
				<h4>{statusMessage}</h4>
			</div>
			{uploadProgressFlag && (
				<div className="progressStatus">
					<h4>Upload progress {progressPct} %</h4>
				</div>
			)}
			<div className="airlineViewer">
				<AirlineViewer />
			</div>
		</div>
	);
}

export default App;
