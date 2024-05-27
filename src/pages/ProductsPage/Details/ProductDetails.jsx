import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { ReactComponent as SaveIcon } from "../../../images/products/save-icon.svg";
import { ReactComponent as SelectSaveIcon } from "../../../images/products/select-save-icon.svg";
import { useDispatch } from "react-redux";
import { BASKET_ACTION_TYPE } from "../../../reducer/actionType";
const ProductDetails = ({ handlerSideClose }) => {
  const [productDetails, setProductDetails] = useState({});

  // const { basket } = useSelector((state) => state.basket);

  const { id } = useParams();

  const [saveProduct, setSaveProduct] = useState(false);
  const dispatch = useDispatch();

  const changeSaveIcon = () => {
    setSaveProduct((prev) => !prev);
  };

  const addToBasket = () => {
    dispatch({
      type: BASKET_ACTION_TYPE.CREATE_BASKET,
      payload: {
        content: productDetails.content,
        id: productDetails.id,
        img: productDetails.img,
        product: productDetails.product,
        count: 1,
      },
    });
  };

  useEffect(() => {
    const getDetails = async (id) => {
      try {
        const { data } = await axios.get(
          `http://localhost:3003/products/${id}`
        );
        setProductDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails(id);
  }, [id]);

  return (
    <article className="products-page" onClick={handlerSideClose}>
      <div className="col-md-12 main-about">
        <h2>Məhsul</h2>
      </div>
      <div className="container">
        <div className="product-details">
          <div className="details-left">
            <div className="save-icon" onClick={changeSaveIcon}>
              {saveProduct ? <SelectSaveIcon /> : <SaveIcon />}
            </div>
            <div className="details-img">
              {/* <img src={productDetails?.img} alt="" /> */}
              <img src="/images/Agababa.png" alt="/" />
            </div>
            <div className="details-header">
              <h4>{productDetails.product}</h4>
            </div>
          </div>
          <div className="product-content">
            <h4>{productDetails.content}</h4>
          </div>
          <div className="order-btn">
            <button onClick={addToBasket}>Sifariş et</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
