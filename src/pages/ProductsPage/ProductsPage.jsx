import React, { useEffect, useState } from "react";
import "./product.css";
import { IoSearch } from "react-icons/io5";
import ProductCard from "./ProductCard";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductsPage = ({ handlerSideClose }) => {
  const [productSearch, setProductSearch] = useState("");

  const { products } = useSelector((state) => state.products);

  let cardFilter = products.filter(
    (card) => card.product.toLowerCase().includes(productSearch.toLowerCase()),
    "card"
  );

  const history = useHistory();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { data } = await axios.get("http://localhost:3003/products");
  //   setCards(data);
  // };

  const handleShowMore = () => {
    history.push("/category");
  };

  return (
    <article className="products-page" onClick={handlerSideClose}>
      <div className="col-md-12 main-about">
        <h2>Məhsullar</h2>
      </div>
      <div className="container">
        <div className="product-search">
          <div className="product-search-content">
            <input
              placeholder="Məhsul daxil edin"
              type="text"
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
            />
            <div className="search-icon">
              <IoSearch />
            </div>
          </div>
        </div>
        <div className="cards">
          {cardFilter?.slice(0, 6).map((card) => (
            <ProductCard key={card.id} card={card} />
          ))}
        </div>
        <div className="more-button">
          {cardFilter?.length >= 6 && (
            <button onClick={handleShowMore}>Bütün məhsullara bax</button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductsPage;
