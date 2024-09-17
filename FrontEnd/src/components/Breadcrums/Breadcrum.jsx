import React from 'react';
import { assets } from '../../assets/assets.js';
import ProductDisplay from '../productDisplay/ProductDisplay.jsx';

const Breadcrum = ({ product }) => {
   

    return (

        <>
        <div className='flex m-10 '>
            Home   <img className='px-2' src={assets.b_arrow} alt="arrow" /> BUY  <img className='px-2' src={assets.b_arrow} alt="arrow" /> {product.category}
            
        </div>

        </>
    );
};

export default Breadcrum;
