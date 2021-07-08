import React, { useContext } from "react";
import "./styles/Cart.css";
import CartItem from "../elements/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { products } from "../../data/products";
import TotalAccount from "../elements/TotalAccount";

function Cart() {
  const [cart] = useContext(CartContext);

  return (
    <div className="cart">
      <div className="cart__Items">
        {cart.length > 0 ? (
          cart.map((element) => {
            return products.map((product, key) => {
              return (
                product.id === element.id && (
                  <CartItem
                    key={key}
                    img={product.img}
                    title={product.title}
                    price={element.price}
                    qty={element.cantidad}
                    total={product.price * element.cantidad}
                  />
                )
              );
            });
          })
        ) : (
          <h2>Tu carrito está vacío!</h2>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart__Total">
          <TotalAccount />
        </div>
      )}
    </div>
  );
}

export default Cart;
