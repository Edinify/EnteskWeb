import React, { useState } from "react";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";
import LoginPage from "../LoginPage/LoginPage";

const BasketPage = ({ handlerSideClose }) => {
  const { basket } = useSelector((state) => state.basket);
  const [openModal,setOpenModal] = useState(false)


  const openModalFunc=()=>{
    setOpenModal(!openModal)
  }
  return (
    <article className="basket-page" onClick={handlerSideClose}>
      <div className="col-md-12 main-about">
        <h2>Sifarişlər</h2>
      </div>
      <div className="container">
        {basket?.map((item) => (
          <BasketCard key={item.id} basket={item} />
        ))}
        {basket?.length ? <div className="basket-accept-btn">
          <button className="accept-btn" onClick={openModalFunc}  >Səbəti təsdiqlə</button> 
        </div>
        : ""}
      </div>
      {openModal && <LoginPage/>}
    </article>
  );
};

export default BasketPage;
