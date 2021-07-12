import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { CartContext } from "../../contexts/CartContext";

import "./styles/DeleteButton.css";

function DeleteButton({ id }) {
  const [cart, setCart] = useContext(CartContext);

  function check(id, array) {
    let newCart = array.filter((prueba) => prueba.id !== id);
    setCart(newCart);
  }
  return (
    <div>
      <button className="deleteButton" onClick={() => check(id, cart)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default DeleteButton;
