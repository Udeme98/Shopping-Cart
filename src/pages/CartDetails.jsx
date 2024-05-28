import { useParams } from "react-router-dom";
import { products } from "../products";
import { useState } from "react";

const CartDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();
  //   console.log(id);
  console.log(products[`${id - 1}`]);

  return <div>Product {id}</div>;
};
export default CartDetails;
