import store from "../store";
import { addToCart } from "../slicers/cartSlice";
import { changeQuantity } from "../slicers/cartSlice";

export const changeQuantityAction = (payload) => {
  store.dispatch(
    changeQuantity({
      id: payload.product.id,
      quantity:
        payload.type === "increase"
          ? payload.product.quantity + 1
          : payload.product.quantity - 1,
    })
  );
};

export const addCartAction = (product) => {
  store.dispatch(
    addToCart({
      ...product,
      quantity: 1,
    })
  );
};
