import { Link } from "react-router-dom";

import { useState } from "react";
import { FaHome, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-7 shadow-md bg-blue-400">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-3xl uppercase cursor-pointer font-bold text-red-600 hover:text-red-500 transition duration-300">
            Shoppier
          </h1>
        </Link>

        <ul className="hidden md:flex gap-3 uppercase  font-bold text-red-600 text-4xl items-center">
          <Link to="/">
            <FaHome
              className="cursor-pointer hover:text-red-500  transition duration-300"
              title="Home"
            />
          </Link>
          <Link to="/cart">
            <FaShoppingCart
              className="cursor-pointer hover:text-red-500 transition duration-300"
              title="Cart"
            />
          </Link>
        </ul>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden"
        >
          {menuOpen ? (
            <FaTimes className="font-bold text-red-600 text-4xl cursor-pointer hover:text-red-500  transition duration-300" />
          ) : (
            <FaBars className="font-bold text-red-600 text-4xl cursor-pointer hover:text-red-500  transition duration-300" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <div className="flex flex-col space-y-3 font-bold mt-4 text-4xl text-red-600 items-center  md:hidden">
          <Link to={"/"} onClick={() => setMenuOpen(false)}>
            <FaHome
              className="cursor-pointer hover:text-red-500  transition duration-300"
              title="Home"
            />
          </Link>
          <Link to={"/cart"} onClick={() => setMenuOpen(false)}>
            {" "}
            <FaShoppingCart
              className="cursor-pointer hover:text-red-500 transition duration-300"
              title="Cart"
            />
          </Link>
        </div>
      ) : null}
    </nav>
  );
};
export default Navbar;
