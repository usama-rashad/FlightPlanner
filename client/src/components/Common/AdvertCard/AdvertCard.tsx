import "./AdvertCard.scss";
import React from "react";

export interface IAdvertCard {
	desc: string;
	img: string;
}

function AdvertCard({desc, img}: IAdvertCard) {
	return (
		<div className="advertcard">
			<div className="advertCardContainer">
				<div className="textBackground">
					<span className="description">{desc}</span>
				</div>
				<img src={img} alt="" className="image" />
			</div>
		</div>
	);
}

export default AdvertCard;
