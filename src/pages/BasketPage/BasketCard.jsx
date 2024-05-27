import { useEffect, useState } from "react";
import "./basket.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BASKET_ACTION_TYPE } from "../../reducer/actionType";
const BasketCard = ({ basket }) => {
  const [count, setCount] = useState(basket.count);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleMore = (id) => {
    history.push(`/product/${id}`);
  };

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    const updatedBasket = storedBasket.map((item) =>
      item.id === basket.id ? { ...item, count: count } : item
    );

    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  }, [count, basket.id, basket]);

  const handleDeleteProduct = (id) => {
    dispatch({ type: BASKET_ACTION_TYPE.DELETE_BASKET, payload: id });
  };

  return (
    <div className="basket-data">
      <div className="basket-product">
        <div className="basket-img">
          photo
          {/* <img src="/images/Agababa.png" alt="/" /> */}
        </div>
        <div className="basket-content">
          <p>{basket.product}</p>
          <span>Məhsulun sayı:{count}</span>
          <div className="count-btns">
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
          </div>
        </div>
      </div>
      <div className="basket-btn">
        <button
          className="delete"
          onClick={() => handleDeleteProduct(basket.id)}
        >
          Sil
        </button>
        <button className="more" onClick={() => handleMore(basket.id)}>
          Ətraflı
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
