import "./ProductCategory.css";
import arrow from "../../images/arrow-down.svg";
import React, { useState, useEffect } from "react";
import Filters from "../Filters/Filters";
import ItemProduct from "../ItemProduct/ItemProduct";

function ProductCategory({ cards }) {
  const [visibleCards, setVisibleCards] = useState(5);
  const [visibleFilters, setVisibleFilters] = useState(false);

  function handleFiltersOpen() {
    setVisibleFilters((prevState) => !prevState);
  }

  const handleResize = () => {
    if (window.innerWidth < 1101) {
      setVisibleCards(4);
    } else if (window.innerWidth < 1447) {
      setVisibleCards(3);
    } else if (window.innerWidth < 1830) {
      setVisibleCards(4);
    } else {
      setVisibleCards(5);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loadMoreCards = () => {
    if (window.innerWidth < 1101) {
      setVisibleCards((prev) => prev + 4);
    } else if (window.innerWidth < 1447) {
      setVisibleCards((prev) => prev + 3);
    } else if (window.innerWidth < 1830) {
      setVisibleCards((prev) => prev + 4);
    } else {
      setVisibleCards((prev) => prev + 5);
    }
  };

  return (
    <div className="product-category">
      <div className="product-category__menu">
        {visibleFilters && <Filters />}
        <button onClick={handleFiltersOpen}>
          <p className="product-category__filters">фильтры</p>
        </button>
        <p className="product-category__quantity">
          <span>{cards.length}</span> позиций в категории
        </p>
      </div>
      <ul className="product-category__list">
        {cards.slice(0, visibleCards).map((card) => (
          <ItemProduct card={card} key={card.id} />
        ))}
      </ul>
      {visibleCards < cards.length && (
        <button className="product-category__button" onClick={loadMoreCards}>
          <p>Загрузить еще</p>
          <img src={arrow} alt="стрелка вниз" />
        </button>
      )}
    </div>
  );
}

export default ProductCategory;
