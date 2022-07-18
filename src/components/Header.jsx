import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";

import { ThemeContext } from "../utils/context";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <nav className="sticky top-0 w-full sm:px-4 py-2.5 bg-sky-900 flex justify-between">
      <Link
        to="/"
        className="font-medium px-3 py-2 text-white rounded-lg hover:bg-white hover:text-black"
      >
        Home
      </Link>
      {theme === "dark" ? (
        <IoSunny
          color="#fff"
          size={30}
          onClick={() => handleChangeTheme("light")}
        />
      ) : (
        <IoMoon
          color="#fff"
          size={30}
          onClick={() => handleChangeTheme("dark")}
        />
      )}
      <Link
        to="/favorites"
        className="font-medium px-3 py-2 text-white rounded-lg hover:bg-white hover:text-black"
      >
        Favorites
      </Link>
    </nav>
  );
};

export default Header;
