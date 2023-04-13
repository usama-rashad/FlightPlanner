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
    </div>
  );
}

export default home;
