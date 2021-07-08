import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCounts from "./ItemCounts";

import "./styles/AddToCartButton.css";

function AddToCartButton(props) {
  const [countItem, setCountItem] = useState(false);

  return (
    <div className="addCart" key={props.id}>
      {!countItem && (
        <ItemCounts
          initial={1}
          stock={props.stock}
          id={props.id}
          setCount={setCountItem}
          price={props.price}
        />
      )}
      {countItem && (
        <Link to="/cart">
          <button className="addCart__FinishButton">Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
}

export default AddToCartButton;
