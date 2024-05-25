import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((store) => store);

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + cur.price, 0));
  }, [cart]);

  console.log(cart, total);

  return (
    <>
      {cart && cart.length ? <div>Hello</div> : <div>Your Cart is Empty</div>}
    </>
  );
};
export default Cart;
