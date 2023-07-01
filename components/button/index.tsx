import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      className="bg-slate-900 py-3 px-6 rounded-xl"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
