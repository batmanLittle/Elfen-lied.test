import "./CartsOrder.css";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { lamps } from "../../utils/constants";

import shoppingCart from "../../images/shopping-cart.svg";

const CartsOrder = ({ items, isCheckoutPage, width }) => {
  return (
    <form
      className={width < 1000 ? "carts-order" : "carts-order form-component"}
    >
      <p className="form-component__title">
        {width < 1000 ? "Ваш заказ" : "Состав заказа"}
      </p>
      <div className="carts-order__list">
        {lamps.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            shoppingCart={shoppingCart}
            showFooterButtons={true}
            isCheckoutPage={isCheckoutPage}
          />
        ))}
      </div>
      <div className={width < 1000 ? "" : "carts-order__order-summary"}>
        {width < 1000 ? (
          ""
        ) : (
          <>
            <p className="carts-order__text">итого:</p>
            <Button text="450 000 ₽" />
          </>
        )}
      </div>
    </form>
  );
};

export default CartsOrder;
