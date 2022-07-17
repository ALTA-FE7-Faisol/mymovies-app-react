import React from "react";

const Button = (props) => {
  return (
    <button className="text-white text-lg bg-stone-800 rounded-md p-2">
      {props.label}
    </button>
  );
};

const Button2 = (props) => {
  return (
    <button className="text-white text-lg bg-stone-800 rounded-md p-2">
      {props.label}
    </button>
  );
};

export { Button, Button2 };
