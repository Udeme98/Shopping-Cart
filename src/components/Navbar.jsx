import { Link } from "react-router-dom";

import { FaHome, FaShoppingCart, FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="p-7 shadow-md bg-blue-500">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-3xl uppercase cursor-pointer font-bold text-red-700 hover:text-red-500">
            Shoppier
          </h1>
        </Link>
        <ul className="hidden md:flex gap-3 uppercase  font-bold text-red-800 text-4xl items-center">
          <Link to="/">
            <FaHome
              className="cursor-pointer hover:text-red-500 "
              title="Home"
            />
          </Link>
          <Link to="/cart">
            <FaShoppingCart
              className="cursor-pointer hover:text-red-500"
              title="Cart"
            />
          </Link>
        </ul>
        <FaBars />
      </div>
    </nav>
  );
};
export default Navbar;
