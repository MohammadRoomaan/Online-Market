import React, { createContext, useState } from "react";
import { items_list } from "../assets/assets.js";

export const ShopContext=createContext(null);


const getDefaultCart=()=>{
    let cart={};
    for(let i=0;i<items_list.length+1;i++){
        cart[i]=0;
    }
    return cart
}

const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(getDefaultCart())
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
    }
    
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const contextValue={items_list,cartItems,addToCart,removeFromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;