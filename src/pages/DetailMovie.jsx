import React, { useState, useEffect } from "react";
import { WithRouter } from "../utils/Navigation";
import Header from "../components/Header";
import axios from "axios";

const DetailMovie = (props) => {
  const [loading, setLoading] = useState(false);
  const [DetailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { movie_id } = props.params;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        const { data } = response;
        setDetailMovie(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <p>{DetailMovie.title}</p>
    </div>
  );
};
export default WithRouter(DetailMovie);
