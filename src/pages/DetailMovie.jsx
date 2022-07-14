import React, { Component } from "react";
import { WithRouter } from "../utils/Navigation";
import Header from "../components/Header";
import axios from "axios";

class DetailMovie extends Component {
  // constructor
  state = {
    loading: false,
    DetailMovie: [],
  };

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
    const { movie_id } = this.props.params;
    await axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then((response) => {
        const { data } = response;
        this.setState({ DetailMovie: data });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Header />
        <p>{this.state.DetailMovie.title}</p>
      </div>
    );
  }
}
export default WithRouter(DetailMovie);
