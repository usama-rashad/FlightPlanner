import React from "react";
import "./../Home/home.scss";
import AdvertCard from "../../components/Common/AdvertCard/AdvertCard";
import Backdrop from "../../components/Common/BackDrop/Backdrop";
import Searchbar from "../../components/Common/Searchbar/Searchbar";

// Data sources
import { holidayDestiationData } from "../../data";

function home() {
  return (
    <div className="home">
      <Backdrop />
      <div className="flightSearch">
        <Searchbar />
      </div>
      <div className="advertContainer">
        <div className="advertisements">
          <AdvertCard
            desc={holidayDestiationData[0].desc}
            img={holidayDestiationData[0].img}
          />
          <AdvertCard
            desc={holidayDestiationData[1].desc}
            img={holidayDestiationData[1].img}
          />
          <AdvertCard
            desc={holidayDestiationData[2].desc}
            img={holidayDestiationData[2].img}
          />
        </div>
      </div>
    </div>
  );
}

export default home;
