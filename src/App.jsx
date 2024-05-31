import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import CartDetails from "./pages/CartDetails";
import ErrorPage from "./pages/ErrorPage";
import { createContext, useState } from "react";

export const DarkModeContext = createContext(false);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode && "dark"}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart-details/:id" element={<CartDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </DarkModeContext.Provider>
  );
};
export default App;
