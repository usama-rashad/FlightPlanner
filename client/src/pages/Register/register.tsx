// Packages
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

// SCSS
import "./register.scss";

// Components
import Button from "@mui/material/Button";
import CheckBox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import blue from "@mui/material/colors/blue";

// Images
import RegisterBackground from "../../assets/Backgrounds/Register Background.jpg";

// Reducers
import { IRegisterAction, TRegisterPayload, ERegisterTypes, registerInitState, registerThunk, reset } from "./registerReducer";
import { AppDispatch, RootState } from "./../../reduxStore";

// MUI
import CircularProgress from "@mui/material/CircularProgress";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordIcon from "@mui/icons-material/Password";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CountryIcon from "@mui/icons-material/Language";
import VisibilityIconOn from "@mui/icons-material/Visibility";
import VisibilityIconOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";

function register() {
  // States
  const [userName, setUserName] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [registering, setRegistering] = useState(false);

  // Refs
  const usernameRef = useRef<HTMLInputElement>();

  // Reducers
  const dispatcher = AppDispatch();
  const registerStatus = useSelector((state: RootState) => state);

  // Hooks
  const naviagte = useNavigate();

  // Effects
  useEffect(() => {
    setUserName("usamakr");
    setPassword1("123456");
    setPassword2("123456");
    setEmail("usamakr@gmail.com");
    setCity("Lahore");
    setCountry("Pakistan");
  }, []);

  // Reset button state after an error occurs
  useEffect(() => {
    if (registerStatus.register.state == 3) {
      setTimeout(() => {
        dispatcher(reset());
      }, 2000);
    }
  }, [registerStatus.register.state]);

  // Return to login page after 1 second of receiving a position confirmation
  useEffect(() => {
    if (registerStatus.register.state == 2) {
      setTimeout(() => {
        dispatcher(reset());
        // naviagte("/login");
      }, 1000);
    }
  }, [registerStatus.register.state]);

  // Check password matching
  useEffect(() => {
    validatePasswords();
  }, [password1, password2]);

  // Check if username exists
  useEffect(() => {
    usernameRef?.current?.addEventListener("onFocusOut", () => {
      console.log("Lost focus from username field.");
    });
  }, [userName]);

  // Actions
  const userNameAction = (e: string) => {
    setUserName((prev) => e);
  };

  const password1Action = (e: string) => {
    setPassword1((prev) => e);
  };

  const password2Action = (e: string) => {
    setPassword2((prev) => e);
  };

  const validatePasswords = () => {
    setPasswordsNotMatch((prev) => (prev = password1 !== password2));
  };

  const emailAction = (e: string) => {
    setEmail((prev) => e);
  };

  const cityAction = (e: string) => {
    setCity((prev) => e);
  };

  const countryAction = (e: string) => {
    setCountry((prev) => e);
  };

  const togglePass1 = () => {
    setShowPass1((prev) => !prev);
  };

  const togglePass2 = () => {
    setShowPass2((prev) => !prev);
  };

  const registerAction = async () => {
    setRegistering(true);

    // Prepare user data
    let signupData: TRegisterPayload = {
      username: userName,
      password1: password1,
      password2: password2,
      email: email,
      city: city,
      country: country,
    };
    // Call dispatch to register at server
    dispatcher(registerThunk(signupData));
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
          type={showPass1 ? "text" : "password"}
          label="Password"
          error={passwordsNotMatch}
          helperText={passwordsNotMatch && "Passwords do not match"}
          hidden={true}
          value={password1}
          onChange={(e) => {
            password1Action(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton edge="end" onClick={togglePass1}>
                {showPass1 ? <VisibilityIconOn /> : <VisibilityIconOff />}
              </IconButton>
            ),
          }}
        />
        <TextField
          className="input"
          size="small"
          type={showPass2 ? "text" : "password"}
          label="Re-Enter password"
          error={passwordsNotMatch}
          helperText={passwordsNotMatch && "Passwords do not match"}
          value={password2}
          onChange={(e) => {
            password2Action(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton edge="end" onClick={togglePass2}>
                {showPass2 ? <VisibilityIconOn /> : <VisibilityIconOff />}
              </IconButton>
            ),
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationCityIcon />
              </InputAdornment>
            ),
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CountryIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          disabled={registerStatus.register.state === 1}
          sx={{ backgroundColor: registerStatus.register.buttonColor }}
          onClick={registerAction}
          endIcon={
            registerStatus.register.state === 1 && (
              <CircularProgress
                size={18}
                sx={{
                  color: "white",
                }}
              />
            )
          }
        >
          {registerStatus.register.text}
        </Button>
        <div className="optionsContainer">
          {registerStatus.register.state == 3 ? <span className="message">{registerStatus.register.errorMessage}</span> : null}
          <Link to="/login" className="link">
            <span className="reigsterTitle">Already a member? Login here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default register;
