import "./ItemProduct.css";

import { useModal } from "../../contexts/ModalContext";

const ItemProduct = ({ card }) => {
  const { openModal } = useModal();

  return (
    <li className="item-product" onClick={() => openModal(card)}>
      <img className="item-product__img" src={card.src} alt={card.alt} />
      <div className="item-product__description">
        <div className="item-product__name">
          <div className={`item-product__dot ${card.dotColor}`}></div>
          <h3>{card.name}</h3>
        </div>
        <p className="item-product__category">{card.nameCategory}</p>

        <div className="item-product__buy">
          <p className="item-product__price font-floreste ">{card.price}</p>
          <button className="item-product__button">
            <p>Купить</p>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ItemProduct;
