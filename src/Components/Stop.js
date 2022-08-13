import React, { useState } from "react";
import Timers from "./Timer/Timer";
import Buttons from "./Buttons/Buttons";

export default function Stop() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [listaTimes, setListaTimes] = useState([]);

  React.useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => setIsActive(true);

  const handlePauseResume = () => setIsActive(!isActive);

  const handleLap = () => {
    if (isActive) {
      setListaTimes([...listaTimes, time]);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setListaTimes([]);
  };

  return (
    <div className="stop-">
      <Timers time={time} listaTimes={listaTimes} />
      <Buttons
        time={time}
        active={isActive}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleLap={handleLap}
        handleReset={handleReset}
      />
    </div>
  );
}
