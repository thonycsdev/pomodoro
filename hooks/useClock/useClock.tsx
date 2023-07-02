import formatNumbers from "@/functions/formatNumbers";
import { useEffect, useState } from "react";

const MINUTES_TO_WAIT = 25 * 60;
const REST_TIME = 5 * 60;

function useClock() {
  const [totalSeconds, setTotalSeconds] = useState(MINUTES_TO_WAIT);
  const [isRunning, setIsRunning] = useState(false);

  const { hours, minutes, seconds } = formatNumbers(totalSeconds);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && totalSeconds > 0) {
      timer = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, totalSeconds]);

  const clockFunctions = {
    startTimer: () => {
      setIsRunning(true);
    },
    finishTimer: () => {
      setIsRunning(false);
      setTotalSeconds(MINUTES_TO_WAIT);
    },
    stopTimer: () => {
      setIsRunning(false);
    },
    startBreak: () => {
      setIsRunning(false);
      setTotalSeconds(REST_TIME);
    },
    isRunning,
    hour: hours,
    minute: minutes,
    second: seconds,
  };

  return clockFunctions;
}

export default useClock;
