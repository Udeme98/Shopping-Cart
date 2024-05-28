import { useParams } from "react-router-dom";
import { products } from "../products";
import { useState } from "react";

const CartDetails = () => {
  //   const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();
  //   console.log(id);
  const singleProduct = products[`${id - 1}`];
  //   console.log(singleProduct);

  return (
    <div className="flex container mx-auto gap-5 p-3 min-h-[80vh] items-center max-w-[70%]">
      <div className="flex-1">
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          className="w-96"
        />
      </div>
      <div className="flex flex-col gap-5 text-2xl flex-1">
        <h2>Name: {singleProduct.title}</h2>
        <h2>Description: {singleProduct.description}</h2>
        <h2>Price: ${singleProduct.price}</h2>
      </div>
    </div>
  );
};
export default CartDetails;
