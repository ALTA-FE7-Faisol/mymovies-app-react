import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import Card from "../components/Card";
import Header from "../components/Header";
import { WithRouter } from "../utils/Navigation";
import { reduxAction } from "../utils/redux/actions/action";

const HomePage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("-");
  const [content, setContent] = useState("Now Playing");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (page) => {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        const { results } = response.data;
        if (results) {
          setMovies(results);
          // setPage(2);
          // fetchData2(2);
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  const fetchData2 = (page) => {
    setLoading(true);
    var config = {
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((response) => {
        const { results } = response.data;
        console.log(results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  const handleScroll = (e) => {
    let element = e.target;
    const bottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (bottom) {
      this.fetchData(page + 1);
    }
  };

  const handleFav = (movie) => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);

      parsedMovies.push(movie);
      localStorage.setItem("favMovies", JSON.stringify(parsedMovies));
      dispatch(reduxAction("ADD_FAVORITE", parsedMovies));
    } else {
      localStorage.setItem("favMovies", JSON.stringify([movie]));
      dispatch(reduxAction("ADD_FAVORITE", [movie]));
    }
    alert("Movie added to favorites");
  };

  return (
    <div
      className="w-full h-screen overflow-auto bg-white dark:bg-black"
      onScroll={handleScroll}
    >
      <Header />
      <p className="grid py-10 text-4xl justify-center font-bold dark:text-white">
        {content}
      </p>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {movies.map((movie) => (
          <Card key={movie.id} data={movie} onClick={() => handleFav(movie)} />
        ))}
      </div>
    </div>
  );
};

export default WithRouter(HomePage);
