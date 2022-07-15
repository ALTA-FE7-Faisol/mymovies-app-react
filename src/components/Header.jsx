import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="sticky top-0 w-full border-gray-200 sm:px-4 py-2.5 bg-stone-800">
        <a
          href="/"
          className="font-medium px-3 py-2 text-stone-50 rounded-lg hover:bg-stone-50 hover:text-stone-800"
        >
          Home
        </a>
        <a
          href="/favorites"
          className="font-medium px-3 py-2 text-stone-50 rounded-lg hover:bg-stone-50 hover:text-stone-800"
        >
          Favorites
        </a>
      </nav>
    );
  }
}
