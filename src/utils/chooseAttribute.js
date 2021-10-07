const chooseAttribute = (state, item) => {
  return state.map((stateItem) => {
    if (stateItem.name === item.name && stateItem.value === item.value) {
      if (item.name === "Color") {
        return "attribute-cta__choosen--color";
      } else {
        return "attribute-cta__choosen";
      }
    }
  });
};

export default chooseAttribute;
