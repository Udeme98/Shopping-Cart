import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <section className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className=" flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image} alt="recipe item" className="block h-32" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">{item?.title}</span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.price}
        </h3>
        <button className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white">
          Add to Cart
        </button>
      </div>
    </section>
  );
};
export default CartItem;
