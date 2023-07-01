import React from "react";
import Button from ".";

function ButtonContainer() {
  return (
    <div className="flex justify-center gap-32 pt-14">
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </div>
  );
}

export default ButtonContainer;
