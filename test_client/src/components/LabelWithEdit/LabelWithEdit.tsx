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
import IconButton from "@mui/material/IconButton";

interface ILabelWithEdit {
	label: string;
	updateLabel: (final: string) => void;
}

const initialState: TReducerState = {
	isApplying: false,
	isEditing: false,
	isError: false,
};

function LabelWithEdit(props: ILabelWithEdit) {
	const [labelState, dispatch] = useReducer(stateReducer, initialState);
	const [label, setLabel] = useState<string>("");
	const [editMode, setEditMode] = useState<boolean>(false);
	const [isUpdating, setIsUpdating] = useState<boolean>(false);

	const testPromise = new Promise<void>((res, rej) => {
		setTimeout(() => {
			res();
		}, 5000);
	});

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLabel(e.target.value);
	};

	const handleEditMode = () => {
		dispatch(EReducerActions.EDIT);
		testPromise.then(() => {
			dispatch(EReducerActions.NO_ERROR);
		});
		setEditMode(true);
	};

	const handleDoneEdit = () => {
		dispatch(EReducerActions.APPLY);
		props.updateLabel(label);
		setEditMode(false);
	};

	return (
		<div className="labelWithEdit">
			<div className="left">
				{!editMode ? (
					<Typography variant="h6" className="label">
						{label}
					</Typography>
				) : null}
				{editMode ? (
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
				{editMode ? (
					<IconButton onClick={handleDoneEdit}>
						<DoneIcon className="doneIcon" />
					</IconButton>
				) : null}
				{!editMode ? (
					<IconButton onClick={handleEditMode}>
						<EditIcon className="editIcon" />
					</IconButton>
				) : null}
				{labelState.isEditing ? <CircularProgress size={"30px"} /> : null}
			</div>
		</div>
	);
}

export default LabelWithEdit;
