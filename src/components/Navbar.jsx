const Navbar = () => {
  return (
    <nav className="p-7 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl uppercase cursor-pointer">Shopping Cart</h1>
        <ul className="flex gap-3 uppercase text-xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
