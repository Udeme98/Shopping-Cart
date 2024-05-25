import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((store) => store);

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + cur.price, 0));
  }, [cart]);

  console.log(cart, total);

  return (
    <>
      {cart && cart.length ? (
        <div>Hello</div>
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
