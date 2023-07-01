import React from "react";
import Button from "../button";
import useClock from "@/hooks/useClock/useClock";

function Clock() {
  const { hours, minutes, seconds, finishTimer, startTimer, stopTimer } =
    useClock();

  return (
    <>
      <div className="p-28 text-5xl">{`${hours} : ${minutes} : ${seconds}`}</div>
      <div className="flex justify-center gap-32 pt-14">
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={finishTimer}>Reset</Button>
      </div>
    </>
  );
}

export default Clock;
