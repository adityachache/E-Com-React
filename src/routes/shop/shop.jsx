import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card";

function Shop() {
  const shopProducts = useContext(ProductsContext);
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 px-10">
        {shopProducts.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default Shop;
