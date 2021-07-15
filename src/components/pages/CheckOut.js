import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckOutForm from "../elements/CheckOutForm";

import "./styles/CheckOut.css";

function CheckOut() {
  const [total] = useContext(CartContext);

  let subTotal = 0;
  total.forEach((element) => {
    subTotal = subTotal + element.cantidad * element.price;
  });

  return (
    <div className="checkOut__Container">
      <h3>El monto total de la compra son: USD${subTotal}</h3>
      <h4>Complete los siguientes datos para procesar el pedido</h4>
      <CheckOutForm total={subTotal} />
    </div>
  );
}

export default CheckOut;
