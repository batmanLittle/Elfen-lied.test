import "./OrderCheckout.css";
import Search from "../Search/Search";
import CartsOrder from "../CartsOrder/CartsOrder";
import Button from "../Button/Button";
import useWindowWidth from "../../hooks/useWindowWidth";

function OrderCheckout({ handleClose, isCheckoutPage }) {
  const width = useWindowWidth();
  return (
    <section className="order-checkout">
      <Search handleClose={handleClose} />
      <div className="order-checkout__container">
        <form className="order-checkout__form">
          <p className="order-checkout__form-title">Оформление заказа</p>
          <div className="order-checkout__inputs">
            <label className="order-checkout__label">
              Ваше имя
              <input
                className="order-checkout__input"
                id="name"
                type="name"
                name="name"
                minLength="2"
                maxLength="40"
                required
                autoComplete="name"
              />
            </label>
            <label className="order-checkout__label">
              Адрес
              <input
                className="order-checkout__input"
                type="tel"
                name="phone"
                id="phone"
                required
                autoComplete="tel"
              />
            </label>
            <label className="order-checkout__label">
              Телефон
              <input
                className="order-checkout__input"
                type="text"
                name="address"
                id="address"
                rows="4"
                minLength="2"
                maxLength="100"
                autoComplete="address-line1"
                required
              />
            </label>
          </div>
          {width < 1000 ? "" : <Button text={"Заказать"} />}
        </form>
        <CartsOrder width={width} isCheckoutPage={isCheckoutPage} />
      </div>
      <div className="order-checkout__button">
        <Button text={"Заказать"} />
      </div>
    </section>
  );
}

export default OrderCheckout;
