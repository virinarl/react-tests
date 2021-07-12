import React, { useEffect, useState } from "react";
import ProductItem from "../elements/ProductItem";
import { getFirestore } from "../../firebase";
import { CircularProgress } from "@material-ui/core";
import "./styles/Store.css";

function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const gamesCollection = db.collection("games");
    gamesCollection
      .get()
      .then((querySnapshot) => {
        const productsOnSale = querySnapshot.docs.map((doc) => doc.data());
        setProducts(productsOnSale);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="productsList">
      <h1 className="productList__Title">Available Games</h1>
      <div className="productList__Container">
        {loading && <CircularProgress />}
        {products.map((product, key) => {
          return (
            <ProductItem
              url={"/store/" + product.identificador}
              key={key}
              id={product.identificador}
              img={product.img}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Store;
