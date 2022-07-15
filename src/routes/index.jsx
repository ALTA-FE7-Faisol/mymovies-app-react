import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DetailMovie from "../pages/DetailMovie";
import Favorites from "../pages/Favorites";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="detail/:movie_id" element={<DetailMovie />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<div>404 Error Not Found</div>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
