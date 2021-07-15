import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import BuyButton from "./BuyButton";

function TotalAccount() {
  const [cart, setTotal] = useContext(CartContext);

  let subTotal = 0;
  cart.forEach((element) => {
    subTotal = subTotal + element.cantidad * element.price;
  });

  return (
    <div>
      <h3>El total de la cuenta es: USD${subTotal}</h3>
      <BuyButton onClick={() => setTotal(subTotal)} />
    </div>
  );
}

export default TotalAccount;
