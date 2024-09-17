import React from 'react';
import { assets } from '../../assets/assets.js';

const Download = () => {
  return (
    <>
    <hr className='m-10'/>
    <div className="w-full m-10 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          For a Better Experience, <span className="text-pink-500">Download the App</span>
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#" className="flex items-center">
            <img 
              src={assets.play_store} 
              alt="Download on Google Play" 
              className="w-40 h-auto cursor-pointer transition-transform transform hover:scale-105"
            />
          </a>

          <a href="#" className="flex items-center">
            <img 
              src={assets.app_store} 
              alt="Download on the App Store" 
              className="w-40 h-auto cursor-pointer transition-transform transform hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Download;
