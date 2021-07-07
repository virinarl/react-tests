import React, { useState } from "react";
import "./styles/Carousel.css";
import { banners } from "../../data/carouselImg";

function Carousel() {
  const [img, setImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carousel__Inner"
        style={{ backgroundImage: `url(${banners[img].img})` }}
      >
        {/* <img src={banners[img].img} alt={banners[img].title} /> */}
      </div>
    </div>
  );
}

export default Carousel;
