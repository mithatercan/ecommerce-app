import getSymbolFromCurrency from "currency-symbol-map";

const checkQuantity = (product, price) => {
  return typeof product.quantity !== "undefined"
    ? Math.floor(price.amount * product.quantity)
    : price.amount;
};
// This function is for getting currency with using currency symbol library.
const getCurrency = (product, currency) => {
  let result;
  product.prices.map((price) => {
    if (price.currency === currency) {
      result =
        getSymbolFromCurrency(currency) + " " + checkQuantity(product, price);

      //Quantity check for cart. If it has a quantity it multiplies with amount.
    }
  });

  return result;
};

export default getCurrency;
