import React from "react";

import Button from "./Button";
import { WithRouter } from "../utils/Navigation";

const Card = ({ data, navigate, onClick }) => {
  return (
    <div className="p-3 flex flex-col justify-between bg-sky-900">
      <div onClick={() => navigate(`/detail/${data.id}`, { replace: true })}>
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={data.title}
          height="750"
        />
        <p className="text-center text-white font-bold">{data.title}</p>
      </div>
      <Button label="Add to favorite" onClick={onClick} />
    </div>
  );
};

export default WithRouter(Card);
