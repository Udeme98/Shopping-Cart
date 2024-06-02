import { useDispatch } from "react-redux";
import { removeFromCart } from "../cartSlice";

const CartTile = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <section className="flex mx-auto flex-col w-96 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white dark:bg-slate-900 dark:border-slate-900 font-poppins">
      <div className=" flex justify-center overflow-hidden products-center rounded-xl">
        <img
          src={product?.image}
          alt="recipe product"
          className="block h-32 rounded-md"
        />
      </div>
      <div>
        <span className="text-sm text-cyan-400 font-semi-bold">
          {product?.title}
        </span>
        <h3 className="font-bold text-2xl truncate text-black dark:text-slate-300">
          ${product?.price}
        </h3>
        <button
          onClick={() => dispatch(removeFromCart(product.id))}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md  bg-slate-700 text-white hover:bg-slate-600"
        >
          Remove From Cart
        </button>
      </div>
    </section>
  );
};
export default CartTile;
