import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../../assets/assets.js';

const CartItems = () => {
  const { items_list, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const calculateCartTotal = () => {
    return items_list.reduce((total, item) => {
      return total + (item.price * (cartItems[item.id] || 0));
    }, 0);
  };

  const shippingFee = 5.00; 
  const cartTotal = calculateCartTotal();
  const adjustedShippingFee = cartTotal === 0 ? 0 : shippingFee;
  const total = cartTotal + adjustedShippingFee;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4">
        <p className="font-bold col-span-2 sm:col-span-1">Products</p>
        <p className="font-bold hidden md:block">Title</p>
        <p className="font-bold hidden sm:block">Price</p>
        <p className="font-bold hidden sm:block">Quantity</p>
        <p className="font-bold hidden sm:block">Total</p>
        <p className="font-bold hidden sm:block">Remove</p>
      </div>
      <hr />
      {items_list.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center py-2 border-b border-gray-200">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
              <p className="font-medium col-span-2 sm:col-span-1">{item.name}</p>
              <p className="text-gray-600 hidden sm:block">${item.price}</p>
              <button className="bg-blue-500 text-white py-1 px-2 rounded w-12 hidden sm:block">
                {cartItems[item.id]}
              </button>
              <p className="font-medium hidden sm:block">${item.price * cartItems[item.id]}</p>
              <div className="flex space-x-2 col-span-2 sm:col-span-1 md:col-span-1">
                <img
                  src={assets.add_icon_green}
                  alt="Add"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => addToCart(item.id)}
                />
                <img
                  src={assets.remove_icon_red}
                  alt="Remove"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <hr className="my-4" />
      <div className="w-full sm:w-96 mx-auto my-10 border-2 rounded-xl p-5">
        <div className="flex justify-between text-lg font-semibold">
          <p>Cart Total:</p>
          <p>${cartTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <p>Shipping Fee:</p>
          <p>${adjustedShippingFee.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-xl font-bold mt-2">
          <p>Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600 w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
