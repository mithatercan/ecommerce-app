import store from "../store";
import { addToCart, removeFromCart } from "../slicers/cartSlice";
import { changeQuantity } from "../slicers/cartSlice";
import { v4 as uuid } from "uuid";

const checkQuantityToRemove = (payload) => {
  const { product, type } = payload;
  if (product.quantity === 1 && type === "decrease") {
    // If product's quantity below 1 return true for the action.
    return true;
  }
};

export const changeQuantityAction = (payload) => {
  const { product, type } = payload;
  if (checkQuantityToRemove(payload)) {
    // Product's quantity is below 1 then call removeFromCart action.
    store.dispatch(removeFromCart(product.cartId));
  } else {
    store.dispatch(
      // if it is not then change the quantity with type (decrease || increase)
      changeQuantity({
        cartId: product.cartId,
        quantity:
          type === "increase" ? product.quantity + 1 : product.quantity - 1,
      })
    );
  }
};

export const addCartAction = (product, attributes) => {
  return setTimeout(() => {
    store.dispatch(
      addToCart({
        ...product,
        quantity: 1,
        cartId: uuid(),
        choosenAttribute: attributes,
        // This choosenAttribute that we choose from product detail page.
      })
    );
  }, 500);
};
