import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-7 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl uppercase cursor-pointer">Shopping Cart</h1>
        <ul className="flex gap-3 uppercase text-xl">
          <Link to="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to="/cart">
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
