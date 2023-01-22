import "./LabelWithEdit.scss";
import React, {useEffect, useState, KeyboardEvent, useRef, MutableRefObject, useReducer} from "react";
import {TReducerState, EReducerActions, stateReducer} from "./stateReducer";

// Third part imports
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Animations
import CircularProgress from "@mui/material/CircularProgress";

// Icons
import DoneIcon from "@mui/icons-material/DoneOutlineOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import IconButton from "@mui/material/IconButton";

interface ILabelWithEdit {
	label: string;
	status: TReducerState;
	updateExternalLabel: (final: string) => void /* External update function*/;
	updateMethod: (flag: boolean, label: string) => Promise<void>;
}

const initialState: TReducerState = {
	isApplying: false,
	isEditing: false,
	isError: false,
};

function LabelWithEdit(props: ILabelWithEdit) {
	const [labelState, dispatch] = useReducer(stateReducer, initialState);
	const [label, setLabel] = useState<string>("");

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLabel(e.target.value);
	};

	const handleEditMode = () => {
		dispatch(EReducerActions.EDIT);
	};

	const handleDoneEdit = () => {
		dispatch(EReducerActions.APPLY);
		props.updateExternalLabel(label);
		updateData();
	};

	const handleCancelEdit = () => {};

	const updateData = () => {
		console.log("Applying new data...");
		props
			.updateMethod(true, label) // True to test a pass of data
			.then(() => {
				console.log("Successfully applied new data...");
				dispatch(EReducerActions.NO_ERROR);
			})
			.catch(() => {
				console.log("Failed to apply new data...");
				dispatch(EReducerActions.ERROR);
			});
	};

	return (
		<div className="labelWithEdit">
			<div className="left">
				{!labelState.isEditing ? (
					<Typography variant="h6" className="label">
						{label}
					</Typography>
				) : null}
				{labelState.isEditing ? (
					<TextField
						variant="standard"
						size="small"
						value={label}
						onChange={(e) => {
							handleTextChange(e as React.ChangeEvent<HTMLInputElement>);
						}}
					/>
				) : null}
			</div>
			<div className="right">
				{!labelState.isEditing ? (
					<IconButton onClick={handleDoneEdit}>
						<DoneIcon className="doneIcon" />
					</IconButton>
				) : null}
				{!labelState.isApplying ? (
					<IconButton onClick={handleEditMode}>
						<EditIcon className="editIcon" />
					</IconButton>
				) : null}
				{labelState.isApplying ? (
					<IconButton onClick={handleCancelEdit}>
						<CancelOutlinedIcon className="cancelEditIcon" />
					</IconButton>
				) : null}
				{labelState.isApplying ? <CircularProgress size={"30px"} /> : null}
			</div>
		</div>
	);
}

export default LabelWithEdit;
