import "./Header.css";
import logo from "../../images/logo.svg";
import iconFavorites from "../../images/icon-favorites.svg";
import iconBasket from "../../images/icon-basket.svg";
import iconUser from "../../images/icon-user.svg";
import iconTelephone from "../../images/icon-telephone.svg";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Header({ handleOpen, modals, isCheckoutPage }) {
  return (
    <header className={modals.contacts ? "display-none" : "header"}>
      <div className="header__container">
        <RouterLink to="/">
          <img className="header__logo" src={logo} alt="логотип" />
        </RouterLink>
        <div className="header__menu">
          {isCheckoutPage ? (
            <RouterLink to="/" className="header__link header__link-catalog">
              <p>Каталог</p>
            </RouterLink>
          ) : (
            <Link
              to="categories"
              smooth={true}
              duration={700}
              className="header__link header__link-catalog"
            >
              <p>Каталог</p>
            </Link>
          )}

          <div className="header__menu-flex">
            {isCheckoutPage ? (
              <RouterLink to="/" className="header__link ">
                <p>Блог</p>
              </RouterLink>
            ) : (
              <Link
                to="categories"
                smooth={true}
                duration={700}
                className="header__link "
              >
                <p>Блог</p>
              </Link>
            )}
            <button
              to="/"
              className="header__link"
              onClick={() => handleOpen("contacts")}
            >
              <p>Контакты</p>
            </button>
          </div>
          <button
            className="header__search"
            onClick={() => !isCheckoutPage && handleOpen("search")}
            disabled={isCheckoutPage}
          >
            <p className="header__search-text">Поиск</p>
          </button>
        </div>
        <div className="header__menu-user">
          <button
            className="header__button"
            onClick={() => handleOpen("cartFavorite")}
          >
            <img src={iconFavorites} alt="логотип" />
          </button>
          <button
            className="header__button"
            onClick={() => handleOpen("carts")}
          >
            <img src={iconBasket} alt="логотип" />
          </button>
          <button className="header__button">
            <img
              src={iconUser}
              alt="логотип"
              onClick={() => handleOpen("login")}
            />
          </button>
          <button className="header__button header__button-telephone">
            <img src={iconTelephone} alt="логотип" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
