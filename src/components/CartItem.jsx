import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <section className="flex mx-auto flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className=" flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image} alt="recipe item" className="block h-32" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">{item?.title}</span>
        <h3 className="font-bold text-2xl truncate text-black">
          ${item?.price}
        </h3>
        <button
          onClick={
            cart.find((product) => product.id === item.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-gray-500"
        >
          {cart.find((product) => product.id === item.id)
            ? "Remove from cart"
            : "Add to Cart"}
        </button>
      </div>
    </section>
  );
};
export default CartItem;
