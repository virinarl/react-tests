import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router-dom";
import AddToCartButton from "../elements/AddToCartButton";
import { CircularProgress } from "@material-ui/core";
import "./styles/ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const gamesCollection = db.collection("games");
    const productInfo = gamesCollection.where("identificador", "==", productId);
    productInfo
      .get()
      .then((querySnapshot) => {
        const productInfoDetails = querySnapshot.docs.map((doc) => doc.data());
        setProducts(productInfoDetails);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className="productDetail">
      {loading && <CircularProgress />}
      {products.map((product, key) => {
        return (
          <>
            <div
              className="productDetail__CoverPic"
              style={{ backgroundImage: `url(${product.bigImg})` }}
            ></div>
            <div className="productDetail__info">
              <h1>{product.title}</h1>
              <div className="productDetail__infoContainer">
                <div className="productDetail__infoContainerLeft">
                  <h2>Descrition</h2>
                  <p>{product.sinopsis}</p>
                  <h2>Requirements</h2>
                  <ul>
                    <li>Operating System: {product.requirements.so}</li>
                    <li>Memory: {product.requirements.memoria}</li>
                    <li>Processor: {product.requirements.procesador}</li>
                    <li> Grafics: {product.requirements.graficos}</li>
                  </ul>
                </div>
                <div className="productDetail__infoContainerRight">
                  <p>USD${product.price}</p>
                  <AddToCartButton
                    id={product.identificador}
                    stock={product.stock}
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ProductDetail;
