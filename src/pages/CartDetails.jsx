import { useParams } from "react-router-dom";

const CartDetails = () => {
  const { id } = useParams();
  //   console.log(id);

  return <div>Cart Details Page {id}</div>;
};
export default CartDetails;
