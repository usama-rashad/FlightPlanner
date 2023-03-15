import React from "react";
import "./EditableRow.scss";

import EditableLabel, {E_DataType, T_DataTemplate} from "./../EditableLabel/EditableLabel";

interface IEditableRow {
	rowID: number;
	setterPrefix: string;
	getterPrefix: string;
	dataPoints: T_DataTemplate[];
}

function EditableRow(props: IEditableRow) {
	return (
		<div className="editableRow">
			{props.dataPoints.map((datapoint, index) => (
				<EditableLabel
					rowID={props.rowID}
					key={index}
					template={{
						datapointName: datapoint.datapointName,
						dataType: datapoint.dataType,
					}}
					getterEndpoint={props.getterPrefix}
					setterEndpoint={props.setterPrefix}
				/>
			))}
		</div>
	);
}

export default EditableRow;
