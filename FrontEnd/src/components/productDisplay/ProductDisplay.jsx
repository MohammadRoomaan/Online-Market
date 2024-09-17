import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props
    const {addToCart}=useContext(ShopContext)
    return (
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-8 p-4">
            {/* Image Section */}
            <div className="flex flex-col items-center md:w-1/2 space-y-4">
               
               
            <div className="w-full border-2 rounded-2xl">
                    <img src={product.image} alt="" className="w-full h-96 object-contain rounded-lg p-7 " />
                </div>
               
               
                <div className="grid grid-cols-4 gap-2 w-full">
                    <img src={product.image} alt="" className="w-full h-24 object-contain rounded-lg cursor-pointer" />
                    <img src={product.image} alt="" className="w-full h-24 object-contain rounded-lg cursor-pointer" />
                    <img src={product.image} alt="" className="w-full h-24 object-contain rounded-lg cursor-pointer" />
                    <img src={product.image} alt="" className="w-full h-24 object-contain rounded-lg cursor-pointer" />
                </div>
             
            </div>

            {/* Product Info Section */}
            <div className="md:w-1/2 md:pl-8 space-y-4 mt-4 md:mt-0">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center space-x-2">
                    <img src={assets.rating_starts} alt="" className="h-5" />
                    <p className="text-gray-600">111 reviews</p>
                </div>
                <div className="text-2xl font-semibold text-green-600">
                    ${product.price}
                </div>
                <div className="text-gray-700">
                    {product.description}
                </div>
                <button onClick={()=>{addToCart(product.id)}} className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default ProductDisplay
