import getSymbolFromCurrency from "currency-symbol-map";
const getCurrency = (product, currency) => {
  let result;
  product.prices.map((price) => {
    if (price.currency === currency) {
      result = getSymbolFromCurrency(currency) + " " + price.amount;
    }
  });

  return result;
};

export default getCurrency;
