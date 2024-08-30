import "./Carts.css";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { lamps } from "../../utils/constants";
import ButtonClose from "../ButtonClose/ButtonClose";
import shoppingCart from "../../images/shopping-cart.svg";
import { Link } from "react-router-dom";

const Carts = ({ items, handleClose }) => {
  return (
    <form className="carts form-component">
      <p className="form-component__title">Ваша корзина</p>
      <div className="carts__list">
        <ButtonClose handleClose={() => handleClose("carts")} />
        {lamps.map((item) => (
          <CartItem key={item.id} item={item} shoppingCart={shoppingCart} />
        ))}
      </div>
      <div className="carts__order-summary">
        <div>
          <p className="carts__text">итого:</p>
          <p className="font-floreste">450 000 ₽</p>
        </div>

        <Link to="/checkout" onClick={() => handleClose("carts")}>
          <Button text="Оформить" />
        </Link>
      </div>
    </form>
  );
};

export default Carts;
