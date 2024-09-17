import React from "react";
import Slider from "react-slick";
import { display_Items } from "../../assets/assets.js";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Items = ({ category, setCategory }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
console.log(category)
  return (
    <>
    
    <div className="items-slider mx-auto w-full px-4">
      <hr />
      <p className="text-3xl font-bold m-10 text-center">CATEGORIES</p>
      <Slider {...settings}>
        {display_Items.map((item, index) => {
          const isSelected = category === item.menu_name;
          return (
            <div
              key={index}
              onClick={() =>
                setCategory(prev =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className={`item-card cursor-pointer p-4 ${
                isSelected ? "border-2 border-pink-200" : "border"
              } rounded-full mx-auto`}
              style={{ margin: "0 10px" }}  
            >
              <div className="flex justify-center items-center">
                
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="h-40 w-40 object-cover rounded-full "
                />
                </div>
              <p className="text-center mt-2 text-lg font-semibold">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
    <hr className="m-10"/>
    </>
  );
};

export default Items;
