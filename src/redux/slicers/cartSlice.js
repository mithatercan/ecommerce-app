import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    error: "",
  },
  reducers: {
    addToCart: (state, action) => {
      // state = {
      //   ...state.data,
      //   error: "You've already added this item to cart",
      // };
      state.data = [...state.data, { ...action.payload, quantity: 0 }];
    },
    removeFromCart: (state, action) => {
      state.data = state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
