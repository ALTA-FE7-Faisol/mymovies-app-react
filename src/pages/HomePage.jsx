import React, { Component } from "react";
import { Card2 } from "../components/Card";
import Header from "../components/Header";
import axios from "axios";
import { WithRouter } from "../utils/Navigation";

class HomePage extends Component {
  // constructor
  state = {
    title: "-",
    content: "Now Playing",
    page: 1,
    datas: [],
    information: {},
    loading: false,
  };

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
    await axios
<<<<<<< HEAD
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
=======
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
>>>>>>> ffd44c6deee439a722c416e0316d1edf3c53a5f0
      .then((response) => {
        const { results } = response.data;
        console.log(results);
        this.setState({ datas: results });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <>
        <Header />
        <div className="w-full h-screen">
<<<<<<< HEAD
          <p className="grid py-10 text-4xl justify-center font-bold">
            {this.state.content}
          </p>
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
            {this.state.datas.map((data) => (
              <Card2
                key={data.id}
                title={data.title}
                image={data.poster_path}
                navigate={`/detail/${data.id}`}
                onClick={() => this.props.navigate(`/detail/$(data.id)`)}
              />
=======
          <p className="grid py-10 text-4xl justify-center font-bold">{this.state.content}</p>
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
            {this.state.datas.map((data) => (
              <Card2 key={data.id} title={data.title} image={data.poster_path} navigate={`/detail/${data.id}`} onClick={() => this.props.navigate(`/detail/$(data.id)`)} />
>>>>>>> ffd44c6deee439a722c416e0316d1edf3c53a5f0
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default WithRouter(HomePage);
