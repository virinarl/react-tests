import React from "react";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import "./styles/ProductDetail.css";
import AddToCartButton from "../elements/AddToCartButton";

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div className="productDetail">
      <div
        className="productDetail__CoverPic"
        style={{ backgroundImage: `url(${products[productId].bigImg})` }}
      ></div>
      <div className="productDetail__info">
        <h1>{products[productId].title}</h1>
        <div className="productDetail__infoContainer">
          <div className="productDetail__infoContainerLeft">
            <h2>Description</h2>
            <p>{products[productId].sinopsis}</p>
            <h2>Requirements</h2>
            <ul>
              <li>Operating System: {products[productId].requisitos.SO}</li>
              <li>Memory: {products[productId].requisitos.memoria}</li>
              <li>Processor: {products[productId].requisitos.procesador}</li>
              <li>Grafics: {products[productId].requisitos.graficos}</li>
            </ul>
          </div>
          <div className="productDetail__infoContainerRight">
            <p>USD${products[productId].price}</p>
            <AddToCartButton
              id={products[productId].id}
              stock={products[productId].stock}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
