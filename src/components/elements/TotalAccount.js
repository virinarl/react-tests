import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function TotalAccount() {
  const [cart] = useContext(CartContext);
  let total = 0;
  cart.forEach((element) => {
    total = total + element.cantidad * element.price;
  });

  return (
    <div>
      <h3>El total de la cuenta es: USD${total}</h3>
    </div>
  );
}

export default TotalAccount;
