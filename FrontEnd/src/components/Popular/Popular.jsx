import React from "react";
import SProducts from "../SpecialProducts/SProducts";
import { items_list } from "../../assets/assets.js";

const Popular = ({ category }) => {
  const filter_data = items_list.filter((item) => item.id % 5 === 0);

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center m-10">
          Popular Products
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filter_data.map((item, i) => {
          if (category === "All" || category === item.category) {
            return <SProducts
              id={item.id}
              name={item.name}
              img={item.image}
              price={item.price}
              description={item.description}
              category={item.category}
              key={i}
            />;
          }
        })}
      </div>
    </div>
  );
};

export default Popular;
