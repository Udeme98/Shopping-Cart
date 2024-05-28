import { useParams } from "react-router-dom";
import { products } from "../products";
import { useState } from "react";

const CartDetails = () => {
  //   const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();
  //   console.log(id);
  const singleProduct = products[`${id - 1}`];
  console.log(singleProduct);

  return (
    <div>
      <div>
        <img src={singleProduct.image} alt={singleProduct.title} />
      </div>
      <div>
        <h2>Name: {singleProduct.title}</h2>
        <h2>Description: {singleProduct.description}</h2>
        <h2>Price: ${singleProduct.price}</h2>
      </div>
    </div>
  );
};
export default CartDetails;
