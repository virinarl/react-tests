import React from "react";
import Carousel from "../elements/Carousel";
import Store from "../pages/Store";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <Carousel />
      <div>
        <Store />
      </div>
    </>
  );
}

export default Home;
