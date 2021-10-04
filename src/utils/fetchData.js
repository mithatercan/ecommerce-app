import URL from "../graphql/utils";
import { dataQuery } from "../graphql/queries";

const fetchData = async () => {
  const result = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: dataQuery,
    }),
  });

  const resultData = await result.json();
  const finalData = await resultData.data;
  return finalData;
};

export default fetchData;
