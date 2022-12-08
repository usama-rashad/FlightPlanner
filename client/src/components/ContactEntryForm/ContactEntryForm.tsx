import "../ContactEntryForm/ContactEntryForm.scss";

import React from "react";

// Components
import TextField from "@mui/material/TextField";
import CheckBox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

function ContactEntryForm() {
  return (
    <div className="contactEntryForm">
      <div className="fields">
        <span className="title">Enter your contact details.</span>

        <TextField label="First name" variant="outlined" size="small" />
        <TextField label="Last name" variant="outlined" size="small" />
        <TextField label="E-mail" variant="outlined" size="small" />
        <TextField label="Phone" variant="outlined" size="small" />
        <div className="optionsGroup">
          <div className="option">
            <span className="optionMessage">Recieve confirmation SMS</span>
            <CheckBox className="box" />
          </div>
          <div className="option">
            <span className="optionMessage">Recieve confirmation e-mail</span>
            <CheckBox className="box" />
          </div>
          <Button className="button" variant="contained">
            BUY
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactEntryForm;
