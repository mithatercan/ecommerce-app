import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    error: "",
  },

  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      if (state.data.length === 0) {
        state.data = [data];
      } else if (
        state.data.some(
          (item) =>
            // Check if the product exist in store with same id and choosenAttributes
            // If yes then show an error
            item.id === data.id &&
            JSON.stringify(item.choosenAttribute) ===
              JSON.stringify(data.choosenAttribute)
        )
      ) {
        state.error = "You have this item in your cart.";
        setTimeout(() => {
          store.dispatch(clearError());
        }, 5000);
      } else {
        state.data = [...state.data, data];
      }
    },
    removeFromCart: (state, action) => {
      state.data = state.data.filter(
        (product) => product.cartId !== action.payload
      );
    },
    changeQuantity: (state, action) => {
      state.data = state.data.map((product) => {
        if (product.cartId === action.payload.cartId) {
          return {
            ...product,
            quantity: action.payload.quantity,
            // If there is the item then change the quantity with given amount.
          };
        } else {
          return {
            ...product,
          };
        }
      });
    },
    clearError: (state) => {
      state.error = "";
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearError } =
  cartSlice.actions;

export default cartSlice.reducer;
