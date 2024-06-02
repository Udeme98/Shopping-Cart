import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { FaSpinner } from "react-icons/fa";
// import { products } from "../products";

const CartItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://fakestoreapi.com/products");
        const data = await res.json();
        if (data) {
          console.log(data);
          setLoading(false);
          setProducts(data);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="dark:bg-slate-800 min-h-screen font-poppins">
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <FaSpinner className="text-6xl animate-spin ease-in-out dark:text-cyan-400" />
        </div>
      ) : (
        <div className="flex container mx-auto gap-5 p-3 flex-wrap">
          {products && products.length > 0
            ? products.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })
            : null}
        </div>
      )}

      {/* <div className="flex container mx-auto gap-5 p-3 flex-wrap ">
        {products.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div> */}
    </div>
  );
};
export default CartItems;
