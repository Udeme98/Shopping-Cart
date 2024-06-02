import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartItem = ({ item }) => {
  const [darkMode, setDarkMode] = useState(true);
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <section className="flex mx-auto flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white dark:bg-slate-900 dark:border-slate-900 font-poppins">
      <div className=" flex justify-center overflow-hidden items-center rounded-xl text-slate-200">
        <img
          src={item?.image}
          alt="recipe item"
          className="block h-32 rounded-md"
        />
      </div>
      <div>
        <span className="text-sm text-cyan-400 font-semibold">
          {item?.title}
        </span>
        <h3 className="font-bold text-2xl truncate text-black dark:text-slate-300 ">
          ${item?.price}
        </h3>

        <div className="flex items-center justify-start">
          <Link to={`/cart-details/${item.id}`}>
            <button className="text-sm p-2 mt-5 mr-3 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-slate-700 text-white hover:bg-slate-600">
              More Details
            </button>
          </Link>
          <button
            onClick={
              cart.find((product) => product.id === item.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="text-sm p-2 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-slate-700 text-white hover:bg-slate-600"
          >
            {cart.find((product) => product.id === item.id)
              ? "Remove from cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </section>
  );
};
export default CartItem;
