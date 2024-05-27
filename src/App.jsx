import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import CartDetails from "./pages/CartDetails";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart-details/:id" element={<CartDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default App;
