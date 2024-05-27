import React from "react";
import { useHistory } from "react-router-dom";

const ProductCard = ({ card }) => {
  const history = useHistory();
  

  const handleDetails = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <div className="card" onClick={() => handleDetails(card.id)}>
      <div className="card-container">

     
      <div className="card-img">
        <img src="/images/Agababa.png" alt="/" />
      </div>
      <div className="card-content">
        <p>{card.product}</p>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
