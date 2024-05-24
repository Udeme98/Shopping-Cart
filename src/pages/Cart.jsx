import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((store) => store);

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + cur.price, 0));
  }, [cart]);

  console.log(cart, total);

  return <div>Cart Item Page</div>;
};
export default Cart;
