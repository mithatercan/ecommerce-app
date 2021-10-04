import URL from "../graphql/utils";
import { productByIdQuery } from "../graphql/queries";

const fetchProductById = async (id) => {
  const result = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: productByIdQuery(id),
    }),
  });

  const resultData = await result.json();

  console.log(resultData.data.product);
};

export default fetchProductById;
