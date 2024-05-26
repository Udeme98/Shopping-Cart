import { Link } from "react-router-dom";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="p-7 shadow-md bg-blue-500">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-3xl uppercase cursor-pointer font-bold text-red-700 hover:text-red-500">
            Shoppier
          </h1>
        </Link>
        <ul className="flex gap-3 uppercase text-2xl font-bold text-red-700 items-center">
          <Link to="/">
            <li className="cursor-pointer hover:text-red-500" title="Home">
              Home
            </li>
          </Link>
          <Link to="/cart">
            <FaShoppingCart
              className="cursor-pointer hover:text-red-500 text-2xl"
              title="Cart"
            />
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
