import "./ProductModal.css";
import iconClose from "../../images/icon-close.svg";
import iconFavorite from "../../images/icon-favorite.svg";
import basket from "../../images/basket-green.svg";
import { useModal } from "../../contexts/ModalContext";

function ProductModal() {
  const { isOpen, closeModal, selectedCard } = useModal();
  if (!isOpen || !selectedCard) return null;
  return (
    <div className="product-modal">
      <div className="product-modal__container" key={selectedCard.id}>
        <img className="product-modal__img" src={selectedCard.src} alt="" />
        <div className="product-modal__close">
          <p className="product-modal__close-text">закрыть</p>
          <button className="product-modal__close-button" onClick={closeModal}>
            <img alt={selectedCard.alt} src={iconClose} />
          </button>
        </div>
        <div className="product-modal__properties">
          <p className="product-modal__art">Арт. GNM 007</p>
          <img
            className="product-modal__favorite"
            alt="иконка-избранного"
            src={iconFavorite}
          />
        </div>
        <div className="product-modal__properties product-modal__details">
          <div className="product-modal__block-color">
            <p className="product-modal__properties-text product-modal__none">
              Цвет:
            </p>
            <div
              className={`product-modal__dot ${selectedCard.dotColor}`}
            ></div>
            <p className="product-modal__properties-text">
              {selectedCard.color}
            </p>
          </div>
          <div className="product-modal__text-height">
            <p className="product-modal__properties-text">Высота:</p>
            <p className="product-modal__properties-text">
              {selectedCard.height} см
            </p>
          </div>
        </div>
        <p className="product-modal__background-text font-floreste">
          Benjamin Moore
        </p>
        <div className="product-modal__footer">
          <p className="product-modal__footer-text">
            Функциональная дизайнерская лампа для создания максимально
            комфортного освещения
          </p>
          <div className="product-modal__footer-block">
            <p className="font-floreste product-modal__name">
              {selectedCard.name}
            </p>
            <p className="font-floreste product-modal__price">
              {selectedCard.price}
            </p>
          </div>
          <div className="product-modal_shopping-card">
            <button className="product-modal_button">
              <img src={basket} alt="корзина" /> <p>Купить</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
