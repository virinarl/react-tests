import React from "react";
import DeleteButton from "./DeleteButton";

function CartItem(props) {
  return (
    <div className="productItem">
      <div
        className="productItem__Photo"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div>
        <h3 className="productItem__Name">{props.title}</h3>
        <p className="productItem__Price">Precio por unidad: ${props.price}</p>
        <p>Cantidad: {props.qty}</p>
        <p>Total: ${props.total}</p>
        <DeleteButton id={props.id} />
      </div>
    </div>
  );
}

export default CartItem;
