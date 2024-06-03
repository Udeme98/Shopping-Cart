import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       return state.filter((product) => product.id !== action.payload);
//     },
//   },
// });

// using localStorage to save item added to cart

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedCart = [...state, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
