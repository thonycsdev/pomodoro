import React, { useEffect, useState } from "react";
import Button from "../button";

function Clock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (seconds === 0 && minutes === 0 && hours == 0) {
      resetTimer();
      return;
    }
    if (seconds === 0 && isRunning) {
      return;
    }
    if (seconds < 0 && isRunning == true) {
      setSeconds(59);
      setMinutes((prevMinutes) => prevMinutes - 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours((prevHours) => prevHours - 1);
    }
  }, [seconds, minutes, hours, isRunning]);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setSeconds((val) => (val -= 1));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const resetTimer = () => {
    setHours(0);
    setMinutes(25);
    setSeconds(0);

    setIsRunning(false);
  };

  return (
    <>
      <div className="p-28 text-5xl">{`${hours} : ${minutes} : ${seconds}`}</div>
      <div className="flex justify-center gap-32 pt-14">
        <Button onClick={() => setIsRunning(true)}>Start</Button>
        <Button onClick={() => setIsRunning(false)}>Stop</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </>
  );
}

export default Clock;
