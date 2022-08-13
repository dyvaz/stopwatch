import React from "react";
import "./Timer.css";

function format(a, b, c) {
  return ("0" + (Math.floor(a / b) % c)).slice(-2);
}

function Timer(props) {
  return (
    <>
      <span className="digits">{format(props.time, 60000, 60)}:</span>
      <span className="digits">{format(props.time, 1000, 60)}.</span>
      <span className="digits">{format(props.time, 10, 100)}</span>
    </>
  );
}

export default function Timers(props) {
  const numbers = props.listaTimes
    .map((times, index) => {
      return (
        <li className="lista" key={index.toString()}>
          <span>{index}</span>
          <Timer time={times} />
          --
          <Timer
            time={index === 0 ? times : times - props.listaTimes[index - 1]}
          />
        </li>
      );
    })
    .reverse();
  return (
    <>
      <div className="timer">
        <Timer time={props.time} />
      </div>
      <div className="list">{numbers}</div>
    </>
  );
}
