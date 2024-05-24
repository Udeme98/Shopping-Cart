import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-7 shadow-md bg-blue-500">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-3xl uppercase cursor-pointer font-bold text-red-700 hover:text-red-500">
            Shopping Cart
          </h1>
        </Link>
        <ul className="flex gap-3 uppercase text-xl font-bold text-red-700 ">
          <Link to="/">
            <li className="cursor-pointer hover:text-red-500">Home</li>
          </Link>
          <Link to="/cart">
            <li className="cursor-pointer hover:text-red-500">Cart</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
