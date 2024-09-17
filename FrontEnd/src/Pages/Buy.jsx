import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Items from "../components/Items/Items";
import SProducts from "../components/SpecialProducts/SProducts";
const Buy = () => {
  const { items_list } = useContext(ShopContext);
  const [category, setCategory] = useState("All");

  return (
    <>
      <div>
        <Items category={category} setCategory={setCategory} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          items_list.map((item,i)=>{
            if(category===item.category||category==='All'){

              return <SProducts key={i} id={item.id} name={item.name} img={item.image} price={item.price} category={item.category} description={item.description} />
            }
          })
        }
      </div>
    </>
  );
};

export default Buy;
