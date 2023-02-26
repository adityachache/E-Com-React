import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
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
              <Link
                to={""}
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default ProductCard;
