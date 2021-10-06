import store from "../store";
import { addToCart, removeFromCart } from "../slicers/cartSlice";
import { changeQuantity } from "../slicers/cartSlice";

const checkQuantityToRemove = (payload) => {
  const { product, type } = payload;
  if (product.quantity === 1 && type === "decrease") {
    return true;
  }
};

export const changeQuantityAction = (payload) => {
  const { product, type } = payload;
  if (checkQuantityToRemove(payload)) {
    store.dispatch(removeFromCart(product.id));
  } else {
    store.dispatch(
      changeQuantity({
        id: product.id,
        quantity:
          type === "increase" ? product.quantity + 1 : product.quantity - 1,
      })
    );
  }
};

export const addCartAction = (product) => {
  store.dispatch(
    addToCart({
      ...product,
      quantity: 1,
    })
  );
};
