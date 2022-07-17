import React, { useState, useEffect } from "react";
import { Card2 } from "../components/Card";
import Header from "../components/Header";
import axios from "axios";
import { WithRouter } from "../utils/Navigation";

const HomePage = () => {
  const [title, setTitle] = useState("-");
  const [content, setContent] = useState("Now Playing");
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const { results } = response.data;
        setDatas(results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen">
        <p className="grid py-10 text-4xl justify-center font-bold">
          {content}
        </p>
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
          {datas.map((data) => (
            <Card2
              key={data.id}
              title={data.title}
              image={data.poster_path}
              navigate={`/detail/${data.id}`}
              onClick={(props) => props.navigate(`/detail/$(data.id)`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WithRouter(HomePage);
