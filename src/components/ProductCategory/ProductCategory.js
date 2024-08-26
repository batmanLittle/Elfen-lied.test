import "./ProductCategory.css";
import arrow from "../../images/arrow-down.svg";
import React, { useState, useEffect } from "react";

function ProductCategory({ cards }) {
  const [visibleCards, setVisibleCards] = useState(5);

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
        <button>
          <p className="product-category__filters">фильтры</p>
        </button>
        <p className="product-category__quantity">
          <span>{cards.length}</span> позиций в категории
        </p>
      </div>
      <ul className="product-category__list">
        {cards.slice(0, visibleCards).map((card) => (
          <li className="product-category__item" key={card.id}>
            <img
              className="product-category__item-img"
              src={card.src}
              alt={card.alt}
            />
            <div className="product-category__item-description">
              <div className="product-category__item-name">
                <div
                  className={`product-category__item-dot ${card.dotColor}`}
                ></div>
                <h3>{card.name}</h3>
              </div>
              <p className="product-category__item-category">
                {card.nameCategory}
              </p>

              <div className="product-category__item-buy">
                <p className="product-category__item-price font-floreste ">
                  {card.price}
                </p>
                <button className="product-category__item-button">
                  <p>Купить</p>
                </button>
              </div>
            </div>
          </li>
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
