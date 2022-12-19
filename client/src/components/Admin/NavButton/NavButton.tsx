import React from "react";
import "./NavButton.scss";

interface INavButton {
  label: string;
  onClick: () => void;
}

function NavButton(props: INavButton) {
  return (
    <div className="navButton">
      <div className="touchSurface">
        <span className="buttonLabel" onClick={props.onClick}>
          {props.label}
        </span>
      </div>
    </div>
  );
}

export default NavButton;
