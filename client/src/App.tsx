import "./App.scss";

import AdvertCard from "./components/AdvertCard/AdvertCard";

// Custom components
import Backdrop from "./components/BackDrop/Backdrop";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";

// Data sources
import { holidayDestiationData } from "../src/data";

function App() {
  return (
    <div className="app">
      <Navbar />
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

export default App;
