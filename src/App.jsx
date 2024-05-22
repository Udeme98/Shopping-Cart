import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
export default App;
