import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  return <CartContext.Provider value={[]}>{children}</CartContext.Provider>;
};
