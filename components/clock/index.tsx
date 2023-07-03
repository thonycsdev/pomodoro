import React from "react";
import Button from "../button";
import useClock from "@/hooks/useClock/useClock";
import formatTimer from "@/functions/formatTime";

function Clock() {
  const {
    hour,
    minute,
    second,
    finishTimer,
    startBreak,
    startTimer,
    stopTimer,
  } = useClock();

  const timeformatted = `${formatTimer(hour)} : ${formatTimer(
    minute
  )} : ${formatTimer(second)}`;

  return (
    <>
      <div className="py-10 text-5xl">{timeformatted}</div>
      <div className="flex flex-col justify-center items-center gap-4 w-full sm:flex-row">
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={finishTimer}>Reset</Button>
        <Button onClick={startBreak}>Rest</Button>
      </div>
    </>
  );
}

export default Clock;
