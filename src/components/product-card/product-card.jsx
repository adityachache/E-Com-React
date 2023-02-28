import { Button, Card } from "flowbite-react";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addToCart } = useContext(CartContext);

  const addItemToCart = () => addToCart(product);
  return (
    <>
      <div className="max-w-md">
        <Card>
          <div className="flex flex-col items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-103 duration-200">
            <img
              className="mb-3 shadow-lg"
              style={{ height: "400px", width: "400px" }}
              src={imageUrl}
              alt={name}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h5>
            <span className="text-md font-bold text-black mt-2 dark:text-gray-400">
              {"$" + price}
            </span>
            <div className="mt-4 flex ">
              <Button
                gradientDuoTone="cyanToBlue"
                pill={true}
                onClick={addItemToCart}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default ProductCard;
