import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((store) => store);

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + cur.price, 0));
  }, [cart]);

  // console.log(cart, total);

  return (
    <div className="dark:bg-slate-800 min-h-screen font-poppins">
      {cart && cart.length ? (
        <div className="container mx-auto flex p-3 justify-between ">
          <div className="flex gap-3 flex-wrap max-w-[900px] ">
            {cart.map((product) => (
              <CartTile key={product.id} product={product} />
            ))}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-500 dark:text-cyan-400">
              Your Cart Summary
            </h1>
            <h2 className="text-2xl font-bold dark:text-slate-200">
              Total No. of Items:{" "}
              <span className="font-semibold text-slate-400">
                {cart.length}
              </span>
            </h2>
            <h2 className="text-2xl font-semibold dark:text-slate-200">
              Total Amount:{" "}
              <span className="font-normal text-slate-400">
                ${total.toFixed(2)}
              </span>
            </h2>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex justify-center items-center flex-col">
          <p className="text-3xl font-semibold dark:text-cyan-400">
            Your Cart is Empty
          </p>
          <Link to={"/"}>
            <button className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-bold tracking-wider inline-block shadow-md bg-slate-400 text-slate-800 hover:bg-slate-600">
              Shop Now!
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
