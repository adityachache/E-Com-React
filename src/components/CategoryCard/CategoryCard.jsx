import React from "react";
// import { Card } from "flowbite-react";

function CategoryCard(props) {
  return (
    <>
      <div className=" w-full text-center m-auto p-2">
        <div
          style={{
            backgroundImage: `url(${props.img})`,
          }}
          className="card bg-no-repeat bg-cover flex border transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-103 duration-200 border-black"
        >
          <div className="border bg-gray-300 opacity-70 border-black cursor-pointer m-auto p-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
            <p className="font-normal text-gray-800 dark:text-gray-400">
              Shop Now!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
