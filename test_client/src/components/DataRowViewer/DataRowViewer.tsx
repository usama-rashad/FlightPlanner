import "./DataRowViewer.scss";
import {IAirlineInfo} from "./../AirlineViewer/AirlineViewer";
import React, {useEffect} from "react";

interface IDataRowViewer extends IAirlineInfo {
	isTitle: boolean;
	isSelected: boolean;
	isClicked: (id: number) => void;
}

function DataRowViewer(props: IDataRowViewer) {
	useEffect(() => {
		console.log("Title setting has been changed");
	}, [props.isSelected]);

	const rowClickAction = () => {
		props.isClicked(props.id);
	};

	return (
		<div className={props.isTitle ? "dataRowViewer title" : "dataRowViewer"} onClick={rowClickAction}>
			<div className="id">
				<h4>{props.id}</h4>
			</div>
			<div className="airlineName">
				<h4>{props.airlineName}</h4>
			</div>
			<div className="airlineHub">
				<h4>{props.airlineHub}</h4>
			</div>
			<div className="airlineIcon">
				<h4>{props.airlineIcon}</h4>
			</div>
		</div>
	);
}

export default DataRowViewer;
