import "../ContactEntryForm/ContactEntryForm.scss";

import React from "react";

// Components
import TextField from "@mui/material/TextField";
import CheckBox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

function ContactEntryForm() {
  return (
    <div className="contactEntryForm">
      <span className="title">Enter your contact details.</span>
      <div className="fields">
        <TextField
          placeholder="First Name"
          label="First name"
          variant="outlined"
          size="small"
        />
        <TextField
          placeholder="Last Name"
          label="Last name"
          variant="outlined"
          size="small"
        />
        <TextField
          placeholder="E-mail"
          label="E-mail"
          variant="outlined"
          size="small"
        />
        <TextField
          placeholder="Phone"
          label="Phone"
          variant="outlined"
          size="small"
        />
        <div className="option">
          <span className="optionMessage">Recieve confirmation SMS</span>
          <CheckBox />
        </div>
        <Button variant="contained">BUY</Button>
      </div>
    </div>
  );
}

export default ContactEntryForm;
