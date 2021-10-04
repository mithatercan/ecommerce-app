import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../../utils/fetchData";
import store from "../store";

fetchData().then((resp) => {
  store.dispatch(fetchAllData(resp));
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
    fetchAllData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchAllData } = productSlice.actions;
export default productSlice.reducer;
