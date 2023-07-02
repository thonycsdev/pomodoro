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
      <div className="p-28 text-5xl">{timeformatted}</div>
      <div className="flex justify-center gap-32 pt-14">
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={finishTimer}>Reset</Button>
        <Button onClick={startBreak}>Rest</Button>
      </div>
    </>
  );
}

export default Clock;
