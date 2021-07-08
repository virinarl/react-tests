import React from "react";
import ProductItem from "../elements/ProductItem";
import { products } from "../../data/products";
import "./styles/Store.css";

function Store() {
  return (
    <div className="productsList">
      <h1 className="productList__Title">Available Games</h1>
      <div className="productList__Container">
        {products.map((product, key) => {
          return (
            <ProductItem
              url={"/store/" + key}
              key={key}
              id={product.id}
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
