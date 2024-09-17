import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext.jsx";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Buy", path: "/buy" },
  { name: "Sell", path: "/sell" },
  { name: "About", path: "/about" },
];

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { cartItems } = useContext(ShopContext);

  // Calculate total number of items in the cart
  const totalCartItems = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

  return (
    <div className="Navbar max-w-screen-xl mx-auto p-4">
      <div className="navbar bg-base-100 shadow-lg rounded-lg">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              aria-label="Open menu"
              className="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {navItems.map((item) => (
                <li key={item.name} className="cursor-pointer">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/">
            <img src={assets.logo} alt="Logo" className="w-20" />
          </Link>
          <p className="text-3xl font-sans font-bold ml-2">Online Market</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${
                  menu === item.name.toLowerCase()
                    ? "underline decoration-2"
                    : ""
                } cursor-pointer`}
                onClick={() => setMenu(item.name.toLowerCase())}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-4 items-center">
          <img src={assets.search_icon} alt="Search" className="w-6 h-6" />
          <Link to="/cart" className="relative flex items-center">
            <img src={assets.basket_icon} alt="Basket" className="w-6 h-6" />
            {totalCartItems > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center bg-red-500 text-white text-xs font-bold h-3 w-3 rounded-full">
                {totalCartItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setShowLogin(true)}
            className="btn transition ease-in-out delay-150 bg-red-500 text-white hover:bg-red-600 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
