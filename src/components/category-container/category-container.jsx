import React from "react";
import { categoryData } from "../../data";
import CategoryCard from "../category-card/category-card";

function CategoryContainer() {
  return (
    <>
      <div className="pl-10 pr-10">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 ">
          {categoryData.map((item) => {
            return (
              <CategoryCard
                title={item.title}
                key={item.id}
                img={item.imageUrl}
              />
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 ">
          <CategoryCard
            title={"Women's"}
            img={`https://i.ibb.co/GCCdy8t/womens.png`}
          />
          <CategoryCard
            title={"Men's"}
            img={`https://i.ibb.co/R70vBrQ/men.png`}
          />
        </div>
      </div>
    </>
  );
}

export default CategoryContainer;
