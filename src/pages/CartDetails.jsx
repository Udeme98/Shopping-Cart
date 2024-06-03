import { useParams } from "react-router-dom";
// import { products } from "../products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../cartSlice";

const CartDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();

  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(productDetails.id));
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      if (data) {
        setProductDetails(data);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <div className="flex container mx-auto gap-5 p-3 min-h-[80vh] items-center max-w-[70%] flex-col lg:flex-row ">
        <div className="flex-1 ">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            className="w-96 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5 text-2xl flex-1 font-poppins">
          <h2 className="font-bold text-slate-700 dark:text-slate-300">
            Name:{" "}
            <span className="font-thin text-slate-700 dark:text-slate-300">
              {productDetails?.title}
            </span>
          </h2>
          <h2 className="font-bold text-slate-700 dark:text-slate-300">
            Description:{" "}
            <span className="font-thin text-slate-700 dark:text-slate-300">
              {productDetails?.description}
            </span>
          </h2>
          <h2 className="font-bold text-slate-700 dark:text-slate-300">
            Price:{" "}
            <span className="font-thin text-slate-700 dark:text-slate-300">
              ${productDetails?.price}
            </span>
          </h2>
          <button
            onClick={
              cart.find((product) => product.id === productDetails.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="text-sm p-4 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-slate-700 text-slate-100 hover:bg-slate-600"
          >
            {cart.find((product) => product.id === productDetails.id)
              ? "Remove from cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartDetails;

// const productDetails = products[`${id - 1}`];
//   console.log(productDetails);
//  const handleAddToCart = () => {
//    dispatch(addToCart(productDetails));
//  };

//  const handleRemoveFromCart = () => {
//    dispatch(removeFromCart(productDetails.id));
//  };
