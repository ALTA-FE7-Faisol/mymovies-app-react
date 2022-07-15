import React, { Component } from "react";
<<<<<<< HEAD
=======
import { Button2 } from "./Button";
>>>>>>> ffd44c6deee439a722c416e0316d1edf3c53a5f0

export default class Header extends Component {
  render() {
    return (
      <nav className="sticky top-0 w-full border-gray-200 sm:px-4 py-2.5 bg-stone-800">
<<<<<<< HEAD
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
=======
        <a href="/" className="font-medium px-3 py-2 text-stone-50 rounded-lg hover:bg-stone-50 hover:text-stone-800">
          Home
        </a>
        <a href="/favorites" className="font-medium px-3 py-2 text-stone-50 rounded-lg hover:bg-stone-50 hover:text-stone-800">
          Favorites
        </a>
        <div className="absolute top-0 right-0 text-stone-50">
          <Button2 label="Dark Mode: on" />
        </div>
>>>>>>> ffd44c6deee439a722c416e0316d1edf3c53a5f0
      </nav>
    );
  }
}
