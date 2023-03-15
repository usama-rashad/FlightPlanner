import axios from "axios";
import "./App.css";
import EditableLabel, {E_DataType} from "../Components/EditableLabel/EditableLabel";
import {useState} from "react";

import EditableRow from "./../Components/EditableRow/EditableRow";

function App() {
	return (
		<div className="App">
			<EditableRow
				rowID={1}
				setterPrefix={"http://localhost:5000/api/v1/set"}
				getterPrefix={"http://localhost:5000/api/v1/get"}
				dataPoints={[
					{datapointName: "username", dataType: E_DataType.E_STRING},
					{datapointName: "firstname", dataType: E_DataType.E_STRING},
					{datapointName: "lastname", dataType: E_DataType.E_STRING},
					{datapointName: "userage", dataType: E_DataType.E_STRING},
				]}
			/>
		</div>
	);
}

export default App;
