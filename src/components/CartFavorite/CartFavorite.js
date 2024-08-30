import "./CartFavorite.css";
import { lamps } from "../../utils/constants";
import CartItem from "../CartItem/CartItem";
import ButtonClose from "../ButtonClose/ButtonClose";
import favoriteCart from "../../images/icon-favorite.svg";

const CartFavorite = ({ items, handleClose }) => {
  return (
    <form className="cart-favorite form-component">
      <p className="form-component__title">товары в избранном</p>
      <div className="cart-favorite__list">
        <ButtonClose handleClose={() => handleClose("cartFavorite")} />
        {lamps.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            showFooterButtons={false}
            shoppingCart={favoriteCart}
          />
        ))}
      </div>
    </form>
  );
};

export default CartFavorite;
