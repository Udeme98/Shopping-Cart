import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import CartDetails from "./pages/CartDetails";
import ErrorPage from "./pages/ErrorPage";
import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(false);

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

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
