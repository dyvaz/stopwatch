import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={props.handlePauseResume}>
        {!props.active ? "Resume" : "Pause"}
      </div>
      <div className="btn btn-one" onClick={props.handleLap}>
        Lap
      </div>
    </div>
  );

  return (
    <div className="Buttons">
      <div>{props.time > 0 ? ActiveButtons : StartButton}</div>
    </div>
  );
}
