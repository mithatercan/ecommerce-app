const createAttribute = (data, attribute) => {
  if (data.some((item) => item.name === attribute.name)) {
    // if data has the same attribute then change the attributes with new one.
    const newData = data.map((item) => {
      if (item.name === attribute.name) {
        return {
          ...item,
          value: attribute.value,
        };
      } else {
        return {
          ...item,
        };
      }
    });

    return newData;
  } else {
    // Else add the new attribute to data.
    return [...data, attribute];
  }
};

export default createAttribute;
