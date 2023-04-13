import React from "react";
import "./Backdrop.scss";

// Data sources
import { holidayDestiationData } from "../../../data";

// Images
import BackdropImage from "../../../assets/Backgrounds/backdrop.jpg";
import AdvertCard from "../AdvertCard/AdvertCard";

function Backdrop() {
  return (
    <div className="backdrop">
      <img src={BackdropImage} alt="" className="image" />
      <div className="advertContainer">
        <div className="advertisements">
          <AdvertCard desc={holidayDestiationData[0].desc} img={holidayDestiationData[0].img} />
          <AdvertCard desc={holidayDestiationData[1].desc} img={holidayDestiationData[1].img} />
          <AdvertCard desc={holidayDestiationData[2].desc} img={holidayDestiationData[2].img} />
        </div>
      </div>
    </div>
  );
}

export default Backdrop;
