// Packages
import React, { useState } from "react";

// SCSS
import "./register.scss";

// Components
import Button from "@mui/material/Button";
import CheckBox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import blue from "@mui/material/colors/blue";

// Images
import RegisterBackground from "../../assets/Backgrounds/Register Background.jpg";
import { Link } from "react-router-dom";

function register() {
  // Variables
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  // Actions
  const userNameAction = (e: string) => {
    setUserName(e);
  };

  const passwordAction = (e: string) => {
    setPassword(e);
  };

  const emailAction = (e: string) => {
    setEmail(e);
  };

  const cityAction = (e: string) => {
    setCity(e);
  };

  const countryAction = (e: string) => {
    setCountry(e);
  };

  const registerAction = () => {
    console.log("Register button pressed");
  };

  // JSX
  return (
    <div className="register">
      <div className="leftSide">
        <img src={RegisterBackground} alt="" />
      </div>
      <div className="verticalSeperator" />
      <div className="rightSide">
        <span className="title">Register</span>
        <TextField
          className="input"
          size="small"
          type="outlined"
          label="Username"
          value={userName}
          onChange={(e) => {
            userNameAction(e.target.value);
          }}
        />
        <TextField
          className="input"
          size="small"
          type="outlined"
          label="Password"
          value={password}
          onChange={(e) => {
            passwordAction(e.target.value);
          }}
        />
        <TextField
          className="input"
          size="small"
          type="outlined"
          label="Email"
          value={email}
          onChange={(e) => {
            emailAction(e.target.value);
          }}
        />
        <TextField
          className="input"
          size="small"
          type="outlined"
          label="City"
          value={city}
          onChange={(e) => {
            cityAction(e.target.value);
          }}
        />
        <TextField
          sx={{ borderColor: blue }}
          className="input"
          size="small"
          type="outlined"
          label="Country"
          value={country}
          onChange={(e) => {
            countryAction(e.target.value);
          }}
        />

        <Button variant="contained" onClick={registerAction}>
          Register
        </Button>
        <div className="optionsContainer">
          <Link to="/login" className="link">
            <span className="loginTitle">Already a member? Login here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default register;
