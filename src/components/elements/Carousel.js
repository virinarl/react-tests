import React, { useState } from "react";
import { banners } from "../../data/carouselImg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./styles/Carousel.css";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carousel__Inner"
        style={{ backgroundImage: `url(${banners[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() =>
            currImg > 0
              ? setCurrImg(currImg - 1)
              : setCurrImg(banners.length - 1)
          }
        >
          <ArrowBackIosIcon />
        </div>
        <div className="center"></div>
        <div
          className="right"
          onClick={() =>
            currImg < banners.length - 1
              ? setCurrImg(currImg + 1)
              : setCurrImg(0)
          }
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
