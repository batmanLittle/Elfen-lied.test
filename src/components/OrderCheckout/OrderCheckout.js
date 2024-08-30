import "./OrderCheckout.css";
import Search from "../Search/Search";
import CartsOrder from "../CartsOrder/CartsOrder";
import Button from "../Button/Button";

function OrderCheckout({ handleClose, isCheckoutPage, width }) {
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
                type="name"
                name="name"
                minLength="2"
                maxLength="40"
                required
              />
            </label>
            <label className="order-checkout__label">
              Адрес
              <input
                className="order-checkout__input"
                type="tel"
                name="phone"
                required
              />
            </label>
            <label className="order-checkout__label">
              Телефон
              <input
                className="order-checkout__input"
                name="address"
                rows="4"
                minLength="2"
                maxLength="40"
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
