const chooseAttribute = (obj, attributes) => {
  return (
    attributes &&
    attributes.some((attribute) => {
      if (obj.name === attribute.name && obj.value === attribute.value) {
        return "choosen";
      }
    })
  );
};

export default chooseAttribute;
