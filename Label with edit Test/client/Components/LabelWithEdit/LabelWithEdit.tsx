import "./LabelWithEdit.scss";
import React, {useEffect, useState, KeyboardEvent, useRef, MutableRefObject, useReducer} from "react";
import {TReducerState, EReducerActions, stateReducer} from "./stateReducer";

// Third part imports
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";

// Animations
import CircularProgress from "@mui/material/CircularProgress";

// Icons
import ApplyIcon from "@mui/icons-material/DoneOutlineOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import IconButton from "@mui/material/IconButton";

export enum E_LabelType {
	E_STRING,
	E_NUMBER,
}
interface ILabelWithEdit {
	type: E_LabelType;
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

function LabelWithEdit(props: ILabelWithEdit) {
	const [labelState, dispatch] = useReducer(stateReducer, initialState);
	const [prevLabel, setPrevLabel] = useState<any>("");
	const [newLabel, setNewLabel] = useState<any>("");

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewLabel(e.target.value);
	};

	const handleEditMode = () => {
		dispatch(EReducerActions.EDIT);
	};

	const handleDoneEdit = () => {
		console.log("Entered : " + newLabel);
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
		let p = axios.post(props.setterEndpoint, {data: newLabel});
		p.then(() => {
			dispatch(EReducerActions.IDLE);
			setPrevLabel(newLabel);
		}).catch(() => {
			dispatch(EReducerActions.ERROR);
			setPrevLabel(newLabel);
		});
	};

	// Use effect to reset the component into IDLE mode
	useEffect(() => {
		dispatch(EReducerActions.IDLE);
		let p = axios.get(props.getterEndpoint);
		p.then(result => {
			setNewLabel(result.data.username);
			setPrevLabel(result.data.username);
		});
	}, []);

	return (
		<div className="labelWithEdit">
			<div className="left">
				{!labelState.isEditing ? (
					<Typography variant="h6" className="label">
						{newLabel}
					</Typography>
				) : null}
				{labelState.isEditing ? (
					<TextField
						variant="standard"
						size="small"
						value={newLabel}
						onChange={e => {
							handleTextChange(e as React.ChangeEvent<HTMLInputElement>);
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

export default LabelWithEdit;
