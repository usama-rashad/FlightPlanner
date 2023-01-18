import "./LabelWithEdit.scss";

import React, {useEffect, useState} from "react";
import Validator from "validator";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import TextField from "@mui/material/TextField";

type LabelStyles = {
	editStyle: string;
	errorStyle: string;
};

function LabelWithEdit() {
	const [title, setTitle] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [valid, setValid] = useState(false);
	const [labelStyles, setLabelStyles] = useState<LabelStyles>({editStyle: "", errorStyle: "error"});

	const editAction = () => {
		setEditMode(!editMode);
		console.log(editMode);
	};

	const updateTitle = (e: any) => {
		setTitle(e.target.value);
	};

	const applyChanges = (e: any) => {
		if (e.code === "Enter") {
			setEditMode(false);
			e.preventDefault();
		}
	};

	// Register and de-register events
	useEffect(() => {
		document.addEventListener("keydown", applyChanges);
		return () => {
			document.removeEventListener("keydown", applyChanges);
		};
	}, []);

	// Validate input
	useEffect(() => {
		let isValid = Validator.isAlpha(title);
		setValid(isValid);
		console.log("isValid: " + isValid);
	}, [title]);

	return (
		<div className={`labelWithEdit ${labelStyles.editStyle} ${labelStyles.errorStyle}`}>
			<Box className="box" sx={{width: "350px", height: "45px"}}>
				<div className="left">
					{!editMode && (
						<Typography className="label" variant="h5">
							{title}
						</Typography>
					)}
					{editMode && (
						<TextField
							size="small"
							variant="standard"
							value={title}
							onSubmit={(e) => {
								applyChanges(e);
							}}
							onChange={(e) => {
								updateTitle(e);
							}}
						/>
					)}
				</div>
				<div className="right">
					{editMode && (
						<IconButton onClick={editAction}>
							<DoneOutlineOutlinedIcon sx={{color: "green", cursor: "pointer"}} />
						</IconButton>
					)}
					{!editMode && (
						<IconButton onClick={editAction}>
							<EditOutlinedIcon sx={{color: "darkgoldenrod", cursor: "pointer"}} />
						</IconButton>
					)}
				</div>
			</Box>
		</div>
	);
}

export default LabelWithEdit;
