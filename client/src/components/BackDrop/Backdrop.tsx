import React from "react";
import "./Backdrop.scss";

// Images
import BackdropImage from "../../assets/backdrop.jpg";

function Backdrop() {
	return (
		<div className="backdrop">
			<img src={BackdropImage} alt="" className="image" />
		</div>
	);
}

export default Backdrop;
