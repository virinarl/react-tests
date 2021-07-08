import React from "react";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import "./styles/ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div className="productDetail">
      <div
        className="productDetail__CoverPic"
        style={{ backgroundImage: `url(${products[productId].bigImg})` }}
      ></div>
      <h1>{products[productId].title}</h1>
    </div>
  );
}

export default ProductDetail;
