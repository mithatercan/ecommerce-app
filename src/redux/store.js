import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slicers/cartSlice";
import currencySlice from "./slicers/currencySlice";
import productSlice from "./slicers/productSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    currency: currencySlice,
  },
});
