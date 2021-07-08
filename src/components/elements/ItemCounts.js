import React, { useState } from "react";
import "./styles/ItemCounts.css";

function ItemCounts({ initial, id, stock, setCount }) {
  const [counter, setCounter] = useState(initial);
  const addCount = () => {
    setCounter(counter + 1);
  };

  const lessCount = () => {
    setCounter(counter - 1);
  };

  const addToCart = () => {
    setCount({
      id: id,
      cantidad: counter,
    });
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
