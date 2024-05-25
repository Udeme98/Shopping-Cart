import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((store) => store);

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + cur.price, 0));
  }, [cart]);

  // console.log(cart, total);

  return (
    <>
      {cart && cart.length ? (
        <div className="container mx-auto flex p-3">
          <div>{cart.map((product) => console.log(product.title))}</div>
          <div>
            <h1 className="text-3xl font-bold text-blue-500">
              Your Cart Summary
            </h1>
            <h2 className="text-2xl font-semibold">
              Total No. of Items:{" "}
              <span className="font-normal text-gray-600">{cart.length}</span>
            </h2>
            <h2 className="text-2xl font-semibold">
              Total Amount:{" "}
              <span className="font-normal text-gray-600">
                ${total.toFixed(2)}
              </span>
            </h2>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex justify-center items-center flex-col">
          <p className="text-3xl font-semibold">Your Cart is Empty</p>
          <Link to={"/"}>
            <button className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-gray-500">
              Shop Now!
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
export default Cart;
