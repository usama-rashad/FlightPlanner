// Packages
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./../../reduxStore";

// SCSS
import "./login.scss";

// Components
import Button from "@mui/material/Button";
import CheckBox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIconOn from "@mui/icons-material/Visibility";
import VisibilityIconOff from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";

// Images
import LoginBackground from "../../assets/Backgrounds/Login Background.jpg";
import { Link } from "react-router-dom";
import { loginThunk } from "./loginReducer";
import IconButton from "@mui/material/IconButton";

function login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPass, setShowPass] = useState(false);
  const [loginErrorFlag, setLoginErrorFlag] = useState<boolean>(false);
  const [rememberFlag, setRememberFlag] = useState<boolean>(false);

  // Login Reducer
  const loginStatus = useSelector((state: RootState) => state);
  const dispatch = AppDispatch();

  const userNameAction = (e: string) => {
    setUserName(e);
  };

  const passwordAction = (e: string) => {
    setPassword(e);
  };

  const togglePass = () => {
    setShowPass((prev) => !prev);
  };

  const loginAction = () => {
    dispatch(loginThunk({ username: userName, password: password, rememberMeFlag: rememberFlag }));
  };

  const checkBoxAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberFlag(event.target.checked);
  };

  // Effects
  useEffect(() => {
    setUserName("ayeshaaslamatd@gmail.com");
    setPassword("123456789");
  }, []);

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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="input"
          size="small"
          label="Password"
          value={password}
          type={showPass ? "text" : "password"}
          onChange={(e) => {
            passwordAction(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton edge="end" onClick={togglePass}>
                {showPass ? <VisibilityIconOn /> : <VisibilityIconOff />}
              </IconButton>
            ),
          }}
        />
        <div className="rememberMe">
          <span className="rememberTitle">Remember me</span>
          <CheckBox onChange={checkBoxAction} checked={rememberFlag} />
        </div>
        <Button
          variant="contained"
          onClick={loginAction}
          endIcon={
            loginStatus.login.stateValue === 1 && (
              <CircularProgress
                size={18}
                sx={{
                  color: "white",
                }}
              />
            )
          }
        >
          Login
        </Button>
        {loginErrorFlag ? <span className="loginError">User name and/or password incorrect</span> : <div />}
        <div className="optionsContainer">
          {loginStatus.login.errorMessage === "" ? null : <span className="errorMessage">{loginStatus.login.errorMessage}</span>}
          {loginStatus.login.stateValue === 2 ? <span className="successMessage">{loginStatus.login.currentState} </span> : null}
          <Link to="/register" className="link">
            <span className="registerTitle">Not a member? Register here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default login;
