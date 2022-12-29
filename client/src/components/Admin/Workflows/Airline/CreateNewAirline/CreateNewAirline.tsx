import "./CreateNewAirline.scss";

import React from "react";

// Components
import { Button, FormLabel, Input } from "@mui/material";

// Types

type TFormFields = {
  fieldNames: string;
  fieldPlaceholder: string;
  iconURL: string;
  isIconAvailable?: boolean;
};

const createNewAirlineFormFields: TFormFields[] = [
  {
    fieldNames: "Airline Name",
    fieldPlaceholder: "e.g. King Air",
    iconURL: "",
  },
  {
    fieldNames: "Airline Hub",
    fieldPlaceholder: "e.g. Islamabad",
    iconURL: "",
  },
  {
    fieldNames: "Airline Icon",
    fieldPlaceholder: "Select icon",
    iconURL: "",
    isIconAvailable: true,
  },
];

function CreateNewAirline() {
  // Button actions
  const iconSelectAction = () => {
    console.log("Select icon");
  };
  const createNewAirlineAction = () => {
    console.log("New airline creation in progress");
  };
  const clickAction = (e) => {
    console.log("Clicked on :" + JSON.stringify(e));
  };

  return (
    <div className="createNewAirline">
      <div className="container">
        <div className="newAirlineForm">
          <span className="title">Create a new Airline</span>
          <div className="dataFields">
            {createNewAirlineFormFields.map((field, index) => {
              return (
                <div key={index} className="field">
                  <FormLabel className="label">{field.fieldNames}</FormLabel>
                  <Input
                    className="input"
                    type="text"
                    placeholder={field.fieldPlaceholder}
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                      clickAction(e.target);
                    }}
                  />
                  {field.isIconAvailable && (
                    <Button variant="contained" onClick={iconSelectAction}>
                      Select
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
          <Button
            className="createButton"
            variant="contained"
            onClick={createNewAirlineAction}
          >
            Create
          </Button>
        </div>
        <div className="checkExistingAirlines"></div>
      </div>
    </div>
  );
}

export default CreateNewAirline;
