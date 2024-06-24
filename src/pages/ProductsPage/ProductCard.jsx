import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PRODUCT_ACTIONS } from "../../reducer/actionType";

const ProductCard = ({ card }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDetails = (id) => {
    dispatch({ type: PRODUCT_ACTIONS.GET_PRODUCT_DETAILS, payload: card });
    history.push(`/məhsullar/${id}`);
    // history.push(`/məhsul`);
  };

  return (
    <div className="card" onClick={() => handleDetails(card.id)}>
      <div className="card-container">
        <div className="card-img">
          <span>Tezliklə</span>
          {/* <img src="/images/Agababa.png" alt="/" /> */}
        </div>
        <div className="card-content">
          <p>ətraflı</p>
          {/* <p>{card.product}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
