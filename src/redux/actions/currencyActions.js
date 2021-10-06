import { changeCurrency } from "../slicers/currencySlice";
import store from "../store";

export const changeCurrencyAction = (value) => {
  store.dispatch(changeCurrency(value));
};
