import React from "react";
import { Link } from "react-router-dom";

import "./styles/BuyButton.css";

function BuyButton(props) {
  return (
    <div>
      <Link to="/check_out">
        <button>Comprar</button>
      </Link>
    </div>
  );
}

export default BuyButton;
