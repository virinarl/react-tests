import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./styles/ItemCounts.css";

function ItemCounts({ initial, id, stock, setCount, price }) {
  const [counter, setCounter] = useState(initial);
  const [cart, setCart] = useContext(CartContext);

  const addCount = () => {
    setCounter(counter + 1);
  };

  const lessCount = () => {
    setCounter(counter - 1);
  };

  const addToCart = () => {
    if (!cart.some((el) => el.id === id)) {
      const item = { id: id, cantidad: counter, price: price };
      setCart((curr) => [...cart, item]);
    } else if (
      cart[cart.findIndex((item) => item.id === id)].cantidad + counter <=
      stock
    ) {
      cart[cart.findIndex((item) => item.id === id)].cantidad =
        cart[cart.findIndex((item) => item.id === id)].cantidad + counter;
    }

    setCount(true);
  };

  return (
    <div className="itemCount">
      <div className="itemCount__Container">
        <button
          className="itemCount__Button"
          onClick={lessCount}
          disabled={counter === 1 && "disabled"}
        >
          -
        </button>
        <span className="itemCount__number">{counter}</span>
        <button
          className="itemCount__Button"
          onClick={addCount}
          disabled={counter === stock && "disabled"}
        >
          +
        </button>
      </div>
      <button className="itemCount__AddButton" onClick={addToCart}>
        Añadir al Carrito
      </button>
    </div>
  );
}

export default ItemCounts;
