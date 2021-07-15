import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();

  // const addCart = (item) => setCart([...cart, item]);

  return (
    <CartContext.Provider value={[cart, setCart, total, setTotal]}>
      {children}
    </CartContext.Provider>
  );
};
