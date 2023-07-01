import React, { useEffect, useState } from "react";

function useClock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const clockFunctions = {
    startTimer: () => {
      setIsRunning(true);
    },
    finishTimer: () => {
      setHours(0);
      setMinutes(25);
      setSeconds(0);
      setIsRunning(false);
    },
    subtrackMinute: () => {
      setSeconds(59);
      setMinutes((prevMinutes) => prevMinutes - 1);
    },
    subtrackHours: () => {
      setMinutes(0);
      setHours((prevHours) => prevHours - 1);
    },
    stopTimer: () => {
      setIsRunning(false);
    },

    hours,
    minutes,
    seconds,
    isRunning,
  };

  useEffect(() => {
    if (seconds === 0 && minutes === 0 && hours == 0) {
      setIsRunning(false);
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

  return clockFunctions;
}

export default useClock;
