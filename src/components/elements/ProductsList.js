// import React, { useState, useEffect } from "react";
// import ProductItem from "../elements/ProductItem";
// import { products } from "../../data/products";

// function ProductsList() {
//   const [productsList, setProductosList] = useState([]);

//   useEffect(() => {
//     const getProducts = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(products);
//       }, 1000);
//     });

//     id
//       ? getProducts.then((res) => {
//           setProductosList(res.filter((i) => i.id === id));
//         })
//       : getProducts.then((res) => {
//           setProductosList(res);
//         });
//   }, [id]);

//   return (
//     <div className="productsList">
//       <h1 className="productList__Title">Available Games</h1>
//       <div className="productList__Container">
//         {productsList.map((product, key) => {
//           return (
//             <ProductItem
//               url={"/store/" + key}
//               key={key}
//               id={key}
//               img={product.img}
//               title={product.title}
//               price={product.price}
//               description={product.description}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ProductsList;
