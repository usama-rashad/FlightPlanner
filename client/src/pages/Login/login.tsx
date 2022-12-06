// Packages
import React, { useState } from "react";

// SCSS
import "./login.scss";

// Components
import Button from "@mui/material/Button";
import CheckBox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

// Images
import LoginBackground from "../../assets/Backgrounds/Login Background.jpg";
import { Link } from "react-router-dom";

function login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginErrorFlag, setLoginErrorFlag] = useState<boolean>(false);
  const [rememberFlag, setRememberFlag] = useState<boolean>(false);

  const userNameAction = (e: string) => {
    setUserName(e);
  };

  const passwordAction = (e: string) => {
    setPassword(e);
  };

  const loginAction = () => {
    console.log("Login button pressed");
  };

  const checkBoxAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberFlag(event.target.checked);
  };

  return (
    <div className="login">
      <div className="leftSide">
        <img src={LoginBackground} alt="" />
      </div>
      <div className="verticalSeperator" />
      <div className="rightSide">
        <span className="title">Login</span>
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
        <div className="rememberMe">
          <span className="rememberTitle">Remember me</span>
          <CheckBox onChange={checkBoxAction} checked={rememberFlag} />
        </div>
        <Button variant="contained" onClick={loginAction}>
          Login
        </Button>
        {loginErrorFlag ? (
          <span className="loginError">
            User name and/or password incorrect
          </span>
        ) : (
          <div />
        )}
        <div className="optionsContainer">
          <Link to="/register" className="link">
            <span className="registerTitle">Not a member? Register here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default login;
