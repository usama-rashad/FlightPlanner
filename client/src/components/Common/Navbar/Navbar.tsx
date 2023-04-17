import React, { useContext, useState } from "react";
import "./Navbar.scss";

// Packages
import { Link, useNavigate } from "react-router-dom";

// Icons
import MenuOpenIcon from "@mui/icons-material/KeyboardArrowDown";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
// Buttons
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../reduxStore";
import axios from "axios";
import { reset, resetLoginButton } from "../../../pages/Login/loginReducer";

interface INavbar {
  isAdmin?: boolean;
}

function Navbar(props: INavbar) {
  const [open, setOpen] = useState(false);
  const navigateTo = useNavigate();
  const appDispatch = AppDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.login);

  const loginAction = () => {
    navigateTo("/login");
  };

  const logoutAction = async () => {
    await axios
      .post("http://127.0.0.1:5000/api/v1/logoutUser", {})
      .then((response) => {
        // Sign out success popper
        appDispatch(resetLoginButton());
        navigateTo("/login");
      })
      .catch((error) => {
        // Failed to sign out popup
      });
  };

  return (
    <div className={`navbar ${props.isAdmin ? "admin" : ""}`}>
      {/* LEFT SIDE */}
      <div className="left">
        <span className={`title ${props.isAdmin ? "admin" : ""}`}>{`Trip Planner`}</span>
      </div>

      {/* MIDDLE */}

      <div className="middle">{props.isAdmin && <span className="subTitle">Administrator mode</span>}</div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="navbarButtons">
          <Link to="/login" className="link">
            {!isLoggedIn && (
              <Button variant="contained" size="small" onClick={loginAction} endIcon={<LoginIcon />}>
                Login
              </Button>
            )}
          </Link>
          {isLoggedIn && (
            <Button variant="contained" size="small" onClick={logoutAction} endIcon={<LogoutIcon />}>
              Logout
            </Button>
          )}
          <Button variant="contained" size="small" endIcon={<HelpIcon />}>
            Help
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
