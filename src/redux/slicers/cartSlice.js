import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      if (state.data.length === 0) {
        state.data = [data];
      } else if (
        !state.data.some(
          (item) =>
            // Check if the product doesn't exist in store with same id and choosenAttributes
            item.id === data.id &&
            JSON.stringify(item.choosenAttribute) ===
              JSON.stringify(data.choosenAttribute)
        )
      ) {
        //If it doesn't exist then add the new product.
        state.data = [...state.data, data];
      } else {
        state = {
          data: [...state.data],
          error: "You have this item in your cart!",
        };

        setTimeout(() => {
          state = {
            data: [...state, data],
          };
        }, 5000);
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
  },
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
