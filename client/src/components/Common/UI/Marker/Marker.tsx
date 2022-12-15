import "./Marker.scss";

import React from "react";

interface IMarker {
  text: string;
  variant: string;
}

function StopIcon(props: IMarker) {
  return (
    <div className="marker">
      <div className="text">
        <span className={`label  ${props.variant}`}>{props.text}</span>
      </div>
    </div>
  );
}

export default StopIcon;
