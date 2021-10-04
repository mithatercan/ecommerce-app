import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slicers/cartSlice";
import productSlice from "./slicers/productSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});
