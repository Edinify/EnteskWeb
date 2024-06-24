import React, { useEffect, useState } from "react";
import "./product.css";
import { IoSearch } from "react-icons/io5";
import ProductCard from "./ProductCard";
// import axios from "axios";
import { useHistory } from "react-router-dom";

const ProductsPage = ({ handlerSideClose }) => {
  const [productSearch, setProductSearch] = useState("");
  // const [cards, setCards] = useState([]);

  const productsData = [
    {
      id: "59a41c03-b978-4e55-87b5-8dd77c20f01d",
      product: "robot",
      content: "Cox maraqlı məhsuldur",
      img: "",
    },
    {
      id: "2ce548fc-c587-458a-afa1-be517c76ef67",
      product: "maşın",
      content: "Cox maraqlı məhsuldur",
      img: "",
    },
    {
      id: "c862ca45-6126-483b-9cf9-dd9110011811",
      product: "təyyarə",
      content: "Cox maraqlı məhsuldur",
      img: "",
    },
    {
      id: "40694e4e-0404-4d4c-b09b-47baf87b8c17",
      product: "at",
      content: "Cox maraqlı məhsuldur",
      img: "",
    },
    {
      id: "2d4c80af-5d0d-45c5-a890-56b8948f3504",
      product: "mehsul5",
      content: "Cox maraqlı məhsuldur",
      img: "",
    },
    {
      id: "01a03b48-8f88-442a-ab14-f854980d4769",
      product: "mehsul6",
      content: "Cox maraqlı məhsuldur",
      img: "",
    },
  ];

  let cardFilter = productsData.filter(
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
