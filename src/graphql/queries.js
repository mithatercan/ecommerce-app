export const dataQuery = `{
  currencies
  categories {
    name
    products{
      name
      id
      category
      inStock
      description
      brand
      attributes{
       name
        id
        type
        items{
          id
          value
          displayValue
        }
      }
      prices{
        currency
        amount
        
      } 
    }
  }
}
    `;

export const productByIdQuery = (id) => {
  return `{
    product (id :"${id}"){
      name
      id
      category
      inStock
      description
      brand
      attributes{
       name
        id
        type
        items{
          id
          value
          displayValue
        }
      }
      prices{
        currency
        amount
        
      }  
    }
  }`;
};
