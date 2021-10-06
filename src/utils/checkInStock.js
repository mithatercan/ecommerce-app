const checkInStock = (product) => {
  if (!product.inStock) {
    return "out-of-stock";
  } else {
    return;
  }
};

export default checkInStock;
