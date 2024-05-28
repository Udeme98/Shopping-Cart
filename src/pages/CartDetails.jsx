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
  }, []);

  return (
    <div className="flex container mx-auto gap-5 p-3 min-h-[80vh] items-center max-w-[70%] flex-col lg:flex-row">
      <div className="flex-1">
        <img
          src={productDetails?.image}
          alt={productDetails?.title}
          className="w-96"
        />
      </div>
      <div className="flex flex-col gap-5 text-2xl flex-1">
        <h2 className="font-bold text-gray-700">
          Name:{" "}
          <span className="font-semibold text-gray-500">
            {productDetails?.title}
          </span>
        </h2>
        <h2 className="font-bold text-gray-700">
          Description:{" "}
          <span className="font-semibold text-gray-500">
            {productDetails?.description}
          </span>
        </h2>
        <h2 className="font-bold text-gray-700">
          Price:{" "}
          <span className="font-semibold text-gray-500">
            ${productDetails?.price}
          </span>
        </h2>
        <button
          onClick={
            cart.find((product) => product.id === productDetails.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="text-sm p-4 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-gray-500"
        >
          {cart.find((product) => product.id === productDetails.id)
            ? "Remove from cart"
            : "Add to Cart"}
        </button>
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
