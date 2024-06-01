import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { FaHome, FaShoppingCart, FaBars, FaTimes, FaSun } from "react-icons/fa";
import { DarkModeContext } from "../App";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="p-7 shadow-md bg-blue-400 dark:bg-slate-800 ">
      <div className="container mx-auto flex items-center justify-between ">
        <Link to={"/"}>
          <h1 className="text-3xl uppercase cursor-pointer font-bold text-red-600 hover:text-red-500 transition duration-300 dark:text-cyan-400">
            Shoppier
          </h1>
        </Link>

        <div className="flex gap-2">
          <ul className="hidden md:flex gap-3 uppercase  font-bold text-red-600 text-4xl items-center">
            <Link to="/">
              <FaHome
                className="cursor-pointer hover:text-red-500  transition duration-300 dark:text-cyan-400"
                title="Home"
              />
            </Link>
            <Link to="/cart">
              <FaShoppingCart
                className="cursor-pointer hover:text-red-500 transition duration-300 dark:text-cyan-400"
                title="Cart"
              />
            </Link>
          </ul>

          {/* Need to add  toggle button here */}
          <button onClick={() => setDarkMode(!darkMode)} className="rounded-sm">
            {darkMode ? (
              <FaSun size={25} className="text-slate-200" />
            ) : (
              <FaSun size={25} />
            )}
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden"
          >
            {menuOpen ? (
              <FaTimes className="font-bold text-red-600 text-4xl cursor-pointer hover:text-red-500  transition duration-300 dark:text-cyan-400" />
            ) : (
              <FaBars className="font-bold text-red-600 text-4xl cursor-pointer hover:text-red-500  transition duration-300 dark:text-cyan-400" />
            )}
          </button>
        </div>

        {menuOpen ? (
          <div className="flex flex-col space-y-3 font-bold mt-4 text-4xl text-red-600 items-center  md:hidden absolute">
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              <FaHome
                className="cursor-pointer hover:text-red-500  transition duration-300 dark:text-cyan-400"
                title="Home"
              />
            </Link>
            <Link to={"/cart"} onClick={() => setMenuOpen(false)}>
              {" "}
              <FaShoppingCart
                className="cursor-pointer hover:text-red-500 transition duration-300 dark:text-cyan-400"
                title="Cart"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
export default Navbar;
