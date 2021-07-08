import React from "react";
import { products } from "../../data/products";
import ProductItem from "../elements/ProductItem";
import "./styles/Store.css";

function Sales() {
  return (
    <div className="productsList">
      <h1 className="productList__Title">Available Games On Sale!</h1>
      <div className="productList__Container">
        {products.map((product, key) => {
          return (
            product.sale === 1 && (
              <ProductItem
                url={"/store/" + key}
                key={key}
                id={products.id}
                img={product.img}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Sales;
