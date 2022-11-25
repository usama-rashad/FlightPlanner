import "./App.scss";
import AdvertCard from "./components/AdvertCard/AdvertCard";

// Custom components
import Backdrop from "./components/BackDrop/Backdrop";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Backdrop />
			<div className="advertisements">
				<AdvertCard />
				<AdvertCard />
				<AdvertCard />
			</div>
		</div>
	);
}

export default App;
