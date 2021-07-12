import React, { useContext, useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import CartItem from "../elements/CartItem";
import { CartContext } from "../../contexts/CartContext";
import TotalAccount from "../elements/TotalAccount";
import { CircularProgress } from "@material-ui/core";

import "./styles/Cart.css";

function Cart() {
  const [cart] = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const gamesCollection = db.collection("games");
    gamesCollection
      .get()
      .then((querySnapshot) => {
        const availableProducts = querySnapshot.docs.map((doc) => doc.data());
        setProducts(availableProducts);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="cart">
      <div className="cart__Items">
        {loading && <CircularProgress />}
        {cart.length > 0 ? (
          cart.map((element) => {
            return products.map((product, key) => {
              return (
                product.identificador === element.id && (
                  <CartItem
                    id={product.identificador}
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
