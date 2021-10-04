import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: ["cart dasta test"],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    removeFromCart: (state, action) => {
      state.data = state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
