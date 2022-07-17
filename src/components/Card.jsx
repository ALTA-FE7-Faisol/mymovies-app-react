import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="p-3 bg-zinc-800 rounded shadow-lg shadow-black">
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <Button label="Add to favorite" />
    </div>
  );
};

const Card2 = (props) => {
  return (
    <div className="p-3 flex flex-col justify-between bg-neutral-500 rounded shadow-lg shadow-black">
      <Link to={props.navigate}>
        <img
          src={
            props.image
              ? `https://image.tmdb.org/t/p/original${props.image}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={props.title}
          height="750"
        />
        <p className="text-center text-white font-bold">{props.title}</p>
      </Link>
      <Button label="Add to favorite" />
    </div>
  );
};

export { Card, Card2 };
