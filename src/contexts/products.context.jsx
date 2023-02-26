import { createContext, useState } from "react";
import { shopData } from "../data";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState(shopData);
  const value = { products, setProducts };

  return (
    <>
      <ProductsContext.Provider value={value}>
        {props.children}
      </ProductsContext.Provider>
    </>
  );
};
