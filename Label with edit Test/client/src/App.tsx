import axios from "axios";
import "./App.css";
import LabelWithEdit, {E_LabelType} from "./../Components/LabelWithEdit/LabelWithEdit";
import {useState} from "react";

function App() {
	const [counter, setCounter] = useState(0);

	return (
		<div className="App">
			<LabelWithEdit setterEndpoint={"http://localhost:5000/setName"} getterEndpoint={"http://localhost:5000/getName"} type={E_LabelType.E_STRING} key={1} />
		</div>
	);
}

export default App;
