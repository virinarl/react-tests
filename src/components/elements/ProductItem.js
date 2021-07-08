import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

import "./styles/ProductItem.css";

function ProductItem(props) {
  return (
    <div className="productItem">
      <Link to={props.url} className="productItem__Link">
        <div
          className="productItem__Photo"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div>
          <h3 className="productItem__Name">{props.title}</h3>
          <p className="productItem__Price">${props.price}</p>
        </div>
      </Link>
      <AddToCartButton id={props.id} stock={props.stock} />
    </div>
  );
}

export default ProductItem;
