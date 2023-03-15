import "./EditableLabel.scss";
import React, {useEffect, useState, KeyboardEvent, useRef, MutableRefObject, useReducer} from "react";
import {TReducerState, EReducerActions, stateReducer} from "./stateReducer";

// Third part imports
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import produce from "immer";

// Animations
import CircularProgress from "@mui/material/CircularProgress";

// Icons
import ApplyIcon from "@mui/icons-material/DoneOutlineOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import IconButton from "@mui/material/IconButton";

export enum E_DataType {
	E_STRING,
	E_NUMBER,
}

export type T_DataTemplate = {
	datapointName: string;
	dataType: E_DataType;
};

interface IEditableLabel {
	rowID: number;
	template: T_DataTemplate;
	setterEndpoint: string;
	getterEndpoint: string;
}

const initialState: TReducerState = {
	isIdling: true,
	isApplying: false,
	isEditing: false,
	isCanceling: false,
	isError: false,
	isNoError: false,
};

function EditableLabel(props: IEditableLabel) {
	const [labelState, dispatch] = useReducer(stateReducer, initialState);
	const [prevLabel, setPrevLabel] = useState<string>("");
	const [newLabel, setNewLabel] = useState<string>("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewLabel(e.target.value);
	};

	const handleEditMode = () => {
		dispatch(EReducerActions.EDIT);
	};

	const handleDoneEdit = () => {
		updateData();
	};

	const handleCancelEdit = () => {
		dispatch(EReducerActions.CANCEL);
		setNewLabel(prevLabel);
		returnToIdle();
	};

	const returnToIdle = () => {
		setTimeout(() => {
			dispatch(EReducerActions.IDLE);
		}, 10);
	};

	const updateData = () => {
		let endpointName = props.setterEndpoint + "/" + props.rowID + "/" + props.template.datapointName;
		let dname = props.template.datapointName;

		axios
			.post(endpointName, {
				//  + props.template.datapointName
				[dname]: newLabel,
			})
			.then(response => {
				dispatch(EReducerActions.IDLE);
				setPrevLabel(newLabel);
			})
			.catch(res => {
				setNewLabel(prevLabel);
				dispatch(EReducerActions.ERROR);
			});
	};

	// Use effect to reset the component into IDLE mode
	useEffect(() => {
		let endpointName = props.getterEndpoint + "/" + props.template.datapointName;
		let p = axios.get(endpointName);
		p.then(result => {
			setNewLabel(result.data.value);
			setPrevLabel(result.data.value);
		}).catch(response => {
			console.log("Failed to get defaults : " + response);
		});
		dispatch(EReducerActions.IDLE);
	}, []);

	return (
		<div className="editableLabel">
			<div className="left">
				{!labelState.isEditing ? (
					<Typography variant="h6" className={`label ${labelState.isError ? "error" : ""}`}>
						{newLabel}
					</Typography>
				) : null}
				{labelState.isEditing ? (
					<TextField
						variant="standard"
						size="small"
						value={newLabel}
						onChange={e => {
							handleChange(e as React.ChangeEvent<HTMLInputElement>);
						}}
					/>
				) : null}
			</div>
			<div className="right">
				{labelState.isEditing ? (
					<>
						<IconButton onClick={handleDoneEdit}>
							<ApplyIcon className="ApplyIcon" />
						</IconButton>
						<IconButton onClick={handleCancelEdit}>
							<CancelOutlinedIcon className="cancelEditIcon" />
						</IconButton>
					</>
				) : null}
				{labelState.isIdling ? (
					<IconButton onClick={handleEditMode}>
						<EditIcon className="editIcon" />
					</IconButton>
				) : null}
				{labelState.isApplying ? (
					<>
						<CircularProgress size={"30px"} />
					</>
				) : null}
			</div>
		</div>
	);
}

export default EditableLabel;
