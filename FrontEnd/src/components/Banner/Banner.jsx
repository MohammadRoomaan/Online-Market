import React from "react";
import { assets } from '../../assets/assets.js';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div 
      className="banner h-screen mx-auto my-8 bg-cover bg-center relative border-2 rounded-xl max-w-full"
      style={{ backgroundImage: `url(${assets.banner})`, backgroundSize: 'cover' }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 bg-black bg-opacity-50 rounded-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-white mb-4">Buy Your Favourite Products</h2>
        <p className="text-lg text-white mb-6">
          Discover the best products at unbeatable prices. Shop now and enjoy exclusive offers and discounts!
        </p>
        <Link to={'/buy'} className="btn bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition transform duration-300">
          View Products
        </Link>
      </div>
    </div>
  );
};

export default Banner;
