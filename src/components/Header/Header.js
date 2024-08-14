import "./Header.css";
import logo from "../../images/logo.svg";
import iconFavorites from "../../images/icon-favorites.svg";
import iconBasket from "../../images/icon-basket.svg";
import iconUser from "../../images/icon-user.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="логотип" />
        <div className="header__menu">
          <NavLink to="/" className="header__link header__link-catalog">
            <p>Каталог</p>
          </NavLink>
          <div className="header__menu-flex">
            <NavLink to="/" className="header__link ">
              <p>Блог</p>
            </NavLink>
            <NavLink to="/" className="header__link ">
              <p>Контакты</p>
            </NavLink>
          </div>
          <button className="header__search">
            <p>Поиск</p>
          </button>
        </div>
        <div className="header__menu-user">
          <button className="header__button">
            <img src={iconFavorites} alt="логотип" />
          </button>
          <button className="header__button">
            <img src={iconBasket} alt="логотип" />
          </button>
          <button className="header__button">
            <img src={iconUser} alt="логотип" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
