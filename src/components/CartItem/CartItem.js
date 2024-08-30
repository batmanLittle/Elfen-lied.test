import "./CartItem.css";

const CartItem = ({
  item,
  showFooterButtons = true,
  favoriteCart,
  shoppingCart,
  isCheckoutPage,
}) => {
  return (
    <div className="cart">
      <img className="cart__img" src={item.src} alt="лампа" />
      <div className="cart__description">
        <div className="cart__header">
          <div className="cart__name">
            <div className="cart__name-block">
              <div className={`cart__dot${item.dotColor}`}></div>
              <h4 className="cart__name-title">{item.name}</h4>
            </div>
            <p>{item.nameCategory}</p>
          </div>
          <button>
            <img src={shoppingCart || favoriteCart} alt="значок покупки" />
          </button>
        </div>
        <div className="cart__footer">
          <p className="font-floreste cart__price">{item.price}</p>
          {showFooterButtons &&
            (isCheckoutPage ? (
              <div className="cart__footer-buttons">
                <p>x1</p>
              </div>
            ) : (
              <div className="cart__footer-buttons">
                <button className="cart__footer-button">-</button>
                <p>1</p>
                <button className="cart__footer-button">+</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
